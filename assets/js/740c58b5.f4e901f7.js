"use strict";(self.webpackChunkex_nihilo_sequentia_documentation=self.webpackChunkex_nihilo_sequentia_documentation||[]).push([[893],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?i.createElement(d,o(o({ref:t},s),{},{components:n})):i.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=n(3117),r=(n(7294),n(3905));const a={},o="Sifting Recipe",p={unversionedId:"configuration/CraftTweaker/Recipes/SiftingRecipe",id:"version-5.0.0/configuration/CraftTweaker/Recipes/SiftingRecipe",title:"Sifting Recipe",description:"Method Signature",source:"@site/exn_versioned_docs/version-5.0.0/configuration/CraftTweaker/Recipes/SiftingRecipe.md",sourceDirName:"configuration/CraftTweaker/Recipes",slug:"/configuration/CraftTweaker/Recipes/SiftingRecipe",permalink:"/exnihilosequentia/configuration/CraftTweaker/Recipes/SiftingRecipe",draft:!1,tags:[],version:"5.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Precipitate Recipe",permalink:"/exnihilosequentia/configuration/CraftTweaker/Recipes/PrecipitateRecipe"},next:{title:"Solidifying Recipe",permalink:"/exnihilosequentia/configuration/CraftTweaker/Recipes/SolidifyingRecipe"}},l={},c=[{value:"Method Signature",id:"method-signature",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Constraints",id:"constraints",level:2},{value:"Example",id:"example",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sifting-recipe"},"Sifting Recipe"),(0,r.kt)("h2",{id:"method-signature"},"Method Signature"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"addRecipe(String name, IIngredient input, IItemStack drop, boolean isWaterlogged, MeshWithChance[] rolls)")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"name")," - Recipe name",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"input")," - Block to be sifted",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"drop")," - Item to be dropped",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"isWaterlogged")," - Determines if the sieve must be waterlogged for the drop to be acquired",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"rolls")," - List of ",(0,r.kt)("a",{parentName:"p",href:"../../Helpers/MeshWithChance"},"MeshWithChance")),(0,r.kt)("h2",{id:"constraints"},"Constraints"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name")," must be globally unique"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rolls")," must have at least one entry")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import mods.exnihilosequentia.SiftingRecipe;\nimport mods.exnihilosequentia.MeshWithChance;\nimport mods.exnihilosequentia.MeshType;\n\n<recipetype:exnihilosequentia:sifting>.addRecipe("example",<item:minecraft:cobblestone>, <item:minecraft:netherite_ingot>, true, [MeshWithChance.of(MeshType.diamondMesh(), 0.01), MeshWithChance.of(MeshType.stringMesh(), 1.0)]);\n')))}m.isMDXComponent=!0}}]);