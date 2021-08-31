(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{625:function(e,t,s){"use strict";s.r(t);var a=s(8),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[e._v("#")]),e._v(" "+e._s(e.$frontmatter.title))]),e._v(" "),s("TocHeader"),e._v(" "),s("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),e._v(" "),s("Fix",[e._v("Client in this paragraph need to be changed to requesters but first fix the use of client and requester in the docs grouped for reference > request-response.")]),e._v(" "),s("p",[e._v("Use the CLI tool to interact with Airnode across blockchains. There are commands for both developers (dApp) and API providers. Developers can endorse "),s("RouterLink",{attrs:{to:"/next/reference/protocols/request-response/client.html"}},[e._v("requester contracts")]),e._v(" and fund Airnodes. API providers can build "),s("RouterLink",{attrs:{to:"/next/reference/protocols/request-response/airnode.html"}},[e._v("Airnodes")]),e._v(" that serve their API data to requester contracts.")],1),e._v(" "),s("p",[e._v("Almost all commands require you to provide a blockchain "),s("code",[e._v("providerUrl")]),e._v(" such as "),s("code",[e._v("https://ropsten.infura.io/v3/<KEY>")]),e._v(". The CLI connects to the "),s("a",{attrs:{href:"https://github.com/api3dao/airnode/blob/master/packages/protocol/contracts/AirnodeRrp.sol",target:"_blank",rel:"noopener noreferrer"}},[e._v("AirnodeRrp.sol"),s("OutboundLink")],1),e._v(" contract, which address is derived from the current chain. You can optionally specify the contract address yourself by providing optional "),s("code",[e._v("airnodeRrp")]),e._v(" command argument with address of the deployed contract on your targeted chain.")]),e._v(" "),s("p",[e._v("Commands that require "),s("code",[e._v("mnemonic")]),e._v(" will make an on-chain transaction.\nThe application will derive the account from the mnemonic with default ethereum derivation path "),s("code",[e._v("m/44'/60'/0'/0/0")]),e._v(", but you can override this by "),s("code",[e._v("derivationPath")]),e._v(" flag.\nMake sure that the wallet that is associated with the mnemonic is funded on the target chain.\nThe application will not exit until the transaction is confirmed.")]),e._v(" "),s("p",[s("strong",[e._v("View all commands:")])]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin --help\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("View the parameters of a command:")])]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$COMMAND")]),e._v(" --help\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"sdk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sdk"}},[e._v("#")]),e._v(" SDK")]),e._v(" "),s("p",[e._v("You can also use the package programmatically. The SDK exports respective functions for all CLI commands as\nwell as helper functions for obtaining the contract instance on the targeted chain.")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" endorseRequester"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" getAirnodeRrpWithSigner "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@api3/admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// First obtain the contract instance on target chain")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" airnodeRrp "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getAirnodeRrpWithSigner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("mnemonic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" derivationPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" providerUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" airnodeRrpAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Pass the contract instance as the first argument to the SDK function")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" requester "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("endorseRequester")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("airnodeRrp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" requester"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("If you plan to use multiple commands it might be tedious to pass the contract instance to every function call. For this reason there is also class based "),s("code",[e._v("AdminSdk")]),e._v(" which you initialize with "),s("code",[e._v("AirnodeRrp")]),e._v(" contract only once.")]),e._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("import")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" AdminSdk "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'@api3/admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// First initialize the SDK with AirnodeRrp contract instance.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// You can use static AdminSdk functions or provide your own instance.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" airnodeRrp "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" AdminSdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getAirnodeRrpWithSigner")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("mnemonic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" derivationPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" providerUrl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" airnodeRrpAddress"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Create sdk instance")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" adminSdk "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AdminSdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("airnodeRrp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Call the method you need")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" requester "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" adminSdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("endorseRequester")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("requester"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// You can switch the contract instance anytime. E.g. if you are using ethers")]),e._v("\nadminSdk"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("airnodeRrp "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" airnodeRrp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("someOtherWallet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br")])]),s("p",[e._v("The SDK will also provide TS typings out of the box.\nPlease, refer to the implementation for more details.")]),e._v(" "),s("h2",{attrs:{id:"requester-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#requester-commands"}},[e._v("#")]),e._v(" Requester commands")]),e._v(" "),s("h3",{attrs:{id:"derive-sponsor-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#derive-sponsor-wallet"}},[e._v("#")]),e._v(" "),s("code",[e._v("derive-sponsor-wallet")])]),e._v(" "),s("p",[e._v("Creates a "),s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/requester.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("requester"),s("OutboundLink")],1),e._v(" and returns a requester index.\nNote down your requester index because you will be using it in future interactions.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin derive-sponsor-wallet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --sponsor 0x9Ec6C4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"set-requester-admin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-requester-admin"}},[e._v("#")]),e._v(" "),s("code",[e._v("set-requester-admin")])]),e._v(" "),s("p",[e._v("Sets the "),s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/requester.md#requesteradmin",target:"_blank",rel:"noopener noreferrer"}},[e._v("requester admin"),s("OutboundLink")],1),e._v(".\nThe account derived from the "),s("code",[e._v("mnemonic")]),e._v(" you provide here has to belong to the previous requester admin.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin set-requester-admin "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterAdmin 0xe97301"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"derive-designated-wallet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#derive-designated-wallet"}},[e._v("#")]),e._v(" "),s("code",[e._v("derive-designated-wallet")])]),e._v(" "),s("p",[e._v("Derives the address of the "),s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/designated-wallet.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("wallet designated by an Airnode for a requester"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin derive-designated-wallet "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --airnodeId 0xe1e0dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"endorse-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#endorse-client"}},[e._v("#")]),e._v(" "),s("code",[e._v("endorse-client")])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/endorsement.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Endorses"),s("OutboundLink")],1),e._v(" a client contract so that its requests can be fulfilled by the requester's designated wallet.\nThe account derived from the "),s("code",[e._v("mnemonic")]),e._v(" you provide here has to belong to the requester admin.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin endorse-client "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --clientAddress 0x2c2e12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"unendorse-client"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unendorse-client"}},[e._v("#")]),e._v(" "),s("code",[e._v("unendorse-client")])]),e._v(" "),s("p",[e._v("Unendorses a client contract so that its requests can no longer be fulfilled by the requester's designated wallet.\nThe account derived from the "),s("code",[e._v("mnemonic")]),e._v(" you provide here has to belong to the requester admin.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin unendorse-client "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --clientAddress 0x2c2e12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"get-endorsement-status"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-endorsement-status"}},[e._v("#")]),e._v(" "),s("code",[e._v("get-endorsement-status")])]),e._v(" "),s("p",[e._v("Returns the endorsement status for the given requester index and client ("),s("code",[e._v("true")]),e._v(" if endorsed, "),s("code",[e._v("false")]),e._v(" otherwise).")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin get-endorsement-status "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --clientAddress 0x2c2e12"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"create-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-template"}},[e._v("#")]),e._v(" "),s("code",[e._v("create-template")])]),e._v(" "),s("p",[e._v("Reads a file, uses its contents to create a "),s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/template.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("template"),s("OutboundLink")],1),e._v(" and returns the template ID.\nSee the "),s("code",[e._v("/example")]),e._v(" directory for an example template file.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin create-template "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --templateFilePath ./template.json\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h3",{attrs:{id:"get-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-template"}},[e._v("#")]),e._v(" "),s("code",[e._v("get-template")])]),e._v(" "),s("p",[e._v("Returns the template for the given "),s("code",[e._v("templateId")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin get-template "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --templateId 0x8d3b9"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"request-withdrawal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#request-withdrawal"}},[e._v("#")]),e._v(" "),s("code",[e._v("request-withdrawal")])]),e._v(" "),s("p",[e._v("Requests a "),s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/designated-wallet.md#withdrawals",target:"_blank",rel:"noopener noreferrer"}},[e._v("withdrawal"),s("OutboundLink")],1),e._v(" from the wallet designated by an Airnode for a requester, and returns the request ID.\nThe account derived from the "),s("code",[e._v("mnemonic")]),e._v(" you provide here has to belong to the requester admin.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin request-withdrawal "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --airnodeId 0xe1e0dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --requesterIndex "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --destination 0x98aaba"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h3",{attrs:{id:"check-withdrawal-request"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#check-withdrawal-request"}},[e._v("#")]),e._v(" "),s("code",[e._v("check-withdrawal-request")])]),e._v(" "),s("p",[e._v("Checks the status of the withdrawal request with the given ID.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin check-withdrawal-request "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --withdrawalRequestId 0x011d1b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"airnode-commands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#airnode-commands"}},[e._v("#")]),e._v(" Airnode commands")]),e._v(" "),s("h3",{attrs:{id:"set-airnode-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-airnode-parameters"}},[e._v("#")]),e._v(" "),s("code",[e._v("set-airnode-parameters")])]),e._v(" "),s("p",[e._v("Sets the parameters of an "),s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/request-response-protocol/provider.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Airnode"),s("OutboundLink")],1),e._v(" and returns the Airnode ID.\nSee the "),s("code",[e._v("/example")]),e._v(" directory for an example authorizers file.")]),e._v(" "),s("p",[s("strong",[e._v("You probably should not be using this.")]),e._v("\nAirnode will set its own parameters during "),s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/provider-guides/deploying-airnode.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("deployment"),s("OutboundLink")],1),e._v(" if necessary.")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin set-airnode-parameters "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --mnemonic "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"nature about salad..."')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --airnodeAdmin 0xc2193d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(". "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --authorizersFilePath ./authorizers.json\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"get-airnode-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-airnode-parameters"}},[e._v("#")]),e._v(" "),s("code",[e._v("get-airnode-parameters")])]),e._v(" "),s("p",[e._v("Returns the Airnode parameters and block number for the given "),s("code",[e._v("airnodeId")]),e._v(".")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin get-airnode-parameters "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --providerUrl https://ropsten.infura.io/v3/"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("KEY"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --airnodeId 0xe1e0dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v(".\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"derive-endpoint-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#derive-endpoint-id"}},[e._v("#")]),e._v(" "),s("code",[e._v("derive-endpoint-id")])]),e._v(" "),s("p",[e._v("Derives the endpoint ID using the OIS title and the endpoint name using the convention described "),s("a",{attrs:{href:"https://github.com/api3dao/api3-docs/blob/master/provider-guides/configuring-airnode.md#triggers",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("npx @api3/airnode-admin derive-endpoint-id "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --oisTitle "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My OIS title..."')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --endpointName "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"My endpoint name..."')]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"more-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#more-examples"}},[e._v("#")]),e._v(" More examples")]),e._v(" "),s("p",[e._v("You can find more examples in the "),s("em",[e._v("@api3-dao/airnode/package/admin")]),e._v(" "),s("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/master/packages/admin/test",target:"_blank",rel:"noopener noreferrer"}},[e._v("test files"),s("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);