(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{212:function(e,a,t){},213:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(12),o=t.n(c),l=t(7),s=t(8),i=t(10),m=t(9),u=t(11),p=t(2),h=t.n(p),d=t(52),b=t(21),E=(t(57),t(14)),f=t.n(E),v=r.a.createContext(),y=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(b.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(b.a)({},e,{contacts:[a.payload].concat(Object(d.a)(e.contacts))});case"UPDATE_CONTACT":return Object(b.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},g=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[{id:1,name:"John Doe",email:"jdoe@gmail.com",phone:"555-555-5555"},{id:2,name:"Karen  Williams",email:"karen@gmail.com",phone:"222-222-2222"},{id:3,name:"Henry  Johnson",email:"henry@gmail.com",phone:"111-111-1111"}],dispatch:function(e){t.setState((function(a){return y(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return h.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h.a.awrap(f.a.get("https://jsonplaceholder.typicode.com/users"));case 2:e=a.sent,this.setState({contacts:e.data});case 4:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement(v.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),N=v.Consumer,C=t(16),j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(e){t.setState({showContactInfo:!t.state.showContactInfo})},t.onDeleteClick=function(e,a){return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.awrap(f.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)));case 2:a({type:"DELETE_CONTACT",payload:e});case 3:case"end":return t.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=this.props.contact.id,n=this.state.showContactInfo;return r.a.createElement(N,null,(function(c){var o=c.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,a.name,r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,t,o)}),r.a.createElement(C.b,{to:"contact/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),n?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",a.email),r.a.createElement("li",{className:"list-group-item"},"Phone: ",a.phone)):null)}))}}]),a}(n.Component),O=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(N,null,(function(e){var a=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h",{className:"display-4 mb2"},r.a.createElement("span",{className:"text-danger"},"Contact")," List"),a.map((function(e){return r.a.createElement(j,{key:e.id,contact:e})})))}))}}]),a}(n.Component),k=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm\r navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(C.b,{to:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}," "),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.b,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}," ")," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}," "),"About"))))))};k.defaultProps={branding:"My App"};var w=k,x=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"diplay-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"Version 1.0.0"))},S=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"dispaly-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not found"),r.a.createElement("p",{className:"lead"},"Sorry that page does not exists"))},A=t(19),T=t(26),D=t.n(T),P=t(51),q=t.n(P),R=function(e){var a=e.label,t=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:t},a),r.a.createElement("input",{type:o,name:t,className:q()("form-control form-control-lg",{"is-invalid":s}),placeholder:c,value:n,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s," "))};R.defaultProps={type:"text"};var _=R,I=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){var n,r,c,o,l,s;return h.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,o=n.phone,""!==r){i.next=5;break}return t.setState({errors:{name:"Name is Required"}}),i.abrupt("return");case 5:if(""!==c){i.next=8;break}return t.setState({errors:{email:"Email is Required"}}),i.abrupt("return");case 8:if(""!==o){i.next=11;break}return t.setState({errors:{phone:"Phone is Required"}}),i.abrupt("return");case 11:return l={id:D()(),name:r,email:c,phone:o},i.next=14,h.a.awrap(f.a.post("https://jsonplaceholder.typicode.com/users",l));case 14:s=i.sent,e({type:"ADD_CONTACT",payload:s.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 18:case"end":return i.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(N,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{lable:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{lable:"Email",name:"email",placeholder:"Enter Email",value:n,type:"email",onChange:e.onChange,error:o.email}),r.a.createElement(_,{lable:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),M=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onChange=function(e){return t.setState(Object(A.a)({},e.target.name,e.target.value))},t.onSubmit=function(e,a){var n,r,c,o,l,s,i;return h.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,o=n.phone,""!==r){m.next=5;break}return t.setState({errors:{name:"Name is Required"}}),m.abrupt("return");case 5:if(""!==c){m.next=8;break}return t.setState({errors:{email:"Email is Required"}}),m.abrupt("return");case 8:if(""!==o){m.next=11;break}return t.setState({errors:{phone:"Phone is Required"}}),m.abrupt("return");case 11:return l={name:r,email:c,phone:o},s=t.props.match.params.id,m.next=15,h.a.awrap(f.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),l));case 15:i=m.sent,e({type:"UPDATE_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:"",errors:{}}),t.props.history.push("/");case 19:case"end":return m.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,a,t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match.params.id,n.next=3,h.a.awrap(f.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)));case 3:a=n.sent,t=a.data,this.setState({name:t.name,email:t.email,phone:t.phone});case 6:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(N,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,l)},r.a.createElement(_,{lable:"Name",name:"name",placeholder:"Enter Name",value:t,onChange:e.onChange,error:o.name}),r.a.createElement(_,{lable:"Email",name:"email",placeholder:"Enter Email",value:n,type:"email",onChange:e.onChange,error:o.email}),r.a.createElement(_,{lable:"Phone",name:"phone",placeholder:"Enter Phone",value:c,onChange:e.onChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),J=(t(211),t(212),t(17));var L=function(){return r.a.createElement(g,null,r.a.createElement(C.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(w,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(J.c,null,r.a.createElement(J.a,{exact:!0,path:"/",component:O}),r.a.createElement(J.a,{exact:!0,path:"/contact/add",component:I}),r.a.createElement(J.a,{exact:!0,path:"/contact/edit/:id",component:M}),r.a.createElement(J.a,{exact:!0,path:"/about",component:x}),r.a.createElement(J.a,{exact:!0,component:S}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,a,t){e.exports=t(213)}},[[53,1,2]]]);
//# sourceMappingURL=main.1f86b977.chunk.js.map