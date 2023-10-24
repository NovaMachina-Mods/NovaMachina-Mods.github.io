"use strict";(self.webpackChunkex_nihilo_sequentia_documentation=self.webpackChunkex_nihilo_sequentia_documentation||[]).push([[9378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),h=a,d=s["".concat(c,".").concat(h)]||s[h]||m[h]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(3117),a=(n(7294),n(3905));const i={},o="ItemStackWithChance",l={unversionedId:"configuration/CraftTweaker/Helpers/ItemStackWithChance",id:"version-5.0.0/configuration/CraftTweaker/Helpers/ItemStackWithChance",title:"ItemStackWithChance",description:"---",source:"@site/exn_versioned_docs/version-5.0.0/configuration/CraftTweaker/Helpers/ItemStackWithChance.md",sourceDirName:"configuration/CraftTweaker/Helpers",slug:"/configuration/CraftTweaker/Helpers/ItemStackWithChance",permalink:"/exnihilosequentia/configuration/CraftTweaker/Helpers/ItemStackWithChance",draft:!1,tags:[],version:"5.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CrucibleType",permalink:"/exnihilosequentia/configuration/CraftTweaker/Helpers/CrucibleType"},next:{title:"MeshType",permalink:"/exnihilosequentia/configuration/CraftTweaker/Helpers/MeshType"}},c={},u=[{value:"Method Signature",id:"method-signature",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Method Signature",id:"method-signature-1",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Method Signature",id:"method-signature-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Method Signature",id:"method-signature-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Example",id:"example",level:4}],p={toc:u},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"itemstackwithchance"},"ItemStackWithChance"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"method-signature"},"Method Signature"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"of(IItemsStack itemStack)")),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"itemStack")," - ItemStack to add chance to."),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"ItemStack with chance of 100%"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"method-signature-1"},"Method Signature"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"of(IItemsStack itemStack, float chance)")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"itemStack")," - ItemStack to add chance to.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"chance")," - Percentage that the itemstack should drop"),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"ItemStack with chance of ",(0,a.kt)("inlineCode",{parentName:"p"},"chance"),"%"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"method-signature-2"},"Method Signature"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"itemStack()")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.blamejared.com/1.20.1/en/vanilla/api/item/IItemStack"},"IItemStack")," representation of ItemStack"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"method-signature-3"},"Method Signature"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"chance()")),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,"Float representation of chance value"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import mods.exnihilosequentia.ItemStackWithChance;\n\nval itemStack = ItemStackWithChance.of(<item:minecraft:sand>);\nval itemStack2 = ItemStackWithChance.of(<item:minecraft:sand>, 0.05);\n")))}m.isMDXComponent=!0}}]);