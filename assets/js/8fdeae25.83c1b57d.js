"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3309],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),N=l,m=c["".concat(o,".").concat(N)]||c[N]||_[N]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=N;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},4999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),s=["components"],i={title:"Pulse",description:"Memory and lifetime analysis."},o=void 0,p={unversionedId:"checker-pulse",id:"checker-pulse",title:"Pulse",description:"Memory and lifetime analysis.",source:"@site/docs/checker-pulse.md",sourceDirName:".",slug:"/checker-pulse",permalink:"/docs/next/checker-pulse",draft:!1,tags:[],version:"current",frontMatter:{title:"Pulse",description:"Memory and lifetime analysis."},sidebar:"docs",previous:{title:"`printf()` Argument Types",permalink:"/docs/next/checker-printf-args"},next:{title:"Purity",permalink:"/docs/next/checker-purity"}},u={},c=[{value:"What is Infer:Pulse?",id:"what-is-inferpulse",level:2},{value:"Latent Issues",id:"latent-issues",level:2},{value:"Unknown Functions",id:"unknown-functions",level:2},{value:"Pulse x Nullsafe",id:"pulse-x-nullsafe",level:2},{value:"List of Issue Types",id:"list-of-issue-types",level:2}],_={toc:c},N="wrapper";function m(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)(N,(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Memory and lifetime analysis."),(0,r.kt)("p",null,"Activate with ",(0,r.kt)("inlineCode",{parentName:"p"},"--pulse"),"."),(0,r.kt)("p",null,"Supported languages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"C/C++/ObjC: Yes"),(0,r.kt)("li",{parentName:"ul"},"C#/.Net: No"),(0,r.kt)("li",{parentName:"ul"},"Erlang: Experimental"),(0,r.kt)("li",{parentName:"ul"},"Hack: No"),(0,r.kt)("li",{parentName:"ul"},"Java: Yes"),(0,r.kt)("li",{parentName:"ul"},"Python: No")),(0,r.kt)("h2",{id:"what-is-inferpulse"},"What is Infer:Pulse?"),(0,r.kt)("p",null,"Pulse is an interprocedural memory safety analysis. Pulse can detect, for instance, ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/all-issue-types#nullptr_dereference"},"Null dereferences")," in Java. Errors are only reported when all conditions on the erroneous path are true regardless of input. Pulse should gradually replace the original ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/checker-biabduction"},"biabduction")," analysis of Infer. An example of a Null dereference found by Pulse is given below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class Person {\n    Person emergencyContact;\n    String address;\n\n    Person getEmergencyContact() {\n        return this.emergencyContact;\n    }\n}\n\nclass Registry {\n    void create() {\n        Person p = new Person();\n        Person c = p.getEmergencyContact();\n        // Null dereference here\n        System.out.println(c.address);\n    }\n\n    void printContact(Person p) {\n        // No null dereference, as we don't know anything about `p`\n        System.out.println(p.getEmergencyContact().address);\n    }\n}\n")),(0,r.kt)("p",null,"How to run pulse for Java:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"infer run --pulse -- javac Test.java\n")),(0,r.kt)("p",null,"Pulse reports a Null dereference on this file on ",(0,r.kt)("inlineCode",{parentName:"p"},"create()"),", as it tries to access the field ",(0,r.kt)("inlineCode",{parentName:"p"},"address")," of object ",(0,r.kt)("inlineCode",{parentName:"p"},"c"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"c")," has value ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". In contrast, Pulse gives no report for ",(0,r.kt)("inlineCode",{parentName:"p"},"printContact(Person p)"),", as we cannot be sure that ",(0,r.kt)("inlineCode",{parentName:"p"},"p.getEmergencyContact()")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". But, thanks to the fact that the analysis is ",(0,r.kt)("em",{parentName:"p"},"inter-procedural"),", Pulse will report a Null dereference on calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"printContact(p)")," when it detects that ",(0,r.kt)("inlineCode",{parentName:"p"},"p")," is null."),(0,r.kt)("h2",{id:"latent-issues"},"Latent Issues"),(0,r.kt)("p",null,"When an error can occur only on some values of the parameters of the current function, Pulse does not report an issue. Such issues are called ",(0,r.kt)("em",{parentName:"p"},"latent"),". But, if Pulse then sees a call site at which all the conditions for the error are satisfied then the error becomes ",(0,r.kt)("em",{parentName:"p"},"manifest")," and is reported. This example (in C) illustrates how latent issues are created and then reported when they become manifest:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// for more realism, imagine that this function does other things as well\nvoid set_to_null_if_positive(int n, int* p) {\n  if (n > 0) {\n    p = NULL;\n  }\n}\n\nvoid latent_null_dereference(int n, int* p) {\n  set_to_null_if_positive(n, p);\n  *p = 42; // NULL dereference! but only if n > 0 so no report yet\n}\n\nvoid manifest_error(int *p) {\n  // no way to avoid the bug here => Pulse reports an error\n  latent_null_dereference(1, p);\n}\n")),(0,r.kt)("h2",{id:"unknown-functions"},"Unknown Functions"),(0,r.kt)("p",null,"In order to avoid false positives, Pulse makes optimistic assumptions about calls to unknown functions. Unknown functions (or unknown methods) are functions for which Infer didn't find any code. For example, it could be because the function belongs to a third-party library and we know only its signature, or because a function is made through a function pointer that Pulse wasn't able to resolve to a concrete function. In either case, Pulse will scramble the parts of the state reachable from the parameters of the call. In general, this helps avoid false positives but note that this may cause false negatives as well as false positives:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"void unknown(int* p); // third-party code that does [*p = 5]\n                      // Infer doesn't have access to that code\n\nvoid false_negative() {\n  int* x = (int*) malloc(sizeof(int));\n  if (x) {\n    // unknown call to x makes Pulse forget that x was allocated, in case it frees x\n    unknown(x); \n  }\n} // no memory leak reported: false negative!\n\nvoid false_positive(int *x) {\n  unknown(x); // this sets *x to 5\n  if (x != 5) {\n    // unreachable\n    int* p = NULL;\n    *p = 42; // false positive reported here\n  }\n}\n")),(0,r.kt)("p",null,"You can check if a given function called any unknown functions by inspecting its Pulse summary. For example, for the code above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"$ infer --pulse-only -- clang -c unknown_code.c\n  No issues found\n$ infer debug --procedures --procedures-filter 'false_negative' --procedures-summary\n...\n    skipped_calls={ unknown -> call to skipped function occurs here }\n")),(0,r.kt)("h2",{id:"pulse-x-nullsafe"},"Pulse x Nullsafe"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/next/checker-eradicate"},"Nullsafe")," is a type checker for ",(0,r.kt)("inlineCode",{parentName:"p"},"@Nullable")," annotations for Java. Classes following the Nullsafe discipline are annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Nullsafe"),"."),(0,r.kt)("p",null,"Consider the classes ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Registry")," from the previous example. Assuming that class ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," is annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Nullsafe"),". In this case, we also annotate ",(0,r.kt)("inlineCode",{parentName:"p"},"getEmergencyContact()")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Nullable"),", to make explicit that this method can return the ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value. There is still the risk that classes depending on ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," have Null dereferences. In this case, Pulse would report a Null dereference on ",(0,r.kt)("inlineCode",{parentName:"p"},"Registry"),". It could also be the case that class ",(0,r.kt)("inlineCode",{parentName:"p"},"Registry")," is annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@Nullsafe"),". By default Pulse reports on ",(0,r.kt)("inlineCode",{parentName:"p"},"@Nullsafe")," files too, see the ",(0,r.kt)("inlineCode",{parentName:"p"},"--pulse-nullsafe-report-npe")," option (Facebook-specific: Pulse does not report on ",(0,r.kt)("inlineCode",{parentName:"p"},"@Nullsafe")," files)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Nullsafe(Nullsafe.Mode.LOCAL)\nclass Person {\n    Person emergencyContact;\n    String address;\n\n    @Nullable Person getEmergencyContact() {\n        return this.emergencyContact;\n    }\n}\n\nclass Registry {\n    ... // Pulse reports here\n}\n")),(0,r.kt)("h2",{id:"list-of-issue-types"},"List of Issue Types"),(0,r.kt)("p",null,"The following issue types are reported by this checker:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_arg"},"BAD_ARG")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_arg_latent"},"BAD_ARG_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_key"},"BAD_KEY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_key_latent"},"BAD_KEY_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_map"},"BAD_MAP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_map_latent"},"BAD_MAP_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_record"},"BAD_RECORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_record_latent"},"BAD_RECORD_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_return"},"BAD_RETURN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#bad_return_latent"},"BAD_RETURN_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#config_usage"},"CONFIG_USAGE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#constant_address_dereference"},"CONSTANT_ADDRESS_DEREFERENCE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#constant_address_dereference_latent"},"CONSTANT_ADDRESS_DEREFERENCE_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#data_flow_to_sink"},"DATA_FLOW_TO_SINK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#memory_leak_c"},"MEMORY_LEAK_C")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#memory_leak_cpp"},"MEMORY_LEAK_CPP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#nil_block_call"},"NIL_BLOCK_CALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#nil_block_call_latent"},"NIL_BLOCK_CALL_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#nil_insertion_into_collection"},"NIL_INSERTION_INTO_COLLECTION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#nil_insertion_into_collection_latent"},"NIL_INSERTION_INTO_COLLECTION_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#nil_messaging_to_non_pod"},"NIL_MESSAGING_TO_NON_POD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#nil_messaging_to_non_pod_latent"},"NIL_MESSAGING_TO_NON_POD_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_matching_branch_in_try"},"NO_MATCHING_BRANCH_IN_TRY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_matching_branch_in_try_latent"},"NO_MATCHING_BRANCH_IN_TRY_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_matching_case_clause"},"NO_MATCHING_CASE_CLAUSE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_matching_case_clause_latent"},"NO_MATCHING_CASE_CLAUSE_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_matching_function_clause"},"NO_MATCHING_FUNCTION_CLAUSE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_matching_function_clause_latent"},"NO_MATCHING_FUNCTION_CLAUSE_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_match_of_rhs"},"NO_MATCH_OF_RHS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_match_of_rhs_latent"},"NO_MATCH_OF_RHS_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_true_branch_in_if"},"NO_TRUE_BRANCH_IN_IF")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#no_true_branch_in_if_latent"},"NO_TRUE_BRANCH_IN_IF_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#nullptr_dereference"},"NULLPTR_DEREFERENCE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#nullptr_dereference_latent"},"NULLPTR_DEREFERENCE_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#null_argument"},"NULL_ARGUMENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#null_argument_latent"},"NULL_ARGUMENT_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#optional_empty_access"},"OPTIONAL_EMPTY_ACCESS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#optional_empty_access_latent"},"OPTIONAL_EMPTY_ACCESS_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_const_refable"},"PULSE_CONST_REFABLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_readonly_shared_ptr_param"},"PULSE_READONLY_SHARED_PTR_PARAM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_resource_leak"},"PULSE_RESOURCE_LEAK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_uninitialized_value"},"PULSE_UNINITIALIZED_VALUE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_uninitialized_value_latent"},"PULSE_UNINITIALIZED_VALUE_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy"},"PULSE_UNNECESSARY_COPY")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy_assignment"},"PULSE_UNNECESSARY_COPY_ASSIGNMENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy_assignment_const"},"PULSE_UNNECESSARY_COPY_ASSIGNMENT_CONST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy_assignment_movable"},"PULSE_UNNECESSARY_COPY_ASSIGNMENT_MOVABLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy_intermediate"},"PULSE_UNNECESSARY_COPY_INTERMEDIATE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy_intermediate_const"},"PULSE_UNNECESSARY_COPY_INTERMEDIATE_CONST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy_movable"},"PULSE_UNNECESSARY_COPY_MOVABLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy_optional"},"PULSE_UNNECESSARY_COPY_OPTIONAL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy_optional_const"},"PULSE_UNNECESSARY_COPY_OPTIONAL_CONST")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#pulse_unnecessary_copy_return"},"PULSE_UNNECESSARY_COPY_RETURN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#retain_cycle"},"RETAIN_CYCLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#sensitive_data_flow"},"SENSITIVE_DATA_FLOW")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#stack_variable_address_escape"},"STACK_VARIABLE_ADDRESS_ESCAPE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#taint_error"},"TAINT_ERROR")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#use_after_delete"},"USE_AFTER_DELETE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#use_after_delete_latent"},"USE_AFTER_DELETE_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#use_after_free"},"USE_AFTER_FREE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#use_after_free_latent"},"USE_AFTER_FREE_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#use_after_lifetime"},"USE_AFTER_LIFETIME")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#use_after_lifetime_latent"},"USE_AFTER_LIFETIME_LATENT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#vector_invalidation"},"VECTOR_INVALIDATION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/next/all-issue-types#vector_invalidation_latent"},"VECTOR_INVALIDATION_LATENT"))))}m.isMDXComponent=!0}}]);