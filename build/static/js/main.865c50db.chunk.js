(this.webpackJsonpfunretro=this.webpackJsonpfunretro||[]).push([[0],{152:function(e,t,n){},300:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(30),o=n.n(s),i=(n(152),n(8)),d=n(302),l=n(309),j=n(306),u=n(303),p="http://localhost/khanhhongtranle/funretro/api/",b="funretro-react",O="funretro-user-id";function h(e,t,n,a){var c=new XMLHttpRequest;c.onreadystatechange=function(){4===c.readyState&&(200===c.status?n(JSON.parse(c.responseText)):a instanceof Function&&a(c.statusText))},c.open("post",p+e),c.send(t)}function x(e,t){var n=new Date,a=t;n.setTime(n.getTime()+2592e6),document.cookie=e+"="+a+"; expires="+n.toUTCString()}function f(e){var t=("; "+document.cookie).split("; "+e+"=");return 2===t.length?t.pop().split(";").shift():null}function m(e){var t=new Date;t.setTime(t.getTime()+-864e5),document.cookie=e+"=; expires="+t.toUTCString()}function g(){var e=window.location.pathname.substr(1);return!(!["login","signup"].includes(e)&&!f(b))}var v=n(25),w=n(138),C=n.n(w);var y=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),p=o[0],f=o[1],m=function(e){console.log(e);var t=new FormData;t.append("email",e.tt.$t),t.append("first_name",e.tt.gV),t.append("last_name",e.tt.jT),t.append("username",e.tt.CT),h("loginGoogle",t,(function(e){e.success?(x(b,e.token),x(O,e.user_id),window.location.href="/"):alert("Login failed")}))};return Object(a.jsx)(d.a,{style:{paddingTop:"2rem"},children:Object(a.jsxs)(l.a,{style:{padding:"1rem",width:"300px",margin:"auto"},children:[Object(a.jsx)("h2",{className:"text-center",children:"Login"}),Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(j.a.Group,{controlId:"username",children:[Object(a.jsx)(j.a.Label,{children:"Username"}),Object(a.jsx)(j.a.Control,{type:"text",placeholder:"Username",onChange:function(e){return r(e.target.value)}})]}),Object(a.jsxs)(j.a.Group,{controlId:"password",children:[Object(a.jsx)(j.a.Label,{children:"Password"}),Object(a.jsx)(j.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return f(e.target.value)}})]}),Object(a.jsx)(u.a,{onClick:function(){var e=new FormData;e.append("username",n),e.append("password",p),h("login",e,(function(e){e.success?(x(b,e.token),x(O,e.user_id),window.location.href="/"):alert("Login failed")}))},variant:"primary",type:"button",children:"Login"}),Object(a.jsx)(v.b,{style:{marginLeft:"20px"},to:"/signup",children:"Sign up"}),Object(a.jsx)(C.a,{clientId:"691357765421-1ei9bb6nb2c9c8tqbhtppjet1rk7m2kb.apps.googleusercontent.com",buttonText:"Login",onSuccess:m,onFailure:m,cookiePolicy:"single_host_origin"})]})]})})},k=(n(158),n(10)),L=n(304),S=n(139),F=n(305),T=n(308),I=n(307);var _=function(){return Object(a.jsxs)(T.a,{bg:"primary",variant:"dark",children:[Object(a.jsx)(T.a.Brand,{href:"/",children:"Funretro"}),Object(a.jsxs)(I.a,{className:"mr-auto",children:[Object(a.jsx)(u.a,{variant:"light",onClick:function(){m(b),m(O),window.location.href="/"},children:"Logout"}),Object(a.jsx)(u.a,{onClick:function(){window.location.href="/account"},style:{marginLeft:"20px"},variant:"outline-light",children:"Account"})]})]})};var D=function(){var e=g(),t=Object(c.useState)([]),n=Object(i.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(""),p=Object(i.a)(o,2),x=p[0],m=p[1],w=Object(c.useState)(!1),C=Object(i.a)(w,2),y=C[0],T=C[1],I=function(){return T(!1)};return Object(c.useEffect)((function(){var e=!0,t=new FormData;return t.append("token",f(b)),t.append("user_id",f(O)),h("getBoards",t,(function(t){t.success&&(console.log(t),e&&s(t.data))})),function(){e=!1}}),[]),e?Object(a.jsxs)(d.a,{fluid:!0,children:[Object(a.jsx)(_,{}),Object(a.jsxs)("div",{style:{margin:"20px 30px"},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{style:{fontSize:"30px"},children:"My Boards"}),Object(a.jsx)(u.a,{style:{fontSize:"10px",margin:"10px 0 20px 30px"},variant:"outline-primary",onClick:function(){return T(!0)},children:"New board"})]}),Object(a.jsx)(L.a,{children:r.map((function(e){return Object(a.jsx)(S.a,{xs:!0,children:Object(a.jsx)(l.a,{style:{width:"18rem",marginTop:"1rem"},children:Object(a.jsxs)(l.a.Body,{children:[Object(a.jsx)(l.a.Title,{children:e.board_name}),Object(a.jsxs)(l.a.Text,{children:["Date Created: ",e.date_created]}),Object(a.jsx)(v.b,{to:"/detail/"+e.id,style:{marginRight:"10px"},children:Object(a.jsx)(u.a,{variant:"link",type:"button",children:"More"})}),Object(a.jsx)(u.a,{variant:"link",type:"button",onClick:function(){return function(e){var t=new FormData;t.append("id",e),t.append("user_id",f(O)),t.append("token",f(b)),h("deleteBoard",t,(function(e){console.log(e),e.success?(T(!1),s(e.data)):alert("Failed")}))}(e.id)},children:"Delete"}),Object(a.jsx)(l.a.Link,{children:"Share Link"})]})})})}))})]}),Object(a.jsxs)(F.a,{show:y,onHide:I,animation:!1,children:[Object(a.jsx)(F.a.Header,{closeButton:!0,children:Object(a.jsx)(F.a.Title,{children:"Modal heading"})}),Object(a.jsx)(F.a.Body,{children:Object(a.jsxs)(j.a.Group,{controlId:"boardname",children:[Object(a.jsx)(j.a.Label,{children:"Board name"}),Object(a.jsx)(j.a.Control,{type:"text",placeholder:"Username",onChange:function(e){return m(e.target.value)}})]})}),Object(a.jsxs)(F.a.Footer,{children:[Object(a.jsx)(u.a,{variant:"secondary",onClick:I,children:"Close"}),Object(a.jsx)(u.a,{variant:"primary",onClick:function(e){var t=new FormData;t.append("board_name",x),t.append("user_id",f(O)),t.append("token",f(b)),h("saveBoard",t,(function(e){console.log(e),e.success?(T(!1),s(e.data)):alert("Failed")}))},children:"Add"})]})]})]}):Object(a.jsx)(k.a,{to:"/login"})},E=n(72),B=n(141),G=n.n(B),P={lanes:[{id:"WENTWELL",title:"WENT WELL",cards:[]},{id:"TOIMPROVE",title:"TO IMPROVE",cards:[]},{id:"ACTIONITEMS",title:"ACTION ITEMS",cards:[]}]};function U(e){var t=g(),n=Object(c.useState)(P),r=Object(i.a)(n,2),s=r[0],o=r[1],l=Object(c.useState)("board name"),p=Object(i.a)(l,2),O=p[0],x=p[1],m=Object(c.useState)(""),v=Object(i.a)(m,2),w=v[0],C=v[1],y=Object(c.useState)({}),S=Object(i.a)(y,2),T=S[0],I=S[1],D=Object(c.useState)(!1),B=Object(i.a)(D,2),U=B[0],N=B[1],M=Object(c.useState)(!1),A=Object(i.a)(M,2),H=A[0],R=A[1];return Object(c.useEffect)((function(){var t=!0,n=new FormData;return n.append("token",f(b)),n.append("board_id",e.match.params.id),h("getBoardDetail",n,(function(e){if(e.success){var n,a=e.data.board_details,c=P,r=Object(E.a)(a);try{var s=function(){var e=n.value,t={id:e.id.toString(),title:e.title,description:e.description};c.lanes.find((function(t){return t.id===e.type})).cards.push(t)};for(r.s();!(n=r.n()).done;)s()}catch(i){r.e(i)}finally{r.f()}t&&(o(c),x(e.data.board_name),C(e.data.board_name))}})),function(){t=!1}}),[]),t?Object(a.jsxs)(d.a,{fluid:!0,children:[Object(a.jsx)(_,{}),Object(a.jsxs)("div",{style:{margin:"20px 30px"},children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{style:{fontSize:"30px"},children:O}),Object(a.jsx)(u.a,{style:{margin:"10px 0 20px 30px"},variant:"link",onClick:function(){N(!0)},children:"Edit"}),Object(a.jsx)(u.a,{style:{fontSize:"10px",margin:"10px 0 20px 30px"},variant:"outline-primary",children:"Share board"})]}),Object(a.jsx)(L.a,{children:Object(a.jsx)(G.a,{cardDraggable:!0,laneDraggable:!1,draggable:!0,editable:!0,onCardAdd:function(t,n){var a=new FormData;a.append("token",f(b)),a.append("board_id",e.match.params.id),a.append("title",t.title),a.append("description",t.description),a.append("type",n),h("addCard",a,(function(e){e.success&&console.log(1)}))},onCardDelete:function(e,t){var n=new FormData;n.append("token",f(b)),n.append("card_id",e),h("deleteCard",n,(function(e){e.success&&console.log(1)}))},onCardMoveAcrossLanes:function(e,t,n,a){console.log(e),console.log(t),console.log(n),console.log(a)},onCardClick:function(e,t,n){var a=new FormData;a.append("token",f(b)),a.append("card_id",e),h("getCard",a,(function(e){if(e.success&&e.data.length>0){R(!0);var t={id:e.data[0].id,title:e.data[0].title,description:e.data[0].description};I(t)}}))},style:{backgroundColor:"white"},data:s})})]}),Object(a.jsxs)(F.a,{show:U,onHide:function(){N(!1)},animation:!1,children:[Object(a.jsx)(F.a.Header,{closeButton:!0,children:Object(a.jsx)(F.a.Title,{children:"Edit board"})}),Object(a.jsx)(F.a.Body,{children:Object(a.jsxs)(j.a.Group,{controlId:"boardname",children:[Object(a.jsx)(j.a.Label,{children:"Board name"}),Object(a.jsx)(j.a.Control,{type:"text",value:w,onChange:function(e){return C(e.target.value)}})]})}),Object(a.jsxs)(F.a.Footer,{children:[Object(a.jsx)(u.a,{variant:"secondary",onClick:function(){N(!1)},children:"Close"}),Object(a.jsx)(u.a,{variant:"primary",onClick:function(){return function(){var t=new FormData;t.append("token",f(b)),t.append("board_id",e.match.params.id),t.append("board_name",w),h("editBoard",t,(function(e){e.success&&(N(!1),x(w))}))}()},children:"Save"})]})]}),Object(a.jsxs)(F.a,{show:H,onHide:function(){R(!1)},animation:!1,children:[Object(a.jsx)(F.a.Header,{closeButton:!0,children:Object(a.jsx)(F.a.Title,{children:"Edit card"})}),Object(a.jsxs)(F.a.Body,{children:[Object(a.jsxs)(j.a.Group,{controlId:"cardtitle",children:[Object(a.jsx)(j.a.Label,{children:"Card title"}),Object(a.jsx)(j.a.Control,{type:"text",value:T.title,onChange:function(e){var t;t=e.target.value,I({id:T.id,title:t,description:T.description})}})]}),Object(a.jsxs)(j.a.Group,{controlId:"carddescription",children:[Object(a.jsx)(j.a.Label,{children:"Card description"}),Object(a.jsx)(j.a.Control,{type:"text",value:T.description,onChange:function(e){var t;t=e.target.value,I({id:T.id,title:T.title,description:t})}})]})]}),Object(a.jsxs)(F.a.Footer,{children:[Object(a.jsx)(u.a,{variant:"secondary",onClick:function(){R(!1)},children:"Close"}),Object(a.jsx)(u.a,{variant:"primary",onClick:function(){return function(e){var t=new FormData;t.append("token",f(b)),t.append("card_id",e),t.append("title",T.title),t.append("description",T.description),h("updateCard",t,(function(e){if(e.success){R(!1);var t,n=P,a=Object(E.a)(s.lanes);try{var c=function(){var a,c=t.value,r=Object(E.a)(c.cards);try{for(r.s();!(a=r.n()).done;){var s=a.value;s.id===e.data.id?n.lanes.find((function(e){return e.id===c.id})).cards.push(e.data):n.lanes.find((function(e){return e.id===c.id})).cards.push(s)}}catch(o){r.e(o)}finally{r.f()}};for(a.s();!(t=a.n()).done;)c()}catch(r){a.e(r)}finally{a.f()}o(n)}}))}(T.id)},children:"Save"})]})]})]}):Object(a.jsx)(k.a,{to:"/login"})}var N=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(i.a)(s,2),p=o[0],b=o[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),f=x[0],m=x[1],g=Object(c.useState)(""),w=Object(i.a)(g,2),C=w[0],y=w[1],k=Object(c.useState)(""),F=Object(i.a)(k,2),T=F[0],I=F[1],_=Object(c.useState)(""),D=Object(i.a)(_,2),E=D[0],B=D[1];return Object(a.jsx)(d.a,{style:{paddingTop:"2rem"},children:Object(a.jsxs)(l.a,{style:{padding:"1rem",width:"600px",margin:"auto"},children:[Object(a.jsx)("h2",{className:"text-center",children:"Sign Up"}),Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(L.a,{children:[Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"username",children:[Object(a.jsx)(j.a.Label,{children:"Username *"}),Object(a.jsx)(j.a.Control,{type:"text",placeholder:"Username",onChange:function(e){return r(e.target.value)}})]})}),Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"password",children:[Object(a.jsx)(j.a.Label,{children:"Password *"}),Object(a.jsx)(j.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return b(e.target.value)}})]})})]}),Object(a.jsxs)(L.a,{children:[Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"repassword",children:[Object(a.jsx)(j.a.Label,{children:"Re-Password *"}),Object(a.jsx)(j.a.Control,{type:"password",placeholder:"Re-password",onChange:function(e){return m(e.target.value)}})]})}),Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"email",children:[Object(a.jsx)(j.a.Label,{children:"Email *"}),Object(a.jsx)(j.a.Control,{type:"text",placeholder:"Email",onChange:function(e){return y(e.target.value)}})]})})]}),Object(a.jsxs)(L.a,{children:[Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"firstname",children:[Object(a.jsx)(j.a.Label,{children:"First name *"}),Object(a.jsx)(j.a.Control,{type:"text",placeholder:"First name",onChange:function(e){return I(e.target.value)}})]})}),Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"lastname",children:[Object(a.jsx)(j.a.Label,{children:"Last name *"}),Object(a.jsx)(j.a.Control,{type:"text",placeholder:"Last name",onChange:function(e){return B(e.target.value)}})]})})]}),Object(a.jsx)(u.a,{onClick:function(){if(p===f)if(""!==n&&""!==p&&""!==C&&""!==T&&""!==E){var e=new FormData;e.append("username",n),e.append("password",p),e.append("email",C),e.append("firstname",T),e.append("lastname",E),h("signup",e,(function(e){console.log(e),e.success?window.location.href="/login":alert("Failed")}))}else alert("please input field required!");else alert("re-password not match!")},variant:"primary",type:"button",children:"Submit"}),Object(a.jsx)(v.b,{style:{marginLeft:"20px"},to:"/login",children:"Login"})]})]})})};var M=function(){var e=g(),t=Object(c.useState)(""),n=Object(i.a)(t,2),r=n[0],s=n[1],o=Object(c.useState)(""),p=Object(i.a)(o,2),x=p[0],m=p[1],w=Object(c.useState)(""),C=Object(i.a)(w,2),y=C[0],F=C[1],T=Object(c.useState)(""),I=Object(i.a)(T,2),D=I[0],E=I[1],B=Object(c.useState)(""),G=Object(i.a)(B,2),P=G[0],U=G[1],N=Object(c.useState)(""),M=Object(i.a)(N,2),A=M[0],H=M[1];return Object(c.useEffect)((function(){var e=!0,t=new FormData;return t.append("token",f(b)),t.append("user_id",f(O)),h("getUserInfo",t,(function(t){t.success&&(console.log(t),e&&(s(t.data.username),E(t.data.email),U(t.data.first_name),H(t.data.last_name)))})),function(){e=!1}}),[]),e?Object(a.jsxs)(d.a,{fluid:!0,children:[Object(a.jsx)(_,{}),Object(a.jsx)(d.a,{style:{paddingTop:"2rem"},children:Object(a.jsxs)(l.a,{style:{padding:"1rem",width:"600px",margin:"auto"},children:[Object(a.jsx)("h2",{className:"text-center",children:"Account infomation"}),Object(a.jsxs)(j.a,{children:[Object(a.jsxs)(L.a,{children:[Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"username",children:[Object(a.jsx)(j.a.Label,{children:"Username *"}),Object(a.jsx)("br",{}),Object(a.jsx)(j.a.Label,{children:r})]})}),Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"password",children:[Object(a.jsx)(j.a.Label,{children:"Old Password"}),Object(a.jsx)(j.a.Control,{value:x,type:"password",placeholder:"Password",onChange:function(e){return m(e.target.value)}})]})})]}),Object(a.jsxs)(L.a,{children:[Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"email",children:[Object(a.jsx)(j.a.Label,{children:"Email *"}),Object(a.jsx)(j.a.Control,{value:D,type:"text",placeholder:"Email",onChange:function(e){return E(e.target.value)}})]})}),Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"password",children:[Object(a.jsx)(j.a.Label,{children:"New Password"}),Object(a.jsx)(j.a.Control,{value:y,type:"password",placeholder:"Password",onChange:function(e){return F(e.target.value)}})]})})]}),Object(a.jsxs)(L.a,{children:[Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"firstname",children:[Object(a.jsx)(j.a.Label,{children:"First name *"}),Object(a.jsx)(j.a.Control,{value:P,type:"text",placeholder:"First name",onChange:function(e){return U(e.target.value)}})]})}),Object(a.jsx)(S.a,{xs:6,children:Object(a.jsxs)(j.a.Group,{controlId:"lastname",children:[Object(a.jsx)(j.a.Label,{children:"Last name *"}),Object(a.jsx)(j.a.Control,{value:A,type:"text",placeholder:"Last name",onChange:function(e){return H(e.target.value)}})]})})]}),Object(a.jsx)(u.a,{onClick:function(){if(""!==r&&""!==D&&""!==P&&""!==A){var e=new FormData;e.append("token",f(b)),e.append("username",r),e.append("oldPassword",x),e.append("newPassword",y),e.append("email",D),e.append("firstname",P),e.append("lastname",A),h("updateUserInfo",e,(function(e){console.log(e),e.success&&e.data.change_pass?alert("Updated info and password!"):e.success&&e.old_pass_not_valid?alert("Updated info! Old password not valid - password not change!"):e.success?alert("Updated info!"):alert("Failed")}))}else alert("please input field required!")},variant:"primary",type:"button",children:"Change"}),Object(a.jsx)(v.b,{style:{marginLeft:"20px"},to:"/",children:"Back"})]})]})})]}):Object(a.jsx)(k.a,{to:"/login"})};var A=function(){return Object(c.useEffect)((function(){!function(){var e=window.location.pathname.substr(1);if(!["login","signup"].includes(e))if(f(b)){var t=new FormData;t.append("token",f(b)),h("checkToken",t,(function(e){e.success||(window.location.href="/login")}))}else window.location.href="/login"}()})),Object(a.jsx)(v.a,{children:Object(a.jsxs)(k.d,{children:[Object(a.jsx)(k.b,{path:"/login",children:Object(a.jsx)(y,{})}),Object(a.jsx)(k.b,{path:"/detail/:id",component:U}),Object(a.jsx)(k.b,{path:"/signup",component:N}),Object(a.jsx)(k.b,{path:"/account",component:M}),Object(a.jsx)(k.b,{path:"/",children:Object(a.jsx)(D,{})})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,310)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(A,{})}),document.getElementById("root")),H()}},[[300,1,2]]]);
//# sourceMappingURL=main.865c50db.chunk.js.map