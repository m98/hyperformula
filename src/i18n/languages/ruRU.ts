/**
 * @license
 * Copyright (c) 2020 Handsoncode. All rights reserved.
 */

import {RawTranslationPackage} from '..'
// import

const dictionary: RawTranslationPackage = {
  errors: {
    CYCLE: '#CYCLE!',
    DIV_BY_ZERO: '#ДЕЛ/0!',
    ERROR: '#ERROR!',
    NA: '#Н/Д',
    NAME: '#ИМЯ?',
    NUM: '#ЧИСЛО!',
    REF: '#ССЫЛКА!',
    VALUE: '#ЗНАЧ!',
  },
  functions: {
    ABS: 'ABS',
    ACOS: 'ACOS',
    ACOSH: 'ACOSH',
    ACOT: 'ACOT',
    ACOTH: 'ACOTH',
    AND: 'И',
    ASIN: 'ASIN',
    ASINH: 'ASINH',
    ATAN2: 'ATAN2',
    ATAN: 'ATAN',
    ATANH: 'ATANH',
    AVERAGE: 'СРЗНАЧ',
    AVERAGEA: 'СРЗНАЧА',
    AVERAGEIF: 'СРЗНАЧЕСЛИ',
    BASE: 'ОСНОВАНИЕ',
    BIN2DEC: 'ДВ.В.ДЕС',
    BIN2HEX: 'ДВ.В.ШЕСТН',
    BIN2OCT: 'ДВ.В.ВОСЬМ',
    BITAND: 'БИТ.И',
    BITLSHIFT: 'БИТ.СДВИГЛ',
    BITOR: 'БИТ.ИЛИ',
    BITRSHIFT: 'БИТ.СДВИГП',
    BITXOR: 'БИТ.ИСКЛИЛИ',
    CEILING: 'ОКРВВЕРХ',
    CHAR: 'СИМВОЛ',
    CHOOSE: 'ВЫБОР',
    CLEAN: 'ПЕЧСИМВ',
    CODE: 'КОДСИМВ',
    COLUMN: 'СТОЛБЕЦ',
    COLUMNS: 'ЧИСЛСТОЛБ',
    CONCATENATE: 'СЦЕПИТЬ',
    CORREL: 'КОРРЕЛ',
    COS: 'COS',
    COSH: 'COSH',
    COT: 'COT',
    COTH: 'COTH',
    COUNT: 'СЧЁТ',
    COUNTA: 'СЧЁТЗ',
    COUNTBLANK: 'СЧИТАТЬПУСТОТЫ',
    COUNTIF: 'СЧЁТЕСЛИ',
    COUNTIFS: 'СЧЁТЕСЛИМН',
    COUNTUNIQUE: 'COUNTUNIQUE',
    CSC: 'CSC',
    CSCH: 'CSCH',
    CUMIPMT: 'ОБЩПЛАТ',
    CUMPRINC: 'ОБЩДОХОД',
    DATE: 'ДАТА',
    DATEDIF: 'DATEDIF', //FIXME
    DATEVALUE: 'ДАТАЗНАЧ',
    DAY: 'ДЕНЬ',
    DAYS360: 'ДНЕЙ360',
    DAYS: 'ДНИ',
    DB: 'ФУО',
    DDB: 'ДДОБ',
    DEC2BIN: 'ДЕС.В.ДВ',
    DEC2HEX: 'ДЕС.В.ШЕСТН',
    DEC2OCT: 'ДЕС.В.ВОСЬМ',
    DECIMAL: 'ДЕС',
    DEGREES: 'ГРАДУСЫ',
    DELTA: 'ДЕЛЬТА',
    DOLLARDE: 'РУБЛЬ.ДЕС',
    DOLLARFR: 'РУБЛЬ.ДРОБЬ',
    EDATE: 'ДАТАМЕС',
    EFFECT: "ЭФФЕКТ",
    EOMONTH: 'КОНМЕСЯЦА',
    ERF: 'ФОШ',
    ERFC: 'ДФОШ',
    EVEN: 'ЧЁТН',
    EXACT: 'СОВПАД',
    EXP: 'EXP',
    FALSE: 'ЛОЖЬ',
    FIND: 'НАЙТИ',
    FORMULATEXT: 'Ф.ТЕКСТ',
    FV: 'БС',
    FVSCHEDULE: 'БЗРАСПИС',
    HEX2BIN: 'ШЕСТН.В.ДВ',
    HEX2DEC: 'ШЕСТН.В.ДЕС',
    HEX2OCT: 'ШЕСТН.В.ВОСЬМ',
    HLOOKUP: 'ГПР',
    HOUR: 'ЧАС',
    IF: 'ЕСЛИ',
    IFERROR: 'ЕСЛИОШИБКА',
    IFNA: 'ЕСНД',
    INDEX: 'ИНДЕКС',
    INT: 'ЦЕЛОЕ',
    INTERVAL: 'INTERVAL', //FIXME
    IPMT: 'ПРПЛТ',
    ISBINARY: 'ISBINARY',
    ISBLANK: 'ЕПУСТО',
    ISERR: 'ЕОШ',
    ISERROR: 'ЕОШИБКА',
    ISEVEN: 'ЕЧЁТН',
    ISFORMULA: 'ЕФОРМУЛА',
    ISLOGICAL: 'ЕЛОГИЧ',
    ISNA: 'ЕНД',
    ISNONTEXT: 'ЕНЕТЕКСТ',
    ISNUMBER: 'ЕЧИСЛО',
    ISODD: 'ЕНЕЧЁТ',
    ISOWEEKNUM: 'НОМНЕДЕЛИ.ISO',
    ISPMT: 'ПРОЦПЛАТ',
    ISREF: 'ЕССЫЛКА',
    ISTEXT: 'ЕТЕКСТ',
    LEFT: 'ЛЕВСИМВ',
    LEN: 'ДЛСТР',
    LN: 'LN',
    LOG10: 'LOG10',
    LOG: 'LOG',
    LOWER: 'СТРОЧН',
    MATCH: 'ПОИСКПОЗ',
    MAX: 'МАКС',
    MAXA: 'МАКСА',
    MAXPOOL: 'MAXPOOL',
    MEDIAN: 'МЕДИАНА',
    MEDIANPOOL: 'MEDIANPOOL',
    MID: 'ПСТР',
    MIN: 'МИН',
    MINA: 'МИНА',
    MINUTE: 'МИНУТЫ',
    MIRR: 'МВСД',
    MMULT: 'МУМНОЖ',
    MOD: 'ОСТАТ',
    MONTH: 'МЕСЯЦ',
    NA: 'НД',
    NETWORKDAYS: 'ЧИСТРАБДНИ',
    'NETWORKDAYS.INTL': 'ЧИСТРАБДНИ.МЕЖД',
    NOMINAL: 'НОМИНАЛ',
    NOT: 'НЕ',
    NOW: 'ТДАТА',
    NPER: 'КПЕР',
    NPV: 'ЧПС',
    OCT2BIN: 'ВОСЬМ.В.ДВ',
    OCT2DEC: 'ВОСЬМ.В.ДЕС',
    OCT2HEX: 'ВОСЬМ.В.ШЕСТН',
    ODD: 'НЕЧЁТ',
    OFFSET: 'СМЕЩ',
    OR: 'ИЛИ',
    PDURATION: 'ПДЛИТ',
    PI: 'ПИ',
    PMT: 'ПЛТ',
    PRODUCT: 'ПРОИЗВЕД',
    POWER: 'СТЕПЕНЬ',
    PPMT: 'ОСПЛТ',
    PROPER: 'ПРОПНАЧ',
    PV: 'ПС',
    RADIANS: 'РАДИАНЫ',
    RAND: 'СЛЧИС',
    RATE: 'СТАВКА',
    REPLACE: 'ЗАМЕНИТЬ',
    REPT: 'ПОВТОР',
    RIGHT: 'ПРАВСИМВ',
    ROUND: 'ОКРУГЛ',
    ROUNDDOWN: 'ОКРУГЛВНИЗ',
    ROUNDUP: 'ОКРУГЛВВЕРХ',
    ROW: 'СТРОКА',
    ROWS: 'ЧСТРОК',
    RRI: 'ЭКВ.СТАВКА',
    SEARCH: 'ПОИСК',
    SEC: 'SEC',
    SECH: 'SECH',
    SECOND: 'СЕКУНДЫ',
    SHEET: 'ЛИСТ',
    SHEETS: 'ЛИСТЫ',
    SIN: 'SIN',
    SINH: 'SINH',
    SLN: 'АПЛ',
    SPLIT: 'SPLIT',
    SQRT: 'КОРЕНЬ',
    STDEVA: 'СТАНДОТКЛОНА',
    'STDEV.P': 'СТАНДОТКЛОН.Г',
    STDEVPA: 'СТАНДОТКЛОНПА',
    'STDEV.S': 'СТАНДОТКЛОН.В',
    SUBSTITUTE: 'ПОДСТАВИТЬ',
    SUBTOTAL: 'ПРОМЕЖУТОЧНЫЕ.ИТОГИ',
    SUM: 'СУММ',
    SUMIF: 'СУММЕСЛИ',
    SUMIFS: 'СУММЕСЛИМН',
    SUMPRODUCT: 'СУММПРОИЗВ',
    SUMSQ: 'СУММКВ',
    SWITCH: '',
    SYD: 'АСЧ',
    T: 'Т',
    TAN: 'TAN',
    TANH: 'TANH',
    TBILLEQ: 'РАВНОКЧЕК',
    TBILLPRICE: 'ЦЕНАКЧЕК',
    TBILLYIELD: 'ДОХОДКЧЕК',
    TEXT: 'ТЕКСТ',
    TIME: 'ВРЕМЯ',
    TIMEVALUE: 'ВРЕМЗНАЧ',
    TODAY: 'СЕГОДНЯ',
    TRANSPOSE: 'ТРАНСП',
    TRIM: 'СЖПРОБЕЛЫ',
    TRUE: 'ИСТИНА',
    TRUNC: 'ОТБР',
    UNICHAR: 'ЮНИСИМВ',
    UNICODE: 'UNICODE',
    UPPER: 'ПРОПИСН',
    VARA: 'ДИСПА',
    'VAR.P': 'ДИСП.Г',
    VARPA: 'ДИСПРА',
    'VAR.S': 'ДИСП.В',
    VLOOKUP: 'ВПР',
    WEEKDAY: 'ДЕНЬНЕД',
    WEEKNUM: 'НОМНЕДЕЛИ',
    WORKDAY: 'РАБДЕНЬ',
    'WORKDAY.INTL': 'РАБДЕНЬ.МЕЖД',
    XNPV: 'ЧИСТНЗ',
    XOR: 'ИСКЛИЛИ',
    YEAR: 'ГОД',
    YEARFRAC: 'ДОЛЯГОДА',
    ROMAN: 'РИМСКОЕ',
    ARABIC: 'АРАБСКОЕ',
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
    VAR: 'ДИСП',
    VARP: 'ДИСПР',
    STDEV: 'СТАНДОТКЛОН',
    STDEVP: 'СТАНДОТКЛОНП',
    FACT: 'ФАКТР',
    FACTDOUBLE: 'ДВФАКТР',
    COMBIN: 'ЧИСЛКОМБ',
    COMBINA: 'ЧИСЛКОМБА',
    GCD: 'НОД',
    LCM: 'НОК',
    MROUND: 'ОКРУГЛТ',
    MULTINOMIAL: 'МУЛЬТИНОМ',
    QUOTIENT: 'ЧАСТНОЕ',
    RANDBETWEEN: 'СЛУЧМЕЖДУ',
    SERIESSUM: 'РЯД.СУММ',
    SIGN: 'ЗНАК',
    SQRTPI: 'КОРЕНЬПИ',
    SUMX2MY2: 'СУММРАЗНКВ',
    SUMX2PY2: 'СУММСУММКВ',
    SUMXMY2: 'СУММКВРАЗН',
    'EXPON.DIST': 'ЭКСП.РАСП',
    EXPONDIST: 'ЭКСПРАСП',
    FISHER: 'ФИШЕР',
    FISHERINV: 'ФИШЕРОБР',
    GAMMA: 'ГАММА',
    'GAMMA.DIST': 'ГАММА.РАСП',
    'GAMMA.INV': 'ГАММА.ОБР',
    GAMMADIST: 'ГАММАРАСП',
    GAMMAINV: 'ГАММАОБР',
    GAMMALN: 'ГАММАНЛОГ',
    'GAMMALN.PRECISE': 'ГАММАНЛОГ.ТОЧН',
    GAUSS: 'ГАУСС',
    'BETA.DIST': 'БЕТА.РАСП',
    BETADIST: 'БЕТАРАСП',
    'BETA.INV': 'БЕТА.ОБР',
    BETAINV: 'БЕТАОБР',
    'BINOM.DIST': 'БИНОМ.РАСП',
    BINOMDIST: 'БИНОМРАСП',
    'BINOM.INV': 'БИНОМ.ОБР',
    BESSELI: 'БЕССЕЛЬ.I',
    BESSELJ: 'БЕССЕЛЬ.J',
    BESSELK: 'БЕССЕЛЬ.K',
    BESSELY: 'БЕССЕЛЬ.Y',
    CHIDIST: 'ХИ2РАСП',
    CHIINV: 'ХИ2ОБР',
    'CHISQ.DIST': 'ХИ2.РАСП',
    'CHISQ.DIST.RT': 'ХИ2.РАСП.ПХ',
    'CHISQ.INV': 'ХИ2.ОБР',
    'CHISQ.INV.RT': 'ХИ2.ОБР.ПХ',
    'F.DIST': 'F.РАСП',
    'F.DIST.RT': 'F.РАСП.ПХ',
    'F.INV': 'F.ОБР',
    'F.INV.RT': 'F.ОБР.ПХ',
    FDIST: 'FРАСП',
    FINV: 'FРАСПОБР',
    WEIBULL: 'ВЕЙБУЛЛ',
    'WEIBULL.DIST': 'ВЕЙБУЛЛ.РАСП',
    POISSON: 'ПУАССОН',
    'POISSON.DIST': 'ПУАССОН.РАСП',
    'HYPGEOM.DIST': 'ГИПЕРГЕОМ.РАСП',
    HYPGEOMDIST: 'ГИПЕРГЕОМЕТ',
    'T.DIST': 'СТЬЮДЕНТ.РАСП',
    'T.DIST.2T': 'СТЬЮДЕНТ.РАСП.2Х',
    'T.DIST.RT': 'СТЬЮДЕНТ.РАСП.ПХ',
    'T.INV': 'СТЬЮДЕНТ.ОБР',
    'T.INV.2T': 'СТЬЮДЕНТ.ОБР.2Х',
  },
  langCode: 'ruRU',
  ui: {
    NEW_SHEET_PREFIX: 'Sheet',
  },
}

export default dictionary
