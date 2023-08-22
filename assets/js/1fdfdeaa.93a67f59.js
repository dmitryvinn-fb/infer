"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8309],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2401:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Biabduction",description:"This analysis deals with a range of issues, many linked to memory safety."},s=void 0,c={unversionedId:"checker-biabduction",id:"checker-biabduction",title:"Biabduction",description:"This analysis deals with a range of issues, many linked to memory safety.",source:"@site/docs/checker-biabduction.md",sourceDirName:".",slug:"/checker-biabduction",permalink:"/docs/next/checker-biabduction",draft:!1,tags:[],version:"current",frontMatter:{title:"Biabduction",description:"This analysis deals with a range of issues, many linked to memory safety."},sidebar:"docs",previous:{title:"Annotation Reachability",permalink:"/docs/next/checker-annotation-reachability"},next:{title:"Buffer Overrun Analysis (InferBO)",permalink:"/docs/next/checker-bufferoverrun"}},u={},p=[{value:"List of Issue Types",id:"list-of-issue-types",level:2}],f={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This analysis deals with a range of issues, many linked to memory safety."),(0,i.kt)("p",null,"Activate with ",(0,i.kt)("inlineCode",{parentName:"p"},"--biabduction"),"."),(0,i.kt)("p",null,"Supported languages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,i.kt)("li",{parentName:"ul"},"C#/.Net: Yes"),(0,i.kt)("li",{parentName:"ul"},"Erlang: No"),(0,i.kt)("li",{parentName:"ul"},"Hack: No"),(0,i.kt)("li",{parentName:"ul"},"Java: Yes"),(0,i.kt)("li",{parentName:"ul"},"Python: No")),(0,i.kt)("p",null,"Read more about its foundations in the ",(0,i.kt)("a",{parentName:"p",href:"separation-logic-and-bi-abduction"},"Separation Logic and Biabduction page"),"."),(0,i.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,i.kt)("p",null,"The following issue types are reported by this checker:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#biabduction_memory_leak"},"BIABDUCTION_MEMORY_LEAK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#biabduction_retain_cycle"},"BIABDUCTION_RETAIN_CYCLE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#dangling_pointer_dereference"},"DANGLING_POINTER_DEREFERENCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#divide_by_zero"},"DIVIDE_BY_ZERO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#empty_vector_access"},"EMPTY_VECTOR_ACCESS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#null_dereference"},"NULL_DEREFERENCE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#premature_nil_termination_argument"},"PREMATURE_NIL_TERMINATION_ARGUMENT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#resource_leak"},"RESOURCE_LEAK"))))}d.isMDXComponent=!0}}]);