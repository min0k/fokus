(this.webpackJsonpfokus=this.webpackJsonpfokus||[]).push([[0],{38:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var r=t(2),a=t(1),i=t.n(a),c=t(10),o=t.n(c),s=(t(38),t(4)),d=t(8),u=t(9),l=t(32),f=t(6),x=t(19),b=Object(x.b)({name:"tasks",initialState:{taskArray:[],meta:{globalKey:0,completedTaskStartIndex:-1,focussedTaskIndex:-1}},reducers:{create:function(n,e){var t=e.payload;n.taskArray.unshift(t),-1!=n.meta.completedTaskStartIndex&&++n.meta.completedTaskStartIndex},remove:function(n,e){var t=e.payload;n.taskArray=n.taskArray.filter((function(e){return e.id!==t||(e.isCompleted?n.meta.completedTaskStartIndex==n.taskArray.length-1&&(n.meta.completedTaskStartIndex=-1):-1!=n.meta.completedTaskStartIndex&&--n.meta.completedTaskStartIndex,!1)}))},updateTask:function(n,e){var t=e.payload;n.taskArray=n.taskArray.map((function(n){return n.id===t.id?t:n}))},updateTaskContent:function(n,e){var t=n.taskArray,r=e.payload;t.forEach((function(n){n.id===r.id&&(n.content=r.updatedTaskContent)}))},updateTaskTime:function(n,e){var t=n.taskArray,r=e.payload;t.forEach((function(n){n.id===r.id&&(n.remainingTime=60*r.updatedTime,n.time=60*r.updatedTime)}))},updateTaskTimeByVal:function(n,e){var t=e.payload;n.taskArray[t.focussedTaskIndex].remainingTime+=60*t.val,n.taskArray[t.focussedTaskIndex].time+=60*t.val,n.taskArray[t.focussedTaskIndex].remainingTime<0&&(n.taskArray[t.focussedTaskIndex].remainingTime=0),n.taskArray[t.focussedTaskIndex].time<0&&(n.taskArray[t.focussedTaskIndex].time=0)},updateOrder:function(n,e){var t=e.payload;n.taskArray=t},focusOnTask:function(n,e){var t=e.payload;n.meta.focussedTaskIndex=t},resetFocussedTask:function(n){n.meta.focussedTaskIndex=-1},tick:function(n,e){var t=e.payload;--n.taskArray[t].remainingTime},resetTaskTimer:function(n,e){var t=e.payload;n.taskArray[t].isRunning=!1,n.taskArray[t].remainingTime=n.taskArray[t].time},toggleIsRunning:function(n,e){var t=e.payload;n.taskArray[t].isRunning=!n.taskArray[t].isRunning},toggleIsCompleted:function(n,e){var t=n.taskArray,r=e.payload;t.forEach((function(n){n.id===r&&(n.isCompleted=!n.isCompleted)}))},incrementGlobalKey:function(n){++n.meta.globalKey},rearrange:function(n,e){var t=e.payload,r=t.id;if(t.markedAsComplete)if(-1===n.meta.completedTaskStartIndex){n.meta.completedTaskStartIndex=n.taskArray.length-1;for(var a=!1,i=0;i<n.taskArray.length-1;i++)if(a){var c=n.taskArray[i];n.taskArray[i]=n.taskArray[i+1],n.taskArray[i+1]=c}else if(n.taskArray[i].id===r){a=!0;var o=n.taskArray[i];n.taskArray[i]=n.taskArray[i+1],n.taskArray[i+1]=o}n.meta.completedTaskStartIndex=n.taskArray.length-1}else{for(var s,d,u=0;u<n.taskArray.length;u++)if(n.taskArray[u].id===r){s=n.taskArray[u],d=u;break}for(var l=-1,f=n.meta.completedTaskStartIndex;f<n.taskArray.length;f++)if(!(n.taskArray[f].globalKey>s.globalKey)){l=f;break}-1===l?n.taskArray.push(s):n.taskArray.splice(l,0,s),n.taskArray.splice(d,1),n.meta.completedTaskStartIndex-=1}else{if(0==n.meta.completedTaskStartIndex){for(var x,b,p=n.meta.completedTaskStartIndex;p<n.taskArray.length;p++)if(n.taskArray[p].id===r){x=n.taskArray[p],b=p;break}n.taskArray.splice(b,1),n.taskArray.unshift(x),n.meta.completedTaskStartIndex=1}else{for(var j,m,k=n.meta.completedTaskStartIndex;k<n.taskArray.length;k++)if(n.taskArray[k].id===r){j=n.taskArray[k],m=k;break}for(var h=-1,g=n.meta.completedTaskStartIndex-1;g>=0;g--)if(!(n.taskArray[g].globalKey<j.globalKey)){h=g;break}n.taskArray.splice(m,1),-1===h?n.taskArray.unshift(j):(h++,n.taskArray.splice(h,0,j)),n.meta.completedTaskStartIndex+=1}n.meta.completedTaskStartIndex==n.taskArray.length&&(n.meta.completedTaskStartIndex=-1)}}}}),p=b.actions,j=p.create,m=p.remove,k=(p.updateTask,p.updateTaskContent),h=p.updateTaskTime,g=p.updateTaskTimeByVal,y=p.focusOnTask,O=p.resetFocussedTask,v=p.resetTaskTimer,T=p.toggleIsRunning,I=p.tick,A=p.toggleIsCompleted,w=p.updateOrder,C=p.incrementGlobalKey,S=p.rearrange,K=b.reducer,R=t(5),z=t(14),D=t(16),F=t(12),E=t(30);function M(n){var e=n%60,t=Math.floor(n/60);return 0==e?e="00":e<10&&(e="0".concat(e)),0==t?t="00":t<10&&(t="0".concat(t)),"".concat(t,":").concat(e)}function B(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 25%;\n    /* background-color: #fffa91; */\n    svg {\n        font-size: 0.8em;\n        margin: 5px;\n    }\n"]);return B=function(){return n},n}function P(){var n=Object(s.a)(["\n    height: 80%;\n    cursor: pointer;\n    margin-left: auto;\n    color: #d0d0d0;\n    &:hover {\n        color: #e44d2e;\n    }\n"]);return P=function(){return n},n}function W(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 80%;\n    border-radius: 5px;\n    margin: 5px;\n    cursor: pointer;\n    &:hover {\n        background-color: #c0c0c0;\n    }\n    p {\n        margin: 5px;\n        font-size: 0.6em;\n    }\n"]);return W=function(){return n},n}function G(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 15%;\n    /* background-color: #f8f8ff; */\n    position: relative;\n    p {\n        margin: 5px;\n        font-size: 0.7em;\n    }\n    svg {\n        font-size: 2.2em;\n        color: ",";\n    }\n"]);return G=function(){return n},n}function J(){var n=Object(s.a)(["\n    height: 15px;\n    width: 30px;\n    margin-top: 5px;\n    text-align: center;\n    &:focus {\n        outline: none;\n        border: 1px #7e8d9f dashed;\n        border-radius: 2px;\n    }\n"]);return J=function(){return n},n}function L(){var n=Object(s.a)(["\n    resize: none;\n    height: 90%;\n    width: 100%;\n    font-size:0.9em;\n    overflow: hidden;\n    vertical-align: center;\n    &:focus {\n        outline: none;\n        border: 2px #7e8d9f dashed;\n        border-radius: 5px;\n    }\n"]);return L=function(){return n},n}function N(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    height: 65%;\n    margin: 0 0 0 5px;\n    word-wrap: break-word;\n    /* background-color: #fffcec; */\n    p {\n        font-size:0.9em;\n        min-width: 0;\n        &:hover {\n            cursor: text;\n        }\n    }\n"]);return N=function(){return n},n}function U(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 100%;\n    width: 75%;\n    margin: 0 0 0 10px;\n    /* background-color: #fff1fc; */\n"]);return U=function(){return n},n}function V(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-around;\n    flex-direction: row;\n    height: 100%;\n    width: 376px;\n    border-radius: 5px;\n    -webkit-box-shadow: ",";\n    box-shadow: ",";\n    border: ",";\n"]);return V=function(){return n},n}function H(){var n=Object(s.a)(['\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    width: 25px;\n    height: 100%;\n    /* background-color: #ff09ac; */\n    svg {\n        cursor: url("https://ssl.gstatic.com/ui/v1/icons/mail/images/2/openhand.cur"), default !important;\n        opacity: 0.5;\n    }\n']);return H=function(){return n},n}function $(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n    width: 420px;\n    height: 100px;\n    margin-top: 25px;\n    /* background-color: #fff4e1; */\n"]);return $=function(){return n},n}var q=R.a.div($()),Q=R.a.div(H()),X=R.a.div(V(),(function(n){return n.isFocussed?"0 0 6px rgb(255, 216, 0, 0.6)":"0 0 4px rgb(0, 0, 0, 0.2)"}),(function(n){return n.isFocussed?"0 0 6px rgb(255, 216, 0, 0.6)":"0 0 4px rgb(0, 0, 0, 0.2)"}),(function(n){return n.isFocussed?"2px solid #ffd800":"none"})),Y=R.a.div(U()),Z=R.a.div(N()),_=R.a.textarea(L()),nn=R.a.input(J()),en=R.a.div(G(),(function(n){return n.isCompleted?"#00a86b":n.isFocussed?"#ffd800":"#000"})),tn=R.a.div(W()),rn=R.a.div(P()),an=R.a.div(B());function cn(n){var e,t=n.task,i=n.taskIndex,c=n.forwardRBDProvided,o=n.isFocussed,s=n.focussedTaskIndex,l=Object(f.c)(),x=Object(a.useState)(!1),b=Object(d.a)(x,2),p=b[0],j=b[1],g=Object(a.useState)(t.content),v=Object(d.a)(g,2),I=v[0],w=v[1],C=Object(a.useState)(!1),K=Object(d.a)(C,2),R=K[0],B=K[1],P=Object(a.useState)(Math.floor(t.time/60)),W=Object(d.a)(P,2),G=W[0],J=W[1],L=Object(a.useState)(!1),N=Object(d.a)(L,2),U=N[0],V=N[1];return Object(r.jsx)(F.a,{flipId:"".concat(t.id),children:Object(r.jsxs)(q,Object(u.a)(Object(u.a)(Object(u.a)({ref:c.innerRef},c.draggableProps),c.dragHandleProps),{},{onMouseEnter:function(){return V(!t.isCompleted&&!0)},onMouseLeave:function(){return V(!t.isCompleted&&!1)},children:[Object(r.jsx)(Q,{children:U&&Object(r.jsx)(E.a,{})}),Object(r.jsxs)(X,{isFocussed:o,children:[Object(r.jsxs)(en,{isFocussed:o,isCompleted:t.isCompleted,children:[t.isCompleted?Object(r.jsx)(z.a,{}):o?Object(r.jsx)(z.b,{}):Object(r.jsx)(z.c,{}),!t.isCompleted&&(R?Object(r.jsx)(nn,{autoFocus:!0,value:G,onBlur:function(){l(h({id:t.id,updatedTime:G})),B(!1)},onKeyDown:function(n){"Enter"===n.key&&(l(h({id:t.id,updatedTime:G})),B(!1))},onChange:function(n){return J(n.target.value)}}):Object(r.jsx)("p",{onDoubleClick:function(){return B(!0)},children:M(t.remainingTime)}))]}),Object(r.jsxs)(Y,{children:[Object(r.jsx)(Z,{children:p?Object(r.jsx)(_,{autoFocus:!0,value:I,onBlur:function(){l(k({id:t.id,updatedTaskContent:I})),j(!1)},onKeyDown:function(n){if("Enter"===n.key&&I.trim().length>=3){I.trim().split(" ");l(k({id:t.id,updatedTaskContent:I})),j(!1)}},onChange:function(n){return w(n.target.value)}}):Object(r.jsx)("p",{onDoubleClick:function(){return j(!0)},children:(e=t.content,e.length<=60?e:e.substring(0,60)+"...")})}),Object(r.jsxs)(an,{children:[!t.isCompleted&&Object(r.jsx)(tn,{onClick:o?function(){t.isRunning&&l(T(i)),l(O())}:function(){l(y(i))},children:Object(r.jsx)("p",{children:o?"Unfocus":"Focus"})}),Object(r.jsx)(tn,{onClick:t.isCompleted?function(n){l(A(t.id)),l(S({id:t.id,markedAsComplete:!1})),n.stopPropagation()}:function(n){i<s&&l(y(s-1)),t.isRunning&&l(T(i)),o&&l(O()),l(A(t.id)),l(S({id:t.id,markedAsComplete:!0})),n.stopPropagation()},children:Object(r.jsx)("p",{children:t.isCompleted?"Undone":"Done"})}),!o&&Object(r.jsx)(rn,{onClick:function(n){i<s&&l(y(s-1)),l(m(t.id)),n.stopPropagation()},children:Object(r.jsx)(D.c,{})})]})]})]})]}))})}var on=t(20),sn=t(31),dn=t(18);function un(){var n=Object(s.a)(["\n    height: 100%;\n    width: 40%;\n    font-size: 0.9em;\n    text-align:center;\n    border: 0;\n    outline: none;\n    &::-webkit-inner-spin-button,\n    &::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        appearance: none;\n        margin: 0;\n    }\n"]);return un=function(){return n},n}function ln(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    height: 90%;\n    width: 25%;\n    span {\n        font-size: 0.7em;\n        color:rgb(118,118,118);\n    }\n"]);return ln=function(){return n},n}function fn(){var n=Object(s.a)(["\n    height: 100%;\n    width: 90%;\n    font-size: 0.9em;\n    border: 0;\n    outline: none;\n"]);return fn=function(){return n},n}function xn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 90%;\n    width: 70%;\n    margin-left:10px;\n    svg {\n        font-size: 1.2em;\n        margin-right:5px;\n    }\n"]);return xn=function(){return n},n}function bn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 20px;\n    width: 420px;\n    border-bottom: 3px solid black;\n    height: 40px;\n"]);return bn=function(){return n},n}var pn=R.a.div(bn()),jn=R.a.div(xn()),mn=R.a.input(fn()),kn=R.a.div(ln()),hn=R.a.input(un());function gn(){var n,e,t=Object(a.useState)(""),i=Object(d.a)(t,2),c=i[0],o=i[1],s=Object(a.useState)(20),u=Object(d.a)(s,2),l=u[0],x=u[1],b=Object(f.d)((function(n){return n.tasks.meta})),p=Object(f.c)();function m(t){if("Enter"===t.key&&c.trim().length>=1){var r=c.trim().split(" "),a=l;1===r.length||isNaN(parseInt(r[r.length-1]))||(a=parseInt(r.pop())),r=r.join(" ");var i={id:Math.floor(1e4*Math.random()),globalKey:b.globalKey,content:r,time:60*a,remainingTime:60*a,isRunning:!1,isCompleted:!1,createdAt:(new Date).toISOString()};-1!==b.focussedTaskIndex&&p(y(b.focussedTaskIndex+1)),p(j(i)),p(C()),o(""),x(20),n.value="",e.value="",n.focus()}}return Object(r.jsxs)(pn,{children:[Object(r.jsxs)(jn,{children:[Object(r.jsx)(sn.a,{}),Object(r.jsx)(mn,{type:"text",placeholder:"i have to focus on ...",ref:function(e){return n=e},onChange:function(n){return o(n.target.value)},onKeyDown:m})]}),Object(r.jsxs)(kn,{children:[Object(r.jsx)(dn.a,{}),Object(r.jsx)(hn,{type:"number",placeholder:"20",ref:function(n){return e=n},onChange:function(n){return x(n.target.value)},onKeyDown:m}),Object(r.jsx)("span",{children:"mins"})]})]})}function yn(){var n=Object(s.a)(["\n    width: 50px;\n    position: relative;\n    top: 3px;\n    color: #00a86b;\n    svg {\n        font-size: 1.8em;\n    }\n"]);return yn=function(){return n},n}function On(){var n=Object(s.a)(["\n    width: 100%;\n    position: relative;\n    margin: 15px;\n    border-bottom: 3px solid #c0c0c0;\n"]);return On=function(){return n},n}function vn(){var n=Object(s.a)(["\n    display: flex;\n    margin:15px;\n"]);return vn=function(){return n},n}var Tn=R.a.div(vn()),In=R.a.div(On()),An=R.a.div(yn());function wn(){return Object(r.jsx)(F.a,{flipId:"-1",children:Object(r.jsxs)(Tn,{children:[Object(r.jsx)(In,{}),Object(r.jsx)(An,{children:Object(r.jsx)(z.a,{})}),Object(r.jsx)(In,{})]})})}function Cn(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex: 2 1 0;\n"]);return Cn=function(){return n},n}var Sn=R.a.div(Cn());function Kn(){var n=Object(f.d)((function(n){return n.tasks.taskArray})),e=Object(f.d)((function(n){return n.tasks.meta})),t=-1!==e.focussedTaskIndex?n[e.focussedTaskIndex]:null,a=Object(f.c)();function i(n){return null!==t&&t.id===n}return Object(r.jsxs)(Sn,{children:[Object(r.jsx)(gn,{focussedTaskIndex:e.focussedTaskIndex}),Object(r.jsxs)(F.b,{flipKey:function(){var t="";return n.forEach((function(n){t+="".concat(n.globalKey)})),t+="".concat(e.completedTaskStartIndex)}(),children:[Object(r.jsx)(on.a,{onDragEnd:function(t){if(t.destination){var r=Object(l.a)(n.map((function(n){return Object(u.a)({},n)}))),i=r.splice(t.source.index,1),c=Object(d.a)(i,1)[0];r.splice(t.destination.index,0,c);for(var o=t.source.index,s=t.destination.index>t.source.index;o!=t.destination.index;)s?(r[o].globalKey=n[o].globalKey,o++):(r[o].globalKey=n[o].globalKey,o--),o==t.destination.index&&(r[o].globalKey=n[o].globalKey);if(-1!==e.focussedTaskIndex){var f=Math.max(t.destination.index,t.source.index),x=Math.min(t.destination.index,t.source.index);t.source.index===e.focussedTaskIndex?a(y(t.destination.index)):e.focussedTaskIndex>=x&&e.focussedTaskIndex<=f&&(t.destination.index>t.source.index?a(y(e.focussedTaskIndex-1)):a(y(e.focussedTaskIndex+1)))}a(w(r))}},children:Object(r.jsx)(on.c,{droppableId:"dropArea",children:function(t){return Object(r.jsxs)("div",Object(u.a)(Object(u.a)({},t.droppableProps),{},{ref:t.innerRef,children:[n.map((function(n,t){return n.isCompleted?"":Object(r.jsx)(on.b,{isDragDisabled:n.isCompleted,draggableId:"".concat(n.id),index:t,children:function(a){return Object(r.jsx)(cn,{focussedTaskIndex:e.focussedTaskIndex,taskIndex:t,forwardRBDProvided:a,task:n,isFocussed:i(n.id)})}},n.id)})),t.placeholder]}))}})}),-1!==e.completedTaskStartIndex&&0!==e.completedTaskStartIndex&&Object(r.jsx)(wn,{}),n.map((function(n,t){return n.isCompleted?Object(r.jsx)(cn,{focussedTaskIndex:e.focussedTaskIndex,taskIndex:t,forwardRBDProvided:{innerRef:null},task:n,isFocussed:i(n.id)},n.id):""}))]})]})}var Rn=t(23),zn=(t(45),t.p+"static/media/ding.86b39a2c.mp3");function Dn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    width: 90%;\n    height: 20%;\n    /* background-color: #efaaa1; */\n"]);return Dn=function(){return n},n}function Fn(){var n=Object(s.a)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    width: 90%;\n    height: 30%;\n    word-wrap: break-word;\n    /* background-color: #ffea1c; */\n"]);return Fn=function(){return n},n}function En(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 40px;\n    height: 40px;\n    /* background-color: #ffaa1c; */\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);\n    border-radius: 50%;\n    margin: 15px;\n"]);return En=function(){return n},n}function Mn(){var n=Object(s.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100px;\n    height: 100px;\n    /* background-color: #ff1c1c; */\n    box-shadow: 0 0 6px rgba(0, 0, 0, 0.4);\n    border-radius: 50%;\n"]);return Mn=function(){return n},n}function Bn(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 90%;\n    height: 40%;\n    /* background-color: #ffeaca; */\n"]);return Bn=function(){return n},n}function Pn(){var n=Object(s.a)(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: space-around;\n    width: 400px;\n    height: 400px;\n    margin: 20px;\n    box-shadow: 0 0 6px rgba(0, 0, 2, 0.3);\n    /* background-color: #fffccc; */\n"]);return Pn=function(){return n},n}function Wn(){var n=Object(s.a)(["\n    flex: 3 1 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);\n    /* background-color: #f8f8ff; */\n"]);return Wn=function(){return n},n}var Gn=new Audio(zn),Jn=R.a.div(Wn()),Ln=R.a.div(Pn()),Nn=R.a.div(Bn()),Un=R.a.div(Mn()),Vn=R.a.div(En()),Hn=R.a.div(Fn()),$n=R.a.div(Dn());function qn(){var n=Object(f.d)((function(n){return n.tasks.meta.focussedTaskIndex})),e=Object(f.d)((function(e){return-1!==n?e.tasks.taskArray[n]:null})),t=Object(f.c)();function i(r){e.isCompleted||(e.isRunning&&t(T(n)),t(g({focussedTaskIndex:n,val:r})))}return function(n,e){var t=Object(a.useRef)();Object(a.useEffect)((function(){t.current=n}),[n]),Object(a.useEffect)((function(){if(null!==e){var n=setInterval((function(){t.current()}),e);return function(){return clearInterval(n)}}}),[e])}((function(){null!==e&&(e.remainingTime>0?t(I(n)):0===e.remainingTime&&(t(T(n)),Gn.play()))}),null!==e&&e.isRunning?1e3:null),Object(r.jsx)(Jn,{children:null!=e&&Object(r.jsx)("div",{children:Object(r.jsxs)(Ln,{children:[Object(r.jsxs)(Nn,{children:[Object(r.jsx)(Vn,{onClick:function(){return i(-5)},children:Object(r.jsx)("h4",{children:"-5"})}),Object(r.jsx)("div",{style:{width:140,height:140},children:Object(r.jsx)(Rn.a,{value:0!==e.time?Math.floor(e.remainingTime/e.time*100):0,styles:Object(Rn.b)({strokeLinecap:"butt",pathColor:"black",trailColor:"white"}),children:Object(r.jsx)(Un,{children:Object(r.jsx)("h3",{children:M(e.remainingTime)})})})}),Object(r.jsx)(Vn,{onClick:function(){return i(5)},children:Object(r.jsx)("h4",{children:"+5"})})]}),Object(r.jsx)(Hn,{children:Object(r.jsx)("h4",{style:{minWidth:0},children:e.content})}),Object(r.jsxs)($n,{children:[Object(r.jsx)(Vn,{onClick:function(){return t(T(n))},style:{fontSize:"1.5em"},children:e.isRunning?Object(r.jsx)(D.a,{}):Object(r.jsx)(D.b,{})}),Object(r.jsx)(Vn,{onClick:function(){return t(v(n))},children:Object(r.jsx)(dn.b,{})})]})]})})})}function Qn(){var n=Object(s.a)(["\n    display: flex;\n    height:100%;\n"]);return Qn=function(){return n},n}var Xn=R.a.div(Qn());var Yn=function(){return Object(r.jsxs)(Xn,{children:[Object(r.jsx)(qn,{}),Object(r.jsx)(Kn,{})]})},Zn=Object(x.a)({reducer:{tasks:K}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(f.a,{store:Zn,children:Object(r.jsx)(Yn,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.f760cdc4.chunk.js.map