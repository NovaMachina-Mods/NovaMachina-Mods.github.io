"use strict";(self.webpackChunkex_nihilo_sequentia_documentation=self.webpackChunkex_nihilo_sequentia_documentation||[]).push([[9193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const i={},o="Heat Recipe",c={unversionedId:"configuration/Data Pack/Recipes/HeatRecipe",id:"version-5.0.0/configuration/Data Pack/Recipes/HeatRecipe",title:"Heat Recipe",description:"Structure",source:"@site/exn_versioned_docs/version-5.0.0/configuration/Data Pack/Recipes/HeatRecipe.md",sourceDirName:"configuration/Data Pack/Recipes",slug:"/configuration/Data Pack/Recipes/HeatRecipe",permalink:"/exnihilosequentia/configuration/Data Pack/Recipes/HeatRecipe",draft:!1,tags:[],version:"5.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Harvest Recipes",permalink:"/exnihilosequentia/configuration/Data Pack/Recipes/HarvestRecipe"},next:{title:"Melting Recipes",permalink:"/exnihilosequentia/configuration/Data Pack/Recipes/MeltingRecipe"}},l={},p=[{value:"Structure",id:"structure",level:2},{value:"Fields",id:"fields",level:2}],u={toc:p},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"heat-recipe"},"Heat Recipe"),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "exnihilosequentia:heat",\n  "block": "string",\n  "amount": "number",\n  "state": {\n    "key": "string"\n  }\n}\n')),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Accepted Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"block")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The block placed below a crucible that will generate heat."),(0,a.kt)("td",{parentName:"tr",align:"left"},"Block")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"amount")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The number of millibuckets that will be melted down per operation."),(0,a.kt)("td",{parentName:"tr",align:"left"},"A value greater than 0.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"state")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A collection of properties that the block must match for the heat recipe to be valid. Optional and may be omitted. (See ",(0,a.kt)("a",{parentName:"td",href:"https://minecraft.fandom.com/wiki/Block_states"},"Block States")," on the Minecraft Wiki)"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Block State")))))}f.isMDXComponent=!0}}]);