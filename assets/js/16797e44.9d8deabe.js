"use strict";(self.webpackChunkex_nihilo_sequentia_documentation=self.webpackChunkex_nihilo_sequentia_documentation||[]).push([[7981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,d=c["".concat(u,".").concat(f)]||c[f]||h[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5671:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(3117),a=(n(7294),n(3905));const i={},o="MeshWithChance",l={unversionedId:"configuration/CraftTweaker/Helpers/MeshWithChance",id:"version-5.0.0/configuration/CraftTweaker/Helpers/MeshWithChance",title:"MeshWithChance",description:"---",source:"@site/exn_versioned_docs/version-5.0.0/configuration/CraftTweaker/Helpers/MeshWithChance.md",sourceDirName:"configuration/CraftTweaker/Helpers",slug:"/configuration/CraftTweaker/Helpers/MeshWithChance",permalink:"/exnihilosequentia/configuration/CraftTweaker/Helpers/MeshWithChance",draft:!1,tags:[],version:"5.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MeshType",permalink:"/exnihilosequentia/configuration/CraftTweaker/Helpers/MeshType"},next:{title:"Compost Recipe",permalink:"/exnihilosequentia/configuration/CraftTweaker/Recipes/CompostRecipe"}},u={},s=[{value:"Method Signature",id:"method-signature",level:4},{value:"Returns",id:"returns",level:4},{value:"Method Signature",id:"method-signature-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Method Signature",id:"method-signature-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Example",id:"example",level:4}],p={toc:s},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"meshwithchance"},"MeshWithChance"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"method-signature"},"Method Signature"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"of(MeshType meshType, float chance)")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,"A roll with ",(0,a.kt)("inlineCode",{parentName:"p"},"meshType")," and a with drop rate of ",(0,a.kt)("inlineCode",{parentName:"p"},"chance")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"method-signature-1"},"Method Signature"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getMesh()")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"../MeshType"},"MeshType")," for this roll"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"method-signature-2"},"Method Signature"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"getChance()")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,"The float value of the chance for this roll"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import mods.exnihilosequentia.MeshWithChance;\nimport mods.exnihilosequentia.MeshType;\n\nval roll = MeshWithChance.of(MeshType.stringMesh(), 0.25);\n")))}h.isMDXComponent=!0}}]);