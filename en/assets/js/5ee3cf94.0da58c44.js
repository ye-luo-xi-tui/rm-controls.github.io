"use strict";(self.webpackChunkrm_controls_docs=self.webpackChunkrm_controls_docs||[]).push([[169],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=c(r),u=a,g=s["".concat(o,".").concat(u)]||s[u]||k[u]||p;return r?n.createElement(g,l(l({ref:t},m),{},{components:r})):n.createElement(g,l({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,l=new Array(p);l[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<p;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9850:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var n=r(7462),a=r(3366),p=(r(7294),r(3905)),l=["components"],i={},o="\u5b9e\u65f6\u5185\u6838\u7684\u7f16\u8bd1",c={unversionedId:"digging_deeper/rt_kernel",id:"digging_deeper/rt_kernel",isDocsHomePage:!1,title:"\u5b9e\u65f6\u5185\u6838\u7684\u7f16\u8bd1",description:"RT-Preempt Patch\u662f\u5728Linux\u793e\u533akernel\u7684\u57fa\u7840\u4e0a\uff0c\u52a0\u4e0a\u76f8\u5173\u7684\u8865\u4e01\uff0c\u4ee5\u4f7f\u5f97Linux\u6ee1\u8db3\u786c\u5b9e\u65f6\u7684\u9700\u6c42\u3002\u4e0b\u9762\u662f\u7f16\u8bd1\u914d\u7f6eRT linux\u5185\u6838\u7684\u6d41\u7a0b\uff0c\u4ee5\u5185\u68385.6.19\u4e3a\u4f8b\u3002",source:"@site/current_docs/digging_deeper/rt_kernel.md",sourceDirName:"digging_deeper",slug:"/digging_deeper/rt_kernel",permalink:"/rm-controls-docs/en/digging_deeper/rt_kernel",editUrl:"https://github.com/rm-controls/rm-controls-docs/current_docs/digging_deeper/rt_kernel.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Here is theory lover corner",permalink:"/rm-controls-docs/en/digging_deeper/theory/theory_lover"}},m=[{value:"\u4e0b\u8f7d\u5185\u6838\u53cart\u8865\u4e01",id:"\u4e0b\u8f7d\u5185\u6838\u53cart\u8865\u4e01",children:[]},{value:"\u914d\u7f6e\u5185\u6838",id:"\u914d\u7f6e\u5185\u6838",children:[]},{value:"\u5185\u6838\u7f16\u8bd1",id:"\u5185\u6838\u7f16\u8bd1",children:[]},{value:"\u9519\u8bef\u5408\u96c6",id:"\u9519\u8bef\u5408\u96c6",children:[]}],k={toc:m};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,p.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"\u5b9e\u65f6\u5185\u6838\u7684\u7f16\u8bd1"},"\u5b9e\u65f6\u5185\u6838\u7684\u7f16\u8bd1"),(0,p.kt)("p",null,"RT-Preempt Patch\u662f\u5728Linux\u793e\u533akernel\u7684\u57fa\u7840\u4e0a\uff0c\u52a0\u4e0a\u76f8\u5173\u7684\u8865\u4e01\uff0c\u4ee5\u4f7f\u5f97Linux\u6ee1\u8db3\u786c\u5b9e\u65f6\u7684\u9700\u6c42\u3002\u4e0b\u9762\u662f\u7f16\u8bd1\u914d\u7f6eRT linux\u5185\u6838\u7684\u6d41\u7a0b\uff0c\u4ee5\u5185\u68385.6.19\u4e3a\u4f8b\u3002"),(0,p.kt)("h2",{id:"\u4e0b\u8f7d\u5185\u6838\u53cart\u8865\u4e01"},"\u4e0b\u8f7d\u5185\u6838\u53cart\u8865\u4e01"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u65b0\u5efa\u6587\u4ef6\u5939\uff0c\u7528\u4e8e\u5b58\u653e\u5185\u6838\u53ca\u8865\u4e01"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/rt-kernel && cd ~/rt-kernel\n")),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"[!Tip]"),(0,p.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u5916\u7f51\u8bbf\u95ee\uff0c\u82e5\u65e0\u5916\u7f51\u5219\u4f7f\u7528\u624b\u673a\u70ed\u70b9\u8bbf\u95ee\u3002"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4e0b\u8f7d",(0,p.kt)("a",{parentName:"p",href:"https://mirrors.edge.kernel.org/pub/linux/kernel/projects/rt/"},"rt\u8865\u4e01"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u4e0b\u8f7d",(0,p.kt)("a",{parentName:"p",href:"https://mirrors.edge.kernel.org/pub/linux/kernel/v5.x/"},"\u5185\u6838\u6e90\u7801")),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"[!Warning]"),(0,p.kt)("p",{parentName:"blockquote"},"\u5185\u6838\u7248\u672c\u4e0e\u8865\u4e01\u7248\u672c\u9700\u8981\u4e25\u683c\u5bf9\u5e94\u3002"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u6253\u8865\u4e01"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libncurses-dev #\u5b89\u88c5\u4f9d\u8d56\u9879\ntar -xzvf linux-5.6.19.tar.gz #\u89e3\u538b\u5185\u6838\ngunzip patch-5.6.19-rt12.patch.gz #\u89e3\u538b\u8865\u4e01\ncd linux-5.6.19/\npatch -p1 < ../patch-5.6.19-rt12.patch #\u6253\u8865\u4e01\n")),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"[!Note]"),(0,p.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4f7f\u7528\u7684\u5185\u6838\u662flinux-5.6.19.tar.gz\uff0crt\u8865\u4e01\u662fpatch-5.6.19-rt12.patch.gz\u3002")))),(0,p.kt)("h2",{id:"\u914d\u7f6e\u5185\u6838"},"\u914d\u7f6e\u5185\u6838"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u6253\u5f00\u5185\u6838\u914d\u7f6e\u754c\u9762"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"make menuconfig\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9009General setup\uff0c\u5982\u679c\u5185\u6838\u7248\u672c\u8001\u4e00\u70b9\u6ca1\u6709\u4e0b\u4e00\u6b65\u4e2d\u7684\u9009\u9879\u7684\u8bdd\u9009Processor Type and features"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/489e6a9ff0a684f1.png",alt:"\u56fe1"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9009Preemption Model (Voluntary Kernel Preemption (Desktop))"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/1b18aa2359246159.png",alt:"\u56fe2"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9009Fully Preemptible Kernel (RT)\uff0c\u7136\u540e\u4e00\u76f4\u6309esc\u952e\u8fd4\u56de\u81f3\u4e3b\u9875\u9762"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/66924a6b92b55753.png",alt:"\u56fe3"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9009Kernel hacking"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/e1c825922419dbb8.png",alt:"\u56fe4"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u9009Memory Debugging"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/10/4b59c4383bb00e15.png",alt:"\u56fe5"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u53d6\u6d88\u9009\u62e9Check for stack overflows\uff0c\u672c\u6765\u5c31\u6ca1\u6709\u9009\u62e9\u53ef\u4ee5\u5ffd\u7565")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u6309\u4e0b\u2018/\u2019\u641c\u7d22DEBUG_INFO"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/11/0fe2f71cd666f178.png",alt:"\u56fe6"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u6309\u4e0b\u20181\u2019"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/11/94f53ecb38a69642.png",alt:"\u56fe7"}))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u5728Compile the kernel with debug info\u9009\u9879\u4e0a\u6309\u4e0b\u2018n\u2019\uff0c\u53d6\u6d88\u7f16\u8bd1\u65f6\u4ea7\u751fdebug\u6587\u4ef6"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{parentName:"p",src:"https://ftp.bmp.ovh/imgs/2020/11/f90a6d57f2800bf1.png",alt:"\u56fe8"})),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"[!Tip]"),(0,p.kt)("p",{parentName:"blockquote"},"\u7f16\u8bd1\u5185\u6838\u4f1a\u4ea7\u751f\u4e00\u4e2a\u6781\u5927\u7684debug\u6587\u4ef6\uff0c\u5b9e\u9645\u5b89\u88c5\u65f6\u65e0\u9700\u4f7f\u7528\u8be5\u6587\u4ef6\uff0c\u6545\u53ef\u76f4\u63a5\u963b\u6b62\u5176\u751f\u6210")))),(0,p.kt)("h2",{id:"\u5185\u6838\u7f16\u8bd1"},"\u5185\u6838\u7f16\u8bd1"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u7f16\u8bd1\u5e76\u5b89\u88c5\u5185\u6838"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"CONFIG_DEBUG_INFO=n #\u963b\u6b62\u7f16\u8bd1\u4ea7debug\u6587\u4ef6\nmake -j`nproc` && make -j`nproc` bindeb-pkg #\u7f16\u8bd1\u5e76\u6253\u5305\n")),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"[!Tip]"),(0,p.kt)("p",{parentName:"blockquote"},"'nproc'\u4e3acpu\u7ebf\u7a0b\u6570\uff0c\u4f7f\u7528nproc\u547d\u4ee4\u53ef\u67e5\u770b\uff0c\u5982cpu\u4e3a4\u7ebf\u7a0b\uff0c\u5219make -j'nproc'=make -j4")),(0,p.kt)("p",{parentName:"li"},"\u7136\u540e\u4f60\u5c06\u83b7\u5f97"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"linux-firmware-image-5.6.19-rt12_5.6.19-rt12-1_amd64.deb\nlinux-headers-5.6.19-rt12_5.6.19-rt12-1_amd64.deb\nlinux-image-5.6.19-rt12_5.6.19-rt12-1_amd64.deb\nlinux-libc-dev_5.6.19-rt12-1_amd64.deb\n")),(0,p.kt)("blockquote",{parentName:"li"},(0,p.kt)("p",{parentName:"blockquote"},"[!Tip]"),(0,p.kt)("p",{parentName:"blockquote"},"\u6b64\u65f6\u53ef\u7528U\u76d8\u62f7\u8d1d.deb\u5305\u81f3\u5176\u4ed6\u8bbe\u5907\u8fdb\u884c\u5b89\u88c5\uff0c\u4e14\u65e0\u9700\u518d\u6b21\u7f16\u8bd1")),(0,p.kt)("p",{parentName:"li"},"\u8fdb\u5165\u8f6f\u4ef6\u5305\u7684\u6587\u4ef6\u5939\u5e76\u5b89\u88c5\u5185\u6838"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dpkg -i linux-*.deb\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u66f4\u65b0grub\u5e76\u91cd\u542f"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-grub\nsudo reboot\n"))),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u67e5\u770b\u5185\u6838\u7248\u672c"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"uname -a\n")),(0,p.kt)("p",{parentName:"li"},"\u6b64\u65f6\u53ef\u4ee5\u770b\u5230\u5185\u6838\u7248\u672c\u4e2d\u6709'PREEMPT RT'\u6807\u8bc6"))),(0,p.kt)("h2",{id:"\u9519\u8bef\u5408\u96c6"},"\u9519\u8bef\u5408\u96c6"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u6253\u5f00\u5185\u6838\u914d\u7f6e\u754c\u9762menuconfig"),(0,p.kt)("p",{parentName:"li"},"Q1:\uff08linux-4.17.2\u5185\u6838\u4e3a\u4f8b\uff09"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"root@simon-virtual-machine:/home/simon/Src/linux-4.17.2# make menuconfig\nYACC scripts/kconfig/zconf.tab.c\n/bin/sh: 1: bison: not found\nscripts/Makefile.lib:196: recipe for target 'scripts/kconfig/zconf.tab.c' failed\nmake[1]: *** [scripts/kconfig/zconf.tab.c] Error 127\nMakefile:528: recipe for target 'menuconfig' failed\nmake: *** [menuconfig] Error 2\n")),(0,p.kt)("p",{parentName:"li"},"A1\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install bison -y\n")),(0,p.kt)("p",{parentName:"li"},"Q2\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"root@simon-virtual-machine:/home/simon/Src/linux-4.17.2# make menuconfig\nYACC scripts/kconfig/zconf.tab.c\nLEX scripts/kconfig/zconf.lex.c\n/bin/sh: 1: flex: not found\nscripts/Makefile.lib:188: recipe for target 'scripts/kconfig/zconf.lex.c' failed\nmake[1]: *** [scripts/kconfig/zconf.lex.c] Error 127\nMakefile:528: recipe for target\n")),(0,p.kt)("p",{parentName:"li"},"A2\uff1a"),(0,p.kt)("pre",{parentName:"li"},(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install flex\n")))))}s.isMDXComponent=!0}}]);