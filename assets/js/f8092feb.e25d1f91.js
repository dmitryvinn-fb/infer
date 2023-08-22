"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2863],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,b=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9716:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Immutable Cast",description:"Detection of object cast from immutable types to mutable types. For instance, it will detect casts from `ImmutableList` to `List`, `ImmutableMap` to `Map`, and `ImmutableSet` to `Set`."},c=void 0,s={unversionedId:"checker-immutable-cast",id:"version-1.1.0/checker-immutable-cast",title:"Immutable Cast",description:"Detection of object cast from immutable types to mutable types. For instance, it will detect casts from `ImmutableList` to `List`, `ImmutableMap` to `Map`, and `ImmutableSet` to `Set`.",source:"@site/versioned_docs/version-1.1.0/checker-immutable-cast.md",sourceDirName:".",slug:"/checker-immutable-cast",permalink:"/docs/checker-immutable-cast",draft:!1,tags:[],version:"1.1.0",frontMatter:{title:"Immutable Cast",description:"Detection of object cast from immutable types to mutable types. For instance, it will detect casts from `ImmutableList` to `List`, `ImmutableMap` to `Map`, and `ImmutableSet` to `Set`."},sidebar:"version-1.1.0/docs",previous:{title:"Fragment Retains View",permalink:"/docs/checker-fragment-retains-view"},next:{title:"Impurity",permalink:"/docs/checker-impurity"}},u={},m=[{value:"List of Issue Types",id:"list-of-issue-types",level:2}],p={toc:m},f="wrapper";function b(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Detection of object cast from immutable types to mutable types. For instance, it will detect casts from ",(0,o.kt)("inlineCode",{parentName:"p"},"ImmutableList")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"List"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ImmutableMap")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"ImmutableSet")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Set"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"*","*","*","DEPRECATED","*","*","*")," Unmaintained due to poor actionability of the reports."),(0,o.kt)("p",null,"Activate with ",(0,o.kt)("inlineCode",{parentName:"p"},"--immutable-cast"),"."),(0,o.kt)("p",null,"Supported languages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"C/C++/ObjC: No"),(0,o.kt)("li",{parentName:"ul"},"Java: Yes"),(0,o.kt)("li",{parentName:"ul"},"C#/.Net: Yes")),(0,o.kt)("p",null,"Casts flagged by this checker are unsafe because calling mutation operations on the cast objects will fail at runtime."),(0,o.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,o.kt)("p",null,"The following issue types are reported by this checker:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/all-issue-types#checkers_immutable_cast"},"CHECKERS_IMMUTABLE_CAST"))))}b.isMDXComponent=!0}}]);