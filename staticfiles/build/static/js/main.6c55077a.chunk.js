(this.webpackJsonppostcards=this.webpackJsonppostcards||[]).push([[0],{15:function(e,a,t){e.exports={Row:"SignInUpForm_Row__3PbVy",Input:"SignInUpForm_Input__3xaLZ",Header:"SignInUpForm_Header__3joQJ",Link:"SignInUpForm_Link__1BeMm",Container:"SignInUpForm_Container__2cuBp",SignInCol:"SignInUpForm_SignInCol__3ImPK",SignUpCol:"SignInUpForm_SignUpCol__28o4y"}},19:function(e,a,t){e.exports={App:"App_App__16ZpL",Main:"App_Main__HQkvd",Content:"App_Content__ZaMNr",FillerImage:"App_FillerImage__2ob-g"}},27:function(e,a,t){e.exports={Button:"Button_Button__27i9m",Wide:"Button_Wide__2ScDr",Blue:"Button_Blue__10GcT",BlueOutline:"Button_BlueOutline__YqCWO",Teal:"Button_Teal__1BmmS",Black:"Button_Black__2dCp7",BlackOutline:"Button_BlackOutline__I-kZ-"}},58:function(e,a,t){e.exports={Avatar:"Avatar_Avatar__196lW"}},68:function(e,a,t){},7:function(e,a,t){e.exports={NavBar:"NavBar_NavBar__1amC6",NavLink:"NavBar_NavLink__34ons",Dropdown:"NavBar_Dropdown__3GO6O",DropdownItem:"NavBar_DropdownItem__2P43a",Active:"NavBar_Active__3PBZb"}},99:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),c=t(24),r=t.n(c),o=(t(68),t(19)),i=t.n(o),l=t(104),d=t(106),j=t(62),p=t(107),u=t.p+"static/media/logo.34c52fd9.png",m=t(7),b=t.n(m),h=t(8),x=t(11),O=t.n(x);O.a.defaults.baseURL="/api",O.a.defaults.headers.post["Content-Type"]="multipart/form-data",O.a.defaults.withCredentials=!0,O.a.defaults.xsrfCookieName="csrftoken",O.a.defaults.xsrfHeaderName="X-CSRFToken";const v=O.a.create(),g=O.a.create();var N=t(31),_=t(2);const f=Object(s.createContext)(),w=Object(s.createContext)(),C=()=>Object(s.useContext)(w),I=e=>{let{children:a}=e;const[t,n]=Object(s.useState)(null),c=Object(N.useHistory)();return Object(s.useEffect)((()=>{(async()=>{try{const{data:e}=await g.get("dj-rest-auth/user/");n(e)}catch(e){console.log(e)}})()}),[]),Object(s.useMemo)((()=>{v.interceptors.request.use((async e=>{try{await O.a.post("/dj-rest-auth/token/refresh")}catch(a){return n((e=>(e&&c.push("/signin"),null))),e}return e}),(e=>Promise.reject.apply(e))),g.interceptors.response.use((e=>e),(async e=>{var a;if(401===(null===(a=e.response)||void 0===a?void 0:a.status)){try{await O.a.post("/dj-rest-auth/token/refresh/")}catch(e){n((e=>(e&&c.push("/signin"),null)))}return O()(e.config)}return Promise.reject(e)}))}),[c]),Object(_.jsx)(f.Provider,{value:t,children:Object(_.jsx)(w.Provider,{value:n,children:a})})};var y=t(58),S=t.n(y);var k=e=>{let{src:a,height:t=45,text:s}=e;return Object(_.jsxs)("span",{children:[Object(_.jsx)("img",{className:S.a.Avatar,src:a,height:t,width:t,alt:"avatar"}),s]})};var B=()=>{const[e,a]=Object(s.useState)(!1),t=Object(s.useRef)(null);return Object(s.useEffect)((()=>{const e=e=>{"dropdown"!==e.target.id&&t.current&&!t.current.contains(e.target)&&a(!1)};return document.addEventListener("mouseup",e),()=>{document.removeEventListener("mouseup",e)}}),[t]),{expanded:e,setExpanded:a,ref:t}};var L=()=>{const e=Object(s.useContext)(f),a=C(),{expanded:t,setExpanded:n,ref:c}=B(),r=Object(_.jsxs)(h.c,{className:b.a.NavLink,activeClassName:b.a.Active,to:"/posts/create",children:[Object(_.jsx)("i",{className:"fas fa-plus-square"}),"New postcard"]}),o=Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(h.c,{className:b.a.NavLink,activeClassName:b.a.Active,to:"/feed",children:[Object(_.jsx)("i",{className:"fas fa-stream"}),"Feed"]}),Object(_.jsxs)(h.c,{className:b.a.NavLink,activeClassName:b.a.Active,to:"/liked",children:[Object(_.jsx)("i",{className:"fas fa-heart"}),"Liked"]}),Object(_.jsx)(l.a,{className:b.a.NavLink,activeClassName:b.a.Active,title:Object(_.jsxs)("span",{id:"dropdown",children:[Object(_.jsx)("i",{class:"fa-solid fa-earth-americas"}),"Continents"]}),id:b.a.Dropdown,children:Object(_.jsxs)("div",{children:[Object(_.jsx)(h.c,{className:b.a.DropdownItem,to:"/posts/africa",children:"Africa"}),Object(_.jsx)(h.c,{className:b.a.DropdownItem,to:"/posts/antartica",children:"Antartica"}),Object(_.jsx)(h.c,{className:b.a.DropdownItem,to:"/posts/posts/asia",children:"Asia"}),Object(_.jsx)(h.c,{className:b.a.DropdownItem,to:"/posts/europe",children:"Europe"}),Object(_.jsx)(h.c,{className:b.a.DropdownItem,to:"/posts/northamerica",children:"North America"}),Object(_.jsx)(h.c,{className:b.a.DropdownItem,to:"/posts/oceania",children:"Oceania"}),Object(_.jsx)(h.c,{className:b.a.DropdownItem,to:"/posts/southamerica",children:"South America"})]})}),Object(_.jsxs)(h.c,{className:b.a.NavLink,to:"/",onClick:async()=>{try{await O.a.post("dj-rest-auth/logout/"),a(null)}catch(e){console.log(e)}},children:[Object(_.jsx)("i",{className:"fas fa-sign-out-alt"}),"Sign out"]}),Object(_.jsx)(h.c,{className:b.a.NavLink,to:"/profiles/".concat(null===e||void 0===e?void 0:e.profile_id),children:Object(_.jsx)(k,{src:null===e||void 0===e?void 0:e.profile_image,text:null===e||void 0===e?void 0:e.username,height:40})})]}),i=Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(h.c,{className:b.a.NavLink,activeClassName:b.a.Active,to:"/signin",children:[Object(_.jsx)("i",{className:"fas fa-sign-in-alt"}),"Sign in"]}),Object(_.jsxs)(h.c,{className:b.a.NavLink,activeClassName:b.a.Active,to:"/signup",children:[Object(_.jsx)("i",{className:"fas fa-user-plus"}),"Sign up"]})]});return Object(_.jsx)(d.a,{expanded:t,className:b.a.NavBar,expand:"lg",fixed:"top",children:Object(_.jsxs)(j.a,{children:[Object(_.jsx)(h.c,{to:"/",children:Object(_.jsx)(d.a.Brand,{children:Object(_.jsx)("img",{src:u,alt:"logo",height:"45"})})}),e&&r,Object(_.jsx)(d.a.Toggle,{ref:c,onClick:()=>n(!t),"aria-controls":"basic-navbar-nav"}),Object(_.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(_.jsxs)(p.a,{className:"ml-auto text-right",children:[Object(_.jsxs)(h.c,{exact:!0,className:b.a.NavLink,activeClassName:b.a.Active,to:"/",children:[Object(_.jsx)("i",{className:"fas fa-home"}),"Home"]}),e?o:i]})})]})})},A=t(9),F=t(15),D=t.n(F),P=t(27),U=t.n(P),R=t(102),H=t(63),T=t(105),E=t(108),G=t(61),M=t(103);var W=()=>{var e,a,t,n;const[c,r]=Object(s.useState)({username:"",password1:"",password2:""}),{username:o,password1:l,password2:d}=c,[p,u]=Object(s.useState)({}),m=Object(N.useHistory)(),b=e=>{r({...c,[e.target.name]:e.target.value})};return Object(_.jsxs)(R.a,{className:D.a.Row,children:[Object(_.jsxs)(H.a,{className:"my-auto py-2 p-md-2",md:6,children:[Object(_.jsxs)(j.a,{className:"".concat(i.a.Content," p-4 "),children:[Object(_.jsx)("h1",{className:D.a.Header,children:"sign up"}),Object(_.jsxs)(T.a,{onSubmit:async e=>{e.preventDefault();try{await O.a.post("/dj-rest-auth/registration/",c),m.push("/signin")}catch(t){var a;u(null===(a=t.response)||void 0===a?void 0:a.data)}},children:[Object(_.jsxs)(T.a.Group,{controlId:"username",children:[Object(_.jsx)(T.a.Label,{className:"d-none",children:"Username"}),Object(_.jsx)(T.a.Control,{className:D.a.Input,type:"text",placeholder:"Username",name:"username",value:o,onChange:b})]}),null===(e=p.username)||void 0===e?void 0:e.map(((e,a)=>Object(_.jsx)(E.a,{variant:"warning",children:e},a))),Object(_.jsxs)(T.a.Group,{controlId:"password1",children:[Object(_.jsx)(T.a.Label,{className:"d-none",children:"Password"}),Object(_.jsx)(T.a.Control,{className:D.a.Input,type:"password",placeholder:"Password",name:"password1",value:l,onChange:b})]}),null===(a=p.password1)||void 0===a?void 0:a.map(((e,a)=>Object(_.jsx)(E.a,{variant:"warning",children:e},a))),Object(_.jsxs)(T.a.Group,{controlId:"password2",children:[Object(_.jsx)(T.a.Label,{className:"d-none",children:"Confirm password"}),Object(_.jsx)(T.a.Control,{className:D.a.Input,type:"password",placeholder:"Confirm password",name:"password2",value:d,onChange:b})]}),null===(t=p.password2)||void 0===t?void 0:t.map(((e,a)=>Object(_.jsx)(E.a,{variant:"warning",children:e},a))),Object(_.jsx)(G.a,{className:"".concat(U.a.Button," ").concat(U.a.Wide," ").concat(U.a.Teal),type:"submit",children:"Sign up"}),null===(n=p.non_field_errors)||void 0===n?void 0:n.map(((e,a)=>Object(_.jsx)(E.a,{variant:"warning",className:"mt-3",children:e},a)))]})]}),Object(_.jsx)(j.a,{className:"mt-3 ".concat(i.a.Content),children:Object(_.jsxs)(h.b,{className:D.a.Link,to:"/signin",children:["Already have an account? ",Object(_.jsx)("span",{children:"Sign in"})]})})]}),Object(_.jsx)(H.a,{md:6,className:"my-auto d-none d-md-block p-2 ".concat(D.a.SignUpCol),children:Object(_.jsx)(M.a,{className:"".concat(i.a.FillerImage),src:"https://res.cloudinary.com/dvywqvgif/image/upload/v1700759276/postcard-hero_izfn5b.png"})})]})};var Z=function(){var e,a,t;const n=C(),[c,r]=Object(s.useState)({username:"",password:""}),{username:o,password:l}=c,[d,p]=Object(s.useState)({}),u=Object(N.useHistory)(),m=e=>{r({...c,[e.target.name]:e.target.value})};return Object(_.jsxs)(R.a,{className:D.a.Row,children:[Object(_.jsxs)(H.a,{className:"my-auto p-0 p-md-2",md:6,children:[Object(_.jsxs)(j.a,{className:"".concat(i.a.Content," p-4 "),children:[Object(_.jsx)("h1",{className:D.a.Header,children:"sign in"}),Object(_.jsxs)(T.a,{onSubmit:async e=>{e.preventDefault();try{const{data:e}=await O.a.post("/dj-rest-auth/login/",c);n(e.user),u.push("/")}catch(t){var a;p(null===(a=t.response)||void 0===a?void 0:a.data)}},children:[Object(_.jsxs)(T.a.Group,{controlId:"username",children:[Object(_.jsx)(T.a.Label,{className:"d-none",children:"Username"}),Object(_.jsx)(T.a.Control,{className:D.a.Input,type:"text",placeholder:"Username",name:"username",value:o,onChange:m})]}),null===(e=d.username)||void 0===e?void 0:e.map(((e,a)=>Object(_.jsx)(E.a,{variant:"warning",children:e},a))),Object(_.jsxs)(T.a.Group,{controlId:"password",children:[Object(_.jsx)(T.a.Label,{className:"d-none",children:"Password"}),Object(_.jsx)(T.a.Control,{className:D.a.Input,type:"password",placeholder:"Password",name:"password",value:l,onChange:m})]}),null===(a=d.password)||void 0===a?void 0:a.map(((e,a)=>Object(_.jsx)(E.a,{variant:"warning",children:e},a))),Object(_.jsx)(G.a,{className:"".concat(U.a.Button," ").concat(U.a.Wide," ").concat(U.a.Teal),type:"submit",children:"Sign in"}),null===(t=d.non_field_errors)||void 0===t?void 0:t.map(((e,a)=>Object(_.jsx)(E.a,{variant:"warning",className:"mt-3",children:e},a)))]})]}),Object(_.jsx)(j.a,{className:"mt-3 ".concat(i.a.Content),children:Object(_.jsxs)(h.b,{className:D.a.Link,to:"/signup",children:["Don't have an account? ",Object(_.jsx)("span",{children:"Sign up now!"})]})})]}),Object(_.jsx)(H.a,{md:6,className:"my-auto d-none d-md-block p-2 ".concat(D.a.SignInCol),children:Object(_.jsx)(M.a,{className:"".concat(i.a.FillerImage),src:"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg"})})]})};var q=function(){return Object(_.jsxs)("div",{className:i.a.App,children:[Object(_.jsx)(L,{}),Object(_.jsx)(j.a,{className:i.a.Main,children:Object(_.jsxs)(A.Switch,{children:[Object(_.jsx)(A.Route,{exact:!0,path:"/",render:()=>Object(_.jsx)("h1",{children:"Homepage"})}),Object(_.jsx)(A.Route,{exact:!0,path:"/signin",render:()=>Object(_.jsx)(Z,{})}),Object(_.jsx)(A.Route,{exact:!0,path:"/signup",render:()=>Object(_.jsx)(W,{})}),Object(_.jsx)(A.Route,{render:()=>Object(_.jsx)("p",{children:"Page not found!"})})]})})]})};var J=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,109)).then((a=>{let{getCLS:t,getFID:s,getFCP:n,getLCP:c,getTTFB:r}=a;t(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(h.a,{children:Object(_.jsx)(I,{children:Object(_.jsx)(q,{})})})}),document.getElementById("root")),J()}},[[99,1,2]]]);
//# sourceMappingURL=main.6c55077a.chunk.js.map