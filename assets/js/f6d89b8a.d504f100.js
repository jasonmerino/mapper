(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[476],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=c(t),d=o,f=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return t?r.createElement(f,a(a({ref:n},m),{},{components:t})):r.createElement(f,a({ref:n},m))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},1054:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={id:"condition",title:"Condition",sidebar_label:"Condition"},p=void 0,l={unversionedId:"mapping-configuration/condition",id:"mapping-configuration/condition",isDocsHomePage:!1,title:"Condition",description:"When configuring a member on the Destination, we can use condition() to conditionally map the member with the same name on the Source if some condition is met.",source:"@site/docs/mapping-configuration/condition.md",sourceDirName:"mapping-configuration",slug:"/mapping-configuration/condition",permalink:"/docs/mapping-configuration/condition",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/mapping-configuration/condition.md",version:"current",frontMatter:{id:"condition",title:"Condition",sidebar_label:"Condition"},sidebar:"docs",previous:{title:"MapFrom",permalink:"/docs/mapping-configuration/map-from"},next:{title:"FromValue",permalink:"/docs/mapping-configuration/from-value"}},c=[{value:"With <code>defaultValue</code>",id:"with-defaultvalue",children:[]}],m={toc:c};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When configuring a member on the ",(0,i.kt)("strong",{parentName:"p"},"Destination"),", we can use ",(0,i.kt)("inlineCode",{parentName:"p"},"condition()")," to ",(0,i.kt)("em",{parentName:"p"},"conditionally")," map the member with the same name on the ",(0,i.kt)("strong",{parentName:"p"},"Source")," if some condition is met."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"condition()")," accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"predicateFn")," that has the ",(0,i.kt)("strong",{parentName:"p"},"Source")," as the first argument and returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"predicateFn")," returns ",(0,i.kt)("strong",{parentName:"p"},"truthy"),", then ",(0,i.kt)("strong",{parentName:"p"},"Destination#member")," will be mapped with ",(0,i.kt)("strong",{parentName:"p"},"Source#member"),". Otherwise, ",(0,i.kt)("strong",{parentName:"p"},"Destination#member")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { condition } from '@automapper/core';\n\nMapper.createMap(User, UserDto).forMember(\n  (destination) => destination.fullName,\n  condition((source) => source.age > 10)\n);\n")),(0,i.kt)("p",null,"Here, if ",(0,i.kt)("inlineCode",{parentName:"p"},"source.age > 10")," is evaluated to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"destination.fullName")," will be mapped with ",(0,i.kt)("inlineCode",{parentName:"p"},"source.fullName"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"source.fullName")," is ",(0,i.kt)("strong",{parentName:"p"},"falsy")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"source.age > 10")," is evaluated to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"destination.fullName")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h3",{id:"with-defaultvalue"},"With ",(0,i.kt)("inlineCode",{parentName:"h3"},"defaultValue")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"condition()")," also accepts an optional second argument ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultValue"),". ",(0,i.kt)("strong",{parentName:"p"},"Destination#member")," will be mapped with ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultValue")," in the case that either ",(0,i.kt)("strong",{parentName:"p"},"Source#member")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"predicateFn")," is ",(0,i.kt)("strong",{parentName:"p"},"falsy"),". ",(0,i.kt)("inlineCode",{parentName:"p"},"defaultValue")," must have the same type as ",(0,i.kt)("strong",{parentName:"p"},"Destination#member")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { condition } from '@automapper/core';\n\nMapper.createMap(User, UserDto).forMember(\n  (destination) => destination.fullName,\n  condition((source) => source.age > 10, 'Some default value')\n);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"condition()")," will set the ",(0,i.kt)("inlineCode",{parentName:"p"},"TransformationType")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"TransformationType.Condition")))}u.isMDXComponent=!0}}]);