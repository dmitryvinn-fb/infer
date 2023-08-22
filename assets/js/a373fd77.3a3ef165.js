"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8096],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return k}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),y=i,k=f["".concat(l,".").concat(y)]||f[y]||p[y]||o;return r?n.createElement(k,a(a({ref:t},s),{},{components:r})):n.createElement(k,a({ref:t},s))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},2102:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],c={title:"Inefficient keySet Iterator",description:"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly."},l=void 0,u={unversionedId:"checker-inefficient-keyset-iterator",id:"checker-inefficient-keyset-iterator",title:"Inefficient keySet Iterator",description:"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly.",source:"@site/docs/checker-inefficient-keyset-iterator.md",sourceDirName:".",slug:"/checker-inefficient-keyset-iterator",permalink:"/docs/next/checker-inefficient-keyset-iterator",draft:!1,tags:[],version:"current",frontMatter:{title:"Inefficient keySet Iterator",description:"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly."},sidebar:"docs",previous:{title:"Impurity",permalink:"/docs/next/checker-impurity"},next:{title:'Litho "Required Props"',permalink:"/docs/next/checker-litho-required-props"}},s={},f=[{value:"List of Issue Types",id:"list-of-issue-types",level:2}],p={toc:f},y="wrapper";function k(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(y,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Check for inefficient uses of iterators that iterate on keys then lookup their values, instead of iterating on key-value pairs directly."),(0,o.kt)("p",null,"Activate with ",(0,o.kt)("inlineCode",{parentName:"p"},"--inefficient-keyset-iterator"),"."),(0,o.kt)("p",null,"Supported languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C/C++/ObjC: No"),(0,o.kt)("li",{parentName:"ul"},"C#/.Net: No"),(0,o.kt)("li",{parentName:"ul"},"Erlang: No"),(0,o.kt)("li",{parentName:"ul"},"Hack: No"),(0,o.kt)("li",{parentName:"ul"},"Java: Yes"),(0,o.kt)("li",{parentName:"ul"},"Python: No")),(0,o.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,o.kt)("p",null,"The following issue types are reported by this checker:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#inefficient_keyset_iterator"},"INEFFICIENT_KEYSET_ITERATOR"))))}k.isMDXComponent=!0}}]);