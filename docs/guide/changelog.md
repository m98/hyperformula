# Changelog

## 0.3.0
**Release date: October 22, 2020**

### Added
- Added 9 text functions EXACT, LOWER, UPPER, MID, T, SUBSTITUTE, REPLACE, UNICODE, UNICHAR. [#159](https://github.com/handsontable/hyperformula/issues/159)
- Added 5 datetime functions: INTERVAL, NETWORKDAYS, NETWORKDAYS.INTL, WORKDAY, WORKDAY.INTL. [#153](https://github.com/handsontable/hyperformula/issues/153)
- Added 3 information functions HLOOKUP, ROW, COLUMN. [#520](https://github.com/handsontable/hyperformula/pull/520)
- Added 5 financial functions FVSCHEDULE, NPV, MIRR, PDURATION, XNPV. [#542](https://github.com/handsontable/hyperformula/pull/542)
- Added 12 statistical functions VAR.P, VAR.S, VARA, VARPA, STDEV.P, STDEV.S, STDEVA, STDEVPA, VARP, VAR, STDEVP, STDEV. [#536](https://github.com/handsontable/hyperformula/pull/536)
- Added 2 mathematical functions SUBTOTAL, PRODUCT. [#536](https://github.com/handsontable/hyperformula/pull/536)
- Added 15 operator functions HF.ADD, HF.CONCAT, HF.DIVIDE, HF.EQ, HF.GT, HF.GTE, HF.LT, HF.LTE, HF.MINUS, HF.MULTIPLY, HF.NE, HF.POW, HF.UMINUS, HF.UNARY_PERCENT, HF.UPLUS. [#543](https://github.com/handsontable/hyperformula/pull/543)

### Fixed
- Fixed multiple issues with VLOOKUP function. [#526](https://github.com/handsontable/hyperformula/issues/526) and  [#528](https://github.com/handsontable/hyperformula/issues/528)
- Fixed MATCH and INDEX functions compatiblity. [#520](https://github.com/handsontable/hyperformula/pull/520)
- Fixed issue with config update that does not preserve named expressions. [#527](https://github.com/handsontable/hyperformula/issues/527)
- Fixed minor issue with arithmetic operations error messages. [#532](https://github.com/handsontable/hyperformula/issues/532)

## 0.2.0
**Release date: September 22, 2020**

### Added
- Added 9 text functions LEN, TRIM, PROPER, CLEAN, REPT, RIGHT, LEFT, SEARCH, FIND. [#221](https://github.com/handsontable/hyperformula/issues/221)
- Added helper methods for keeping track of cell/range dependencies: `getCellPrecedents` and `getCellDependents`. [#441](https://github.com/handsontable/hyperformula/issues/441)
- Added 22 financial functions FV, PMT, PPMT, IPMT, CUMIPMT, CUMPRINC, DB, DDB, DOLLARDE, DOLLARFR, EFFECT, ISPMT, NOMINAL, NPER, RATE, PV, RRI, SLN, SYD, TBILLEQ, TBILLPRICE, TBILLYIELD. [#494](https://github.com/handsontable/hyperformula/issues/494)
- Added FORMULATEXT function. [#422](https://github.com/handsontable/hyperformula/pull/422)
- Added 8 information functions ISERR, ISNA, ISREF, NA, SHEET, SHEETS, ISBINARY, ISFORMULA. [#481](https://github.com/handsontable/hyperformula/issues/481)
- Added 15 date functions: WEEKDAY, DATEVALUE, HOUR, MINUTE, SECOND, TIME, TIMEVALUE, NOW, TODAY, EDATE, WEEKNUM, ISOWEEKNUM, DATEDIF, DAYS360, YEARFRAC. [#483](https://github.com/handsontable/hyperformula/issues/483)
- Added 13 trigonometry functions: SEC, CSC, SINH, COSH, TANH, COTH, SECH, CSCH, ACOT, ASINH, ACOSH, ATANH, ACOTH. [#485](https://github.com/handsontable/hyperformula/issues/485)
- Added 6 engineering functions: OCT2BIN, OCT2DEC, OCT2HEX, HEX2BIN, HEX2OCT, HEX2DEC. [#497](https://github.com/handsontable/hyperformula/issues/497)
- Added a configuration option to evaluate reference to an empty cells as a zero. [#476](https://github.com/handsontable/hyperformula/issues/476)
- Added new error type: missing licence. [#306](https://github.com/handsontable/hyperformula/issues/306)
- Added detailed error messages for error values. [#506](https://github.com/handsontable/hyperformula/issues/506)
- Added ability to handle more characters in quoted sheet names. [#509](https://github.com/handsontable/hyperformula/issues/509)
- Added support for escaping apostrophe character in quoted sheet names. [#64](https://github.com/handsontable/hyperformula/issues/64)

### Changed
- Operation `moveCells` creating cyclic dependencies does not cause losing original formula. [#479](https://github.com/handsontable/hyperformula/issues/479)
- Simplified adding new function modules, reworked (simplified) implementations of existing modules. [#480](https://github.com/handsontable/hyperformula/issues/480)

### Fixed
- Fixed hardcoding of languages in i18n tests. [#471](https://github.com/handsontable/hyperformula/issues/471)
- Fixed many compilation warnings based on LGTM analysis. [#473](https://github.com/handsontable/hyperformula/issues/473)
- Fixed `moveCells` behaviour when moving part of a range. [#479](https://github.com/handsontable/hyperformula/issues/479)
- Fixed `moveColumns`/`moveRows` inconsistent behaviour. [#479](https://github.com/handsontable/hyperformula/issues/479)
- Fixed undo of `moveColumns`/`moveRows` operations. [#479](https://github.com/handsontable/hyperformula/issues/479)
- Fixed name-collision issue in translations. [#486](https://github.com/handsontable/hyperformula/issues/486)
- Fixed bug in concatenation + `nullValue`. [#495](https://github.com/handsontable/hyperformula/issues/495)
- Fixed bug when undoing irreversible operation. [#502](https://github.com/handsontable/hyperformula/issues/502)
- Fixed minor issue with CHAR function logic. [#510](https://github.com/handsontable/hyperformula/issues/510)
- Fixed `simpleCellAddressToString` behaviour when converting quoted sheet names. [#514](https://github.com/handsontable/hyperformula/issues/514)
- Fixed issues with numeric aggregation functions. [#515](https://github.com/handsontable/hyperformula/issues/515)

## 0.1.3
**Release date: July 21, 2020**

### Fixed
- Fixed a bug in coercion of empty string to boolean value. [#453](https://github.com/handsontable/hyperformula/issues/453)

## 0.1.2
**Release date: July 13, 2020**

### Fixed
- Fixed a bug in topological ordering module. [#442](https://github.com/handsontable/hyperformula/issues/442)

## 0.1.1
**Release date: July 1, 2020**

### Fixed
- Fixed a typo in a config option from `useRegularExpresssions` to `useRegularExpressions`. [#437](https://github.com/handsontable/hyperformula/issues/437)

## 0.1.0

**Alpha release date: June 25, 2020 🎉**

* Core functionality of the engine
* Support for data types: String, Error, Number, Date, Time, DateTime,
Duration, Distinct Logical
* Support for logical operators: =, <>, >, <, >=, <=
* Support for arithmetic operators: +, -, *, /, %
* Support for text operator: &
* CRUD operations:
   - modifying the value of a single cell
   - adding/deleting row/column
   - reading the value or formula from the selected cell
   - moving a cell or a block of cells
   - deleting a subset of rows or columns
   - recalculating and refreshing of a worksheet
   - batching CRUD operations
   - support for wildcards and regex inside criterion functions
   like SUMIF, COUNTIF
   - named expressions support
   - support for cut, copy, paste
   - undo/redo support
* The following functions: ABS(), ACOS(), AND(), ASIN(), ATAN(), ATAN2(), AVERAGE(), AVERAGEA(), AVERAGEIF(), BASE(), BIN2DEC(), BIN2HEX()BIN2OCT(), BITAND(), BITLSHIFT(), BITOR(), BITRSHIFT(), BITXOR(), CEILING(), CHAR(), CHOOSE(), CODE(), COLUMNS(), CONCATENATE(), CORREL(),
COS(), COT(), COUNT(), COUNTA(), COUNTBLANK(), COUNTIF(), COUNTIFS(), COUNTUNIQUE(), DATE(), DAY(), DAYS(), DEC2BIN(), DEC2HEX(), DEC2OCT(), DECIMAL(), DEGREES(), DELTA(), E(), EOMONTH(), ERF(), ERFC(), EVEN(), EXP(), FALSE(), IF(), IFERROR(), IFNA(), INDEX(), INT(), ISBLANK(), ISERROR(), ISEVEN(), ISLOGICAL(), ISNONTEXT(), ISNUMBER(), ISODD(), ISTEXT(), LN(), LOG(), LOG10(), MATCH(), MAX(), MAXA(), MAXPOOL(), MEDIAN(), MEDIANPOOL(), MIN(), MINA(), MMULT(), MOD(), MONTH(), NOT(), ODD(), OFFSET(), OR(), PI(), POWER(), RADIANS(), RAND(), ROUND(), ROUNDDOWN(), ROUNDUP(), ROWS(), SIN(), SPLIT(), SQRT(), SUM(), SUMIF(), SUMIFS(), SUMPRODUCT(), SUMSQ(), SWITCH(), TAN(), TEXT(), TRANSPOSE(), TRUE(), TRUNC(), VLOOKUP(), XOR(), YEAR()
* Support for volatile functions
* Cultures supports - can be configured according to the application need
* Custom functions support
* Set [OpenDocument v1.2](http://docs.oasis-open.org/office/v1.2/OpenDocument-v1.2-part2.html)
as a standard to follow
*  Error handling:
   - Division by zero: #DIV/0!
   - Unknown function name: #NAME?
   - Wrong type of argument in a function or wrong type of
   operator: #VALUE!
   - Invalid numeric values: #NUM!
   - No value available: #N/A
   - Cyclic dependency: #CYCLE!
   - Wrong address reference: #REF
* Built-in function translations support for 16 languages: English, Czech,
Danish, Dutch, Finnish, French, German, Hungarian, Italian, Norwegian,
Polish, Portuguese, Russian, Spanish, Swedish, Turkish.
