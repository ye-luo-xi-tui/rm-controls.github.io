"use strict";(self.webpackChunkrm_controls_docs=self.webpackChunkrm_controls_docs||[]).push([[837],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7456:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={},l="\u786c\u4ef6\u89c4\u683c",u={unversionedId:"overview/hardware_specifications",id:"overview/hardware_specifications",isDocsHomePage:!1,title:"\u786c\u4ef6\u89c4\u683c",description:"CAN \u603b\u7ebf",source:"@site/current_docs/overview/hardware_specifications.md",sourceDirName:"overview",slug:"/overview/hardware_specifications",permalink:"/overview/hardware_specifications",editUrl:"https://github.com/rm-controls/rm-controls.github.io/tree/master/current_docs/overview/hardware_specifications.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Why rm-controls\uff1f",permalink:"/overview/intro"},next:{title:"\u8f6f\u4ef6\u6846\u67b6",permalink:"/overview/software_framework"}},s=[{value:"CAN \u603b\u7ebf",id:"can-\u603b\u7ebf",children:[{value:"\u5167\u7f6e CAN",id:"\u5167\u7f6e-can",children:[]},{value:"USB \u8f6c CAN",id:"usb-\u8f6c-can",children:[]}]},{value:"\u5176\u4ed6\u63a5\u53e3",id:"\u5176\u4ed6\u63a5\u53e3",children:[]},{value:"\u6a21\u5757\u62d3\u6251",id:"\u6a21\u5757\u62d3\u6251",children:[]}],p={toc:s};function f(e){var t=e.components,c=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u786c\u4ef6\u89c4\u683c"},"\u786c\u4ef6\u89c4\u683c"),(0,a.kt)("h2",{id:"can-\u603b\u7ebf"},"CAN \u603b\u7ebf"),(0,a.kt)("h3",{id:"\u5167\u7f6e-can"},"\u5167\u7f6e CAN"),(0,a.kt)("p",null,"Jetson AGX Xavier/NX/TX2 \u548c \u5999\u7b972-G\uff08TX2\uff09\u90fd\u5177\u6709\u4e24\u4e2a build-in \u7684 CAN \u603b\u7ebf\u63a5\u53e3\u3002\u4e0b\u56fe\u4e2d ",(0,a.kt)("strong",{parentName:"p"},"9")," \u5c55\u793a\u4e86 \u5999\u7b972 \u7684\u5185\u7f6eCAN\u7684\u7269\u7406\u63a5\u53e3\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"manifold2",src:r(6375).Z})," "),(0,a.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86\u81ea\u5236\u7684 Jetson AGX Xavier \u63a5\u7ebf\u677f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"jeston_agx",src:r(3105).Z})," "),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u65b9\u5f0f\u90fd\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u901a\u8fc7 Linux \u4e3b\u7ebf\u63d0\u4f9b\u7684 SocketCAN \u673a\u5236\u4f7f\u7528CAN\u63a5\u53e3\u3002"),(0,a.kt)("h3",{id:"usb-\u8f6c-can"},"USB \u8f6c CAN"),(0,a.kt)("p",null,"\u6211\u4eec\u8fd8\u7ed9 Intel NUC \u548c\u961f\u5458\u7684\u8c03\u8bd5\u7535\u8111\u5f00\u53d1\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rm-controls/rm_usb2can"},"USB \u8f6c CAN \u6a21\u5757")," \uff0c\u8be5\u6a21\u5757\u7684\u9a71\u52a8\u5df2\u7ecf\u88ab\u5305\u542b\u8fdb Linux \u4e3b\u7ebf\uff0c\u4ec5\u9700\u63d2\u4e0a\u5c31\u53ef\u4ee5\u901a\u8fc7 SocketCAN \u8bbf\u95ee CAN\u3002\n\u4e0b\u56fe\u5c55\u793a\u4e86\uff1a\u4f7f\u7528 NUC ",(0,a.kt)("a",{parentName:"p",href:"https://www.intel.com/content/www/us/en/support/articles/000006933/intel-nuc.html"},"\u4e3b\u677f\u4e0a\u7684 USB 1.25mm \u7aef\u5b50")," \u7a33\u5b9a\u8fde\u63a5 USB \u8f6c CAN \u6a21\u5757\u3002\n",(0,a.kt)("img",{alt:"Intel NUC with usb2can",src:r(2933).Z})," "),(0,a.kt)("h2",{id:"\u5176\u4ed6\u63a5\u53e3"},"\u5176\u4ed6\u63a5\u53e3"),(0,a.kt)("p",null,"GPIO\u3001PWM\u3001I2C \u63a5\u53e3\u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"TODO"},"road map"),"\u3002"),(0,a.kt)("h2",{id:"\u6a21\u5757\u62d3\u6251"},"\u6a21\u5757\u62d3\u6251"),(0,a.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u7684\u662f\u6574\u8f66\u57fa\u672c\u786c\u4ef6\u62d3\u6251\u6846\u56fe\uff08\u5de5\u7a0b\u673a\u5668\u4eba\u6574\u8f66\u62d3\u6251\u7684\u5dee\u5f02\u8f83\u5927\uff0c\u5728\u6b64\u4e0d\u7ed9\u51fa\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hardware_typology_schematic",src:r(4225).Z})," "),(0,a.kt)("p",null,"\u673a\u5668\u4eba\u57fa\u672c\u786c\u4ef6\u62d3\u6251\u7ed3\u6784\u662f\u4ee5\u4e91\u53f0\u548c\u5e95\u76d8\u4e24\u5927\u90e8\u5206\u7ec4\u6210\u7684\uff0c\u8fd9\u4e24\u4e2a\u90e8\u5206\u4ee5\u5bfc\u7535\u6ed1\u73af\u4e3a\u5206\u5272\u7ebf\u9694\u5f00\u3002\u8f66\u4e0a\u768412V\u300119V\u30015V\u30013.3V\u7535\u538b\u7ec4\u5206\u522b\u7531LM25116\u3001LM3150\u3001SY8303\u3001RT9193\u63d0\u4f9b\u3002"))}f.isMDXComponent=!0},4225:function(e,t,r){t.Z=r.p+"assets/images/hardware_typology_schematic-e0ff686695cf8d8744705ae962415974.png"},3105:function(e,t,r){t.Z=r.p+"assets/images/jeston_agx-bc73cdec8eb3153e264d084a1c176091.jpg"},6375:function(e,t,r){t.Z=r.p+"assets/images/manifold2-c02fc91881b83c14cf082845e7fd599e.png"},2933:function(e,t,r){t.Z=r.p+"assets/images/nuc_with_usb2can-838371ce5dd5c1a6e7ade60ce66ea5d6.jpg"}}]);