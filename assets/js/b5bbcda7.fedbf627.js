(self.webpackChunkdocs_site=self.webpackChunkdocs_site||[]).push([[12],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,f=c["".concat(l,".").concat(d)]||c[d]||m[d]||s;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},1883:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=t(2122),a=t(9756),s=(t(7294),t(3905)),i={id:"classes-transformer-plugin",title:"Transformer Plugin",sidebar_label:"Transformer Plugin"},o=void 0,l={unversionedId:"plugins-system/classes-transformer-plugin",id:"plugins-system/classes-transformer-plugin",isDocsHomePage:!1,title:"Transformer Plugin",description:"@automapper/classes/experimental/transformer-plugin is part of the public API of @automapper/classes.",source:"@site/docs/plugins-system/classes-transformer-plugin.md",sourceDirName:"plugins-system",slug:"/plugins-system/classes-transformer-plugin",permalink:"/docs/plugins-system/classes-transformer-plugin",editUrl:"https://github.com/nartc/mapper/tree/main/docs-site/docs/plugins-system/classes-transformer-plugin.md",version:"current",frontMatter:{id:"classes-transformer-plugin",title:"Transformer Plugin",sidebar_label:"Transformer Plugin"},sidebar:"docs",previous:{title:"Limitations",permalink:"/docs/plugins-system/classes-limitations"},next:{title:"Mapped Types",permalink:"/docs/plugins-system/classes-mapped-types"}},p=[{value:"Problem",id:"problem",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Why experimental?",id:"why-experimental",children:[]},{value:"Limitations",id:"limitations",children:[]},{value:"Usage",id:"usage",children:[{value:"Options",id:"options",children:[]},{value:"Webpack",id:"webpack",children:[]},{value:"Rollup",id:"rollup",children:[]},{value:"ttypescript",id:"ttypescript",children:[]},{value:"NestJS CLI",id:"nestjs-cli",children:[]},{value:"NestJS with Nx",id:"nestjs-with-nx",children:[]},{value:"Angular",id:"angular",children:[]}]}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," is part of the public API of ",(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes"),"."),(0,s.kt)("h2",{id:"problem"},"Problem"),(0,s.kt)("p",null,"Decorating Classes' members with ",(0,s.kt)("inlineCode",{parentName:"p"},"@AutoMap()")," is verbose, even when you're being meticulous about what members are being ",(0,s.kt)("strong",{parentName:"p"},"auto-configured")," vs ",(0,s.kt)("strong",{parentName:"p"},"custom-configured"),". In some other cases, the Classes themselves are being ",(0,s.kt)("strong",{parentName:"p"},"generated"),", and/or from ",(0,s.kt)("strong",{parentName:"p"},"external libraries")," that the consumers ",(0,s.kt)("strong",{parentName:"p"},"cannot")," touch."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," is to ease this pain point when using ",(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes")),(0,s.kt)("h2",{id:"how-it-works"},"How it works"),(0,s.kt)("p",null,"Let's look at the following classes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class Profile {\n  bio: string;\n  age: number;\n}\nclass User {\n  firstName: string;\n  lastName: string;\n  profile: Profile;\n}\n")),(0,s.kt)("p",null,"Throughout the documentation, we all know that the above code will be compiled to"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"class Profile {}\nclass User {}\n")),(0,s.kt)("p",null,"The requirement for ",(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes")," to work is to decorate all the members of both classes with ",(0,s.kt)("inlineCode",{parentName:"p"},"@AutoMap")," in order for ",(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes")," to keep track of the metadata of each class."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"class Profile {\n  @AutoMap()\n  bio: string;\n  @AutoMap()\n  age: number;\n}\nclass User {\n  @AutoMap()\n  firstName: string;\n  @AutoMap()\n  lastName: string;\n  @AutoMap({ typeFn: () => Profile })\n  profile: Profile;\n}\n")),(0,s.kt)("p",null,"This will get very verbose very soon."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," runs a ",(0,s.kt)("inlineCode",{parentName:"p"},"before")," transformer that affects the ",(0,s.kt)("strong",{parentName:"p"},"AST")," directly before the Compilation step."),(0,s.kt)("p",null,"The transformer will"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Look at files that end with ",(0,s.kt)("inlineCode",{parentName:"li"},".model.ts"),", ",(0,s.kt)("inlineCode",{parentName:"li"},".vm.ts"),", and ",(0,s.kt)("inlineCode",{parentName:"li"},".dto.ts")," (this can be changed via transformer plugin options)"),(0,s.kt)("li",{parentName:"ul"},"Iterate through all the members (",(0,s.kt)("inlineCode",{parentName:"li"},"PropertyDeclaration"),") of each class (",(0,s.kt)("inlineCode",{parentName:"li"},"ClassDeclaration"),") that it finds"),(0,s.kt)("li",{parentName:"ul"},"Store the members in a list that ",(0,s.kt)("inlineCode",{parentName:"li"},"@automapper/classes")," can understand"),(0,s.kt)("li",{parentName:"ul"},"Add to each class a ",(0,s.kt)("inlineCode",{parentName:"li"},"static method")," and return the list.")),(0,s.kt)("p",null,"Let's look at the above snippet again"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// your code\nclass Profile {\n  bio: string;\n  age: number;\n}\nclass User {\n  firstName: string;\n  lastName: string;\n  profile: Profile;\n}\n\n// after \"before\" transformer runs through your code\n\nclass Profile {\n  bio: string;\n  age: number;\n\n  static __AUTOMAPPER_METADATA_FACTORY__() {\n    return [\n      ['bio', { typeFn: () => String }],\n      ['age', { typeFn: () => Number }],\n    ];\n  }\n}\nclass User {\n  firstName: string;\n  lastName: string;\n  profile: Profile;\n\n  static __AUTOMAPPER_METADATA_FACTORY__() {\n    return [\n      ['firstName', { typeFn: () => String }],\n      ['lastName', { typeFn: () => String }],\n      ['profile', { typeFn: () => Profile, depth: 0 }],\n    ];\n  }\n}\n")),(0,s.kt)("p",null,"After compilation, the members will be gone, but the static function will stay making it available to be called at runtime. Hence, the metadata will be available. ",(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," only adds the minimum amount of code needed to keep track of the metadata."),(0,s.kt)("h2",{id:"why-experimental"},"Why experimental?"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," utilizes ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API"},"TypeScript Compiler API")," to traverse and manipulate the ",(0,s.kt)("strong",{parentName:"p"},"Abstract Syntax Tree (AST)")," to automate the process of decorating the Classes. And, there is a ",(0,s.kt)("strong",{parentName:"p"},"Disclaimer")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Keep in mind that this is not yet a stable API - we\u2019re releasing this as version 0.5, and things will be changing over time. As a first iteration, there will be a few rough edges. We encourage any and all feedback from the community to improve the API. To allow users to transition between future releases, we will be documenting any API Breaking Changes per new release.")),(0,s.kt)("h2",{id:"limitations"},"Limitations"),(0,s.kt)("p",null,"Currently, ",(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")," will handle most ",(0,s.kt)("inlineCode",{parentName:"p"},"Nullable")," (",(0,s.kt)("inlineCode",{parentName:"p"},"type | null"),") and ",(0,s.kt)("inlineCode",{parentName:"p"},"Maybe")," (",(0,s.kt)("inlineCode",{parentName:"p"},"propKey?: type"),") cases. However, for complex cases where you have unions with different types (",(0,s.kt)("inlineCode",{parentName:"p"},"string | number | boolean")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"ClassA | ClassB"),"), please consider decorate the property (field) manually with ",(0,s.kt)("inlineCode",{parentName:"p"},"@AutoMap()")," decorator."),(0,s.kt)("h2",{id:"usage"},"Usage"),(0,s.kt)("p",null,"As mentioned above, this is utilizing an experimental feature of TypeScript. Hence, you need to modify the build step of your project to use ",(0,s.kt)("inlineCode",{parentName:"p"},"@automapper/classes/experimental/transformer-plugin")),(0,s.kt)("h3",{id:"options"},"Options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"export interface AutomapperTransformerPluginOptions {\n  modelFileNameSuffix?: string[];\n}\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"modelFileNameSuffix")," is default to ",(0,s.kt)("inlineCode",{parentName:"p"},"['.model.ts', '.vm.ts', '.dto.ts']")),(0,s.kt)("h3",{id:"webpack"},"Webpack"),(0,s.kt)("p",null,"If you use ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-loader")," or some fork of ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-loader"),", you can configure Webpack config to turn on Transformers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"// snip\nconst automapperTransformerPlugin = require('@automapper/classes/experimental/transformer-plugin');\nconst pluginOptions = {\n  modelFileNameSuffix: [\n    /*...*/\n  ],\n};\nmodule.exports = {\n  // snip\n  module: {\n    rules: [\n      // snip\n      {\n        test: /\\.tsx?$/,\n        loader: 'ts-loader',\n        options: {\n          getCustomTransformers: (program) => ({\n            before: [\n              automapperTransformerPlugin(program, pluginOptions).before,\n            ],\n          }),\n        },\n      },\n      // snip\n    ],\n  },\n  // snip\n};\n")),(0,s.kt)("h3",{id:"rollup"},"Rollup"),(0,s.kt)("p",null,"Use ",(0,s.kt)("inlineCode",{parentName:"p"},"rollup-plugin-typescript2")," as it has ",(0,s.kt)("inlineCode",{parentName:"p"},"transformers")," capability"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import automapperTransformerPlugin from '@automapper/classes/experimental/transformer-plugin';\nimport typescript from 'rollup-plugin-typescript2';\nconst pluginOptions = {\n  modelFileNameSuffix: [\n    /*...*/\n  ],\n};\nexport default {\n  // snip\n  preserveModules: true, // <-- turn on preserveModules\n  plugins: [\n    // snip\n    typescript({\n      transformers: [\n        (service) => ({\n          before: [\n            automapperTransformerPlugin(service.getProgram(), pluginOptions)\n              .before,\n          ],\n        }),\n      ],\n    }),\n    // snip\n  ],\n};\n")),(0,s.kt)("h3",{id:"ttypescript"},"ttypescript"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ttypescript")," patches ",(0,s.kt)("inlineCode",{parentName:"p"},"typescript")," in order to use transformers in ",(0,s.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),". See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cevek/ttypescript"},"ttypescript's README")," for how to use this with module bundlers such as webpack or Rollup."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'{\n  "compilerOptions": {\n    ...,\n    "plugins": [\n        {\n            "transform": "@automapper/classes/experimental/transformer-plugin",\n            "modelFileNameSuffix": [...]\n        }\n    ],\n    ...\n  }\n}\n')),(0,s.kt)("h3",{id:"nestjs-cli"},"NestJS CLI"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"nestjs/cli")," can enable Transformers by default. To use this plugin with ",(0,s.kt)("inlineCode",{parentName:"p"},"nestjs/cli"),", modify your ",(0,s.kt)("inlineCode",{parentName:"p"},"nest-cli.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "collection": "@nestjs/schematics",\n  "sourceRoot": "src",\n  "compilerOptions": {\n    "plugins": ["@automapper/classes/experimental/transformer-plugin"]\n  }\n}\n')),(0,s.kt)("p",null,"or with options"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "collection": "@nestjs/schematics",\n  "sourceRoot": "src",\n  "compilerOptions": {\n    "plugins": [\n      {\n        "name": "@automapper/classes/experimental/transformer-plugin",\n        "options": {\n          "modelFileNameSuffix": [".dto.ts", ".vm.ts"]\n        }\n      }\n    ]\n  }\n}\n')),(0,s.kt)("h3",{id:"nestjs-with-nx"},"NestJS with Nx"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"NestJS")," in Nx workspace utilizes ",(0,s.kt)("inlineCode",{parentName:"p"},"nrwl/node:build")," executor (formerly, builder) which allows you to pass in a custom Webpack config. However, to turn on Transformer, there's still this ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nrwl/nx/issues/2147"},"open issue")," in which you can find multiple solutions/workarounds as of the moment."),(0,s.kt)("h3",{id:"angular"},"Angular"),(0,s.kt)("p",null,"Angular CLI has sophisticated build process so please take a look at ",(0,s.kt)("a",{parentName:"p",href:"https://indepth.dev/posts/1045/having-fun-with-angular-and-typescript-transformers"},"this article")," and related articles mentioned to come up with your approach of turning on Transformers for Angular projects"))}m.isMDXComponent=!0}}]);