"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7044],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return N}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,N=p["".concat(o,".").concat(d)]||p[d]||f[d]||s;return n?a.createElement(N,i(i({ref:t},c),{},{components:n})):a.createElement(N,i({ref:t},c))}));function N(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9636:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],l={title:"Quandary",description:'The Quandary taint analysis detects flows of values between sources and sinks, except if the value went through a "sanitizer". In addition to some defaults, users can specify their own sources, sinks, and sanitizers functions.'},o=void 0,u={unversionedId:"checker-quandary",id:"checker-quandary",title:"Quandary",description:'The Quandary taint analysis detects flows of values between sources and sinks, except if the value went through a "sanitizer". In addition to some defaults, users can specify their own sources, sinks, and sanitizers functions.',source:"@site/docs/checker-quandary.md",sourceDirName:".",slug:"/checker-quandary",permalink:"/docs/next/checker-quandary",draft:!1,tags:[],version:"current",frontMatter:{title:"Quandary",description:'The Quandary taint analysis detects flows of values between sources and sinks, except if the value went through a "sanitizer". In addition to some defaults, users can specify their own sources, sinks, and sanitizers functions.'},sidebar:"docs",previous:{title:"Purity",permalink:"/docs/next/checker-purity"},next:{title:"RacerD",permalink:"/docs/next/checker-racerd"}},c={},p=[{value:"List of Issue Types",id:"list-of-issue-types",level:2}],f={toc:p},d="wrapper";function N(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)(d,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'The Quandary taint analysis detects flows of values between sources and sinks, except if the value went through a "sanitizer". In addition to some defaults, users can specify their own sources, sinks, and sanitizers functions.'),(0,s.kt)("p",null,"Activate with ",(0,s.kt)("inlineCode",{parentName:"p"},"--quandary"),"."),(0,s.kt)("p",null,"Supported languages:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,s.kt)("li",{parentName:"ul"},"C#/.Net: No"),(0,s.kt)("li",{parentName:"ul"},"Erlang: No"),(0,s.kt)("li",{parentName:"ul"},"Hack: No"),(0,s.kt)("li",{parentName:"ul"},"Java: Yes"),(0,s.kt)("li",{parentName:"ul"},"Python: No")),(0,s.kt)("p",null,"Quandary is a static taint analyzer that identifies a variety of unsafe\ninformation flows. It has a small list of built-in\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/quandary/JavaTrace.ml#L36"},"sources"),"\nand\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/src/quandary/JavaTrace.ml#L178"},"sinks"),",\nand you can define custom sources and sinks in your ",(0,s.kt)("inlineCode",{parentName:"p"},".inferconfig")," file (see\nexample\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/facebook/infer/blob/main/infer/tests/codetoanalyze/java/quandary/.inferconfig"},"here"),")."),(0,s.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,s.kt)("p",null,"The following issue types are reported by this checker:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#create_intent_from_uri"},"CREATE_INTENT_FROM_URI")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#cross_site_scripting"},"CROSS_SITE_SCRIPTING")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#exposed_insecure_intent_handling"},"EXPOSED_INSECURE_INTENT_HANDLING")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#insecure_intent_handling"},"INSECURE_INTENT_HANDLING")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#javascript_injection"},"JAVASCRIPT_INJECTION")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#logging_private_data"},"LOGGING_PRIVATE_DATA")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#quandary_taint_error"},"QUANDARY_TAINT_ERROR")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#shell_injection"},"SHELL_INJECTION")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#shell_injection_risk"},"SHELL_INJECTION_RISK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#sql_injection"},"SQL_INJECTION")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#sql_injection_risk"},"SQL_INJECTION_RISK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_buffer_access"},"UNTRUSTED_BUFFER_ACCESS")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_deserialization"},"UNTRUSTED_DESERIALIZATION")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_deserialization_risk"},"UNTRUSTED_DESERIALIZATION_RISK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_environment_change_risk"},"UNTRUSTED_ENVIRONMENT_CHANGE_RISK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_file"},"UNTRUSTED_FILE")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_file_risk"},"UNTRUSTED_FILE_RISK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_heap_allocation"},"UNTRUSTED_HEAP_ALLOCATION")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_intent_creation"},"UNTRUSTED_INTENT_CREATION")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_url_risk"},"UNTRUSTED_URL_RISK")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#untrusted_variable_length_array"},"UNTRUSTED_VARIABLE_LENGTH_ARRAY")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#user_controlled_sql_risk"},"USER_CONTROLLED_SQL_RISK"))))}N.isMDXComponent=!0}}]);