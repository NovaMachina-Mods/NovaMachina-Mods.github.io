"use strict";(self.webpackChunkex_nihilo_sequentia_documentation=self.webpackChunkex_nihilo_sequentia_documentation||[]).push([[6233],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3816:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={},i="Changelog",l={unversionedId:"changelog",id:"version-5.0.0/changelog",title:"Changelog",description:"All notable changes to this project will be documented in this file.",source:"@site/exn_versioned_docs/version-5.0.0/changelog.md",sourceDirName:".",slug:"/changelog",permalink:"/exnihilosequentia/changelog",draft:!1,tags:[],version:"5.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Pack Creation",permalink:"/exnihilosequentia/configuration/data_pack"}},c={},p=[{value:"5.0.0 - 2023-10-24",id:"500---2023-10-24",level:2},{value:"Added",id:"added",level:3},{value:"Changed",id:"changed",level:3},{value:"Removed",id:"removed",level:3}],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,a.kt)("p",null,"The format is based on ",(0,a.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.1.0/"},"Keep a Changelog"),", and this project adheres to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.neoforged.net/docs/gettingstarted/versioning"},"NeoForged Semantic Versioning"),"."),(0,a.kt)("h2",{id:"500---2023-10-24"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/NovaMachina-Mods/ExNihiloSequentia/compare/v5.0.0...HEAD"},"5.0.0")," - 2023-10-24"),(0,a.kt)("h3",{id:"added"},"Added"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dependency on ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/NovaMachina-Mods/NovaCore"},"NovaCore")),(0,a.kt)("li",{parentName:"ul"},"Cherry barrel, crook, crucible, hammer, and sieve"),(0,a.kt)("li",{parentName:"ul"},"Christmas and Halloween Crook")),(0,a.kt)("h3",{id:"changed"},"Changed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Replace Forge with ",(0,a.kt)("a",{parentName:"li",href:"https://neoforged.net/"},"NeoForge"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Requires NeoForge 47.1.55+"))),(0,a.kt)("li",{parentName:"ul"},"Use NovaCore definitions, registries, and common data generation classes"),(0,a.kt)("li",{parentName:"ul"},"Replaced CraftTweaker builder functions with single ",(0,a.kt)("inlineCode",{parentName:"li"},"addRecipe")," method"),(0,a.kt)("li",{parentName:"ul"},"Updated textures")),(0,a.kt)("h3",{id:"removed"},"Removed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Common Data Generation classes for:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Recipes"),(0,a.kt)("li",{parentName:"ul"},"Loot Tables"),(0,a.kt)("li",{parentName:"ul"},"Tags"),(0,a.kt)("li",{parentName:"ul"},"Language")))))}d.isMDXComponent=!0}}]);