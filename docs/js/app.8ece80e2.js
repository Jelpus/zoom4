(function(e){function t(t){for(var n,u,a=t[0],s=t[1],c=t[2],p=0,f=[];p<a.length;p++)u=a[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=o[0]))}return e}var n={},r={app:0},i=[];function u(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=n,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(o,n,function(t){return e[t]}.bind(null,n));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/zoom4/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=s;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("HelloWorld")],1)},i=[],u=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("h1",[e._v("Zoom Meeting SDK Sample Vue.js 2")]),o("button",{on:{click:e.getSignature}},[e._v("Join Meeting")])])},a=[],s=(o("a15b"),o("bc3a")),c=o.n(s),l={name:"HelloWorld",created:function(){this.ZoomMtg.setZoomJSLib("https://source.zoom.us/2.2.0/lib","/av"),this.ZoomMtg.preLoadWasm(),this.ZoomMtg.prepareWebSDK(),this.ZoomMtg.i18n.load("en-US"),this.ZoomMtg.i18n.reload("en-US")},mounted:function(){this.ZoomMtg.inMeetingServiceListener("onUserJoin",(function(e){console.log("inMeetingServiceListener onUserJoin",e)}))},data:function(){return{apiKey:"WpJmaaPiQ66fT95YZF0fFg",leaveUrl:"http://www.google.com",meetingNumber:"2881965209",passWord:"jelpus123",role:0,signatureEndpoint:"https://contacto-jelpus-zoom.herokuapp.com/",userEmail:"",userName:"Vue.js",registrantToken:""}},methods:{getSignature:function(){var e=this;c.a.post(this.signatureEndpoint,{meetingNumber:this.meetingNumber,role:this.role}).then((function(t){console.log(t.data.signature),e.startMeeting(t.data.signature)})).catch((function(e){console.log(e)}))},startMeeting:function(e){var t=this;document.getElementById("zmmtg-root").style.display="block",this.ZoomMtg.init({leaveUrl:this.leaveUrl,success:function(o){console.log(o),t.ZoomMtg.join({meetingNumber:t.meetingNumber,userName:t.userName,signature:e,apiKey:t.apiKey,userEmail:t.userEmail,passWord:t.passWord,tk:t.registrantToken,success:function(e){console.log(e)},error:function(e){console.log(e)}})},error:function(e){console.log(e)}})}}},p=l,f=(o("c21a"),o("2877")),m=Object(f["a"])(p,u,a,!1,null,"62f32b41",null),g=m.exports,d={name:"App",components:{HelloWorld:g}},h=d,b=(o("034f"),Object(f["a"])(h,r,i,!1,null,null,null)),v=b.exports;n["a"].config.productionTip=!1,n["a"].prototype.ZoomMtg=window.ZoomMtg,n["a"].prototype.ZoomMtgEmbedded=window.ZoomMtgEmbedded,new n["a"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,o){},"94f4":function(e,t,o){},c21a:function(e,t,o){"use strict";o("94f4")}});
//# sourceMappingURL=app.8ece80e2.js.map