(this.webpackJsonpfokus=this.webpackJsonpfokus||[]).push([[0],{38:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(1),i=t.n(a),c=t(10),o=t.n(c),s=(t(38),t(4)),d=t(9),u=t(8),l=t(32),f=t(6),b=t(12),j=Object(b.b)({name:"tasks",initialState:{taskArray:[],meta:{globalKey:0,completedTaskStartIndex:-1}},reducers:{create:function(n,e){var t=e.payload;n.taskArray.unshift(t),-1!=n.meta.completedTaskStartIndex&&++n.meta.completedTaskStartIndex},remove:function(n,e){var t=e.payload;n.taskArray=n.taskArray.filter((function(e){return e.id!==t||(e.isCompleted?n.meta.completedTaskStartIndex==n.taskArray.length-1&&(n.meta.completedTaskStartIndex=-1):-1!=n.meta.completedTaskStartIndex&&--n.meta.completedTaskStartIndex,!1)}))},updateTask:function(n,e){var t=e.payload;n.taskArray=n.taskArray.map((function(n){return n.id===t.id?t:n}))},updateTaskContent:function(n,e){var t=n.taskArray,r=e.payload;t.forEach((function(n){n.id===r.id&&(n.content=r.updatedTaskContent)}))},updateOrder:function(n,e){var t=e.payload;n.taskArray=t},toggleIsCompleted:function(n,e){var t=n.taskArray,r=e.payload;t.forEach((function(n){n.id===r&&(n.isCompleted=!n.isCompleted)}))},incrementGlobalKey:function(n){++n.meta.globalKey},rearrange:function(n,e){var t=e.payload,r=t.id;if(t.markedAsComplete)if(-1===n.meta.completedTaskStartIndex){n.meta.completedTaskStartIndex=n.taskArray.length-1;for(var a=!1,i=0;i<n.taskArray.length-1;i++)if(a){var c=n.taskArray[i];n.taskArray[i]=n.taskArray[i+1],n.taskArray[i+1]=c}else if(n.taskArray[i].id===r){a=!0;var o=n.taskArray[i];n.taskArray[i]=n.taskArray[i+1],n.taskArray[i+1]=o}n.meta.completedTaskStartIndex=n.taskArray.length-1}else{for(var s,d,u=0;u<n.taskArray.length;u++)if(n.taskArray[u].id===r){s=n.taskArray[u],d=u;break}for(var l=-1,f=n.meta.completedTaskStartIndex;f<n.taskArray.length;f++)if(!(n.taskArray[f].globalKey>s.globalKey)){l=f;break}-1===l?n.taskArray.push(s):n.taskArray.splice(l,0,s),n.taskArray.splice(d,1),n.meta.completedTaskStartIndex-=1}else{if(0==n.meta.completedTaskStartIndex){for(var b,j,p=n.meta.completedTaskStartIndex;p<n.taskArray.length;p++)if(n.taskArray[p].id===r){b=n.taskArray[p],j=p;break}n.taskArray.splice(j,1),n.taskArray.unshift(b),n.meta.completedTaskStartIndex=1}else{for(var x,m,h=n.meta.completedTaskStartIndex;h<n.taskArray.length;h++)if(n.taskArray[h].id===r){x=n.taskArray[h],m=h;break}for(var g=-1,k=n.meta.completedTaskStartIndex-1;k>=0;k--)if(!(n.taskArray[k].globalKey<x.globalKey)){g=k;break}n.taskArray.splice(m,1),-1===g?n.taskArray.unshift(x):(g++,n.taskArray.splice(g,0,x)),n.meta.completedTaskStartIndex+=1}n.meta.completedTaskStartIndex==n.taskArray.length&&(n.meta.completedTaskStartIndex=-1)}}}}),p=j.actions,x=p.create,m=p.remove,h=p.updateTask,g=p.updateTaskContent,k=(p.reset,p.toggleIsRunning,p.tick,p.toggleIsCompleted),O=p.updateOrder,v=p.incrementGlobalKey,y=p.rearrange,T=j.reducer,w=Object(b.b)({name:"focusBoard",initialState:{focussedTask:null},reducers:{focusOnTask:function(n,e){var t=e.payload;n.focussedTask=t},resetFocussedTask:function(n){n.focussedTask=null},tick:function(n){--n.focussedTask.remainingTime},toggleIsRunning:function(n,e){var t=e.payload;n.focussedTask.isRunning=void 0!==t?t:!n.focussedTask.isRunning},resetTask:function(n){n.focussedTask.isRunning=!1,n.focussedTask.remainingTime=n.focussedTask.time},updateTaskTime:function(n,e){var t=e.payload;n.focussedTask.time+=60*t,n.focussedTask.remainingTime+=60*t}}}),A=w.actions,C=A.focusOnTask,I=A.resetFocussedTask,S=A.tick,K=A.resetTask,R=A.toggleIsRunning,z=A.updateTaskTime,F=w.reducer,D=t(5),B=t(15),E=t(17),P=t(13),M=t(30);function N(n){var e=n%60,t=Math.floor(n/60);return 0==e?e="00":e<10&&(e="0".concat(e)),0==t?t="00":t<10&&(t="0".concat(t)),"".concat(t,":").concat(e)}function W(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 25%;\n    /* background-color: #fffa91; */\n    svg {\n        font-size: 20px;\n        margin: 5px;\n    }\n"]);return W=function(){return n},n}function G(){var n=Object(s.a)(["\n    height: 80%;\n    cursor: pointer;\n    margin-left: auto;\n    color: #d0d0d0;\n    &:hover {\n        color: #e44d2e;\n    }\n"]);return G=function(){return n},n}function J(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n    border-radius: 5px;\n    margin: 5px;\n    cursor: pointer;\n    &:hover {\n        background-color: #c0c0c0;\n    }\n    p {\n        margin: 5px;\n        font-size: 0.7em;\n    }\n"]);return J=function(){return n},n}function L(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 15%;\n    /* background-color: #f8f8ff; */\n    position: relative;\n    p {\n        margin: 5px;\n        font-size: 0.8em;\n    }\n    svg {\n        font-size: 2.5em;\n        color: ",";\n    }\n"]);return L=function(){return n},n}function U(){var n=Object(s.a)(["\n    resize: none;\n    height: 90%;\n    width: 100%;\n    font-size: 1.17em;\n    font-weight: bold;\n    overflow: hidden;\n    vertical-align: center;\n    &:focus {\n        outline: none;\n        border: 2px #7e8d9f dashed;\n        border-radius: 5px;\n    }\n"]);return U=function(){return n},n}function H(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    height: 65%;\n    margin: 0 0 0 5px;\n    word-wrap: break-word;\n    /* background-color: #fffcec; */\n    h3:hover {\n        cursor: text;\n    }\n"]);return H=function(){return n},n}function $(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 100%;\n    width: 75%;\n    margin: 0 0 0 10px;\n    /* background-color: #fff1fc; */\n"]);return $=function(){return n},n}function q(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-around;\n    flex-direction: row;\n    height: 100%;\n    width: 420px;\n    border-radius: 5px;\n    -webkit-box-shadow: ",";\n    box-shadow: ",";\n    border: ",";\n"]);return q=function(){return n},n}function Q(){var n=Object(s.a)(['\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    width: 30px;\n    height: 100%;\n    /* background-color: #ff09ac; */\n    svg {\n        cursor: url("https://ssl.gstatic.com/ui/v1/icons/mail/images/2/openhand.cur"), default !important;\n        font-size: 2em;\n        opacity: 0.6;\n    }\n']);return Q=function(){return n},n}function V(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    width: 476px;\n    height: 120px;\n    margin-top: 25px;\n    /* background-color: #fff4e1; */\n"]);return V=function(){return n},n}var X=D.a.div(V()),Y=D.a.div(Q()),Z=D.a.div(q(),(function(n){return n.isFocussed?"0 0 6px rgb(255, 216, 0, 0.6)":"0 0 4px rgb(0, 0, 0, 0.2)"}),(function(n){return n.isFocussed?"0 0 6px rgb(255, 216, 0, 0.6)":"0 0 4px rgb(0, 0, 0, 0.2)"}),(function(n){return n.isFocussed?"2px solid #ffd800":"none"})),_=D.a.div($()),nn=D.a.div(H()),en=D.a.textarea(U()),tn=D.a.div(L(),(function(n){return n.isCompleted?"#00a86b":n.isFocussed?"#ffd800":"#000"})),rn=D.a.div(J()),an=D.a.div(G()),cn=D.a.div(W());function on(n){var e,t=n.task,i=n.forwardRBDProvided,c=n.isFocussed,o=Object(f.c)(),s=Object(a.useState)(!1),l=Object(d.a)(s,2),b=l[0],j=l[1],p=Object(a.useState)(t.content),x=Object(d.a)(p,2),h=x[0],O=x[1],v=Object(a.useState)(!1),T=Object(d.a)(v,2),w=T[0],A=T[1];return Object(r.jsx)(P.a,{flipId:"".concat(t.id),children:Object(r.jsxs)(X,Object(u.a)(Object(u.a)(Object(u.a)({ref:i.innerRef},i.draggableProps),i.dragHandleProps),{},{onMouseEnter:function(){return A(!t.isCompleted&&!0)},onMouseLeave:function(){return A(!t.isCompleted&&!1)},children:[Object(r.jsx)(Y,{children:w&&Object(r.jsx)(M.a,{})}),Object(r.jsxs)(Z,{isFocussed:c,children:[Object(r.jsxs)(tn,{isFocussed:c,isCompleted:t.isCompleted,children:[t.isCompleted?Object(r.jsx)(B.a,{}):c?Object(r.jsx)(B.b,{}):Object(r.jsx)(B.c,{}),!t.isCompleted&&Object(r.jsx)("p",{children:N(t.remainingTime)})]}),Object(r.jsxs)(_,{children:[Object(r.jsx)(nn,{children:b?Object(r.jsx)(en,{autoFocus:!0,value:h,onBlur:function(){o(g({id:t.id,updatedTaskContent:h})),j(!1)},onKeyDown:function(n){if("Enter"===n.key&&h.trim().length>=3){var e=h.trim().split(" ");1===e.length||isNaN(parseInt(e[e.length-1]))||parseInt(e.pop()),e=e.join(" "),o(g({id:t.id,updatedTaskContent:h})),j(!1)}},onChange:function(n){return O(n.target.value)}}):Object(r.jsx)("h3",{style:{minWidth:0},onDoubleClick:function(){return j(!0)},children:(e=t.content,e.length<=70?e:e.substring(0,70)+"...")})}),Object(r.jsxs)(cn,{children:[!t.isCompleted&&Object(r.jsx)(rn,{onClick:function(){o(c?I():C(t))},children:Object(r.jsx)("p",{children:c?"Unfocus":"Focus"})}),Object(r.jsx)(rn,{onClick:t.isCompleted?function(n){o(k(t.id)),o(y({id:t.id,markedAsComplete:!1})),n.stopPropagation()}:function(n){o(k(t.id)),o(y({id:t.id,markedAsComplete:!0})),c&&o(I()),n.stopPropagation()},children:Object(r.jsx)("p",{children:t.isCompleted?"Undone":"Done"})}),!c&&Object(r.jsx)(an,{onClick:function(n){o(m(t.id)),n.stopPropagation(),c&&o(I())},children:Object(r.jsx)(E.c,{})})]})]})]})]}))})}var sn=t(20),dn=t(31),un=t(19);function ln(){var n=Object(s.a)(["\n    height: 100%;\n    width: 35%;\n    font-size: 1em;\n    font-weight: bold;\n    text-align:center;\n    border: 0;\n    outline: none;\n    &::-webkit-inner-spin-button,\n    &::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        margin: 0;\n    }\n"]);return ln=function(){return n},n}function fn(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    height: 80%;\n    width: 25%;\n    span {\n        font-size: 0.8em;\n        font-weight:bold;\n        color:rgb(118,118,118);\n    }\n"]);return fn=function(){return n},n}function bn(){var n=Object(s.a)(["\n    height: 100%;\n    width: 90%;\n    font-size: 1em;\n    font-weight: bold;\n    border: 0;\n    outline: none;\n"]);return bn=function(){return n},n}function jn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80%;\n    width: 70%;\n    margin-left:10px;\n    svg {\n        font-size: 1.3em;\n    }\n"]);return jn=function(){return n},n}function pn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 20px;\n    width: 476px;\n    border-bottom: 5px solid black;\n    height: 50px;\n"]);return pn=function(){return n},n}var xn=D.a.div(pn()),mn=D.a.div(jn()),hn=D.a.input(bn()),gn=D.a.div(fn()),kn=D.a.input(ln());function On(){var n,e,t=Object(a.useState)(""),i=Object(d.a)(t,2),c=i[0],o=i[1],s=Object(a.useState)(20),u=Object(d.a)(s,2),l=u[0],b=u[1],j=Object(f.d)((function(n){return n.tasks.meta})),p=Object(f.c)();function m(t){if("Enter"===t.key&&c.trim().length>=1){var r=c.trim().split(" "),a=l;1===r.length||isNaN(parseInt(r[r.length-1]))||(a=parseInt(r.pop())),r=r.join(" ");var i={id:Math.floor(1e4*Math.random()),globalKey:j.globalKey,content:r,time:60*a,remainingTime:60*a,isRunning:!1,isCompleted:!1,createdAt:(new Date).toISOString()};p(x(i)),p(v()),o(""),b(20),n.value="",e.value="",n.focus()}}return Object(r.jsxs)(xn,{children:[Object(r.jsxs)(mn,{children:[Object(r.jsx)(dn.a,{}),Object(r.jsx)(hn,{type:"text",placeholder:"i have to focus on ...",ref:function(e){return n=e},onChange:function(n){return o(n.target.value)},onKeyDown:m})]}),Object(r.jsxs)(gn,{children:[Object(r.jsx)(un.a,{}),Object(r.jsx)(kn,{type:"number",placeholder:"20",ref:function(n){return e=n},onChange:function(n){return b(n.target.value)},onKeyDown:m}),Object(r.jsx)("span",{children:"mins"})]})]})}function vn(){var n=Object(s.a)(["\n    width: 50px;\n    position: relative;\n    top: 3px;\n    color: #00a86b;\n    svg {\n        font-size: 2em;\n    }\n"]);return vn=function(){return n},n}function yn(){var n=Object(s.a)(["\n    width: 100%;\n    position: relative;\n    margin: 15px;\n    border-bottom: 5px dashed #c0c0c0;\n"]);return yn=function(){return n},n}function Tn(){var n=Object(s.a)(["\n    display: flex;\n"]);return Tn=function(){return n},n}var wn=D.a.div(Tn()),An=D.a.div(yn()),Cn=D.a.div(vn());function In(){return Object(r.jsx)(P.a,{flipId:"-1",children:Object(r.jsxs)(wn,{children:[Object(r.jsx)(An,{}),Object(r.jsx)(Cn,{children:Object(r.jsx)(B.a,{})}),Object(r.jsx)(An,{})]})})}function Sn(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 3 1 0;\n"]);return Sn=function(){return n},n}var Kn=D.a.div(Sn());function Rn(){var n=Object(f.d)((function(n){return n.tasks.taskArray})),e=Object(f.d)((function(n){return n.tasks.meta})),t=Object(f.d)((function(n){return n.focusBoard.focussedTask})),a=Object(f.c)();function i(n){return null!==t&&t.id===n}return Object(r.jsxs)(Kn,{children:[Object(r.jsx)(On,{}),Object(r.jsxs)(P.b,{flipKey:function(){var t="";return n.forEach((function(n){t+="".concat(n.globalKey)})),t+="".concat(e.completedTaskStartIndex)}(),children:[Object(r.jsx)(sn.a,{onDragEnd:function(e){if(e.destination){var t=Object(l.a)(n.map((function(n){return Object(u.a)({},n)}))),r=t.splice(e.source.index,1),i=Object(d.a)(r,1)[0];t.splice(e.destination.index,0,i);for(var c=e.source.index,o=e.destination.index>e.source.index;c!=e.destination.index;)o?(t[c].globalKey=n[c].globalKey,c++):(t[c].globalKey=n[c].globalKey,c--),c==e.destination.index&&(t[c].globalKey=n[c].globalKey);a(O(t))}},children:Object(r.jsx)(sn.c,{droppableId:"dropArea",children:function(e){return Object(r.jsxs)("div",Object(u.a)(Object(u.a)({},e.droppableProps),{},{ref:e.innerRef,children:[n.map((function(n,e){return n.isCompleted?"":Object(r.jsx)(sn.b,{isDragDisabled:n.isCompleted,draggableId:"".concat(n.id),index:e,children:function(e){return Object(r.jsx)(on,{forwardRBDProvided:e,task:n,isFocussed:i(n.id)})}},n.id)})),e.placeholder]}))}})}),-1!==e.completedTaskStartIndex&&0!==e.completedTaskStartIndex&&Object(r.jsx)(In,{}),n.map((function(n,e){return n.isCompleted?Object(r.jsx)(on,{forwardRBDProvided:{innerRef:null},task:n,isFocussed:i(n.id)},n.id):""}))]})]})}var zn=t(23),Fn=(t(45),t.p+"static/media/ding.86b39a2c.mp3");function Dn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 90%;\n    height: 20%;\n    /* background-color: #efaaa1; */\n"]);return Dn=function(){return n},n}function Bn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 90%;\n    height: 30%;\n    word-wrap: break-word;\n    /* background-color: #ffea1c; */\n"]);return Bn=function(){return n},n}function En(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    /* background-color: #ffaa1c; */\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);\n    border-radius: 50%;\n    margin: 15px;\n"]);return En=function(){return n},n}function Pn(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100px;\n    height: 100px;\n    /* background-color: #ff1c1c; */\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);\n    border-radius: 50%;\n"]);return Pn=function(){return n},n}function Mn(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 90%;\n    height: 40%;\n    /* background-color: #ffeaca; */\n"]);return Mn=function(){return n},n}function Nn(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    width: 400px;\n    height: 400px;\n    margin: 20px;\n    box-shadow: 0 0 6px rgba(0, 0, 2, 0.3);\n    /* background-color: #fffccc; */\n"]);return Nn=function(){return n},n}function Wn(){var n=Object(s.a)(["\n    flex: 2 1 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);\n    /* background-color: #f8f8ff; */\n"]);return Wn=function(){return n},n}var Gn=new Audio(Fn),Jn=D.a.div(Wn()),Ln=D.a.div(Nn()),Un=D.a.div(Mn()),Hn=D.a.div(Pn()),$n=D.a.div(En()),qn=D.a.div(Bn()),Qn=D.a.div(Dn());function Vn(){var n=Object(f.d)((function(n){return n.focusBoard.focussedTask})),e=Object(f.c)();function t(n,t){if(!n.isCompleted){e(R(!1)),e(z(t));var r=Object(u.a)({},n);r.time+=60*t,r.remainingTime+=60*t,e(h(r))}}return function(n,e){var t=Object(a.useRef)();Object(a.useEffect)((function(){t.current=n}),[n]),Object(a.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){return clearInterval(n)}}}),[e])}((function(){null!==n&&(n.remainingTime>0?e(S()):0===n.remainingTime&&(e(R()),Gn.play()))}),null!==n&&n.isRunning?1e3:null),Object(r.jsx)(Jn,{children:null!=n&&Object(r.jsx)("div",{children:Object(r.jsxs)(Ln,{children:[Object(r.jsxs)(Un,{children:[Object(r.jsx)($n,{onClick:function(){return t(n,-5)},children:Object(r.jsx)("h4",{children:"-5"})}),Object(r.jsx)("div",{style:{width:140,height:140},children:Object(r.jsx)(zn.a,{value:Math.floor(n.remainingTime/n.time*100),styles:Object(zn.b)({strokeLinecap:"butt",pathColor:"black",trailColor:"white"}),children:Object(r.jsx)(Hn,{children:Object(r.jsx)("h3",{children:N(n.remainingTime)})})})}),Object(r.jsx)($n,{onClick:function(){return t(n,5)},children:Object(r.jsx)("h4",{children:"+5"})})]}),Object(r.jsx)(qn,{children:Object(r.jsx)("h4",{style:{minWidth:0},children:n.content})}),Object(r.jsxs)(Qn,{children:[Object(r.jsx)($n,{onClick:function(){var t;(t=n).isCompleted||(e(R()),t.isRunning&&(Object(u.a)({},t).isRunning=!1,e(h(t))))},style:{fontSize:"1.5em"},children:n.isRunning?Object(r.jsx)(E.a,{}):Object(r.jsx)(E.b,{})}),Object(r.jsx)($n,{onClick:function(){return function(n){if(!n.isCompleted){e(K());var t=Object(u.a)({},n);t.isRunning=!1,t.remainingTime=t.time,e(h(t))}}(n)},children:Object(r.jsx)(un.b,{})})]})]})})})}function Xn(){var n=Object(s.a)(["\n    display: flex;\n    height:100%;\n"]);return Xn=function(){return n},n}var Yn=D.a.div(Xn());var Zn=function(){return Object(r.jsxs)(Yn,{children:[Object(r.jsx)(Vn,{}),Object(r.jsx)(Rn,{})]})},_n=Object(b.a)({reducer:{tasks:T,focusBoard:F}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f.a,{store:_n,children:Object(r.jsx)(Zn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.c43cd5ce.chunk.js.map