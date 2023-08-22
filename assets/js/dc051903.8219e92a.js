"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8120],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),h=r,N=p["".concat(s,".").concat(h)]||p[h]||d[h]||l;return a?n.createElement(N,i(i({ref:t},u),{},{components:a})):n.createElement(N,i({ref:t},u))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},9879:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return N},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={title:"Eradicate",description:"The eradicate `@Nullable` checker for Java annotations."},s=void 0,c={unversionedId:"checker-eradicate",id:"checker-eradicate",title:"Eradicate",description:"The eradicate `@Nullable` checker for Java annotations.",source:"@site/docs/checker-eradicate.md",sourceDirName:".",slug:"/checker-eradicate",permalink:"/docs/next/checker-eradicate",draft:!1,tags:[],version:"current",frontMatter:{title:"Eradicate",description:"The eradicate `@Nullable` checker for Java annotations."},sidebar:"docs",previous:{title:"Datalog-based points-to analysis",permalink:"/docs/next/checker-datalog"},next:{title:"Fragment Retains View",permalink:"/docs/next/checker-fragment-retains-view"}},u={},p=[{value:"What is Infer:Eradicate?",id:"what-is-infereradicate",level:3},{value:"What is the @Nullable convention?",id:"what-is-the-nullable-convention",level:3},{value:"What is annotated?",id:"what-is-annotated",level:3},{value:"How is Infer:Eradicate invoked?",id:"how-is-infereradicate-invoked",level:3},{value:"List of Issue Types",id:"list-of-issue-types",level:2}],d={toc:p},h="wrapper";function N(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The eradicate ",(0,l.kt)("inlineCode",{parentName:"p"},"@Nullable")," checker for Java annotations."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"*","*","*","DEPRECATED","*","*","*")," Unmaintained and will be removed in the future. Consider using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/uber/NullAway"},"NullAway")," as an alternative to Eradicate."),(0,l.kt)("p",null,"Activate with ",(0,l.kt)("inlineCode",{parentName:"p"},"--eradicate"),"."),(0,l.kt)("p",null,"Supported languages:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"C/C++/ObjC: No"),(0,l.kt)("li",{parentName:"ul"},"C#/.Net: No"),(0,l.kt)("li",{parentName:"ul"},"Erlang: No"),(0,l.kt)("li",{parentName:"ul"},"Hack: No"),(0,l.kt)("li",{parentName:"ul"},"Java: Yes"),(0,l.kt)("li",{parentName:"ul"},"Python: No")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'"I call it my billion-dollar mistake. It was the invention of the null\nreference in 1965."'),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Tony_Hoare"},"Tony Hoare"))),(0,l.kt)("h3",{id:"what-is-infereradicate"},"What is Infer:Eradicate?"),(0,l.kt)("p",null,"Infer:Eradicate is a type checker for ",(0,l.kt)("inlineCode",{parentName:"p"},"@Nullable")," annotations for Java. It is part\nof the Infer static analysis suite of tools. The goal is to eradicate null\npointer exceptions."),(0,l.kt)("a",{href:"https://developer.android.com/reference/android/support/annotation/Nullable.html"},"@Nullable"),"annotations denote that a parameter, field or the return value of a method can be null. When decorating a parameter, this denotes that the parameter can legitimately be null and the method will need to deal with it. When decorating a method, this denotes the method might legitimately return null.",(0,l.kt)("p",null,"Starting from @Nullable-annotated programs, the checker performs a flow\nsensitive analysis to propagate the nullability through assignments and calls,\nand flags errors for unprotected accesses to nullable values or\ninconsistent/missing annotations. It can also be used to add annotations to a\npreviously un-annotated program."),(0,l.kt)("h3",{id:"what-is-the-nullable-convention"},"What is the @Nullable convention?"),(0,l.kt)("p",null,"If you say nothing, you're saying that the value cannot be null. This is the\nrecommended option when possible:"),(0,l.kt)("p",null,"Program safely, annotate nothing!"),(0,l.kt)("p",null,"When this cannot be done, add a @Nullable annotation before the type to indicate\nthat the value can be null."),(0,l.kt)("h3",{id:"what-is-annotated"},"What is annotated?"),(0,l.kt)("p",null,"Annotations are placed at the interface of method calls and field accesses:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Parameters and return type of a method declaration."),(0,l.kt)("li",{parentName:"ul"},"Field declarations.")),(0,l.kt)("p",null,"Local variable declarations are not annotated: their nullability is inferred."),(0,l.kt)("h3",{id:"how-is-infereradicate-invoked"},"How is Infer:Eradicate invoked?"),(0,l.kt)("p",null,"Eradicate can be invoked by adding the option ",(0,l.kt)("inlineCode",{parentName:"p"},"--eradicate")," to the checkers mode\nas in this example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"infer run -a checkers --eradicate -- javac Test.java\n")),(0,l.kt)("p",null,"The checker will report an error on the following program that accesses a\nnullable value without null check:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class C {\n  int getLength(@Nullable String s) {\n    return s.length();\n  }\n}\n")),(0,l.kt)("p",null,"But it will not report an error on this guarded dereference:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"class C {\n  int getLength(@Nullable String s) {\n    if (s != null) {\n      return s.length();\n    } else {\n      return -1;\n    }\n  }\n}\n")),(0,l.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,l.kt)("p",null,"The following issue types are reported by this checker:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_annotation_graph"},"ERADICATE_ANNOTATION_GRAPH")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_bad_nested_class_annotation"},"ERADICATE_BAD_NESTED_CLASS_ANNOTATION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_condition_redundant"},"ERADICATE_CONDITION_REDUNDANT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_field_not_initialized"},"ERADICATE_FIELD_NOT_INITIALIZED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_field_not_nullable"},"ERADICATE_FIELD_NOT_NULLABLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_field_over_annotated"},"ERADICATE_FIELD_OVER_ANNOTATED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_inconsistent_subclass_parameter_annotation"},"ERADICATE_INCONSISTENT_SUBCLASS_PARAMETER_ANNOTATION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_inconsistent_subclass_return_annotation"},"ERADICATE_INCONSISTENT_SUBCLASS_RETURN_ANNOTATION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_meta_class_can_be_nullsafe"},"ERADICATE_META_CLASS_CAN_BE_NULLSAFE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_meta_class_is_nullsafe"},"ERADICATE_META_CLASS_IS_NULLSAFE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_meta_class_needs_improvement"},"ERADICATE_META_CLASS_NEEDS_IMPROVEMENT")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_nullable_dereference"},"ERADICATE_NULLABLE_DEREFERENCE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_parameter_not_nullable"},"ERADICATE_PARAMETER_NOT_NULLABLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_redundant_nested_class_annotation"},"ERADICATE_REDUNDANT_NESTED_CLASS_ANNOTATION")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_return_not_nullable"},"ERADICATE_RETURN_NOT_NULLABLE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_return_over_annotated"},"ERADICATE_RETURN_OVER_ANNOTATED")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_unchecked_usage_in_nullsafe"},"ERADICATE_UNCHECKED_USAGE_IN_NULLSAFE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#eradicate_unvetted_third_party_in_nullsafe"},"ERADICATE_UNVETTED_THIRD_PARTY_IN_NULLSAFE"))))}N.isMDXComponent=!0}}]);