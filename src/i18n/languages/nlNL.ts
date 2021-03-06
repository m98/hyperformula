/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */

import {RawTranslationPackage} from '..'
// import

const dictionary: RawTranslationPackage = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#DELING.DOOR.0!',
    ERROR: '#ERROR!',
    NA: '#N/B',
    NAME: '#NAAM?',
    NUM: '#GETAL!',
    REF: '#VERW!',
    VALUE: '#WAARDE!',
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'BOOGCOS',
    ACOSH: 'BOOGCOSH',
    ACOT: 'BOOGCOT',
    ACOTH: 'BOOGCOTH',
    AND: 'EN',
    ASIN: 'BOOGSIN',
    ASINH: 'BOOGSINH',
    ATAN2: 'BOOGTAN2',
    ATAN: 'BOOGTAN',
    ATANH: 'BOOGTANH',
    AVERAGE: 'GEMIDDELDE',
    AVERAGEA: 'GEMIDDELDEA',
    AVERAGEIF: 'GEMIDDELDE.ALS',
    BASE: 'BASIS',
    BIN2DEC: 'BIN.N.DEC',
    BIN2HEX: 'BIN.N.HEX',
    BIN2OCT: 'BIN.N.OCT',
    BITAND: 'BIT.EN',
    BITLSHIFT: 'BIT.VERSCHUIF.LINKS',
    BITOR: 'BIT.OF',
    BITRSHIFT: 'BIT.VERSCHUIF.RECHTS',
    BITXOR: 'BIT.EX.OF',
    CEILING: 'AFRONDEN.BOVEN',
    CHAR: 'TEKEN',
    CHOOSE: 'KIEZEN',
    CLEAN: 'WISSEN.CONTROL',
    CODE: 'CODE',
    COLUMN: 'KOLOM',
    COLUMNS: 'KOLOMMEN',
    CONCATENATE: 'TEKST.SAMENVOEGEN',
    CORREL: 'CORRELATIE',
    COS: 'COS',
    COSH: 'COSH',
    COT: 'COT',
    COTH: 'COTH',
    COUNT: 'AANTAL',
    COUNTA: 'AANTALARG',
    COUNTBLANK: 'AANTAL.LEGE.CELLEN',
    COUNTIF: 'AANTAL.ALS',
    COUNTIFS: 'AANTALLEN.ALS',
    COUNTUNIQUE: 'COUNTUNIQUE',
    CSC: 'COSEC',
    CSCH: 'COSECH',
    CUMIPMT: 'CUM.RENTE',
    CUMPRINC: 'CUM.HOOFDSOM',
    DATE: 'DATUM',
    DATEDIF: 'DATEDIF', //FIXME
    DATEVALUE: 'DATUMWAARDE',
    DAY: 'DAG',
    DAYS360: 'DAGEN360',
    DAYS: 'DAGEN',
    DB: 'DB',
    DDB: 'DDB',
    DEC2BIN: 'DEC.N.BIN',
    DEC2HEX: 'DEC.N.HEX',
    DEC2OCT: 'DEC.N.OCT',
    DECIMAL: 'DECIMAAL',
    DEGREES: 'GRADEN',
    DELTA: 'DELTA',
    DOLLARDE: 'EURO.DE',
    DOLLARFR: 'EURO.BR',
    EDATE: 'ZELFDE.DAG',
    EFFECT: "EFFECT.RENTE",
    EOMONTH: 'LAATSTE.DAG',
    ERF: 'FOUTFUNCTIE',
    ERFC: 'FOUT.COMPLEMENT',
    EVEN: 'EVEN',
    EXACT: 'GELIJK',
    EXP: 'EXP',
    FALSE: 'ONWAAR',
    FIND: 'VIND.ALLES',
    FORMULATEXT: 'FORMULETEKST',
    FV: 'TW',
    FVSCHEDULE: 'TOEK.WAARDE2',
    HEX2BIN: 'HEX.N.BIN',
    HEX2DEC: 'HEX.N.DEC',
    HEX2OCT: 'HEX.N.OCT',
    HLOOKUP: 'HORIZ.ZOEKEN',
    HOUR: 'UUR',
    IF: 'ALS',
    IFERROR: 'ALS.FOUT',
    IFNA: 'ALS.NB',
    INDEX: 'INDEX',
    INT: 'INTEGER',
    INTERVAL: 'INTERVAL', //FIXME
    IPMT: 'IBET',
    ISBINARY: 'ISBINARY',
    ISBLANK: 'ISLEEG',
    ISERR: 'ISFOUT2',
    ISERROR: 'ISFOUT',
    ISEVEN: 'IS.EVEN',
    ISFORMULA: 'ISFORMULE',
    ISLOGICAL: 'ISLOGISCH',
    ISNA: 'ISNB',
    ISNONTEXT: 'ISGEENTEKST',
    ISNUMBER: 'ISGETAL',
    ISODD: 'IS.ONEVEN',
    ISOWEEKNUM: 'ISO.WEEKNUMMER',
    ISPMT: 'ISBET',
    ISREF: 'ISVERWIJZING',
    ISTEXT: 'ISTEKST',
    LEFT: 'LINKS',
    LEN: 'PITUUS',
    LN: 'LN',
    LOG10: 'LOG10',
    LOG: 'LOG',
    LOWER: 'KLEINE.LETTERS',
    MATCH: 'VERGELIJKEN',
    MAX: 'MAX',
    MAXA: 'MAXA',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'MEDIAAN',
    MEDIANPOOL: 'MEDIANPOOL',
    MID: 'DEEL',
    MIN: 'MIN',
    MINA: 'MINA',
    MINUTE: 'MINUUT',
    MIRR: 'GIR',
    MMULT: 'PRODUCTMAT',
    MOD: 'REST',
    MONTH: 'MAAND',
    NA: 'NB',
    NETWORKDAYS: 'NETTO.WERKDAGEN',
    'NETWORKDAYS.INTL': 'NETWERKDAGEN.INTL',
    NOMINAL: 'NOMINALE.RENTE',
    NOT: 'NIET',
    NOW: 'NU',
    NPER: 'NPER',
    NPV: 'NHW',
    OCT2BIN: 'OCT.N.BIN',
    OCT2DEC: 'OCT.N.DEC',
    OCT2HEX: 'OCT.N.HEX',
    ODD: 'ONEVEN',
    OFFSET: 'VERSCHUIVING',
    OR: 'OF',
    PDURATION: 'PDUUR',
    PI: 'PI',
    PMT: 'BET',
    PRODUCT: 'PRODUCT',
    POWER: 'MACHT',
    PPMT: 'PBET',
    PROPER: 'BEGINLETTERS',
    PV: 'HW',
    RADIANS: 'RADIALEN',
    RAND: 'ASELECT',
    RATE: 'RENTE',
    REPLACE: 'VERVANGEN',
    REPT: 'HERHALING',
    RIGHT: 'RECHTS',
    ROUND: 'AFRONDEN',
    ROUNDDOWN: 'AFRONDEN.NAAR.BENEDEN',
    ROUNDUP: 'AFRONDEN.NAAR.BOVEN',
    ROW: 'RIJ',
    ROWS: 'RIJEN',
    RRI: 'RRI',
    SEARCH: 'VIND.SPEC',
    SEC: 'SEC',
    SECH: 'SECH',
    SECOND: 'SECONDE',
    SHEET: 'BLAD',
    SHEETS: 'BLADEN',
    SIN: 'SIN',
    SINH: 'SINH',
    SLN: 'LIN.AFSCHR',
    SPLIT: 'SPLIT',
    SQRT: 'WORTEL',
    STDEVA: 'STDEVA',
    'STDEV.P': 'STDEV.P',
    STDEVPA: 'STDEVPA',
    'STDEV.S': 'STDEV.S',
    SUBSTITUTE: 'SUBSTITUEREN',
    SUBTOTAL: 'SUBTOTAAL',
    SUM: 'SOM',
    SUMIF: 'SOM.ALS',
    SUMIFS: 'SOMMEN.ALS',
    SUMPRODUCT: 'SOMPRODUCT',
    SUMSQ: 'KWADRATENSOM',
    SWITCH: '',
    SYD: 'SYD',
    T: 'T',
    TAN: 'TAN',
    TANH: 'TANH',
    TBILLEQ: 'SCHATK.OBL',
    TBILLPRICE: 'SCHATK.PRIJS',
    TBILLYIELD: 'SCHATK.REND',
    TEXT: 'TEKST',
    TIME: 'TIJD',
    TIMEVALUE: 'TIJDWAARDE',
    TODAY: 'VANDAAG',
    TRANSPOSE: 'TRANSPONEREN',
    TRIM: 'SPATIES.WISSEN',
    TRUE: 'WAAR',
    TRUNC: 'GEHEEL',
    UNICHAR: 'UNITEKEN',
    UNICODE: 'UNICODE',
    UPPER: 'HOOFDLETTERS',
    VARA: 'VARA',
    'VAR.P': 'VAR.P',
    VARPA: 'VARPA',
    'VAR.S': 'VAR.S',
    VLOOKUP: 'VERT.ZOEKEN',
    WEEKDAY: 'WEEKDAG',
    WEEKNUM: 'WEEKNUMMER',
    WORKDAY: 'WERKDAG',
    'WORKDAY.INTL': 'WERKDAG.INTL',
    XNPV: 'NHW2',
    XOR: 'EX.OF',
    YEAR: 'JAAR',
    YEARFRAC: 'JAAR.DEEL',
    'HF.ADD': 'HF.ADD',
    'HF.CONCAT': 'HF.CONCAT',
    'HF.DIVIDE': 'HF.DIVIDE',
    'HF.EQ': 'HF.EQ',
    'HF.GT': 'HF.GT',
    'HF.GTE': 'HF.GTE',
    'HF.LT': 'HF.LT',
    'HF.LTE': 'HF.LTE',
    'HF.MINUS': 'HF.MINUS',
    'HF.MULTIPLY': 'HF.MULTIPLY',
    'HF.NE': 'HF.NE',
    'HF.POW': 'HF.POW',
    'HF.UMINUS': 'HF.UMINUS',
    'HF.UNARY_PERCENT': 'HF.UNARY_PERCENT',
    'HF.UPLUS': 'HF.UPLUS',
    VAR: 'VAR',
    VARP: 'VARP',
    STDEV: 'STDEV',
    STDEVP: 'STDEVP',
  },
  langCode: 'nlNL',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet',
  },
}

export default dictionary
