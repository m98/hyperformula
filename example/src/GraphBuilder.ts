import {CellDependency, simpleCellAddress, SimpleCellAddress, SimpleCellRange, simpleCellRange} from './Cell'
import {Config} from './Config'
import {Graph} from './Graph'
import {IAddressMapping} from './IAddressMapping'
import {findSmallerRange} from './interpreter/plugin/SumprodPlugin'
import {isFormula, ParserWithCaching} from './parser/ParserWithCaching'
import {RangeMapping} from './RangeMapping'
import {Statistics, StatType} from './statistics/Statistics'
import {EmptyCellVertex, FormulaCellVertex, RangeVertex, ValueCellVertex, Vertex} from './Vertex'
import {InterpretingBundle} from "../wasminterpreter/pkg/interpreter";

/**
 * Two-dimenstional array representation of sheet
 */
export type Sheet = string[][]

/**
 * Service building the graph and mappings.
 */
export class GraphBuilder {
  /**
   * Parser to use when reading formulas.
   */
  private parser: ParserWithCaching

  /**
   * Configures the building service.
   *
   * @param graph - graph instance in which we want to add vertices and edges
   * @param addressMapping - mapping from addresses to vertices
   * @param rangeMapping - mapping from ranges to range vertices
   * @param stats - dependency tracking building performance
   * @param config - configuration of the sheet
   */
  constructor(public bundle: InterpretingBundle,
    private readonly graph: Graph<Vertex>,
              private readonly addressMapping: IAddressMapping,
              private readonly rangeMapping: RangeMapping,
              private readonly stats: Statistics,
              private readonly config: Config) {
    this.parser = new ParserWithCaching(config)
  }

  /**
   * Builds graph.
   *
   * @param sheet - two-dimensional array representation of sheet
   */
  public buildGraph(sheet: Sheet) {
    const dependencies: Map<SimpleCellAddress, CellDependency[]> = new Map()

    this.graph.addNode(EmptyCellVertex.getSingletonInstance())

    for (let i = 0; i < sheet.length; ++i) {
      const row = sheet[i]
      for (let j = 0; j < row.length; ++j) {
        const cellContent = row[j]
        const cellAddress = simpleCellAddress(j, i)
        let vertex = null

        if (isFormula(cellContent)) {
          const parseResult = this.stats.measure(StatType.PARSER, () => this.parser.parse(cellContent, cellAddress))
          vertex = new FormulaCellVertex(parseResult.ast, cellAddress)
          dependencies.set(cellAddress, parseResult.dependencies)
          this.graph.addNode(vertex)
          this.addressMapping.setCell(cellAddress, vertex)
          // this.bundle.buildIntoGraph(cellAddress, parseResult.ast)
        } else if (cellContent === '') {
          /* we don't care about empty cells here */
        } else if (!isNaN(Number(cellContent))) {
          vertex = new ValueCellVertex(Number(cellContent))
          this.graph.addNode(vertex)
          this.addressMapping.setCell(cellAddress, vertex)
          this.bundle.build_number_value_node_into_graph(cellAddress, Number(cellContent))
        } else {
          vertex = new ValueCellVertex(cellContent)
          this.graph.addNode(vertex)
          this.addressMapping.setCell(cellAddress, vertex)
        }
      }
    }

    this.handleDependencies(dependencies)
  }


  private handleDependencies(dependencies: Map<SimpleCellAddress, CellDependency[]>) {
    dependencies.forEach((cellDependencies: CellDependency[], endCell: SimpleCellAddress) => {
      cellDependencies.forEach((absStartCell: CellDependency) => {
        if (Array.isArray(absStartCell)) {
          const [rangeStart, rangeEnd] = absStartCell
          let rangeVertex = this.rangeMapping.getRange(rangeStart, rangeEnd)
          if (rangeVertex === null) {
            rangeVertex = new RangeVertex(rangeStart, rangeEnd)
            this.rangeMapping.setRange(rangeVertex)
          }

          this.graph.addNode(rangeVertex)

          const {smallerRangeVertex, restRanges} = findSmallerRange(this.rangeMapping, [simpleCellRange(rangeStart, rangeEnd)])
          const restRange = restRanges[0]
          if (smallerRangeVertex) {
            this.graph.addEdge(smallerRangeVertex, rangeVertex)
          }
          for (const cellFromRange of generateCellsFromRangeGenerator(restRange)) {
            this.graph.addEdge(this.addressMapping.getCell(cellFromRange), rangeVertex!)
          }

          this.graph.addEdge(rangeVertex, this.addressMapping.getCell(endCell)!)
        } else {
          this.graph.addEdge(this.addressMapping.getCell(absStartCell), this.addressMapping.getCell(endCell)!)
        }
      })
    })
  }
}

/**
 * Generates cell addresses in given range.
 *
 * @param rangeStart - top-left corner of range
 * @param rangeEnd - bottom-right corner of range
 */
export const generateCellsFromRangeGenerator = function *(simpleCellRange: SimpleCellRange) {
  let currentRow = simpleCellRange.start.row
  while (currentRow <= simpleCellRange.end.row) {
    let currentColumn = simpleCellRange.start.col
    while (currentColumn <= simpleCellRange.end.col) {
      yield simpleCellAddress(currentColumn, currentRow)
      currentColumn++
    }
    currentRow++
  }
}
