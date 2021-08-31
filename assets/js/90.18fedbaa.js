(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{607:function(e,t,o){"use strict";o.r(t);var r=o(8),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"frontmatter-title"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),o("TocHeader"),e._v(" "),o("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),o("p",[e._v("We are assuming that you have "),o("RouterLink",{attrs:{to:"/next/grp-providers/guides/provider/deprecated/configuring-airnode.html"}},[e._v("configured your Airnode")]),e._v(" (and set "),o("code",[e._v("endpointId")]),e._v("s of your endpoints), and "),o("RouterLink",{attrs:{to:"/next/grp-providers/guides/provider/deprecated/deploying-airnode.html"}},[e._v("deployed your Airnode")]),e._v(" and received your "),o("code",[e._v("airnodeId")]),e._v(" in your receipt file.\nRequesters who know your "),o("code",[e._v("airnodeId")]),e._v(" and "),o("code",[e._v("endpointId")]),e._v("s should now be able to make requests to your endpoints.\nHowever, you probably do not want to serve the entire public with your Airnode, but rather")],1),e._v(" "),o("ul",[o("li",[e._v("Only serve your own client contracts")]),e._v(" "),o("li",[e._v("Only serve requesters who have made a subscription payment")]),e._v(" "),o("li",[e._v("Only serve requesters who have gone through KYC")]),e._v(" "),o("li",[e._v("...")])]),e._v(" "),o("p",[e._v("In this guide, we will explain how you can achieve this.")]),e._v(" "),o("h2",{attrs:{id:"authorizers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#authorizers"}},[e._v("#")]),e._v(" "),o("code",[e._v("authorizers")])]),e._v(" "),o("p",[o("RouterLink",{attrs:{to:"/next/grp-providers/reference/protocols/request-response/general-structure.html#endpointstore-sol"}},[e._v("EndpointStore.sol")]),e._v(" keeps a list of "),o("RouterLink",{attrs:{to:"/next/grp-providers/reference/protocols/request-response/authorizer.html"}},[e._v("authorizer")]),e._v(" addresses for each "),o("code",[e._v("airnodeId")]),e._v("–"),o("code",[e._v("endpointId")]),e._v(" pair.\nAn authorizer is a contract that Airnode calls to check if it should respond to a specific request.\nIt can enforce any kind of authorization policy that one could implement as a contract.")],1),e._v(" "),o("h2",{attrs:{id:"default-state-deny-all"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#default-state-deny-all"}},[e._v("#")]),e._v(" Default state: Deny all")]),e._v(" "),o("p",[e._v("By default, the authorizers of all endpoints of a provider is an empty list.\nAn empty authorizers list means that endpoint is not allowed to be used by anyone.\nTherefore, after deploying your Airnode, you must also set authorizers for your endpoints for them to be accessible.")]),e._v(" "),o("h2",{attrs:{id:"allow-all"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#allow-all"}},[e._v("#")]),e._v(" Allow all")]),e._v(" "),o("p",[e._v("The simplest authorization policy is opening the endpoint to the public, so let us see how to do that first.\nAuthorizers being set to "),o("code",[e._v("[0]")]),e._v(" means that all requests made to it will be authorized (i.e., will be responded to by Airnode).\nOnly the "),o("code",[e._v("airnodeAdmin")]),e._v(" of a provider can update the authorizers of its endpoints.\nTherefore, you will need to make a transaction using the provider admin address (that you have set in "),o("code",[e._v("config.json")]),e._v(" as "),o("code",[e._v("airnodeAdminForRecordCreation")]),e._v(") to "),o("RouterLink",{attrs:{to:"/next/grp-providers/reference/protocols/request-response/general-structure.html#endpointstore-sol"}},[e._v("EndpointStore.sol")]),e._v(".\nIn JS (using ethers.js):")],1),e._v(" "),o("div",{staticClass:"language-js line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-js"}},[o("code",[e._v("airnode"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("connect")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("airnodeAdmin"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),o("span",{pre:!0,attrs:{class:"token function"}},[e._v("updateEndpointAuthorizers")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("airnodeId"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" endpointId"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("ethers"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("constants"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("AddressZero"),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),o("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br")])]),o("p",[e._v("You can also use "),o("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/admin#update-authorizers",target:"_blank",rel:"noopener noreferrer"}},[e._v("@api3/airnode-admin"),o("OutboundLink")],1),e._v(" to update endpoint authorizers.")]),e._v(" "),o("p",[e._v("After making this transaction, your Airnode will respond to all requests.\nNote that being able to do this on-chain through "),o("code",[e._v("airnodeAdmin")]),e._v(" allows you to update your authorization policies without interacting with your Airnode or having to redeploy it.")]),e._v(" "),o("h2",{attrs:{id:"custom-authorization-policies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-authorization-policies"}},[e._v("#")]),e._v(" Custom authorization policies")]),e._v(" "),o("p",[e._v("We have mentioned that authorizer contracts can implement any arbitrary authorization logic.\nSee "),o("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/pre-alpha/packages/protocol/contracts/authorizers/MinBalanceAuthorizer.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("this example"),o("OutboundLink")],1),e._v(" where Airnode only responds to requests if the wallet it will use to fulfill the request has a balance more than an amount set by the provider admin.")]),e._v(" "),o("p",[e._v("The authorizer list allows you to combine single-purpose authorizer contracts to form complex policies as described in the "),o("RouterLink",{attrs:{to:"/next/grp-providers/reference/protocols/request-response/authorizer.html#authorizer-list"}},[e._v("docs")]),e._v(".\nIf you would like to contribute to this set of authorizer contracts, please join the conversation in "),o("a",{attrs:{href:"https://github.com/api3dao/airnode/issues/38",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),o("OutboundLink")],1),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),o("p",[e._v("Your Airnode is completely set up now.\nThe following guides will be on how a requester would be able to make requests to it.")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);