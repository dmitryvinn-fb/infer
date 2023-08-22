"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4166],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),m=o,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4895:function(e,t,a){a.r(t),a.d(t,{Math:function(){return h},assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return d}});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),i=["components"],c={id:"separation-logic-and-bi-abduction",title:"Separation logic and bi-abduction"},l=void 0,s={unversionedId:"separation-logic-and-bi-abduction",id:"version-1.1.0/separation-logic-and-bi-abduction",title:"Separation logic and bi-abduction",description:"- Separation logic",source:"@site/versioned_docs/version-1.1.0/02-separation-logic-and-biabduction.md",sourceDirName:".",slug:"/separation-logic-and-bi-abduction",permalink:"/docs/separation-logic-and-bi-abduction",draft:!1,tags:[],version:"1.1.0",sidebarPosition:2,frontMatter:{id:"separation-logic-and-bi-abduction",title:"Separation logic and bi-abduction"},sidebar:"version-1.1.0/docs",previous:{title:"About Infer",permalink:"/docs/about-Infer"},next:{title:"Building checkers with the Infer.AI framework",permalink:"/docs/absint-framework"}},p={},d=[{value:"Separation logic",id:"separation-logic",level:2},{value:"Bi-abduction",id:"bi-abduction",level:2},{value:"Technical papers",id:"technical-papers",level:2}],h=function(e){var t=e.code;return(0,r.kt)("img",{src:"https://math.now.sh?from="+encodeURIComponent(t)+"&color=mediumslateblue",style:{height:"100%",verticalAlign:"middle"}})},m={toc:d,Math:h},u="wrapper";function f(e){var t=e.components,c=(0,o.Z)(e,i);return(0,r.kt)(u,(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"separation-logic-and-bi-abduction#separation-logic"},"Separation logic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"separation-logic-and-bi-abduction#bi-abduction"},"Bi-abduction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"separation-logic-and-bi-abduction#technical-papers"},"Technical papers"))),(0,r.kt)("h2",{id:"separation-logic"},"Separation logic"),(0,r.kt)("p",null,"Separation logic is a novel kind of mathematical logic which facilitates\nreasoning about mutations to computer memory. It enables scalability by breaking\nreasoning into chunks corresponding to local operations on memory, and then\ncomposing the reasoning chunks together."),(0,r.kt)("p",null,"Separation logic is based on a logical connective ",(0,r.kt)(h,{code:"\\\\( * \\\\)",mdxType:"Math"}),"\ncalled the ",(0,r.kt)("em",{parentName:"p"},"separating conjunction"),' and pronounced "and separately". Separation\nlogic formulae are interpreted over program allocated heaps. The logical formula'),(0,r.kt)(h,{code:"\\\\( A*B \\\\)",mdxType:"Math"})," holds of a piece of program heap (a heaplet) when it can be divided into two sub-heaplets described by ",(0,r.kt)(h,{code:"\\\\(A\\\\)",mdxType:"Math"})," and",(0,r.kt)(h,{code:"\\\\(B\\\\)",mdxType:"Math"}),". For example, the formula",(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\(x \\mapsto y * y \\mapsto x \\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,'can be read "',(0,r.kt)(h,{code:"\\\\(x\\\\)",mdxType:"Math"})," points to ",(0,r.kt)(h,{code:"\\\\(y\\\\)",mdxType:"Math"})," and\nseparately ",(0,r.kt)(h,{code:"\\\\(y\\\\)",mdxType:"Math"})," points to ",(0,r.kt)(h,{code:"\\\\(x\\\\)",mdxType:"Math"}),'". This\nformula describes precisely two allocated memory cells. The first cell is\nallocated at the address denoted by the pointer ',(0,r.kt)(h,{code:"\\\\(x\\\\)",mdxType:"Math"})," and the\ncontent of this cell is the value of ",(0,r.kt)(h,{code:"\\\\(y\\\\)",mdxType:"Math"}),". The second cell is\nallocated at the address denoted by the pointer ",(0,r.kt)(h,{code:"\\\\(y\\\\)",mdxType:"Math"})," and the\ncontent of this second cell is the value of ",(0,r.kt)(h,{code:"\\\\(x\\\\)",mdxType:"Math"}),". Crucially,\nwe know that there are precisely two cells because ",(0,r.kt)(h,{code:"\\\\( * \\\\)",mdxType:"Math"}),"\nstipulates that they are separated and therefore the cells are allocated in two\ndifferent parts of memory. In other words, ",(0,r.kt)(h,{code:"\\\\( * \\\\)",mdxType:"Math"})," says that"),(0,r.kt)(h,{code:"\\\\(x\\\\)",mdxType:"Math"})," and ",(0,r.kt)(h,{code:"\\\\(y\\\\)",mdxType:"Math"})," do not hold the same value (i.e., these pointers are not aliased). The heaplet partitioning defined by the formula above can be visualized like so:",(0,r.kt)("p",null,(0,r.kt)("img",{src:a(5666).Z,width:"473",height:"129"})),(0,r.kt)("p",null,"The important thing about separating conjunction is the way that it fits\ntogether with mutation to computer memory; reasoning about program commands\ntends to work by updating ",(0,r.kt)(h,{code:"\\\\(*\\\\)",mdxType:"Math"}),"-conjuncts in-place, mimicking\nthe operational in-place update of RAM."),(0,r.kt)("p",null,"Separation logic uses Hoare triples of the form"),(0,r.kt)(h,{code:"\\\\( \\lbrace pre \\rbrace prog \\lbrace post \\rbrace \\\\)",mdxType:"Math"})," where",(0,r.kt)(h,{code:"\\\\(pre\\\\)",mdxType:"Math"})," is the precondition, ",(0,r.kt)(h,{code:"\\\\(prog\\\\)",mdxType:"Math"})," a program part, and ",(0,r.kt)(h,{code:"\\\\(post\\\\)",mdxType:"Math"})," the postcondition. Triples are abstract specifications of the behavior of the program. For example, we could take",(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\( \\lbrace r \\mapsto open\\rbrace \\, closeResource(r)\\, \\lbrace r \\mapsto closed\\rbrace  \\;\\;\\; (spec)\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"as a specification for a method which closes a resource given to it as a\nparameter."),(0,r.kt)("p",null,"Now, suppose we have two resources ",(0,r.kt)(h,{code:"\\\\( r\\_1 \\\\)",mdxType:"Math"})," and"),(0,r.kt)(h,{code:"\\\\( r\\_2 \\\\)",mdxType:"Math"}),", described by",(0,r.kt)(h,{code:"\\\\(r\\_1 \\mapsto open * r\\_2 \\mapsto open\\\\)",mdxType:"Math"})," and we close the first of them. We think operationally in terms of updating the memory in place, leaving ",(0,r.kt)(h,{code:"\\\\(r\\_2 \\mapsto open\\\\)",mdxType:"Math"})," alone, as described by this triple:",(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\( \\lbrace r\\_1 \\mapsto open * r\\_2 \\mapsto open\\rbrace  closeResource(r\\_1) \\lbrace r\\_1 \\mapsto closed * r\\_2 \\mapsto open \\rbrace \\;\\;\\; (use)\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"What we have here is the that specification (spec) described how"),(0,r.kt)(h,{code:"\\\\(closeResource()\\\\)",mdxType:"Math"})," works by mentioning only one piece of state, what is sometimes called a small specification, and in (use) we use that specification to update a larger precondition in place.",(0,r.kt)("p",null,"This is an instance of a general pattern. There is a rule that lets you go from\nsmaller to bigger specifications"),(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\( \\frac{\\lbrace pre \\rbrace prog \\lbrace post \\rbrace}{\\lbrace pre * frame \\rbrace prog \\lbrace post * frame \\rbrace}\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Our passage from (spec) to (use) is obtained by taking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(h,{code:"\\\\(pre\\\\)",mdxType:"Math"})," to be ",(0,r.kt)(h,{code:"\\\\(r\\_1 \\mapsto open\\\\)",mdxType:"Math"})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(h,{code:"\\\\(post\\\\)",mdxType:"Math"})," to be ",(0,r.kt)(h,{code:"\\\\(r\\_1 \\mapsto closed \\\\)",mdxType:"Math"}),", and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)(h,{code:"\\\\(frame\\\\)",mdxType:"Math"})," to be ",(0,r.kt)(h,{code:"\\\\(r\\_2 \\mapsto open \\\\)",mdxType:"Math"}))),(0,r.kt)("p",null,"This rule is called the ",(0,r.kt)("em",{parentName:"p"},"frame rule")," of separation logic. It is named after the\nframe problem, a classic problem in artificial intelligence. Generally, the"),(0,r.kt)(h,{code:"\\\\(frame\\\\)",mdxType:"Math"})," describes state that remains unchanged; the terminology comes from the analogy of a background scene in an animation as unchanging while the objects and characters within the scene change.",(0,r.kt)("p",null,"The frame rule is the key to the principle of local reasoning in separation\nlogic: reasoning and specifications should concentrate on the resources that a\nprogram accesses (the footprint), without mentioning what doesn't change."),(0,r.kt)("h2",{id:"bi-abduction"},"Bi-abduction"),(0,r.kt)("p",null,"Bi-abduction is a form of logical inference for separation logic which automates\nthe key ideas about local reasoning."),(0,r.kt)("p",null,"Usually, logic works with validity or entailment statements like"),(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\(A \\vdash B\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"which says that ",(0,r.kt)(h,{code:"\\\\(A\\\\)",mdxType:"Math"})," implies ",(0,r.kt)(h,{code:"\\\\(B\\\\)",mdxType:"Math"}),". Infer\nuses an extension of this inference question in an internal theorem prover while\nit runs over program statements. Infer's question"),(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\(A * ?antiframe \\vdash B * ?frame\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"is called ",(0,r.kt)("em",{parentName:"p"},"bi-abduction"),". The problem here is for the theorem prover to ",(0,r.kt)("i",null,"\ndiscover ")," a pair of frame and antiframe formulae that make the entailment\nstatement valid."),(0,r.kt)("p",null,"Global analyses of large programs are normally computational untractable.\nHowever, bi-abduction allows to break the large analysis of a large program in\nsmall independent analyses of its procedures. This gives Infer the ability to\nscale independently of the size of the analyzed code. Moreover, by breaking the\nanalysis in small independent parts, when the full program is analyzed again\nbecause of a code change the analysis results of the unchanged part of the code\ncan be reused and only the code change needs to be re-analyzed. This process is\ncalled incremental analysis and it is very powerful when integrating a static\nanalysis tool like infer in a development environment."),(0,r.kt)("p",null,"In order to be able to decompose a global analysis in small independent\nanalyses, let's first consider how a function call is analyzed in separation\nlogic. Assume we have the following spec for a function"),(0,r.kt)(h,{code:"\\\\( f() \\\\)",mdxType:"Math"}),":",(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\( \\lbrace pre\\_f \\rbrace \\;\\; f() \\;\\; \\lbrace post\\_f \\rbrace \\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"and by analyzing the caller function, we compute that before the call of"),(0,r.kt)(h,{code:"\\\\( f \\\\)",mdxType:"Math"}),", the formula ",(0,r.kt)(h,{code:"\\\\( CallingState \\\\)",mdxType:"Math"}),"hold. Then to utilize the specification of ",(0,r.kt)(h,{code:"\\\\( f \\\\)",mdxType:"Math"})," the following implication must holds:",(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\( CallingState \\vdash pre\\_f  \\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\;\\; (Function Call)\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Given that, bi-abduction is used at procedure call sites for two reasons: to\ndiscover missing state that is needed for the above implication to hold and\nallow the analysis to proceed (the antiframe) as well as state that the\nprocedure leaves unchanged (the frame)."),(0,r.kt)("p",null,"To see how this works suppose we have some bare code"),(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\(closeResource(r1); \\, closeResource(r2)\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"but no overall specification; we are going to describe how to discover a\npre/post spec for it. Considering the first statement and the (spec) above, the\nhuman might say: if only we had ",(0,r.kt)(h,{code:"\\\\(r1 \\mapsto open\\\\)",mdxType:"Math"})," in the\nprecondition then we could proceed. Technically, we ask a bi-abduction question"),(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\(emp * ?antiframe \\vdash r1 \\mapsto open * ?frame\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"and we can fill this in easily by picking"),(0,r.kt)(h,{code:"\\\\(antiframe = r1 \\mapsto open\\\\)",mdxType:"Math"})," and",(0,r.kt)(h,{code:"\\\\(frame = emp\\\\)",mdxType:"Math"}),", where emp means the empty state. The emp is recording that at the start we presume nothing. So we obtain the trivially true implication:",(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\(emp * r1 \\mapsto open \\vdash r1 \\mapsto open * emp\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"which, by applying logical rules, can be re-written equivalently to:"),(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\(r1 \\mapsto open \\vdash r1 \\mapsto open\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Notice that this satisfy the (Function Call) requirement to correctly make the\ncall. So let's add that information in the pre, and while we are at it record\nthe information in the post of the first statement that comes from (spec)."),(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\( \\lbrace r1 \\mapsto open  \\rbrace \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( closeResource(r1) \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( \\lbrace r1 \\mapsto closed \\rbrace \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( closeResource(r2) \\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Now, let's move to the second statement. Its precondition"),(0,r.kt)(h,{code:"\\\\(r1 \\mapsto closed\\\\)",mdxType:"Math"})," in the partial symbolic execution trace just given does not have the information needed by",(0,r.kt)(h,{code:"\\\\(closeResource(r2)\\\\)",mdxType:"Math"}),", so we can fill that in and continue by putting ",(0,r.kt)(h,{code:"\\\\(r2 \\mapsto open\\\\)",mdxType:"Math"})," in the pre. While we are at it we can thread this assertion back to the beginning.",(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\( \\lbrace r1 \\mapsto open * r2 \\mapsto open  \\rbrace \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( closeResource(r1) \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( \\lbrace r1 \\mapsto closed * r2 \\mapsto open\\rbrace \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( closeResource(r2) \\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"This information on what to thread backwards can be obtained as the antiframe\npart of the bi-abduction question"),(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\(r1 \\mapsto closed * ?antiframe \\vdash r2 \\mapsto open * ?frame\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"where the solution picks"),(0,r.kt)(h,{code:"\\\\(antiframe = r2 \\mapsto open\\\\) and \\\\(frame = r1 \\mapsto closed\\\\)",mdxType:"Math"}),". Note that the antiframe is precisely the information missing from the precondition in order for ",(0,r.kt)(h,{code:"\\\\(closeResource(r2)\\\\)",mdxType:"Math"})," to proceed. On the other hand, the frame ",(0,r.kt)(h,{code:"\\\\(r1 \\mapsto closed\\\\)",mdxType:"Math"})," is the portion of state not changed by ",(0,r.kt)(h,{code:"\\\\(closeResource(r2)\\\\)",mdxType:"Math"}),"; we can thread that through to the overall postconditon (as justified by the frame rule), giving us",(0,r.kt)("hr",null),(0,r.kt)(h,{code:"\\\\( \\lbrace r1 \\mapsto open * r2 \\mapsto open  \\rbrace \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( closeResource(r1) \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( \\lbrace r1 \\mapsto closed * r2 \\mapsto open\\rbrace \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( closeResource(r2) \\\\)",mdxType:"Math"}),(0,r.kt)(h,{code:"\\\\( \\lbrace r1 \\mapsto closed * r2 \\mapsto closed \\rbrace\\\\)",mdxType:"Math"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Thus, we have obtained a pre and post for this code by symbolically executing\nit, using bi-abduction to discover preconditions (abduction of antiframes) as\nwell as untouched portions of memory (frames) as we go along."),(0,r.kt)("p",null,"In general, bi-abduction provides a way to infer a pre/post specs from bare\ncode, as long as we know specs for the primitives at the base level of the code.\nThe human does not need to write preconditions and postconditions for all the\nprocedures, which is the key to having a high level of automation. This is the\nbasis for how Infer works, why it can scale, and how it can analyze code changes\nincrementally."),(0,r.kt)("p",null,"Context: The logical terminology we have been using here comes from AI and\nphilosophy of science. Abductive inference was introduced by the philosopher\nCharles Peirce, and described as the mechanism underpinning hypothesis formation\n(or, guessing what might be true about the world), the most creative part of the\nscientific process. Abduction and the frame problem have both attracted\nsignificant attention in AI. Infer uses an automated form of abduction to\ngenerate preconditions describing the memory that a program touches (the\nantiframe part above), and frame inference to discover what isn't touched. Infer\nthen uses deductive reasoning to calculate a formula describing the effect of a\nprogram, starting from the preconditions. In a sense, Infer approaches automated\nreasoning about programs by mimicking what a human might do when trying to\nunderstand a program: it abduces what the program needs, and deduces conclusions\nof that. It is when the reasoning goes wrong that Infer reports a potential bug."),(0,r.kt)("p",null,"This description is by necessity simplified compared to what Infer actually\ndoes. More technical information can be found in the following papers. The\ndescriptions in the papers are precise, but still simplified; there are many\nengineering decisions not recorded there. Finally, beyond the papers, you can\nread the source code if you wish!"),(0,r.kt)("h2",{id:"technical-papers"},"Technical papers"),(0,r.kt)("p",null,"The following papers contain some of the technical background on Infer and\ninformation on how it is used inside Facebook."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://link.springer.com/chapter/10.1007%2F3-540-44802-0_1"},"Local Reasoning about Programs that Alter Data Structures.")," An early separation logic paper which advanced ideas about local reasoning and the frame rule."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://link.springer.com/chapter/10.1007/11804192_6"},"Smallfoot: Modular Automatic Assertion Checking with Separation Logic.")," First separation logic verification tool, introduced frame inference"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://link.springer.com/chapter/10.1007%2F11691372_19"},"A Local Shape Analysis Based on Separation Logic.")," Separation logic meets abstract interpretation; calculating loop invariants via a fixed-point computation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"http://dl.acm.org/citation.cfm?id=2049700"},"Compositional Shape Analysis by Means of Bi-Abduction.")," The bi-abduction paper."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://research.facebook.com/publications/moving-fast-with-software-verification/"},"Moving Fast with Software Verification.")," A paper about the way we use Infer at Facebook.")))}f.isMDXComponent=!0},5666:function(e,t,a){t.Z=a.p+"assets/images/SepSplit-dca4e1fe63cb590718402c7c0c9ab7f8.jpg"}}]);