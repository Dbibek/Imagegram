(this.webpackJsonpimagegram=this.webpackJsonpimagegram||[]).push([[0],{17:function(e,t,a){e.exports=a(25)},22:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(15),l=a.n(c),i=(a(22),a(6)),u=a(12),o=a(10),s=(a(27),a(28),{apiKey:"AIzaSyCjIyeLZjK9zF0z-m-CSlQpWm1eBWvGd3c",authDomain:"imagegram-92765.firebaseapp.com",projectId:"imagegram-92765",storageBucket:"imagegram-92765.appspot.com",messagingSenderId:"670602284638",appId:"1:670602284638:web:6537cd59a8aefb2d566ecf"});o.a.initializeApp(s);var m=o.a.storage(),p=o.a.firestore(),d=o.a.firestore.FieldValue.serverTimestamp,f=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){var t=p.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id}))})),c(t)}));return function(){t()}}),[e]),{docs:r}},g=a(9),v=function(e){var t=e.setSelected,a=f("images").docs;return r.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return r.a.createElement(g.a.div,{className:"img-wrap",key:e.id,layout:!0,whileHover:{opacity:1},onClick:function(){return t(e.url)}},r.a.createElement(g.a.img,{src:e.url,alt:"uploadedpicture",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},b=function(e){var t=e.selected,a=e.setSelected;return r.a.createElement(g.a.div,{className:"backdrop",onClick:function(e){return e.target.classList.contains("backdrop")?a(null):null},initial:{opacity:0},animate:{opacity:1}},r.a.createElement(g.a.img,{src:t,alt:"full size pic",initial:{y:"-100vh"},animate:{y:0}}))},E=function(){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"ImageGram"),r.a.createElement("h2",null,"Your Pictures"),r.a.createElement("p",null,"Photograph: a picture painted by the sun without instruction in art."),r.a.createElement("p",null,"\u201cYou can look at a picture for a week and never think of it again. You can also look at a picture for a second and think of it all your life.\u201d"))},j=a(11),h=a.n(j),y=a(16),O=function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),u=Object(i.a)(l,2),o=u[0],s=u[1],f=Object(n.useState)(null),g=Object(i.a)(f,2),v=g[0],b=g[1];return Object(n.useEffect)((function(){var t=m.ref(e.name),a=p.collection("images");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;c(t)}),(function(e){s(e)}),Object(y.a)(h.a.mark((function e(){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,r=d(),a.add({url:n,createdAt:r}),b(n);case 6:case"end":return e.stop()}}),e)}))))}),[e]),{progress:r,url:v,error:o}},S=function(e){var t=e.file,a=e.setFile,c=O(t),l=c.url,i=c.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),r.a.createElement(g.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})},k=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(null),u=Object(i.a)(l,2),o=u[0],s=u[1],m=["image/png","image/jpeg"];return r.a.createElement("form",null,r.a.createElement("label",null,r.a.createElement("input",{type:"file",onChange:function(e){e.preventDefault();var t=e.target.files[0];t&&m.includes(t.type)?(c(t),s("")):(c(null),s("please select and image file( png or jpeg)"))}}),r.a.createElement("span",null,"+")),r.a.createElement("div",{className:"output"},o&&r.a.createElement("div",{className:"error"},o),a&&r.a.createElement("div",null,a.name),a&&r.a.createElement(S,{file:a,setFile:c})))};var w=function(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(E,null),r.a.createElement(k,null),r.a.createElement(v,{setSelected:c}),a&&r.a.createElement(b,{selected:a,setSelected:c}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5ae867e3.chunk.js.map