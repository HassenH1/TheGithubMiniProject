(this.webpackJsonpgithubapi=this.webpackJsonpgithubapi||[]).push([[0],{33:function(e,t,a){e.exports=a(44)},38:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),i=(a(38),a(14)),l=a.n(i),s=a(21),u=a(77),m=a(79),p=a(80),h=a(74),d=a(45),g=a(81),f=(a(40),Object(h.a)((function(e){return{root:{margin:e.spacing(0,20,0,20),"& > *":{padding:e.spacing(3,2),margin:e.spacing(0,20,0,20)}},test:{margin:e.spacing(10,10,0,10),textAlign:"center",position:"relative",bottom:107},li:{listStyle:"none",display:"block",fontSize:15.17,position:"relative",right:22.5,borderBottom:"1px solid black",borderTop:"1px solid black",width:200,padding:e.spacing(1.5,0),margin:e.spacing(5.5,0),"&:hover":{color:"purple"}},ay:{textDecoration:"none",curser:"pointer",color:"inherit"},flexing:{display:"flex",justifyContent:"center",flexDirection:"row",margin:e.spacing(-4,0)},image:{height:350,width:370}}})));var b=function(){var e=f(),t=Object(n.useState)({}),a=Object(s.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)({}),h=Object(s.a)(i,2),b=h[0],E=h[1],v=function(e){var t,a,n,r,o,i,s,u;return l.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return t="2f0015355a97f0481126",a="ba23bdad1caba7400d575f16a9de0b453b878d67",n=5,r="asc",console.log("before the fetchcall"),m.next=7,l.a.awrap(fetch("https://api.github.com/users/".concat(e,"?client_id=").concat(t,"&client_secret=").concat(a)));case 7:return o=m.sent,console.log("after the fetch call?"),m.next=11,l.a.awrap(o.json());case 11:return i=m.sent,m.next=14,l.a.awrap(fetch("https://api.github.com/users/".concat(e,"/repos?per_page=").concat(n,"&sort=").concat(r,"&client_id=").concat(t,"&client_secret=").concat(a)));case 14:return s=m.sent,m.next=17,l.a.awrap(s.json());case 17:u=m.sent,c({Json:i}),E({repoJson:u});case 20:case"end":return m.stop()}}))};return r.a.createElement("div",null,r.a.createElement(u.a,{position:"static"},r.a.createElement(m.a,{variant:"dense"},r.a.createElement(p.a,{variant:"h6",color:"inherit"},"Github Finder"))),r.a.createElement(d.a,{className:e.root,mx:"auto"},r.a.createElement(p.a,{variant:"h3"},"Search Github Users"),r.a.createElement(p.a,{variant:"h5"},"Enter a user username to fetch a user profile and repos"),r.a.createElement(g.a,{id:"full-width-text-field",label:"Github Username",width:300,onChange:function(e){v(e.target.value)},name:"users"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:e.flexing},o&&o.Json?r.a.createElement("div",{className:e.test},r.a.createElement("h3",null,o.Json.name),o.Json.avatar_url?r.a.createElement("div",null,r.a.createElement("a",{href:o.Json.html_url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:o.Json.avatar_url,alt:o.Json.name,className:e.image}))):""):"",b.repoJson&&b.repoJson.length>0?r.a.createElement("div",{className:e.test},r.a.createElement("h4",null,"Latest Repository"),b.repoJson.map((function(t,a){return r.a.createElement("ul",null,r.a.createElement("a",{href:t.html_url,target:"_blank",rel:"noopener noreferrer",className:e.ay},r.a.createElement("li",{key:a,className:e.li},t.name)))}))):""))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.3aee2d4e.chunk.js.map