"use strict";(self.webpackChunkmongodb_memory_server_website=self.webpackChunkmongodb_memory_server_website||[]).push([[898],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,g=c["".concat(l,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"mongo-memory-server",title:"MongoMemoryServer"},l=void 0,p={unversionedId:"api/classes/mongo-memory-server",id:"api/classes/mongo-memory-server",title:"MongoMemoryServer",description:"API Documentation of MongoMemoryServer-Class",source:"@site/../docs/api/classes/mongo-memory-server.md",sourceDirName:"api/classes",slug:"/api/classes/mongo-memory-server",permalink:"/mongodb-memory-server/docs/api/classes/mongo-memory-server",draft:!1,editUrl:"https://github.com/nodkz/mongodb-memory-server/edit/master/docs/../docs/api/classes/mongo-memory-server.md",tags:[],version:"current",frontMatter:{id:"mongo-memory-server",title:"MongoMemoryServer"},sidebar:"api",previous:{title:"Config Options",permalink:"/mongodb-memory-server/docs/api/config-options"},next:{title:"MongoMemoryReplSet",permalink:"/mongodb-memory-server/docs/api/classes/mongo-memory-replset"}},d={},m=[{value:"Functions",id:"functions",level:2},{value:"new",id:"new",level:3},{value:"create",id:"create",level:3},{value:"stateChange",id:"statechange",level:3},{value:"start",id:"start",level:3},{value:"getNewPort",id:"getnewport",level:3},{value:"getStartOptions",id:"getstartoptions",level:3},{value:"_startUpInstance",id:"_startupinstance",level:3},{value:"stop",id:"stop",level:3},{value:"cleanup",id:"cleanup",level:3},{value:"ensureInstance",id:"ensureinstance",level:3},{value:"getUri",id:"geturi",level:3},{value:"createAuth",id:"createauth",level:3},{value:"Values",id:"values",level:2},{value:"instanceInfo",id:"instanceinfo",level:3},{value:"_instanceInfo",id:"_instanceinfo",level:3},{value:"opts",id:"opts",level:3},{value:"state",id:"state",level:3},{value:"_state",id:"_state",level:3},{value:"auth",id:"auth",level:3}],c={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API Documentation of ",(0,i.kt)("inlineCode",{parentName:"p"},"MongoMemoryServer"),"-Class"),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"new"},"new"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"constructor(opts?: MongoMemoryServerOpts)")),(0,i.kt)("p",null,"Create an new Instance without starting it"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"When directly starting the instance, ",(0,i.kt)("a",{parentName:"p",href:"#create"},(0,i.kt)("inlineCode",{parentName:"a"},"create"))," should be used"))),(0,i.kt)("h3",{id:"create"},"create"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"static async create(opts?: MongoMemoryServerOpts): Promise<MongoMemoryServer>")),(0,i.kt)("p",null,"Create an new Instance and start it (while being an Promise)"),(0,i.kt)("h3",{id:"statechange"},"stateChange"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected stateChange(newState: MongoMemoryServerStates): void")),(0,i.kt)("p",null,"Used to change the state of the class, it is ",(0,i.kt)("inlineCode",{parentName:"p"},"protected")," to not accidentally use it"),(0,i.kt)("h3",{id:"start"},"start"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async start(forceSamePort: boolean = false): Promise<boolean>")),(0,i.kt)("p",null,"Used to start an new Instance or to Re-Start an stopped instance"),(0,i.kt)("p",null,"with ",(0,i.kt)("inlineCode",{parentName:"p"},"forceSamePort")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and having ",(0,i.kt)("inlineCode",{parentName:"p"},"instance.port")," set, it will use that port and not generate a new port.",(0,i.kt)("br",{parentName:"p"}),"\n","with ",(0,i.kt)("inlineCode",{parentName:"p"},"forceSamePort")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and not having ",(0,i.kt)("inlineCode",{parentName:"p"},"instance.port")," set, it will generate a new free port.  "),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Will Error if instance is already running"))),(0,i.kt)("h3",{id:"getnewport"},"getNewPort"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected async getNewPort(port?: number): Promise<number>")),(0,i.kt)("p",null,"Finds an new non-locked port"),(0,i.kt)("h3",{id:"getstartoptions"},"getStartOptions"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected async getStartOptions(forceSamePort: boolean = false): Promise<MongoMemoryServerGetStartOptions>")),(0,i.kt)("p",null,"with ",(0,i.kt)("inlineCode",{parentName:"p"},"forceSamePort")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and having ",(0,i.kt)("inlineCode",{parentName:"p"},"instance.port")," set, it will use that port and not generate a new port.",(0,i.kt)("br",{parentName:"p"}),"\n","with ",(0,i.kt)("inlineCode",{parentName:"p"},"forceSamePort")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and not having ",(0,i.kt)("inlineCode",{parentName:"p"},"instance.port")," set, it will generate a new free port.  "),(0,i.kt)("p",null,"Constructs the Starting Options"),(0,i.kt)("h3",{id:"_startupinstance"},"_startUpInstance"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async _startUpInstance(forceSamePort: boolean = false): Promise<void>")),(0,i.kt)("p",null,"Internal Functions used by ",(0,i.kt)("a",{parentName:"p",href:"#start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))),(0,i.kt)("h3",{id:"stop"},"stop"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async stop(cleanupOptions?: Cleanup): Promise<boolean>")),(0,i.kt)("p",null,"Stop an running instance, this function will by default call ",(0,i.kt)("a",{parentName:"p",href:"#cleanup"},(0,i.kt)("inlineCode",{parentName:"a"},".cleanup"))," with ",(0,i.kt)("inlineCode",{parentName:"p"},"{ doCleanup: true, force: false }"),"."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"cleanupOptions")," options for cleanup can be manually set."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Will not Error if instance is not running"))),(0,i.kt)("h3",{id:"cleanup"},"cleanup"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async cleanup(options?: Cleanup): Promise<void>")),(0,i.kt)("p",null,"Cleanup all files used by this instance, by default ",(0,i.kt)("inlineCode",{parentName:"p"},"{ doCleanup: true, force: false }")," is used."),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"options")," can be set how to run a cleanup."),(0,i.kt)("h3",{id:"ensureinstance"},"ensureInstance"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async ensureInstance(): Promise<MongoInstanceData>")),(0,i.kt)("p",null,"Ensure that the instance is running, will run ",(0,i.kt)("a",{parentName:"p",href:"#start"},(0,i.kt)("inlineCode",{parentName:"a"},"start"))," if stopped, will wait if state is ",(0,i.kt)("inlineCode",{parentName:"p"},"starting")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Will Error if instance cannot be started"))),(0,i.kt)("h3",{id:"geturi"},"getUri"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"getUri(otherDbName?: string, otherIp?: string): string")),(0,i.kt)("p",null,"Get an mongodb-usable uri (can also be used in mongoose)"),(0,i.kt)("p",null,"When no arguments are set, the URI will always use ip ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and end with ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," (not setting a database).",(0,i.kt)("br",{parentName:"p"}),"\n","When setting ",(0,i.kt)("inlineCode",{parentName:"p"},"otherDbName"),", the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"otherDbName")," will be appended after ",(0,i.kt)("inlineCode",{parentName:"p"},"/")," and before any query arguments.",(0,i.kt)("br",{parentName:"p"}),"\n","When setting ",(0,i.kt)("inlineCode",{parentName:"p"},"otherIp"),", the ip will be the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"otherIp")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"."),(0,i.kt)("h3",{id:"createauth"},"createAuth"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"async createAuth(data: StartupInstanceData): Promise<void>")),(0,i.kt)("p",null,"Logs in into the currently running instance and restarts it with auth enabled"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Instance will not be restarted if the storage engine is ",(0,i.kt)("inlineCode",{parentName:"p"},"ephemeralForTest")," because data will not persist across restarts",(0,i.kt)("br",null),"\nIt is still usefull if an user is always required in connection logic and mongodb throws an error that an user does not exists / cannot login"))),(0,i.kt)("h2",{id:"values"},"Values"),(0,i.kt)("h3",{id:"instanceinfo"},"instanceInfo"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"get instanceInfo(): MongoInstanceData | undefined")),(0,i.kt)("p",null,"Getter for ",(0,i.kt)("a",{parentName:"p",href:"#_instanceInfo"},(0,i.kt)("inlineCode",{parentName:"a"},"_instanceInfo"))),(0,i.kt)("h3",{id:"_instanceinfo"},"_instanceInfo"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected _instanceInfo?: MongoInstanceData")),(0,i.kt)("p",null,"Stores the instance information"),(0,i.kt)("h3",{id:"opts"},"opts"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"opts: MongoMemoryServerOpts")),(0,i.kt)("p",null,"Store the instance options"),(0,i.kt)("h3",{id:"state"},"state"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"get state(): MongoMemoryServerStates")),(0,i.kt)("p",null,"Getter for ",(0,i.kt)("a",{parentName:"p",href:"#_state"},(0,i.kt)("inlineCode",{parentName:"a"},"_state_"))),(0,i.kt)("h3",{id:"_state"},"_state"),(0,i.kt)("span",{class:"badge badge--warning"},"Internal"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"protected _state: MongoMemoryServerStates")),(0,i.kt)("p",null,"Stores the current State"),(0,i.kt)("h3",{id:"auth"},"auth"),(0,i.kt)("p",null,"Typings: ",(0,i.kt)("inlineCode",{parentName:"p"},"readonly auth?: Required<AutomaticAuth>")),(0,i.kt)("p",null,"Stores automatic auth creation options"))}u.isMDXComponent=!0}}]);