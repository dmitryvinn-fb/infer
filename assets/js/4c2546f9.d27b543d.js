"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7328],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return d}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=t.createContext({}),f=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=f(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=f(r),m=o,d=p["".concat(u,".").concat(m)]||p[m]||s[m]||i;return r?t.createElement(d,c(c({ref:n},l),{},{components:r})):t.createElement(d,c({ref:n},l))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=m;var a={};for(var u in n)hasOwnProperty.call(n,u)&&(a[u]=n[u]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var f=2;f<i;f++)c[f]=r[f];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2460:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(7294);function o(e){var n=e.url,r=(0,t.useState)({__html:""}),o=r[0],i=r[1];return(0,t.useEffect)((function(){fetch(n).then((function(e){return e.text()})).then((function(e){return i({__html:e})}))}),[n]),t.createElement("div",{dangerouslySetInnerHTML:o})}},7667:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return s}});var t=r(7462),o=r(3366),i=(r(7294),r(3905)),c=r(2460),a=["components"],u={id:"man-infer-explore",title:"infer explore"},f=void 0,l={unversionedId:"man-infer-explore",id:"man-infer-explore",title:"infer explore",description:"",source:"@site/docs/man-infer-explore.md",sourceDirName:".",slug:"/man-infer-explore",permalink:"/docs/next/man-infer-explore",draft:!1,tags:[],version:"current",frontMatter:{id:"man-infer-explore",title:"infer explore"},sidebar:"docs",previous:{title:"infer debug",permalink:"/docs/next/man-infer-debug"},next:{title:"infer help",permalink:"/docs/next/man-infer-help"}},p={},s=[],m={toc:s},d="wrapper";function y(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(d,(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{url:"/man/next/infer-explore.1.html",mdxType:"HtmlWrap"}))}y.isMDXComponent=!0}}]);