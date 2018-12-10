(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{176:function(t,e,s){"use strict";s.r(e);var n={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},i=s(1),a=Object(i.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[s("h1",{attrs:{id:"breakpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#breakpoints","aria-hidden":"true"}},[t._v("#")]),t._v(" Breakpoints")]),t._v(" "),s("p",[t._v("You want to tweak a utility class so that it only fires on certain screen sizes?\nThen say hello to your new friend, the "),s("strong",[t._v("breakpoint system")]),t._v(".")]),t._v(" "),s("p",[t._v('A number of utility classes have been selected to feature responsiveness-control. These classes can be\nextended with breakpoint modifiers, such as "hide'),s("b",[t._v("-on-s")]),t._v('".')]),t._v(" "),s("p",[t._v("The actual breakpoint values can be customized via global configuration variables, but you're encouraged to use\nthe recommended default values, which are not based on common screen sizes (contrary to most other CSS libraries)\nbut instead simply on "),s("strong",[t._v("columns divisible by 300px")]),t._v(". Given the variety of screen sizes in modern devices,\nthere is simply no benefit in using screen-resolution-oriented breakpoints—so why not just\nuse something that is easy to remember and work with instead?")]),t._v(" "),s("p",[t._v("This is how the default breakpoint system in PragmaCSS looks like:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("l")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("p")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("0-600px")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("601-900px")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("901-1200px")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1201-1500px")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1501px+")])])])]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("GOOD TO KNOW")]),t._v(" "),s("p",[t._v("s, m and l stand for "),s("strong",[t._v("small")]),t._v(", "),s("strong",[t._v("medium")]),t._v(" and "),s("strong",[t._v("large")]),t._v(", respectively—as one would expect.\nWhat's a tad less obvious: The x stands for "),s("strong",[t._v("extra-large")]),t._v(' and the p stands for "plus",\nto cover everything exceeding extra-large.')])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("For convenience purposes, it's also possible to combine multiple breakpoints as such:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Consists of")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Sizes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("sm")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("s & m")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0-900px")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("ml")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("m & l")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("601-1200px")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("lx")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("l & x")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("901-1500px")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("xp")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("x & p")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("1501px+")])])])]),t._v(" "),s("p",[t._v("And even further:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Consists of")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Sizes")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("sml")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("s & m & l")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("0-1200px")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("mlx")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("m & l & x")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("601-1500px")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("lxp")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("l & x & p")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("901-~")])])])]),t._v(" "),s("br"),t._v(" "),s("p",[t._v("Naturally, you can also just combine multiple utility classes with breakpoint modifiers for very specific\nuse cases. For example, if you want to hide an element on small and medium screens, as well as everything\npast very large, use this combo: "),s("strong",[t._v("hide-on-sm hide-on-p")])]),t._v(" "),s("br"),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("INFO")]),t._v(" "),s("p",[t._v("Utility classes with breakpoint modifiers will be explicitly denoted as such in their\ncorresponding documentation section.")])])])},[],!1,null,null,null);a.options.__file="breakpoints.md";e.default=a.exports}}]);