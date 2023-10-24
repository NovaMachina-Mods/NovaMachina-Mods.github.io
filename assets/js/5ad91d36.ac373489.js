"use strict";(self.webpackChunkex_nihilo_sequentia_documentation=self.webpackChunkex_nihilo_sequentia_documentation||[]).push([[9142],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=n.createContext({}),o=function(t){var e=n.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=o(t.components);return n.createElement(m.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),k=o(a),f=r,g=k["".concat(m,".").concat(f)]||k[f]||N[f]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=f;var d={};for(var m in e)hasOwnProperty.call(e,m)&&(d[m]=e[m]);d.originalType=t,d[k]="string"==typeof t?t:r,i[1]=d;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},8062:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>N,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var n=a(3117),r=(a(7294),a(3905));const l={},i="Configuration File",d={unversionedId:"configuration/configuration",id:"version-4.2.0/configuration/configuration",title:"Configuration File",description:"Below is a detailed description of what a value does in the configuration file.",source:"@site/exn_versioned_docs/version-4.2.0/configuration/configuration.md",sourceDirName:"configuration",slug:"/configuration/",permalink:"/exnihilosequentia/4.2.0/configuration/",draft:!1,tags:[],version:"4.2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Miscellaneous",permalink:"/exnihilosequentia/4.2.0/items/miscellaneous"},next:{title:"CraftTweaker Support",permalink:"/exnihilosequentia/4.2.0/configuration/crafttweaker"}},m={},o=[{value:"Infested Leaves",id:"infested-leaves",level:2},{value:"Barrel",id:"barrel",level:2},{value:"Mob Spawn",id:"mob-spawn",level:3},{value:"Compost",id:"compost",level:3},{value:"Fluid Transform",id:"fluid-transform",level:3},{value:"Pebble",id:"pebble",level:2},{value:"Ore",id:"ore",level:2},{value:"Debug",id:"debug",level:2},{value:"Crook",id:"crook",level:2},{value:"Durability",id:"durability",level:2},{value:"Hammers",id:"hammers",level:3},{value:"Crooks",id:"crooks",level:3},{value:"Meshes",id:"meshes",level:3},{value:"Crucible",id:"crucible",level:2},{value:"Wooden Crucible",id:"wooden-crucible",level:3},{value:"Sieve",id:"sieve",level:2}],p={toc:o},k="wrapper";function N(t){let{components:e,...a}=t;return(0,r.kt)(k,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-file"},"Configuration File"),(0,r.kt)("p",null,"Below is a detailed description of what a value does in the configuration file."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A tick is 1/20 of a second.",(0,r.kt)("br",null),"\nA bucket holds 1000 millibuckets.")),(0,r.kt)("h2",{id:"infested-leaves"},"Infested Leaves"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secondsToTransformLeaves")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of seconds to for leaves to become completely infested."),(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ticksBetweenSpreadAttempt")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of ticks between infested leave spread attempts."),(0,r.kt)("td",{parentName:"tr",align:"left"},"100"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"spreadChance")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of the time that infested leaves will spread."),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0.001 \u2013 1.0")))),(0,r.kt)("h2",{id:"barrel"},"Barrel"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"barrelNumberOfBuckets")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of buckets the barrel will hold."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"woodBarrelMaxTemp")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The max temperature a barrel can accept; water is 300."),(0,r.kt)("td",{parentName:"tr",align:"left"},"300"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"showParticles")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Should the barrel create particles?"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true/false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"rainFillAmount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How much fluid rain will fill per iteration."),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h3",{id:"mob-spawn"},"Mob Spawn"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secondsToSpawnMobs")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of seconds to spawn mobs."),(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h3",{id:"compost"},"Compost"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secondsToCompost")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of seconds to compost."),(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxSolidAmount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How much solids need to be in barrel before composting starts."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1000"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h3",{id:"fluid-transform"},"Fluid Transform"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"secondsToTransformFluid")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of seconds to transform fluids."),(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h2",{id:"pebble"},"Pebble"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pebbleDamage")),(0,r.kt)("td",{parentName:"tr",align:"left"},"How much half hearts damage a pebble should do."),(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 0")))),(0,r.kt)("h2",{id:"ore"},"Ore"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enableOreOverride")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Allows ores to be enabled or disabled by this config file."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true/false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enablePlatinum"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableUranium"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableGold"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableSilver"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableCopper"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableNickel"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableIron"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableAluminum"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableLead"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableZinc"),(0,r.kt)("br",null)," ",(0,r.kt)("inlineCode",{parentName:"td"},"enableTin")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable ore type pieces, chunks and ingots if they exist. ",(0,r.kt)("inlineCode",{parentName:"td"},"enableOreOverride")," must be true for this to work."),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true/false")))),(0,r.kt)("h2",{id:"debug"},"Debug"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enableDebugLogging")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable extra logging"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true/false")))),(0,r.kt)("h2",{id:"crook"},"Crook"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxBonusStringCount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum additional string that a crook will drop from infested leaves in addition to the minimum string count."),(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"minStringCount")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Minimum string that a crook will drop from infested leaves."),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"vanillaDropSimulateCount")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Number of times the crook will "break" a leaf block to get drops.'),(0,r.kt)("td",{parentName:"tr",align:"left"},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h2",{id:"durability"},"Durability"),(0,r.kt)("h3",{id:"hammers"},"Hammers"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hammerWoodValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Wooden Hammer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hammerStoneValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Stone Hammer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hammerNetheriteValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Netherite Hammer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8192"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hammerIronValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Iron Hammer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"512"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hammerDiamondValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Diamond Hammer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4096"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hammerGoldValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Gold Hammer"),(0,r.kt)("td",{parentName:"tr",align:"left"},"64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h3",{id:"crooks"},"Crooks"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crookDiamondValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Diamond Crook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2048"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crookIronValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Iron Crook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crookBoneValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Bone Crook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crookStoneValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Stone Crook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crookGoldValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Gold Crook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"32"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crookGraniteValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Granite Crook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crookAndesiteValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Andesite Crook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crookDioriteValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Diorite Crook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crookWoodValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Wooden Crook"),(0,r.kt)("td",{parentName:"tr",align:"left"},"128"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h3",{id:"meshes"},"Meshes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"meshNetheriteValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Netherite Mesh (Only useful if ",(0,r.kt)("inlineCode",{parentName:"td"},"enableMeshDurability")," is true)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2031"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"meshDiamondValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Diamond Mesh (Only useful if ",(0,r.kt)("inlineCode",{parentName:"td"},"enableMeshDurability")," is true)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1561"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"meshIronValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Iron Mesh (Only useful if ",(0,r.kt)("inlineCode",{parentName:"td"},"enableMeshDurability")," is true)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"250"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"meshStringValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of String Mesh (Only useful if ",(0,r.kt)("inlineCode",{parentName:"td"},"enableMeshDurability")," is true)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"59"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"meshEmeraldValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Emerald Mesh (Only useful if ",(0,r.kt)("inlineCode",{parentName:"td"},"enableMeshDurability")," is true)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1561"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"meshFlintValue")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Durability of Flint Mesh (Only useful if ",(0,r.kt)("inlineCode",{parentName:"td"},"enableMeshDurability")," is true)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"131"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h2",{id:"crucible"},"Crucible"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ticksBetweenMelts")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ticks between melting operations"),(0,r.kt)("td",{parentName:"tr",align:"left"},"20"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"crucibleNumberOfBuckets")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Number of buckets the crucible will hold"),(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h3",{id:"wooden-crucible"},"Wooden Crucible"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"woodHeatRate")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Heat rate the Wood Crucible will use regardless of heat source below"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"> 1")))),(0,r.kt)("h2",{id:"sieve"},"Sieve"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Range"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"flattenSieveRecipes")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sieve will get results for all mesh tiers below the one in the sieve"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true/false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"maxSieveClicks")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The number of sieve clicks required to sieve a block."),(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1 \u2013 10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"enableMeshDurability")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Meshes will have durability and can break, but don't stack."),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true/false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"meshStackSize")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Meshes will stack, but don't have durability."),(0,r.kt)("td",{parentName:"tr",align:"left"},"64"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1 \u2013 64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sieveRange")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Defines the radius that a sieve will attempt to activate other sieves"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0 \u2013 5")))))}N.isMDXComponent=!0}}]);