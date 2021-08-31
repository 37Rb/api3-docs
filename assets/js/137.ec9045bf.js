(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{660:function(t,s,e){"use strict";e.r(s);var a=e(8),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),e("TocHeader"),t._v(" "),e("TOC",{staticClass:"table-of-contents",attrs:{"include-level":[2,3]}}),t._v(" "),e("p",[e("a",{attrs:{href:"https://docs.soliditylang.org/en/v0.6.12/abi-spec.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Contract application binary interface (ABI)"),e("OutboundLink")],1),t._v(" is used to encode different types of data while interacting with Ethereum contracts.\nAs a result, both Solidity and modules such as web3.js and ethers.js treat ABI encoding–decoding functionality as a first-class citizen.\nThis makes using contract ABI for encoding API call parameters a very attractive option.")]),t._v(" "),e("p",[t._v("Although encoding API call parameters using contract ABI has many advantages, it cannot be used for this purpose directly.\nQuoting from the "),e("a",{attrs:{href:"https://docs.soliditylang.org/en/v0.6.12/abi-spec.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Solidity docs"),e("OutboundLink")],1),t._v(":")]),t._v(" "),e("blockquote",[e("p",[t._v("The encoding is not self describing and thus requires a schema in order to decode.")])]),t._v(" "),e("p",[t._v("This means that whenever we pass API call parameters (of type "),e("code",[t._v("bytes")]),t._v("), we would also need to pass a list of the types of these parameters, which is cumbersome (and it is not clear how these types would be encoded).\nAs a solution, Airnode uses "),e("em",[t._v("Airnode ABI specifications")]),t._v(", an extension of contract ABI specifications that includes a header that keeps the schema.")]),t._v(" "),e("h2",{attrs:{id:"header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" Header")]),t._v(" "),e("p",[t._v("The Airnode ABI specifications header is of type "),e("code",[t._v("bytes32")]),t._v(" and acts as the schema (i.e., describes the types of the API call parameters).\nThe header is encoded in UTF-8 for ease of use.\nHere is an example:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"1BSabiuBa"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The first character, "),e("code",[t._v("1")]),t._v(", represents the encoding version.\nEach following character represents the type of an API call parameter.")]),t._v(" "),e("h3",{attrs:{id:"type-encodings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-encodings"}},[t._v("#")]),t._v(" Type encodings")]),t._v(" "),e("p",[t._v("The types are encoded in UTF-8 characters as follows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("B: bytes\nS: string\na: address\nu: uint256\ni: int256\nb: bytes32\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("Note that dynamically-sized types are represented with uppercase letters, and statically-sized types are represented with lowercase letters.")]),t._v(" "),e("h2",{attrs:{id:"encoding-format"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#encoding-format"}},[t._v("#")]),t._v(" Encoding format")]),t._v(" "),e("p",[t._v("Airnode ABI specifications has the following encoding format (which is somewhat similar to "),e("a",{attrs:{href:"https://github.com/antirez/sds",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDS"),e("OutboundLink")],1),t._v("):")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[------------------------][-----------------------------------------]\n  Header of type bytes32      API call parameter name–value pairs\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("Note that each API call parameter is preceded with a name of type "),e("code",[t._v("bytes32")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"example-encoding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-encoding"}},[t._v("#")]),t._v(" Example encoding")]),t._v(" "),e("p",[t._v("If we wanted to encode the following API call parameters")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MyFirstBytes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x1234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MyString"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MyFirstAddress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x0000000000000000000000000000000000001234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MyBytes32"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MyInt256"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-1234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MyUint256"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MySecondBytes"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x5678"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"MySecondAddress"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x0000000000000000000000000000000000005678"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("we would to do this in our client contract as:")]),t._v(" "),e("div",{staticClass:"language-solidity line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" parameters "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" abi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1BSabiuBa"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyFirstBytes"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hex"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyString"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyFirstAddress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000000000000000000000000000000000001234")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyBytes32"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyInt256"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MyUint256"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MySecondBytes"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("hex"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5678"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MySecondAddress"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0000000000000000000000000000000000005678")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br")])]),e("p",[t._v("Note that we did not need to add an external library to our contract, and "),e("code",[t._v("abi.encode()")]),t._v(" is fairly cheap in terms of gas usage (compared to alternative encoding methods).")]),t._v(" "),e("h2",{attrs:{id:"example-decoding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-decoding"}},[t._v("#")]),t._v(" Example decoding")]),t._v(" "),e("p",[t._v("If the user knows the schema of the encoded parameters, they can even decode them on-chain.\nFor example, if the schema is "),e("code",[t._v("(bytes,string)")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-solidity line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" header"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" name1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" value1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" name2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("memory")]),t._v(" value2\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" abi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("decode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parameters"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[t._v("Note that we disregarded the header and hardcoded the schema into our code.\nIt is also possible to parse the header on-chain and decode accordingly, yet that would be a lot more complex.")]),t._v(" "),e("h2",{attrs:{id:"details"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#details"}},[t._v("#")]),t._v(" Details")]),t._v(" "),e("h3",{attrs:{id:"bytes32"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bytes32"}},[t._v("#")]),t._v(" "),e("code",[t._v("bytes32")])]),t._v(" "),e("p",[t._v("A parameter being of type "),e("code",[t._v("bytes32")]),t._v(" implies that the parameter is UTF-8 encoded text.\nFor example, if the parameter is")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("0x68656c6c6f000000000000000000000000000000000000000000000000000000\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Airnode will decode it as")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"hello"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("and feed that to the API, which is what the user would want to do in most cases.")]),t._v(" "),e("p",[t._v("This becomes a problem if the parameter is not encoded text, but for example a hash such as:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("0x1fd36c61981313c0c155d33ffac0325bd7c00d21d52442981bb13d2fa13e8f71\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("If this hash is encoded as a "),e("code",[t._v("bytes32")]),t._v(" type, Airnode will decode it as:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ÓlaÀÁUÓ?úÀ2[×À\n!Õ$B±=/¡>q\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("which is probably not what the user is looking for.\nInstead, the user should typecast the parameter into a "),e("code",[t._v("bytes")]),t._v(" type as:")]),t._v(" "),e("div",{staticClass:"language-solidity line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes")]),t._v(" parameterAsBytes "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" abi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodePacked")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("parameterAsBytes32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("and encode it as such.\nThen, Airnode would decode it as")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('"0x1fd36c61981313c0c155d33ffac0325bd7c00d21d52442981bb13d2fa13e8f71"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"omitted-types"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#omitted-types"}},[t._v("#")]),t._v(" Omitted types")]),t._v(" "),e("p",[t._v("We have omitted "),e("code",[t._v("array")]),t._v(" and "),e("code",[t._v("tuple")]),t._v(" because they are not suitable to be used as API parameters.\n"),e("code",[t._v("uint8-uint128")]),t._v(", "),e("code",[t._v("int8-int128")]),t._v(", "),e("code",[t._v("bytes1-bytes31")]),t._v(" are omitted because they are padded to 32 bytes by the ABI encoder anyway (meaning that the user should simply typecast these to the 32-byte versions).")]),t._v(" "),e("p",[t._v("Finally, we have omitted "),e("code",[t._v("bool")]),t._v(" to avoid confusion because there are too many types that start with the letter 'B'.\nA simple workaround is to encode a "),e("code",[t._v("bool")]),t._v(" type parameter as "),e("code",[t._v("bytes32")]),t._v(" as:")]),t._v(" "),e("div",{staticClass:"language-solidity line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-solidity"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),t._v(" boolAsBytes32 "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" boolAsBool "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"true"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("bytes32")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("This works because both "),e("code",[t._v("bool(true)")]),t._v(" and "),e("code",[t._v('bytes32("true")')]),t._v(" would be decoded as "),e("code",[t._v('"true"')]),t._v(" at the Airnode-end, and vice versa.")]),t._v(" "),e("h3",{attrs:{id:"size-limit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#size-limit"}},[t._v("#")]),t._v(" Size limit")]),t._v(" "),e("p",[t._v("The header can encode up to 31 parameters (and 1 byte is used to encode the encoding version).\nThis is far more than what would be needed in practice, and thus is tolerated to avoid a more complex solution.")]),t._v(" "),e("h3",{attrs:{id:"padding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#padding"}},[t._v("#")]),t._v(" Padding")]),t._v(" "),e("p",[t._v("We are using the "),e("a",{attrs:{href:"https://docs.soliditylang.org/en/v0.6.12/abi-spec.html#strict-encoding-mode",target:"_blank",rel:"noopener noreferrer"}},[t._v("strict encoding mode"),e("OutboundLink")],1),t._v(" so that we can decode the values later on.\nThis means that each parameter will be padded with zeros to complete them to 32 bytes.\nAlthough this padding increases gas costs, ABI encoding/decoding functions being cheap balances this.\nFurthermore, the "),e("RouterLink",{attrs:{to:"/pre-alpha/protocols/request-response/template.html"}},[t._v("template")]),t._v(" pattern we use in our protocols allows us to refer to these encoded parameters without explicitly passing them in our requests, making the increased cost induced by padding irrelevant in most cases.")],1),t._v(" "),e("h2",{attrs:{id:"api3-airnode-abi"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api3-airnode-abi"}},[t._v("#")]),t._v(" "),e("code",[t._v("@api3/airnode-abi")])]),t._v(" "),e("p",[t._v("The user may need to encode and decode Airnode ABI off-chain.\nFor that, we have published the related "),e("a",{attrs:{href:"https://github.com/api3dao/airnode/tree/pre-alpha/packages/airnode-abi",target:"_blank",rel:"noopener noreferrer"}},[t._v("Airnode monorepo package"),e("OutboundLink")],1),t._v(" under the name "),e("code",[t._v("@api3/airnode-abi")]),t._v(".\nYou can refer to the "),e("a",{attrs:{href:"https://github.com/api3dao/airnode-starter/blob/b521d9d77dc3c4d3f6b27adf674adca3a3fba05f/scripts/make-request.js#L25",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("airnode-starter")]),e("OutboundLink")],1),t._v(" repo for an example usage.")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);