(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{67:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(90)),c={title:"Installation"},o={unversionedId:"start-installation",id:"start-installation",isDocsHomePage:!1,title:"Installation",description:"React prerequisites",source:"@site/docs/start-installation.md",slug:"/start-installation",permalink:"/docs/start-installation",version:"current",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/start-introduction"},next:{title:"Setup",permalink:"/docs/start-setup"}},s=[{value:"React prerequisites",id:"react-prerequisites",children:[]},{value:"Leaflet prerequisites",id:"leaflet-prerequisites",children:[]},{value:"Adding React Leaflet",id:"adding-react-leaflet",children:[]}],l={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"react-prerequisites"},"React prerequisites"),Object(i.b)("p",null,"This documentation assumes you are already familiar with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")," and have a project setup. If it is not the case, you should read ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/docs/getting-started.html"}),"React's Getting Started documentation")," first."),Object(i.b)("h2",{id:"leaflet-prerequisites"},"Leaflet prerequisites"),Object(i.b)("p",null,"This documentation assumes you are already familiar with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://leafletjs.com/"}),"Leaflet"),". React Leaflet ",Object(i.b)("strong",{parentName:"p"},"does not replace Leaflet"),", it only provides bindings between React and Leaflet."),Object(i.b)("p",null,"This documentation ",Object(i.b)("strong",{parentName:"p"},"is not a replacement")," for ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://leafletjs.com/reference-1.7.1.html"}),"Leaflet's documentation"),", it only focuses on aspects specific to React Leaflet."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"Read this before going further")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Before using React Leaflet, you must setup your project following ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://leafletjs.com/examples/quick-start/"}),"Leaflet's Quick Start Guide"),"."))),Object(i.b)("h2",{id:"adding-react-leaflet"},"Adding React Leaflet"),Object(i.b)("p",null,"React, React DOM and Leaflet are required peer dependencies. You must add them to your project if they are not already installed:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react react-dom leaflet\n")),Object(i.b)("p",null,"React Leaflet v3 is not released as a stable version yet. To install it, you must use the ",Object(i.b)("inlineCode",{parentName:"p"},"next")," tag:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-leaflet@next\n")))}p.isMDXComponent=!0},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(a),b=n,f=u["".concat(c,".").concat(b)]||u[b]||d[b]||i;return a?r.a.createElement(f,o(o({ref:t},l),{},{components:a})):r.a.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);