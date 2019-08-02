import {GPUInternalMode, GPUMode} from 'gpu.js'
import {enGB, TranslationPackage} from './i18n'
import {BooleanPlugin} from './interpreter/plugin/BooleanPlugin'
import {CountUniquePlugin} from './interpreter/plugin/CountUniquePlugin'
import {DatePlugin} from './interpreter/plugin/DatePlugin'
import {ExpPlugin} from './interpreter/plugin/ExpPlugin'
import {InformationPlugin} from './interpreter/plugin/InformationPlugin'
import {MatrixPlugin} from './interpreter/plugin/MatrixPlugin'
import {MedianPlugin} from './interpreter/plugin/MedianPlugin'
import {NumericAggregationPlugin} from './interpreter/plugin/NumericAggregationPlugin'
import {RandomPlugin} from './interpreter/plugin/RandomPlugin'
import {SumifPlugin} from './interpreter/plugin/SumifPlugin'
import {SumprodPlugin} from './interpreter/plugin/SumprodPlugin'
import {TextPlugin} from './interpreter/plugin/TextPlugin'
import {TrigonometryPlugin} from './interpreter/plugin/TrigonometryPlugin'

type PossibleGPUMode = GPUMode | GPUInternalMode

export interface ConfigParams {
  addressMappingFillThreshold: number,
  dateFormat: string,
  functionArgSeparator: string,
  language: TranslationPackage,
  functionPlugins: any[],
  gpuMode: PossibleGPUMode,
  matrixDetection: boolean,
  matrixDetectionThreshold: number,
}

export class Config {
  private static defaultPlugins: any[] = [
    SumifPlugin,
    TextPlugin,
    NumericAggregationPlugin,
    MedianPlugin,
    DatePlugin,
    BooleanPlugin,
    InformationPlugin,
    TrigonometryPlugin,
    CountUniquePlugin,
    SumprodPlugin,
    MatrixPlugin,
    ExpPlugin,
    RandomPlugin,
  ]

  public static defaultConfig: ConfigParams = {
    addressMappingFillThreshold: 1,
    dateFormat: 'MM/DD/YYYY',
    functionArgSeparator: ',',
    language: enGB,
    functionPlugins: [],
    gpuMode: 'gpu',
    matrixDetection: true,
    matrixDetectionThreshold: 100,
  }

  public readonly addressMappingFillThreshold: number
  public readonly dateFormat: string
  public readonly functionArgSeparator: string
  public readonly language: TranslationPackage
  public readonly functionPlugins: any[]
  public readonly gpuMode: PossibleGPUMode
  public readonly matrixDetection: boolean
  public readonly matrixDetectionThreshold: number

  constructor(
      {
        addressMappingFillThreshold,
        dateFormat,
        functionArgSeparator,
        language,
        functionPlugins,
        gpuMode,
        matrixDetection,
        matrixDetectionThreshold,
      }: Partial<ConfigParams> = {},
  ) {
    this.addressMappingFillThreshold = typeof addressMappingFillThreshold === 'number' ? addressMappingFillThreshold : Config.defaultConfig.addressMappingFillThreshold
    this.dateFormat = dateFormat || Config.defaultConfig.dateFormat
    this.functionArgSeparator = functionArgSeparator || Config.defaultConfig.functionArgSeparator
    this.language = language || Config.defaultConfig.language
    this.functionPlugins = functionPlugins || Config.defaultConfig.functionPlugins
    this.gpuMode = gpuMode || Config.defaultConfig.gpuMode
    this.matrixDetection = typeof matrixDetection === 'boolean' ? matrixDetection : Config.defaultConfig.matrixDetection
    this.matrixDetectionThreshold = typeof matrixDetectionThreshold === 'number' ? matrixDetectionThreshold : Config.defaultConfig.matrixDetectionThreshold
  }

  public getFunctionTranslationFor(functionTranslationKey: string): string {
    return this.language.functions[functionTranslationKey]
  }

  public allFunctionPlugins(): any[] {
    return [...Config.defaultPlugins, ...this.functionPlugins]
  }

  public volatileFunctions(): Set<string> {
    return new Set(['RAND'])
  }
}
