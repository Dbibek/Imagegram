(this.webpackJsonpimagegram=this.webpackJsonpimagegram||[]).push([[0],{42:function(e,t,a){e.exports=a(58)},47:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(23),l=a.n(c),u=(a(47),a(14)),s=a(9),i=a(64),o=a(7),m=a(26),p=(a(59),a(60),a(49),m.a.initializeApp({apiKey:"AIzaSyCjIyeLZjK9zF0z-m-CSlQpWm1eBWvGd3c",authDomain:"imagegram-92765.firebaseapp.com",databaseURL:"https://imagegram-92765-default-rtdb.europe-west1.firebasedatabase.app",projectId:"imagegram-92765",storageBucket:"imagegram-92765.appspot.com",messagingSenderId:"670602284638",appId:"1:670602284638:web:6537cd59a8aefb2d566ecf"})),d=p.auth(),f=m.a.storage(),b=m.a.firestore(),E=m.a.firestore.FieldValue.serverTimestamp,v=r.a.createContext();function g(){return Object(n.useContext)(v)}var j=function(e){var t=e.children,a=Object(n.useState)(),c=Object(o.a)(a,2),l=c[0],u=c[1],s=Object(n.useState)(!0),i=Object(o.a)(s,2),m=i[0],p=i[1];Object(n.useEffect)((function(){return d.onAuthStateChanged((function(e){u(e),p(!1)}))}),[]);var f={currentUser:l,signup:function(e,t){return d.createUserWithEmailAndPassword(e,t)},login:function(e,t){return d.signInWithEmailAndPassword(e,t)},logout:function(){return d.signOut()},resetPassword:function(e){return d.sendPasswordResetEmail(e)},updateEmail:function(e){return l.updateEmail(e)},updatePassword:function(e){return l.updatePassword(e)}};return r.a.createElement(v.Provider,{value:f},!m&&t)},h=(a(51),a(34)),w=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=b.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(h.a)(Object(h.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){t()}}),[e]),{docs:r}},O=a(22),y=function(e){var t=e.setSelected,a=w("images").docs;return r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(O.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)}},r.a.createElement(O.a.img,{src:e.url,alt:"uploadedpicture",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},x=function(e){var t=e.selected,a=e.setSelected;return r.a.createElement(O.a.div,{className:"backdrop",onClick:function(e){return e.target.classList.contains("backdrop")?a(null):null},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(O.a.img,{src:t,alt:"full size pic",initial:{y:"-100vh"},animate:{y:0}}))},S=a(11),k=a.n(S),N=a(19),C=a(63),L=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],l=g().logout,i=Object(s.g)();function m(){return(m=Object(N.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(""),e.prev=1,e.next=4,l();case 4:i.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),c("failed to logout");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,a?{error:a}:r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"d-flex justify-content-between w-100 text-center mt-2  "},r.a.createElement("h1",null,"ImageGram"),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(u.b,{to:"/update-profile",variant:"Link",className:" w-60 mt-2"},"Update Profile"),r.a.createElement(C.a,{variant:"Link",className:"",onClick:function(){return m.apply(this,arguments)}},"Log Out"))),r.a.createElement("h2",null,"Your Pictures "),r.a.createElement("p",null,"Photograph: a picture painted by the sun without instruction in art."),r.a.createElement("p",null,"\u201cYou can look at a picture for a week and never think of it again. You can also look at a picture for a second and think of it all your life.\u201d")))},P=function(e){var t=Object(n.useState)(0),a=Object(o.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),u=Object(o.a)(l,2),s=u[0],i=u[1],m=Object(n.useState)(null),p=Object(o.a)(m,2),d=p[0],v=p[1];return Object(n.useEffect)((function(){var t=f.ref(e.name),a=b.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){i(e)}),Object(N.a)(k.a.mark((function e(){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=E(),a.add({url:n,createdAt:r}),v(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:d,error:s}},R=function(e){var t=e.file,a=e.setFile,c=P(t),l=c.url,u=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(O.a.div,{className:"progress-bar",initial:{width:0},animate:{width:u+"%"}})},U=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),u=Object(o.a)(l,2),s=u[0],i=u[1],m=["image/png","image/jpeg"];return r.a.createElement("form",{className:"form"},r.a.createElement("label",{className:"label"},r.a.createElement("input",{type:"file",onChange:function(e){e.preventDefault();var t=e.target.files[0];t&&m.includes(t.type)?(c(t),i("")):(c(null),i("please select and image file( png or jpeg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},s&&r.a.createElement("div",{className:"error"},s),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(R,{file:a,setFile:c})))},F=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(U,null),r.a.createElement(y,{setSelected:c}),a&&r.a.createElement(x,{selected:a,setSelected:c}))},I=a(67),A=a(65),G=a(66),B=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=g().signup,l=Object(n.useState)(""),i=Object(o.a)(l,2),m=i[0],p=i[1],d=Object(n.useState)(!1),f=Object(o.a)(d,2),b=f[0],E=f[1],v=Object(s.g)();function j(){return(j=Object(N.a)(k.a.mark((function n(r){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",p("password do not match"));case 3:return n.prev=3,p(""),E(!0),n.next=8,c(e.current.value,t.current.value);case 8:v.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),p("failed to create account");case 14:E(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(I.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),m&&r.a.createElement(A.a,{variant:"danger"},m),r.a.createElement(G.a,{onSubmit:function(e){return j.apply(this,arguments)}},r.a.createElement(G.a.Group,{id:"email"},r.a.createElement(G.a.Label,null,"Email"),r.a.createElement(G.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(G.a.Group,{id:"password"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(G.a.Group,{id:"password-confirm"},r.a.createElement(G.a.Label,null,"Password Confirmation"),r.a.createElement(G.a.Control,{type:"password",ref:a,required:!0})),r.a.createElement(C.a,{disabled:b,className:"w-100",type:"submit"},"Sign Up")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account?",r.a.createElement(u.b,{to:"/login"},"Log In")))},q=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=g().login,c=Object(n.useState)(""),l=Object(o.a)(c,2),i=l[0],m=l[1],p=Object(n.useState)(!1),d=Object(o.a)(p,2),f=d[0],b=d[1],E=Object(s.g)();function v(){return(v=Object(N.a)(k.a.mark((function n(r){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),n.prev=1,m(""),b(!0),n.next=6,a(e.current.value,t.current.value);case 6:E.push("/"),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),m("failed to log in");case 12:b(!1);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(I.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Log In"),i&&r.a.createElement(A.a,{variant:"danger"},i),r.a.createElement(G.a,{onSubmit:function(e){return v.apply(this,arguments)}},r.a.createElement(G.a.Group,{id:"email"},r.a.createElement(G.a.Label,null,"Email"),r.a.createElement(G.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(G.a.Group,{id:"password"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(C.a,{disabled:f,className:"w-100",type:"submit"},"Log In")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(u.b,{to:"/forgot-password"},"Forgot password?")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an Account? ",r.a.createElement(u.b,{to:"/signup"},"Sign Up")))},D=a(41),z=function(e){var t=e.component,a=Object(D.a)(e,["component"]),n=g().currentUser;return r.a.createElement(s.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(s.a,{to:"/login"})}}))},W=function(){var e=Object(n.useRef)(),t=g().resetPassword,a=Object(n.useState)(""),c=Object(o.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)(""),m=Object(o.a)(i,2),p=m[0],d=m[1],f=Object(n.useState)(!1),b=Object(o.a)(f,2),E=b[0],v=b[1];function j(){return(j=Object(N.a)(k.a.mark((function a(n){return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,d(""),s(""),v(!0),a.next=7,t(e.current.value);case 7:d("Check your Inbox for further instructions"),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),s("failed to reset password");case 13:v(!1);case 14:case"end":return a.stop()}}),a,null,[[1,10]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(I.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Reset Password"),l&&r.a.createElement(A.a,{variant:"danger"},l),p&&r.a.createElement(A.a,{variant:"success"},p),r.a.createElement(G.a,{onSubmit:function(e){return j.apply(this,arguments)}},r.a.createElement(G.a.Group,{id:"email"},r.a.createElement(G.a.Label,null,"Email"),r.a.createElement(G.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(C.a,{disabled:E,className:"w-100",type:"submit"},"Reset password")),r.a.createElement("div",{className:"w-100 text-center mt-3"},r.a.createElement(u.b,{to:"/login"},"Login")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an Account? ",r.a.createElement(u.b,{to:"/signup"},"Sign Up")))},Y=function(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),c=g(),l=c.currentUser,i=c.updateEmail,m=c.updatePassword,p=Object(n.useState)(""),d=Object(o.a)(p,2),f=d[0],b=d[1],E=Object(n.useState)(!1),v=Object(o.a)(E,2),j=v[0],h=v[1],w=Object(s.g)();function O(){return(O=Object(N.a)(k.a.mark((function n(r){var c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",b("password do not match"));case 3:c=[],h(!0),e.current.value!==l.email&&c.push(i(e.current.value)),t.current.value&&c.push(m(t.current.value)),Promise.all(c).then((function(){w.push("/")})).catch((function(){b("Failed to update account")})).finally((function(){h(!1)}));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,null,r.a.createElement(I.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Update Profile"),f&&r.a.createElement(A.a,{variant:"danger"},f),r.a.createElement(G.a,{onSubmit:function(e){return O.apply(this,arguments)}},r.a.createElement(G.a.Group,{id:"email"},r.a.createElement(G.a.Label,null,"Email"),r.a.createElement(G.a.Control,{type:"email",ref:e,required:!0,defaultValue:l.email})),r.a.createElement(G.a.Group,{id:"password"},r.a.createElement(G.a.Label,null,"Password"),r.a.createElement(G.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep same"})),r.a.createElement(G.a.Group,{id:"password-confirm"},r.a.createElement(G.a.Label,null,"Password Confirmation"),r.a.createElement(G.a.Control,{type:"password",ref:a,placeholder:"Leave blank to keep same"})),r.a.createElement(C.a,{disabled:j,className:"w-100",type:"submit"},"Update")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},r.a.createElement(u.b,{to:"/"},"Cancel")))};var J=function(){return r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(j,null,r.a.createElement(s.d,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{exact:!0,path:"/",component:F}),r.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},r.a.createElement("div",{className:" mt-5 w-100",style:{maxWidth:"400px"}},r.a.createElement(z,{path:"/update-profile",component:Y}),r.a.createElement(s.b,{path:"/signup",component:B}),r.a.createElement(s.b,{path:"/login",component:q}),r.a.createElement(s.b,{path:"/forgot-password",component:W}))))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.97e57607.chunk.js.map