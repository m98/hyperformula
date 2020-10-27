(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{675:function(e,a,t){"use strict";t.r(a);var n=t(42),r=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"key-concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-concepts"}},[e._v("#")]),e._v(" Key concepts")]),e._v(" "),t("h2",{attrs:{id:"high-level-design-diagram"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#high-level-design-diagram"}},[e._v("#")]),e._v(" High-level design diagram")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/hf-high-lvl-diagram.svg")}}),e._v(" "),t("p",[e._v("Data processing consists of three phases.")]),e._v(" "),t("h2",{attrs:{id:"phase-1-parsing-and-construction-of-asts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phase-1-parsing-and-construction-of-asts"}},[e._v("#")]),e._v(" Phase 1. Parsing and construction of ASTs")]),e._v(" "),t("p",[e._v("Formulas need to be parsed and represented as a\nso-called\n"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree",target:"_blank",rel:"noopener noreferrer"}},[e._v("Abstract Syntax Tree"),t("OutboundLink")],1),e._v("\n(AST). For example, the AST for "),t("code",[e._v("7*3-SIN(A5)")]),e._v(" will look\nsimilar to this graph:")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/ast.png")}}),e._v(" "),t("h2",{attrs:{id:"phase-2-construction-of-the-dependency-graph"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phase-2-construction-of-the-dependency-graph"}},[e._v("#")]),e._v(" Phase 2. Construction of the dependency graph")]),e._v(" "),t("p",[e._v("HyperFormula needs to understand the relationship between cells and\nfind the right order of processing them. For example, for a sample\nformula "),t("code",[e._v("C1=A1+B1")]),e._v(", it needs to process first "),t("code",[e._v("A1")]),e._v(" and "),t("code",[e._v("B1")]),e._v(" and\nthen "),t("code",[e._v("C1")]),e._v(". Such an order of processing cells - also known as\n"),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Topological_sorting",target:"_blank",rel:"noopener noreferrer"}},[e._v("topological order"),t("OutboundLink")],1),e._v("\nexists if and only if there is no cycle in the dependency graph.")]),e._v(" "),t("p",[e._v("There can be many such orders, like so:")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/topsort.png")}}),e._v(" "),t("h2",{attrs:{id:"phase-3-evaluation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phase-3-evaluation"}},[e._v("#")]),e._v(" Phase 3. Evaluation")]),e._v(" "),t("p",[e._v("It is crucial to evaluate cells efficiently. For simple expressions,\nthere is not much room for maneuver, but spreadsheet-like data sets\ndefinitely need more attention.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/sample-sheet.png")}}),e._v(" "),t("h2",{attrs:{id:"grammar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grammar"}},[e._v("#")]),e._v(" Grammar")]),e._v(" "),t("p",[e._v("For parsing purposes, the library uses the\n"),t("a",{attrs:{href:"http://sap.github.io/chevrotain/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevrotain"),t("OutboundLink")],1),e._v(" parser, which turns\nout to be more efficient than popular "),t("a",{attrs:{href:"https://zaa.ch/jison/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jison"),t("OutboundLink")],1),e._v(".\nThe language of acceptable formulas is described with an LL(k) grammar\nusing Chevrotain Domain Specific Language. See details of the grammar\nin the\n"),t("a",{attrs:{href:"https://github.com/handsontable/hyperformula/blob/master/src/parser/FormulaParser.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("FormulaParser"),t("OutboundLink")],1),e._v("\nfile.")]),e._v(" "),t("h2",{attrs:{id:"repetitive-asts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#repetitive-asts"}},[e._v("#")]),e._v(" Repetitive ASTs")]),e._v(" "),t("p",[e._v("A first natural optimization could concern cells in a spreadsheet which\nstore exactly the same formulas. For such cells, there is no point in\nconstructing and storing two ASTs which would be the same in the end.\nInstead, HyperFormula can look up the particular formula that has\nalready been parsed and reuse the constructed AST.")]),e._v(" "),t("p",[e._v("A scenario with repeating formulas is somewhat idealized; in practice,\nmost formulas will be distinct. Fortunately, formulas in spreadsheets\nusually have a defined structure and share some patterns. Neighboring\ncells often contain similar formulas, especially after filling cells\nusing a fill handle (that little square in the bottom right corner of\na visual cell representation). For example:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("B2=A2-C2+B1")])]),e._v(" "),t("li",[t("code",[e._v("B3=A3-C3+B2")])]),e._v(" "),t("li",[t("code",[e._v("B4=A4-C4+B3")])]),e._v(" "),t("li",[t("code",[e._v("B5=A5-C5+B4")])]),e._v(" "),t("li",[e._v("and so on...")])]),e._v(" "),t("p",[e._v("Although the exact ASTs for these formulas are different, they share a\ncommon pattern. A very useful approach here is to rewrite a formula using\nrelative addressing of cells.")]),e._v(" "),t("h2",{attrs:{id:"relative-addressing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#relative-addressing"}},[e._v("#")]),e._v(" Relative addressing")]),e._v(" "),t("p",[e._v("HyperFormula stores the offset to the referenced formula. For example\n"),t("code",[e._v("B2=B5 + C1")]),e._v(" can be rewritten as "),t("code",[e._v("B2=[B+0][2+3] + [B+1][2-1]")]),e._v(" or in short\n"),t("code",[e._v("B2=[0][+3] + [+1][-1]")]),e._v(". Then, the above example with "),t("code",[e._v("B2,B3")]),e._v(",  and "),t("code",[e._v("B4")]),e._v("\ncan be rewritten as "),t("code",[e._v("B2=B3=B4=[-1][0] - [1][0] + [0][-1]")]),e._v(". Now the three\ncells have exactly the same formulas.")]),e._v(" "),t("p",[e._v("By using relative addressing HyperFormula unifies formulas from many\ncells. Thanks to that, there is no need to parse them all\nover again. Also, with this approach, the engine doesn't lose any\ninformation because by knowing the absolute address of a cell and its\nformula with relative addresses, it can easily retrieve the absolute\naddresses and compute the result.")]),e._v(" "),t("h2",{attrs:{id:"laziness-of-crud-operations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#laziness-of-crud-operations"}},[e._v("#")]),e._v(" Laziness of CRUD operations")]),e._v(" "),t("p",[e._v("After each CRUD operation, like adding a row or column or moving\ncells, references inside formulas may need to be changed. For example,\nafter adding a row, we need to shift all references in the formulas\nbelow like so:")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/crud-operations.png")}}),e._v(" "),t("p",[e._v("In more complex sheets this can lead to similar transformations in\nmany formulas at once. On the other hand, such operations do not\nrequire an immediate transformation of all the affected formulas.")]),e._v(" "),t("p",[e._v("Instead of transforming all of them at once, HyperFormula remembers\nthe history of the operations and postpones the transformations\nuntil the formula needs to be displayed or recalculated.")]),e._v(" "),t("h2",{attrs:{id:"handling-ranges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#handling-ranges"}},[e._v("#")]),e._v(" Handling ranges")]),e._v(" "),t("p",[e._v("In many applications, you may want to use formulas that depend on a\nlarge range of cells. For example, the formula "),t("code",[e._v("SUM(A1:A100)+B5")]),e._v("\ndepends on 101 cells and it needs to be represented in the graph of\ncell dependencies accordingly.")]),e._v(" "),t("p",[e._v("An interesting optimization challenge arises when the are multiple\ncells that depend on large ranges. For example, consider the following\nuse-case:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("B1=SUM(A1:A1)")])]),e._v(" "),t("li",[t("code",[e._v("B2=SUM(A1:A2)")])]),e._v(" "),t("li",[t("code",[e._v("B3=SUM(A1:A3)")])]),e._v(" "),t("li",[e._v("...")]),e._v(" "),t("li",[t("code",[e._v("B100=SUM(A1:A100)")])])]),e._v(" "),t("p",[e._v("The problem is that there are "),t("code",[e._v("1+2+3+...+100 = 5050")]),e._v(" dependencies\nfor such a simple situation. In general, for "),t("code",[e._v("n")]),e._v(" such rows, the\nengine would need to add "),t("code",[e._v("n*(n+1)/2 ≈ n²")]),e._v(" arcs in the graph. This\nvalue grows much faster than the size of data, meaning the engine\nwould not be able to handle large data sets efficiently.")]),e._v(" "),t("p",[e._v("A solution to this problem comes from the observation that there is\na way to rewrite the above formulas to equivalent ones, which will\nbe more compact to represent. Specifically, the following formulas\nwould compute the same values as the ones provided previously:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("B1=A1")])]),e._v(" "),t("li",[t("code",[e._v("B2=B1+A2")])]),e._v(" "),t("li",[t("code",[e._v("B3=B2+A3")])]),e._v(" "),t("li",[e._v("...")]),e._v(" "),t("li",[t("code",[e._v("B100=B99+A100")])])]),e._v(" "),t("p",[e._v("Whereas this example is too specialized to provide a useful rule\nfor optimization, it shows the main idea behind efficient handling\nof multiple ranges: "),t("strong",[e._v("to represent a range as a composition of\nsmaller ranges.")])]),e._v(" "),t("p",[e._v("In the adopted implementation, every time the engine encounters a\nrange, say "),t("code",[e._v("B5:D20")]),e._v(", it checks if it has already considered the\nrange which is one row shorter. In this example, it would be "),t("code",[e._v("B5:D19")]),e._v(".\nIf so, then it represents "),t("code",[e._v("B5:D20")]),e._v(" as the composition of a range\n"),t("code",[e._v("B5:D19")]),e._v(" and three cells in the last row: "),t("code",[e._v("B20")]),e._v(","),t("code",[e._v("C20")]),e._v(" and "),t("code",[e._v("D20")]),e._v(".")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/ranges.png")}}),e._v(" "),t("p",[e._v("More generally, the result of any associative operation is obtained\nas the result of operations for these small rows. There are many\nexamples of such associative functions: "),t("code",[e._v("SUM")]),e._v(", "),t("code",[e._v("MAX")]),e._v(", "),t("code",[e._v("COUNT")]),e._v(", etc.\nAs one range can be used in different formulas, we can reuse its\nnode and avoid duplicating the work during computation.")])])}),[],!1,null,null,null);a.default=r.exports}}]);