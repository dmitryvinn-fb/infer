"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1264],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,v=p["".concat(c,".").concat(d)]||p[d]||f[d]||i;return n?r.createElement(v,s(s({ref:t},u),{},{components:n})):r.createElement(v,s({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7521:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),s=["components"],a={title:"Liveness",description:"Detection of dead stores and unused variables."},c=void 0,l={unversionedId:"checker-liveness",id:"version-1.1.0/checker-liveness",title:"Liveness",description:"Detection of dead stores and unused variables.",source:"@site/versioned_docs/version-1.1.0/checker-liveness.md",sourceDirName:".",slug:"/checker-liveness",permalink:"/docs/checker-liveness",draft:!1,tags:[],version:"1.1.0",frontMatter:{title:"Liveness",description:"Detection of dead stores and unused variables."},sidebar:"version-1.1.0/docs",previous:{title:'Litho "Required Props"',permalink:"/docs/checker-litho-required-props"},next:{title:"Loop Hoisting",permalink:"/docs/checker-loop-hoisting"}},u={},p=[{value:"List of Issue Types",id:"list-of-issue-types",level:2}],f={toc:p},d="wrapper";function v(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)(d,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Detection of dead stores and unused variables."),(0,i.kt)("p",null,"Activate with ",(0,i.kt)("inlineCode",{parentName:"p"},"--liveness"),"."),(0,i.kt)("p",null,"Supported languages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,i.kt)("li",{parentName:"ul"},"Java: No"),(0,i.kt)("li",{parentName:"ul"},"C#/.Net: No")),(0,i.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,i.kt)("p",null,"The following issue types are reported by this checker:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/all-issue-types#dead_store"},"DEAD_STORE"))))}v.isMDXComponent=!0}}]);