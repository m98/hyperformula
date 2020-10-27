(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{680:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"named-ranges"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#named-ranges"}},[t._v("#")]),t._v(" Named ranges")]),t._v(" "),a("p",[t._v("You can give a human-friendly name to a range of adjacent cells.\nThanks to this you can refer to that name anywhere across the workbook.\nNames are especially useful when you use some references repeatedly.\nIn this case, names simplify the formulas and reduce the risk of making\na mistake. Such a worksheet is also easier to maintain.")]),t._v(" "),a("p",[t._v("Named ranges can be understood as a specific subset of named\nexpressions in HyperFormula.")]),t._v(" "),a("p",[t._v("Named ranges can be used as constants without referring to any\nrange of cells. That means you can name a formula, string, number,\nor any other type of data.")]),t._v(" "),a("p",[t._v("By default, references in named ranges are absolute. Most people use\nabsolute references in spreadsheet software like Excel without even\nknowing about it. Very few know that references can be relative too.\nUnfortunately, HyperFormula doesn't support relative references inside\nnamed expressions at the moment.")]),t._v(" "),a("p",[t._v("Dynamic ranges are supported through functions such as INDEX and OFFSET.")]),t._v(" "),a("p",[t._v("Named ranges can overlap each other, e.g. it is possible to define\nthe names as follows:")]),t._v(" "),a("ul",[a("li",[t._v("rangeOne: A1:D10")]),t._v(" "),a("li",[t._v("rangeTwo: A1:E1")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Custom name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Range or constant")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Named cell")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("myCell")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=A1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Named range of cells")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("myRange")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=A1:D10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Named constant (number)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("myNumber")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Named constant (string)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("myText")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('="One Small Step for Man"')])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Named formula")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("myFormula")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("=SUM(A1:D10)")])])])]),t._v(" "),a("h2",{attrs:{id:"naming-convention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#naming-convention"}},[t._v("#")]),t._v(" Naming convention")]),t._v(" "),a("ul",[a("li",[t._v("The name has to "),a("strong",[t._v("be unique within the scope")]),t._v("; if you set\n'MyPotato' globally (meaning you do not define any scope) it has\nto be unique globally. However, you can still define 'MyPotato'\nagain in the local scope of a sheet.")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define for a global scope")]),t._v("\nhfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyPotato'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=SUM(100+10)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// define for the local scope of Sheet2, still a valid name")]),t._v("\nhfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MyPotato'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=Sheet2!$A$1+100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sheet2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("The name starts with a letter or an underscore. The minimum required\nlength of a name is based on the "),a("code",[t._v("maxColumns")]),t._v("value inside\n"),a("RouterLink",{attrs:{to:"/guide/configuration-options.html"}},[t._v("configuration object")]),t._v(".")],1),t._v(" "),a("li",[t._v("The name must not equal a cell reference, e.g. A1, $A$1, R1C1; a separate “1” or “A” is also invalid.")]),t._v(" "),a("li",[t._v("The name is case-insensitive.")]),t._v(" "),a("li",[t._v("A space character is not allowed.")]),t._v(" "),a("li",[t._v("The maximum number of characters is 255.")])]),t._v(" "),a("p",[a("strong",[t._v("Examples of correct and incorrect names:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Validity")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("myRevenue")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Correct")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("quarter_1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Correct")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("_1stQuarter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Correct")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("my Revenue")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Incorrect")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("1stQuarter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Incorrect")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("A1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Incorrect")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("R1C1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Incorrect")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("!A$1:D10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Incorrect")])])])]),t._v(" "),a("h2",{attrs:{id:"available-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-methods"}},[t._v("#")]),t._v(" Available methods")]),t._v(" "),a("p",[t._v("These are the basic methods that can be used to add and manipulate\nnamed expressions, including the creation and handling of\nnamed ranges. The full list of methods is available in the\n"),a("a",{attrs:{href:"../api"}},[t._v("API reference")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"adding-a-named-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-named-expression"}},[t._v("#")]),t._v(" Adding a named expression")]),t._v(" "),a("p",[t._v("You can add a named expression by using the "),a("code",[t._v("addNamedExpression")]),t._v("\nmethod. It accepts name for the expression, the expression as a\nraw cell content, and optionally the scope. If you do not define\nthe scope it will be set to global, meaning the expression name\nwill be valid for the whole workbook. If you want to add many of them, it is\nadvised to do so in a "),a("RouterLink",{attrs:{to:"/guide/batch-operations.html"}},[t._v("batch")]),t._v('. This method\nreturns a list of cells whose values were affected by this operation, their absolute addresses, and new values. See the "changes"\nsection in '),a("a",{attrs:{href:"basic-operations"}},[t._v("basic operations")]),t._v(" for more info.")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// add 'prettyName' expression to the local scope of 'Sheet1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addNamedExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettyName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=Sheet1!$A$1+100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sheet1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"changing-a-named-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-a-named-expression"}},[t._v("#")]),t._v(" Changing a named expression")]),t._v(" "),a("p",[t._v("You can change a named expression by using the "),a("code",[t._v("changeNamedExpression")]),t._v("\nmethod. Select the name of an expression to change and pass it as\nthe first parameter,  then define the new expression as raw cell\ncontent and optionally add the scope. If you do not define the scope\nit will be set to global, meaning the expression will be vaild for the whole workbook. If you want to change many of them, it is advised\nto do so in a "),a("RouterLink",{attrs:{to:"/guide/batch-operations.html"}},[t._v("batch")]),t._v('. This method returns\na list of cells whose values were affected by this operation, their absolute addresses, and new values. See the "changes"\nsection in '),a("a",{attrs:{href:"basic-operations"}},[t._v("basic operations")]),t._v(" for more info.")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// change the named expression")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeNamedExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettyName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'=Sheet1!$A$1+200'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"removing-a-named-expression"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removing-a-named-expression"}},[t._v("#")]),t._v(" Removing a named expression")]),t._v(" "),a("p",[t._v("You can remove a named expression by using the "),a("code",[t._v("removeNamedExpression")]),t._v("\nmethod. Select the name of an expression to remove and pass it as\nthe first parameter and optionally define the scope. If you do\nnot define the scope it will be understood as global, meaning,\nthe whole workbook. This method returns a list of cells whose values\nwere affected by this operation, their absolute addresses, and new values.\nSee the changes section in\n"),a("a",{attrs:{href:"basic-operations"}},[t._v("basic operations")]),t._v(" for more info.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// remove 'prettyName' expression from 'Sheet1'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" changes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeNamedExpression")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prettyName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sheet1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"listing-all-named-expressions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listing-all-named-expressions"}},[t._v("#")]),t._v(" Listing all named expressions")]),t._v(" "),a("p",[t._v("You can retrieve a whole list of named expressions by\nusing the "),a("code",[t._v("listNamedExpressions")]),t._v(" method. It requires no\nparameters and returns all named expressions as an array of strings.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// get all named expression names")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" listOfExpressions "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hfInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listNamedExpressions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"handling-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#handling-errors"}},[t._v("#")]),t._v(" Handling errors")]),t._v(" "),a("p",[t._v("Operations on named expressions throw errors when something goes\nwrong. These errors can be handled to provide a good user experience\nin the application. Be sure to check the\n"),a("a",{attrs:{href:"basic-operations"}},[t._v("basic operations")]),t._v(" section to read about\nerror handling. It is also possible to check the availability of operations using "),a("code",[t._v("isItPossibleTo*")]),t._v(" methods, which are also described in "),a("a",{attrs:{href:"basic-operations#isitpossibleto-methods"}},[t._v("that section")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" Demo")]),t._v(" "),a("iframe",{staticStyle:{width:"100%",height:"500px",border:"0","border-radius":"4px",overflow:"hidden"},attrs:{src:"https://codesandbox.io/embed/github/handsontable/hyperformula-demos/tree/0.3.x/named-expressions?autoresize=1&fontsize=11&hidenavigation=1&theme=light&view=preview",title:"handsontable/hyperformula-demos: named-expressions",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-autoplay allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}})])}),[],!1,null,null,null);e.default=n.exports}}]);