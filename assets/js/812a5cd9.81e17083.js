"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[120],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(t),k=a,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return t?r.createElement(c,o(o({ref:n},d),{},{components:t})):r.createElement(c,o({ref:n},d))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9002:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"error-warning-details",title:"Details for Errors & Warnings"},s=void 0,p={unversionedId:"guides/error-warning-details",id:"guides/error-warning-details",title:"Details for Errors & Warnings",description:"StateError",source:"@site/../docs/guides/error-warning-details.md",sourceDirName:"guides",slug:"/guides/error-warning-details",permalink:"/mongodb-memory-server/docs/guides/error-warning-details",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/guides/error-warning-details.md",tags:[],version:"current",frontMatter:{id:"error-warning-details",title:"Details for Errors & Warnings"},sidebar:"guides",previous:{title:"Known Issues",permalink:"/mongodb-memory-server/docs/guides/known-issues"},next:{title:"Mongodb Server Versions",permalink:"/mongodb-memory-server/docs/guides/mongodb-server-versions"}},d={},u=[{value:"StateError",id:"stateerror",level:2},{value:"UnknownLockfileStatusError",id:"unknownlockfilestatuserror",level:2},{value:"UnableToUnlockLockfileError",id:"unabletounlocklockfileerror",level:2},{value:"UnknownArchitectureError",id:"unknownarchitectureerror",level:2},{value:"UnknownPlatformError",id:"unknownplatformerror",level:2},{value:"WaitForPrimaryTimeoutError",id:"waitforprimarytimeouterror",level:2},{value:"EnsureInstanceError",id:"ensureinstanceerror",level:2},{value:"NoSystemBinaryFoundError",id:"nosystembinaryfounderror",level:2},{value:"Md5CheckFailedError",id:"md5checkfailederror",level:2},{value:"StartBinaryFailedError",id:"startbinaryfailederror",level:2},{value:"InstanceInfoError",id:"instanceinfoerror",level:2},{value:"KeyFileMissingError",id:"keyfilemissingerror",level:2},{value:"AuthNotObjectError",id:"authnotobjecterror",level:2},{value:"InsufficientPermissionsError",id:"insufficientpermissionserror",level:2},{value:"BinaryNotFoundError",id:"binarynotfounderror",level:2},{value:"AssertionFallbackError",id:"assertionfallbackerror",level:2},{value:"ReplsetCountLowError",id:"replsetcountlowerror",level:2},{value:"Deprecation Codes",id:"deprecation-codes",level:2},{value:"MMS001",id:"mms001",level:3},{value:"MMS002",id:"mms002",level:3}],m={toc:u};function k(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"stateerror"},"StateError"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},'Incorrect State for operation: "${gotState}", allowed States: "[${wantedStates.join(\',\')}]"\nThis may be because of using a v6.x way of calling functions, look at the following guide if anything applies:\nhttps://nodkz.github.io/mongodb-memory-server/docs/guides/migration/migrate7#no-function-other-than-start-create-ensureinstance-will-be-starting-anything\n')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown if an function (or setter) is called, but the state is not what it should be.",(0,i.kt)("br",{parentName:"p"}),"\n","(like calling start again after already being started - or changing options while running)"),(0,i.kt)("h2",{id:"unknownlockfilestatuserror"},"UnknownLockfileStatusError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Unknown LockFile Status: "${status}"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown if an number outside the ",(0,i.kt)("inlineCode",{parentName:"p"},"LockFileStatus")," Enum is used"),(0,i.kt)("h2",{id:"unabletounlocklockfileerror"},"UnableToUnlockLockfileError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Cannot unlock file \"${file}\", because it is not locked by this ${thisInstance ? 'instance' : 'process'}")),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown when this package cannot get what platform it is running on"),(0,i.kt)("h2",{id:"unknownarchitectureerror"},"UnknownArchitectureError"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'Unsupported Architecture-Platform combination: arch: "${arch}", platform: "${platform}"')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'Unsupported Architecture: "${arch}"'))),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown when this package runs on an unsupported architecture by mongodb"),(0,i.kt)("h2",{id:"unknownplatformerror"},"UnknownPlatformError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Unknown Platform: "${platform}"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","The Platform ",(0,i.kt)("inlineCode",{parentName:"p"},"${platform}")," is not supported, only supported platform currently are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"osx")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"win32")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"windows")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"linux"))),(0,i.kt)("h2",{id:"waitforprimarytimeouterror"},"WaitForPrimaryTimeoutError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Timed out after ${timeout}ms while waiting for a Primary (where: "${where}")')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Waiting for a Primary has timedout, this originates from 4 common issues:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Starting instances failed"),(0,i.kt)("li",{parentName:"ul"},"A even number of instances started and are unable to elect a Primary"),(0,i.kt)("li",{parentName:"ul"},"Internal Problem"),(0,i.kt)("li",{parentName:"ul"},"Target System is too slow to start the number of instances")),(0,i.kt)("p",null,"Default Timeout: ",(0,i.kt)("inlineCode",{parentName:"p"},"1000 * 30")," (30 seconds)"),(0,i.kt)("h2",{id:"ensureinstanceerror"},"EnsureInstanceError"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'${baseMesasge} state was "running" but "instanceInfo" was undefined!')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'${baseMesasge} "instanceInfo" was undefined after running "start"'))),(0,i.kt)("p",null,"Details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First Error Message gets thrown when ",(0,i.kt)("inlineCode",{parentName:"li"},"ensureInstance")," is called and the ",(0,i.kt)("inlineCode",{parentName:"li"},"state")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"running"),", but somehow ",(0,i.kt)("inlineCode",{parentName:"li"},"instanceInfo")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined")),(0,i.kt)("li",{parentName:"ul"},"Second Error Message gets thrown when ",(0,i.kt)("inlineCode",{parentName:"li"},"ensureInstance")," is called and after ",(0,i.kt)("inlineCode",{parentName:"li"},"start")," was called by ",(0,i.kt)("inlineCode",{parentName:"li"},"ensureInstance")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"instanceInfo")," is still ",(0,i.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,i.kt)("p",null,"In any case this Error gets thrown, it means that some internal problem happened that was not handled with another Error, please report if your get this error and did not mock anything."),(0,i.kt)("p",null,"Also see ",(0,i.kt)("a",{parentName:"p",href:"#instanceinfoerror"},(0,i.kt)("inlineCode",{parentName:"a"},"InstanceInfoError")),"."),(0,i.kt)("h2",{id:"nosystembinaryfounderror"},"NoSystemBinaryFoundError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Config option "SYSTEM_BINARY" was provided with value "${binaryPath}", but no binary could be found!')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Config Options ",(0,i.kt)("a",{parentName:"p",href:"../api/config-options#system_binary"},(0,i.kt)("inlineCode",{parentName:"a"},"SYSTEM_BINARY"))," was set, but no binary could be found at the path ",(0,i.kt)("inlineCode",{parentName:"p"},"${binaryPath}"),".\nLikely causes are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"No Binary Exists at the specified path"),(0,i.kt)("li",{parentName:"ul"},"The Binary is does not have the necessary permissions and is so ignored (required permissions are ",(0,i.kt)("inlineCode",{parentName:"li"},"fs.constants.X_OK")," (",(0,i.kt)("inlineCode",{parentName:"li"},"--x"),"))")),(0,i.kt)("p",null,"Also see:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#insufficientpermissionserror"},(0,i.kt)("inlineCode",{parentName:"a"},"InsufficientPermissionsError"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#binarynotfounderror"},(0,i.kt)("inlineCode",{parentName:"a"},"BinaryNotFoundError")))),(0,i.kt)("h2",{id:"md5checkfailederror"},"Md5CheckFailedError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'MD5 check failed! Binary MD5 is "${binarymd5}", Checkfile MD5 is "${checkfilemd5}"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Download MD5 check was enabled (",(0,i.kt)("a",{parentName:"p",href:"../api/config-options#md5_check"},(0,i.kt)("inlineCode",{parentName:"a"},"MD5_CHECK")),") but failed, listing the local file md5 as ",(0,i.kt)("inlineCode",{parentName:"p"},"${binarymd5}")," and the downloaded md5 as ",(0,i.kt)("inlineCode",{parentName:"p"},"${checkfilemd5}")),(0,i.kt)("h2",{id:"startbinaryfailederror"},"StartBinaryFailedError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'Starting the Binary Failed (PID is undefined)! Binary: "${binary}"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Trying to start the binary ",(0,i.kt)("inlineCode",{parentName:"p"},"${binary}")," as a childprocess somehow failed by having property ",(0,i.kt)("inlineCode",{parentName:"p"},"pid")," being ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),".  "),(0,i.kt)("p",null,"Enable ",(0,i.kt)("a",{parentName:"p",href:"./enable-debug-mode"},"Debug Mode")," for more information."),(0,i.kt)("h2",{id:"instanceinfoerror"},"InstanceInfoError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'"instanceInfo" was undefined when expected to be defined! (where: "${where}")')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"instanceInfo")," was ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," when it was expected to have been defined previously. Please Report if this error gets thrown."),(0,i.kt)("p",null,"Enable ",(0,i.kt)("a",{parentName:"p",href:"./enable-debug-mode"},"Debug Mode")," for more information."),(0,i.kt)("h2",{id:"keyfilemissingerror"},"KeyFileMissingError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'"keyfileLocation" was undefined when expected!')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Option ",(0,i.kt)("inlineCode",{parentName:"p"},"keyfileLocation")," was ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," when it was needed. This Options is required when starting a ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoInstance")," and option ",(0,i.kt)("inlineCode",{parentName:"p"},"replSet")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," are set."),(0,i.kt)("h2",{id:"authnotobjecterror"},"AuthNotObjectError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'"auth" was not a object when it was expected!')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Property ",(0,i.kt)("inlineCode",{parentName:"p"},"auth")," was expect to be of type ",(0,i.kt)("inlineCode",{parentName:"p"},"object")," (transform happens in the setter for ",(0,i.kt)("inlineCode",{parentName:"p"},"replSetOpts"),"). Please Report if this error gets thrown."),(0,i.kt)("h2",{id:"insufficientpermissionserror"},"InsufficientPermissionsError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'File "${path}" does not have the required Permissions, required Permissions: "--x"')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Binary Check was conducted and found that the specified file ",(0,i.kt)("inlineCode",{parentName:"p"},"${path}")," exists, but does not have the required permissions, required permissions are ",(0,i.kt)("inlineCode",{parentName:"p"},"fs.constants.X_OK")," (",(0,i.kt)("inlineCode",{parentName:"p"},"--x"),")."),(0,i.kt)("h2",{id:"binarynotfounderror"},"BinaryNotFoundError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'No Binary at path "${path}" was found! (ENOENT)')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","Binary Check was conducted and found that the specified file ",(0,i.kt)("inlineCode",{parentName:"p"},"${path}")," did not exist (",(0,i.kt)("inlineCode",{parentName:"p"},"ENOENT"),"), this may be a result of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Binary Download failed without throwing another Error"),(0,i.kt)("li",{parentName:"ul"},"The Path generation had a problem")),(0,i.kt)("h2",{id:"assertionfallbackerror"},"AssertionFallbackError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Assert failed - no custom error")),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","This Error gets thrown when no custom error to ",(0,i.kt)("inlineCode",{parentName:"p"},"assertion")," is given, this should never happen"),(0,i.kt)("h2",{id:"replsetcountlowerror"},"ReplsetCountLowError"),(0,i.kt)("p",null,"Example: ",(0,i.kt)("inlineCode",{parentName:"p"},'ReplSet Count needs to be 1 or higher! (specified count: "${count}")')),(0,i.kt)("p",null,"Details:",(0,i.kt)("br",{parentName:"p"}),"\n","ReplSet count (like ",(0,i.kt)("inlineCode",{parentName:"p"},"new MongoMemoryReplSet({ replSet: { count: 0 } })"),") needs to be ",(0,i.kt)("inlineCode",{parentName:"p"},"1")," or higher"),(0,i.kt)("h2",{id:"deprecation-codes"},"Deprecation Codes"),(0,i.kt)("h3",{id:"mms001"},"MMS001"),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"MMS001"),(0,i.kt)("br",{parentName:"p"}),"\n","Message: ",(0,i.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server will fully drop support for ia32 in 9.0")),(0,i.kt)("p",null,"In the major version ",(0,i.kt)("inlineCode",{parentName:"p"},"9.0")," MMS will fully drop support for the architecture ",(0,i.kt)("inlineCode",{parentName:"p"},"ia32")," (",(0,i.kt)("inlineCode",{parentName:"p"},"i386")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"i686"),"), because MongoDB stopped supporting the architecture past 3.x, and MMS never full supported 3.6 or lower anyway, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodkz/mongodb-memory-server/issues/638"},"this issue #638 for tracking"),"."),(0,i.kt)("h3",{id:"mms002"},"MMS002"),(0,i.kt)("p",null,"Code: ",(0,i.kt)("inlineCode",{parentName:"p"},"MMS002"),(0,i.kt)("br",{parentName:"p"}),"\n","Message: ",(0,i.kt)("inlineCode",{parentName:"p"},"mongodb-memory-server will fully drop support for sunos in 9.0")),(0,i.kt)("p",null,"In the major version ",(0,i.kt)("inlineCode",{parentName:"p"},"9.0")," MMS will fully drop support for the platfrom ",(0,i.kt)("inlineCode",{parentName:"p"},"sunos"),", because MMS never actually supported ",(0,i.kt)("inlineCode",{parentName:"p"},"sunos")," in the first place and Mongodb has stopped providing builds after ~3.4, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nodkz/mongodb-memory-server/issues/661"},"#661 for tracking"),"."))}k.isMDXComponent=!0}}]);