(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(55)},24:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(13),i=a.n(s),o=(a(24),a(3)),l=a.n(o),u=(a(27),a(30),a(8)),m=a(4),d=a(14),v=a.n(d),f=a(10),p=a(6),h=(n=35,Array.from({length:n},function(){return _()})),g=l.a.mapKeys(h,"user_id"),E=function(e){var t={};return l.a.forEach(h,function(a){var n;t[a.user_id]=Object(m.a)({},l.a.mapKeys((n=e,Array.from({length:n},function(e,t){return{number:t,text:Object(f.sentence)(),is_user_msg:p.a.random.boolean()}})),"number"))}),t};_(),E(10);function _(){return{name:p.a.name.findName(),email:p.a.internet.email(),profile_pic:p.a.internet.avatar(),status:Object(f.sentence)(),user_id:v.a.generate()}}var y=a(5),b="SET_ACTIVE_USER_ID",w="SET_TYPING_VALUE",N="SEND_MESSAGE",U="DELETE_CHAT",I="EDIT_CHAT";var k=Object(u.a)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_();return arguments.length>1&&arguments[1],e},messages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E(10),t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:var a=t.payload,n=a.message,r=a.userId,c=a.chatId,s=e[r],i=c||+l.a.keys(s).pop()+1;return Object(m.a)({},e,Object(y.a)({},r,Object(m.a)({},s,Object(y.a)({},i,{number:i,text:c?n.concat(" (edited)"):n,is_user_msg:!0}))));case U:var o=t.payload.number,u=t.payload.activeUserId;return Object(m.a)({},e,Object(y.a)({},u,l.a.omit(e[u],o)));default:return e}},typing:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.payload;case N:return"";case I:return t.payload.text;default:return e}},contacts:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:g},activeUserId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.payload;default:return e}},activeChatId:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return t.payload.number;default:return e}}}),j=Object(u.b)(k),C=function(e){return{type:b,payload:e}};function O(e){var t=e.user_id;j.dispatch(C(t))}var S=function(e){var t=e.user,a=t.name,n=t.profile_pic;return c.a.createElement("div",{className:"User",onClick:O.bind(null,t)},c.a.createElement("div",{className:"User__pic-container"},c.a.createElement("img",{src:n,alt:a,className:"User__pic"}),c.a.createElement("div",{className:"User__status"})),c.a.createElement("div",{className:"User__details"},c.a.createElement("p",{className:"User__details-name"},a)))},T=(a(41),function(e){var t=e.contacts;return c.a.createElement("aside",{className:"Sidebar"},t.map(function(e){return c.a.createElement(S,{user:e,key:e.user_id})}))}),A=(a(43),a(45),function(){return c.a.createElement("div",{className:"Empty"},c.a.createElement("h1",{className:"Empty__name"},"Welcome, ","Adnen"," "),c.a.createElement("img",{src:"https://avatars1.githubusercontent.com/u/11591834?s=460&v=4",alt:"Adnen",className:"Empty__img"}),c.a.createElement("p",{className:"Empty__status"},c.a.createElement("b",null,"Status:")," ","You can never understand everything. But, you should push yourself to understand the system 'Ryan Dhal'"),c.a.createElement("p",{className:"Empty__info"},"Search for someone to start chatting with or go to Contacts to see who is available"))});a(47);var D=function(e){var t=e.user,a=t.name,n=t.profile_pic,r=t.status;return c.a.createElement("header",{className:"Header"},c.a.createElement("div",{className:"User__pic-container Header__img"},c.a.createElement("img",{src:n,alt:a,className:"User__pic"}),c.a.createElement("div",{className:"User__status"})),c.a.createElement("div",{className:"user__detail"},c.a.createElement("h1",{className:"Header__name"},a),c.a.createElement("p",{className:"Header__status"},r)))},R=a(1),x=a(2),H=a(17),W=a(16),B=a(18),M=(a(49),function(e){var t=j.getState().activeUserId;j.dispatch(function(e,t){return{type:U,payload:{number:e,activeUserId:t}}}(e,t))}),L=function(e,t,a){var n=j.getState().activeUserId;j.dispatch(function(e,t,a){return{type:I,payload:{number:e,activeUserId:t,text:a}}}(e,n,t))},G=function(e){var t=e.message,a=t.number,n=t.text;return t.is_user_msg?c.a.createElement("div",{className:"Chat is-user-msg",onDoubleClick:L.bind(null,a,n)},c.a.createElement("span",{className:"Chat__close",onClick:M.bind(null,a)},"X"),n):c.a.createElement("span",{className:"Chat"},n)},J=function(e){function t(e){var a;return Object(R.a)(this,t),(a=Object(H.a)(this,Object(W.a)(t).call(this,e))).scrollToBottom=function(){a.chatsRef.current.scrollTop=a.chatsRef.current.scrollHeight},a.chatsRef=c.a.createRef(),a}return Object(B.a)(t,e),Object(x.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){return c.a.createElement("div",{className:"Chats",ref:this.chatsRef},this.props.messages.map(function(e){return c.a.createElement(G,{message:e,key:e.number})}))}}]),t}(r.Component),K=(a(51),function(e){var t=e.value,a=j.getState();return c.a.createElement("form",{className:"Message",onSubmit:function(e){e.preventDefault();var t=a.typing,n=a.activeUserId,r=a.activeChatId;j.dispatch({type:N,payload:{message:t,userId:n,chatId:r}})}},c.a.createElement("input",{className:"Message__input",onChange:function(e){var t;j.dispatch((t=e.target.value,{type:w,payload:t}))},value:t,placeholder:"write a message"}))}),V=(a(53),function(e){var t=e.activeUserId,a=j.getState(),n=a.contacts[t],r=a.messages[t],s=a.typing;return c.a.createElement("div",{className:"ChatWindow"},c.a.createElement(D,{user:n}),c.a.createElement(J,{messages:l.a.values(r)}),c.a.createElement(K,{value:s}))}),Y=function(e){var t=e.user,a=e.activeUserId;return c.a.createElement("main",{className:"Main"},a?c.a.createElement(V,{activeUserId:a}):c.a.createElement(A,{user:t}))},P=function(){var e=j.getState(),t=e.contacts,a=e.user,n=e.activeUserId;return c.a.createElement("div",{className:"App"},c.a.createElement(T,{contacts:l.a.values(t)}),c.a.createElement(Y,{user:a,activeUserId:n}))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var $=function(){return i.a.render(c.a.createElement(P,null),document.getElementById("root"))};$(),j.subscribe($),function(){if("serviceWorker"in navigator){if(new URL("/messaging-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/messaging-app","/service-worker.js");Q?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):X(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):X(e)})}}()}},[[19,2,1]]]);
//# sourceMappingURL=main.82e5c9ac.chunk.js.map