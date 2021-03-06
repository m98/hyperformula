import {HyperFormula} from '../../src'
import {ErrorType} from '../../src/Cell'
import {ErrorMessage} from '../../src/error-message'
import {adr, detailedError} from '../testUtils'

describe('Function COLUMNS', () => {
  it('accepts exactly one argument', () => {
    const engine = HyperFormula.buildFromArray([['=COLUMNS()', '=COLUMNS(A1:B1, A2:B2)']])

    expect(engine.getCellValue(adr('A1'))).toEqualError(detailedError(ErrorType.NA, ErrorMessage.WrongArgNumber))
    expect(engine.getCellValue(adr('B1'))).toEqualError(detailedError(ErrorType.NA, ErrorMessage.WrongArgNumber))
  })

  it('works for range', () => {
    const engine = HyperFormula.buildFromArray([['=COLUMNS(A1:C2)']])

    expect(engine.getCellValue(adr('A1'))).toEqual(3)
  })

  // Inconsistency with Product 1
  it('doesnt work with scalars', () => {
    const engine = HyperFormula.buildFromArray([['=COLUMNS(A1)']])

    expect(engine.getCellValue(adr('A1'))).toEqualError(detailedError(ErrorType.VALUE, ErrorMessage.CellRangeExpected))
  })

  // Inconsistency with Product 1
  it('propagate only direct errors', () => {
    const engine = HyperFormula.buildFromArray([
      ['=4/0'],
      ['=COLUMNS(4/0)'],
      ['=COLUMNS(A1)'],
    ])

    expect(engine.getCellValue(adr('A2'))).toEqualError(detailedError(ErrorType.VALUE, ErrorMessage.CellRangeExpected))
    expect(engine.getCellValue(adr('A3'))).toEqualError(detailedError(ErrorType.VALUE, ErrorMessage.CellRangeExpected))
  })

  // Inconsistency with Product 1
  it('doesnt work with formulas', () => {
    const engine = HyperFormula.buildFromArray([
      ['1', '1'],
      ['1', '1'],
      ['=COLUMNS(MMULT(A1:B2, A1:B2))'],
    ])

    expect(engine.getCellValue(adr('A3'))).toEqualError(detailedError(ErrorType.VALUE, ErrorMessage.CellRangeExpected))
  })

  it('should work when adding column', () => {
    const engine = HyperFormula.buildFromArray([
      ['1', '1'],
      ['=COLUMNS(A1:B1)']
    ])

    engine.addColumns(0, [1, 1])

    expect(engine.getCellValue(adr('A2'))).toEqual(3)
  })
})
