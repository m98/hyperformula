(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{682:function(t,e,a){"use strict";a.r(e);var n=a(42),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"performance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance"}},[t._v("#")]),t._v(" Performance")]),t._v(" "),a("p",[t._v("We implemented various techniques to boost the performance of\nHyperFormula. In some cases, turning them on or off might increase\nthe performance of your app. Below we provide a number of tips on\nhow to speed it up.")]),t._v(" "),a("h2",{attrs:{id:"vlookup-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vlookup-match"}},[t._v("#")]),t._v(" VLOOKUP/MATCH")]),t._v(" "),a("p",[t._v("If you are planning to use VLOOKUP or MATCH heavily in your app,\nyou may consider enabling the "),a("code",[t._v("useColumnIndex")]),t._v(" flag in the HyperFormula\nconfiguration. It will increase memory usage but can significantly\nimprove the performance of these two functions, especially when\nrunning on unsorted or very large data sets. The column index will\nnot be used despite the option "),a("code",[t._v("useColumnIndex")]),t._v(" enabled when  using\n"),a("strong",[t._v("wildcards")]),t._v(" or "),a("strong",[t._v("regular expressions")]),t._v(".")]),t._v(" "),a("p",[t._v("Leaving this option disabled will cause the engine to use binary\nsearch when dealing with sorted data, and the naive approach otherwise.\nHowever, binary search will not be used if the size of the data being\nsearched is below a given threshold, which can be customized using the\n"),a("code",[t._v("binarySearchThreshold")]),t._v(" option in the configuration.")]),t._v(" "),a("h2",{attrs:{id:"address-mapping-strategies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address-mapping-strategies"}},[t._v("#")]),t._v(" Address mapping strategies")]),t._v(" "),a("p",[t._v("HyperFormula uses two approaches to store the mapping of cell\naddresses in order to optimize memory usage. The choice of the\nstrategy is made independently for each sheet. The\n"),a("code",[t._v("chooseAddressMappingPolicy")]),t._v(" option allows for changing the way\nthe strategy will be chosen.")]),t._v(" "),a("p",[t._v("You may use one of three built-in policies:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("AlwaysDense")]),t._v(" – uses dense mapping for each sheet. This policy is\nparticularly useful when the spreadsheet is a densely filled rectangle.")]),t._v(" "),a("li",[a("code",[t._v("AlwaysSparse")]),t._v(" – uses sparse mapping for each sheet. This approach\nis useful when in your spreadsheet/dataset there are relatively few\ncells filled, but located very far from each other.")]),t._v(" "),a("li",[a("code",[t._v("DenseSparseChooseBasedOnThreshold")]),t._v(" – the choice is made based on\nthe fill ratio of the sheet. Let the engine choose the best strategy\nfor you.")])]),t._v(" "),a("h2",{attrs:{id:"numeric-matrix-detection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#numeric-matrix-detection"}},[t._v("#")]),t._v(" Numeric matrix detection")]),t._v(" "),a("p",[t._v("HyperFormula is able to optimize underlying data structures when it\ndetects consistent areas of numerical data. It is especially useful\nwhen dealing with calculations on huge numerical data sets. You may\nconsider disabling this option completely by setting "),a("code",[t._v("matrixDetection")]),t._v("\nto false or adjusting the "),a("code",[t._v("matrixDetectionThreshold")]),t._v(" option to customize\nthe size of the numerical areas to better fit your use case.")]),t._v(" "),a("p",[t._v("It is worth mentioning that some of the CRUD operations, like\ninserting non-numerical data, may lead to disabling optimization\nfor affected areas.")]),t._v(" "),a("h2",{attrs:{id:"suspending-automatic-recalculations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suspending-automatic-recalculations"}},[t._v("#")]),t._v(" Suspending automatic recalculations")]),t._v(" "),a("p",[t._v("By default, HyperFormula recalculates formulas after every change.\nHowever, due to the fact that we store the graph of dependencies\nbetween cells in the sheet, we recalculate only the cells affected\nby the update.")]),t._v(" "),a("p",[t._v("Sometimes, a simple change can cause recalculation of a large part\nof the sheet, e.g. when the modified cell is at the very beginning\nof the dependency chain or when there are many\n"),a("RouterLink",{attrs:{to:"/guide/volatile-functions.html"}},[t._v("volatile functions")]),t._v(" in the worksheet.\nIn such a case you may want to postpone the recalculation.")],1),t._v(" "),a("p",[t._v("The first option is to call "),a("code",[t._v("suspendEvaluation")]),t._v(" before making\nchanges and "),a("code",[t._v("resumeEvaluation")]),t._v(" at a convenient moment.")]),t._v(" "),a("p",[t._v("The second option is to pass the callback function with multiple\noperations to a "),a("RouterLink",{attrs:{to:"/guide/batch-operations.html"}},[t._v("batch function")]),t._v(". Recalculation\nwill be suspended before performing operations and resumed after them.\nIn cases where you perform operations which may not cause a\nrecalculation but only change the shape of the worksheet, like\n"),a("code",[t._v("addRows")]),t._v(", "),a("code",[t._v("removeRows")]),t._v(", or "),a("code",[t._v("moveColumns")]),t._v(" , we do not recommend suspending\nrecalculation, as this may have a slightly negative impact on\nperformance.")],1),t._v(" "),a("h2",{attrs:{id:"gpu-acceleration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gpu-acceleration"}},[t._v("#")]),t._v(" GPU acceleration")]),t._v(" "),a("p",[t._v("Some formulas, e.g. MMULT, MAXPOOL, MEDIANPOOL, benefit from\nGPU acceleration. Thanks to the cores running thousands of threads\nat once, they calculate the input data sets up to 9x faster than\nwhen using the CPU. According to our observations the bigger the data set is,\nthe bigger the performance gain.")]),t._v(" "),a("p",[a("strong",[t._v("For small data sets, the difference between the CPU and GPU is\nnon-significant.")])]),t._v(" "),a("h2",{attrs:{id:"benchmarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benchmarks"}},[t._v("#")]),t._v(" Benchmarks")]),t._v(" "),a("p",[t._v("HyperFormula's performance has been tested on different devices,\noperating systems, and browsers. The table below presents the result\nof tests in which the engine multiplies two matrices of\n2000 cells, each using the MMULT formula. The main objective of this\nbenchmark is to show a significant difference in performance between the\nCPU and GPU.")]),t._v(" "),a("p",[t._v("The tests were run on three different physical machines with the\nfollowing specifications:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("MacBook Pro (2015)")]),t._v(" - 2.7 GHz Intel Core i5, 16 GB 1867 MHz DDR3,\nIntel Iris Graphics 6100 1536 MB, macOS Mojave, Chrome.")]),t._v(" "),a("li",[a("strong",[t._v("Lenovo ThinkBook (2019)")]),t._v(" - Intel Core i5 8gen 8265U 1.6 - 3.9 GHz,\n8 GB RAM DDR4 2400 MHz, Intel UHD Graphics 620, Windows 10 Pro, Firefox.")]),t._v(" "),a("li",[a("strong",[t._v("Huawei Mate 20 (2018)")]),t._v(" - Octa-core (2x2.6 GHz 2x Cortex-A76\n& 4x1.8 GHz Cortex-A55), 4 GB RAM HiSilicon Kirin 980, Mali-G76 MP10,\nAndroid Pie (9), Chrome.")])]),t._v(" "),a("p",[t._v("The resulting times are returned in seconds.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}}),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("GPU")])]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("CPU")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Number of rows")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Number of columns")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Number of cells")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4 million")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("4 million")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Number of repeats")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("100")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("100")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("MacBook Pro")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Average total time")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("2.921")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("18.570")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Standard deviation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.117")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1.981")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Lenovo ThinkBook")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Average total time")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3.041")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("10.543")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Standard deviation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.138")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.045")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("strong",[t._v("Huawei Mate 20")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}}),t._v(" "),a("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Average total time")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("6.611")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("40.166")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("Standard deviation")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.394")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("0.594")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);