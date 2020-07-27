(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return o}));var c=a(2),n=a(6),l=(a(0),a(87)),s={id:"_acl_class_",title:"acl/class",sidebar_label:"acl/class"},r={unversionedId:"api/modules/_acl_class_",id:"api/modules/_acl_class_",isDocsHomePage:!1,title:"acl/class",description:'@solid/lit-pod \u203a "acl/class"',source:"@site/docs/api/modules/_acl_class_.md",permalink:"/lit-pod/docs/api/modules/_acl_class_",editUrl:"https://github.com/inrupt/lit-pod/edit/master/website/docs/api/modules/_acl_class_.md",sidebar_label:"acl/class",sidebar:"api",previous:{title:"acl/agent",permalink:"/lit-pod/docs/api/modules/_acl_agent_"},next:{title:"acl/group",permalink:"/lit-pod/docs/api/modules/_acl_group_"}},b=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"unstable_getPublicAccess",id:"unstable_getpublicaccess",children:[]},{value:"unstable_getPublicDefaultAccess",id:"unstable_getpublicdefaultaccess",children:[]},{value:"unstable_getPublicResourceAccess",id:"unstable_getpublicresourceaccess",children:[]}]}],i={rightToc:b};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(c.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(c.a)({parentName:"p"},{href:"/lit-pod/docs/api/index"}),"@solid/lit-pod")," \u203a ",Object(l.b)("a",Object(c.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_acl_class_"}),'"acl/class"')),Object(l.b)("h2",{id:"index"},"Index"),Object(l.b)("h3",{id:"functions"},"Functions"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(c.a)({parentName:"li"},{href:"/lit-pod/docs/api/modules/_acl_class_#unstable_getpublicaccess"}),"unstable_getPublicAccess")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(c.a)({parentName:"li"},{href:"/lit-pod/docs/api/modules/_acl_class_#unstable_getpublicdefaultaccess"}),"unstable_getPublicDefaultAccess")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(c.a)({parentName:"li"},{href:"/lit-pod/docs/api/modules/_acl_class_#unstable_getpublicresourceaccess"}),"unstable_getPublicResourceAccess"))),Object(l.b)("h2",{id:"functions-1"},"Functions"),Object(l.b)("h3",{id:"unstable_getpublicaccess"},"unstable_getPublicAccess"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"unstable_getPublicAccess"),"(",Object(l.b)("inlineCode",{parentName:"p"},"resourceInfo"),": unstable",Object(l.b)("em",{parentName:"p"},"WithAcl & ","[WithResourceInfo]","(/lit-pod/docs/api/modules/_interfaces"),"#withresourceinfo)): ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(c.a)({parentName:"em"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_access"}),"unstable_Access")," | null")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/inrupt/lit-pod/blob/fe50431/src/acl/class.ts#L52"}),"acl/class.ts:52"))),Object(l.b)("p",null,"Find out what Access Modes have been granted to everyone for a given Resource."),Object(l.b)("p",null,"Keep in mind that this function will not tell you what access specific Agents have through other ACL rules, e.g. agent- or group-specific permissions."),Object(l.b)("p",null,"Also, please note that this function is still experimental: its API can change in non-major releases."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"resourceInfo")),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"unstable",Object(l.b)("em",{parentName:"td"},"WithAcl & ","[WithResourceInfo]","(/lit-pod/docs/api/modules/_interfaces"),"#withresourceinfo)"),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"Information about the Resource to which the given Agent may have been granted access.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(c.a)({parentName:"em"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_access"}),"unstable_Access")," | null")),Object(l.b)("p",null,"Which Access Modes have been granted to everyone for the given LitDataset, or ",Object(l.b)("inlineCode",{parentName:"p"},"null")," if it could not be determined (e.g. because the current user does not have Control Access to a given Resource or its Container)."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"unstable_getpublicdefaultaccess"},"unstable_getPublicDefaultAccess"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"unstable_getPublicDefaultAccess"),"(",Object(l.b)("inlineCode",{parentName:"p"},"aclDataset"),": ",Object(l.b)("a",Object(c.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_acldataset"}),"unstable_AclDataset"),"): ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(c.a)({parentName:"em"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_access"}),"unstable_Access"))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/inrupt/lit-pod/blob/fe50431/src/acl/class.ts#L104"}),"acl/class.ts:104"))),Object(l.b)("p",null,"Given an ACL LitDataset, find out which access modes it provides to everyone for the associated Container Resource's child Resources."),Object(l.b)("p",null,"Keep in mind that this function will not tell you:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"what access specific Agents have through other ACL rules, e.g. agent- or group-specific permissions."),Object(l.b)("li",{parentName:"ul"},"what access anyone has to the Container Resource itself (see ",Object(l.b)("a",Object(c.a)({parentName:"li"},{href:"/lit-pod/docs/api/modules/_acl_class_#unstable_getpublicresourceaccess"}),"unstable_getPublicResourceAccess")," for that).")),Object(l.b)("p",null,"Also, please note that this function is still experimental: its API can change in non-major releases."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"aclDataset")),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(c.a)({parentName:"td"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_acldataset"}),"unstable_AclDataset")),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The LitDataset that contains Access-Control List rules for a certain Container.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(c.a)({parentName:"em"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_access"}),"unstable_Access"))),Object(l.b)("p",null,"Which Access Modes have been granted to everyone for the children of the Container associated with the given ACL LitDataset."),Object(l.b)("hr",null),Object(l.b)("h3",{id:"unstable_getpublicresourceaccess"},"unstable_getPublicResourceAccess"),Object(l.b)("p",null,"\u25b8 ",Object(l.b)("strong",{parentName:"p"},"unstable_getPublicResourceAccess"),"(",Object(l.b)("inlineCode",{parentName:"p"},"aclDataset"),": ",Object(l.b)("a",Object(c.a)({parentName:"p"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_acldataset"}),"unstable_AclDataset"),"): ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(c.a)({parentName:"em"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_access"}),"unstable_Access"))),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Defined in ",Object(l.b)("a",Object(c.a)({parentName:"em"},{href:"https://github.com/inrupt/lit-pod/blob/fe50431/src/acl/class.ts#L76"}),"acl/class.ts:76"))),Object(l.b)("p",null,"Given an ACL LitDataset, find out which access modes it provides to everyone for its associated Resource."),Object(l.b)("p",null,"Keep in mind that this function will not tell you:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"what access specific Agents have through other ACL rules, e.g. agent- or group-specific permissions."),Object(l.b)("li",{parentName:"ul"},"what access anyone has to child Resources, in case the associated Resource is a Container (see [","[unstable_getDefaultResourceAccess]","] for that).")),Object(l.b)("p",null,"Also, please note that this function is still experimental: its API can change in non-major releases."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Parameters:")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(c.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"aclDataset")),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(c.a)({parentName:"td"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_acldataset"}),"unstable_AclDataset")),Object(l.b)("td",Object(c.a)({parentName:"tr"},{align:null}),"The LitDataset that contains Access-Control List rules.")))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Returns:")," ",Object(l.b)("em",{parentName:"p"},Object(l.b)("a",Object(c.a)({parentName:"em"},{href:"/lit-pod/docs/api/modules/_interfaces_#unstable_access"}),"unstable_Access"))),Object(l.b)("p",null,"Which Access Modes have been granted to everyone for the Resource the given ACL LitDataset is associated with."))}o.isMDXComponent=!0},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var c=a(0),n=a.n(c);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},l=Object.keys(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)a=l[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),o=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,l=e.originalType,s=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),u=o(a),d=c,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||l;return a?n.a.createElement(m,r(r({ref:t},i),{},{components:a})):n.a.createElement(m,r({ref:t},i))}));function m(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=a.length,s=new Array(l);s[0]=d;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:c,s[1]=r;for(var i=2;i<l;i++)s[i]=a[i];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);