(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{558:function(t,s,e){"use strict";e.r(s);var a=e(8),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("TocHeader"),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#step-1-build-the-docs"}},[t._v("Step 1: Build the Docs")])]),e("li",[e("a",{attrs:{href:"#step-2-start-http-server"}},[t._v("Step 2: Start http-server")])]),e("li",[e("a",{attrs:{href:"#step-3-run-the-script"}},[t._v("Step 3: Run the Script")])])])]),e("p"),t._v(" "),e("p",[t._v("This custom Node.js script ("),e("code",[t._v("link-check.js")]),t._v(") validates links with or without attached anchors. The script is used in supplement the markdown-link-check plugin that is run using the command "),e("code",[t._v("test:links:prod")]),t._v(" which is also attached to a GitHub action in the project repo. However the markdown-link-check plugin does not validate anchors when attached to links, only the link.")]),t._v(" "),e("ul",[e("li",[t._v("my-markdown.md")]),t._v(" "),e("li",[t._v("my-markdown.md#my-anchor")])]),t._v(" "),e("p",[t._v("More than often a heading element such as "),e("strong",[t._v("## My Heading")]),t._v(" gets changed and thus breaks any link that references it. Running "),e("code",[t._v("link-check.js")]),t._v(" will locate such broken links.")]),t._v(" "),e("p",[t._v("The link validator is a manual and time consuming process that should be performed as often as possible.")]),t._v(" "),e("h2",{attrs:{id:"step-1-build-the-docs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-1-build-the-docs"}},[t._v("#")]),t._v(" Step 1: Build the Docs")]),t._v(" "),e("p",[t._v("Build the docs as usual using the standard build command provided by VuePress.")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Build the docs website from the api3-docs project root")]),t._v("\n yarn docs"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("build\n \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"step-2-start-http-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-2-start-http-server"}},[t._v("#")]),t._v(" Step 2: Start http-server")]),t._v(" "),e("p",[t._v("Start an instance of "),e("a",{attrs:{href:"https://www.npmjs.com/package/http-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("http-server"),e("OutboundLink")],1),t._v(" to serve the docs. Do not use the normal VuePress live reload server as it will not work with the script.")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Change directories to the build root (dist)")]),t._v("\ncd docs"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepresss"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Start an http-server, do not use the VuePress live reload server")]),t._v("\nhttp"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("server\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"step-3-run-the-script"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#step-3-run-the-script"}},[t._v("#")]),t._v(" Step 3: Run the Script")]),t._v(" "),e("p",[t._v("Open a new terminal window to run the script. The script's output will display failures as it steps through each file and its links. There will be a summary of all link failures at the end of the script output.")]),t._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Open a new terminal window")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Go to the api3-docs project root")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Start the node script")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" node link"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("check"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js  http"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vuepress"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("dist\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])],1)}),[],!1,null,null,null);s.default=r.exports}}]);