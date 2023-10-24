"use strict";(self.webpackChunkex_nihilo_sequentia_documentation=self.webpackChunkex_nihilo_sequentia_documentation||[]).push([[7491],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=i,m=d["".concat(c,".").concat(s)]||d[s]||f[s]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(3117),i=(n(7294),n(3905));const a={},o="Solidifying Recipe",l={unversionedId:"configuration/Data Pack/Recipes/SolidifyingRecipe",id:"version-5.0.0/configuration/Data Pack/Recipes/SolidifyingRecipe",title:"Solidifying Recipe",description:"Structure",source:"@site/exn_versioned_docs/version-5.0.0/configuration/Data Pack/Recipes/SolidifyingRecipe.md",sourceDirName:"configuration/Data Pack/Recipes",slug:"/configuration/Data Pack/Recipes/SolidifyingRecipe",permalink:"/exnihilosequentia/configuration/Data Pack/Recipes/SolidifyingRecipe",draft:!1,tags:[],version:"5.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sifting Recipe",permalink:"/exnihilosequentia/configuration/Data Pack/Recipes/SiftingRecipe"},next:{title:"Transition Recipe",permalink:"/exnihilosequentia/configuration/Data Pack/Recipes/TransitionRecipe"}},c={},p=[{value:"Structure",id:"structure",level:2},{value:"Fields",id:"fields",level:2}],u={toc:p},d="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"solidifying-recipe"},"Solidifying Recipe"),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "exnihilosequentia:solidifying",\n  "fluidInTank": {\n    "amount": "number",\n    "fluid": "string"\n  },\n  "fluidOnTop": {\n    "amount": "number",\n    "fluid": "string"\n  },\n  "result": {\n    "item": "string"\n  }\n}\n')),(0,i.kt)("h2",{id:"fields"},"Fields"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Accepted Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fluidInTank")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The fluid in the tank that will be consumed."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fluid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fluidOnTop")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The fluid that will be placed on top of the barrel that will not be consumed."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fluid")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of fluid required for the recipe. Should be 1000."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Greater than 0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"result")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The resulting block."),(0,i.kt)("td",{parentName:"tr",align:"left"},"Block")))))}f.isMDXComponent=!0}}]);