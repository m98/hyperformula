interface IFunctions {
  [language: string]: {
    [functionName: string]: string,
  }
}

export const Functions: IFunctions = {
  EN: {
    SUM: 'SUM',
    SUMIF: 'SUMIF',
    COUNTIF: 'COUNTIF',
    TRUE: 'TRUE',
    FALSE: 'FALSE',
    ACOS: 'ACOS',
    IF: 'IF',
    AND: 'AND',
    OR: 'OR',
    CONCATENATE: 'CONCATENATE',
    ISERROR: 'ISERROR',
    COLUMNS: 'COLUMNS',
    DATE: 'DATE',
    MONTH: 'MONTH',
    YEAR: 'YEAR',
    SPLIT: 'SPLIT',
    ISBLANK: 'ISBLANK',
    TEXT: 'TEXT',
  },
}
