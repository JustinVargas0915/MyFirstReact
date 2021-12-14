(this.webpackJsonpmyfirstreact=this.webpackJsonpmyfirstreact||[]).push([[0],{29:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(19),r=n.n(s),l=(n(29),n(6)),i=n(2),o=n(20),j=n.n(o).a.create({baseURL:"http://localhost:8080/api/v1",headers:{"Content-Type":"application/json"}}),d=function(){return j.get("/employees")},b=function(e){return j.post("/employees",e)},h=n(0),u=function(){var e=Object(c.useState)(""),t=e.name,n=e.setName,a=Object(c.useState)(""),s=a.location,r=a.setLocation,l=Object(c.useState)(""),o=l.department,j=l.setDepartment,d=Object(i.f)();Object(i.g)().id;return b({name:t,location:s,department:o}).then((function(e){console.log("Added new Employee!",e.data),d("/employees")})).catch((function(e){console.log("Something wnet Wrong! SADGE!")})),Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:"Add Employee:"}),Object(h.jsxs)("form",{children:[Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"name",className:"form-label",children:"Name"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"name",placeholder:"Add employee name",onChange:function(e){n(e.target.value)}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"location",className:"form-label",children:"Location"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"location",placeholder:"Add employee location",onChange:function(e){r(e.target.value)}})]}),Object(h.jsxs)("div",{className:"mb-3",children:[Object(h.jsx)("label",{for:"department",className:"form-label",children:"Department"}),Object(h.jsx)("input",{type:"text",className:"form-control",id:"department",placeholder:"Add employee department",onChange:function(e){j(e.target.value)}})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){return function(e){e.preventDefault()}(e)},children:"Submit!"})]})]})},O=n(5),m=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){d().then((function(e){a(e.data)})).catch((function(){return console.log("Sorry!")}))})),Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h3",{children:"List of Employees"}),Object(h.jsx)("div",{children:Object(h.jsxs)("table",{className:"table table-hover table-light table-striped",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"table-danger",children:[Object(h.jsx)("td",{children:"Name"}),Object(h.jsx)("td",{children:"Location"}),Object(h.jsx)("td",{children:"Department"}),Object(h.jsx)("td",{children:"Action"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.name}),Object(h.jsx)("td",{children:e.location}),Object(h.jsx)("td",{children:e.department}),Object(h.jsx)("td",{children:Object(h.jsx)(l.b,{className:"btn btn-primary",to:"/edit/${employee.employeeId}",children:"Update"})})]})}))})]})})]})},x=(n.p,n(49),n(21)),p=n(22),f=n(24),v=n(23),g=function(e){Object(f.a)(n,e);var t=Object(v.a)(n);function n(){var e;return Object(x.a)(this,n),(e=t.call(this)).addCounter=function(){e.setState({count:e.state.count+1})},e.state={count:0},e}return Object(p.a)(n,[{key:"decreaseCounter",value:function(){this.setState({count:this.state.count-1})}},{key:"reset",value:function(){this.setState({count:0})}},{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"inc",onClick:function(t){return e.addCounter(t)},children:"Add Counter"}),Object(h.jsx)("button",{className:"dec",onClick:function(t){return e.decreaseCounter(t)},children:"Decrease Counter"}),Object(h.jsx)("button",{className:"reset",onClick:function(t){return e.reset(t)},children:"Reset Counter"}),Object(h.jsxs)("h1",{children:["Current Counter ng utak ko: ",this.state.count]})]})}}]),n}(a.a.Component),y=function(){return j.get("/hello")},N=function(){var e=Object(c.useState)("API is Down!"),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){y().then((function(e){a(e.data)})).catch((function(e){console.log("something went wrong JK!")}))})),n},C=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)("nav",{class:"navbar-expand-lg navbar-light bg-light",children:[Object(h.jsx)("div",{class:"container-fluid"}),Object(h.jsx)("a",{class:"navbar-brand",href:"/",children:"ICS2608"}),Object(h.jsx)("div",{class:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(h.jsxs)("div",{class:"navbar-nav",children:[Object(h.jsx)("a",{class:"nav-link active","aria-current":"page",href:"/",children:"Home"}),Object(h.jsx)("a",{class:"nav-link",href:"/employees",children:"Employees"}),Object(h.jsx)("a",{class:"nav-link",href:"/add",children:"Add Employee"}),Object(h.jsx)("a",{class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":!0,children:"Disabled"})]})})]})})};var k=function(){return Object(h.jsx)("div",{className:"Home",children:Object(h.jsxs)("header",{className:"App-header",children:[Object(h.jsx)("img",{src:"https://i.kym-cdn.com/photos/images/facebook/002/139/744/c27.png",className:"App-logo",alt:"logo"}),Object(h.jsx)("p",{children:"POGGERS!"}),Object(h.jsx)("p",{children:N()}),Object(h.jsx)(g,{}),Object(h.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},S=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Page Not Found!"}),Object(h.jsx)("h2",{children:"*Ragemode: ON*"})]})},A=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(l.a,{children:Object(h.jsxs)(i.c,{children:[Object(h.jsx)(i.a,{exact:!0,path:"/",element:Object(h.jsx)(k,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/employees",element:Object(h.jsx)(m,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/add",element:Object(h.jsx)(u,{})}),Object(h.jsx)(i.a,{exact:!0,path:"/edit/:id",element:Object(h.jsx)(u,{})}),Object(h.jsx)(i.a,{exact:!0,path:"*",element:Object(h.jsx)(S,{})})]})})})};var E=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(C,{}),Object(h.jsx)(A,{})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};n(50);r.a.render(Object(h.jsxs)(a.a.StrictMode,{children:[Object(h.jsx)(E,{}),Object(h.jsx)(E,{})]}),document.getElementById("root")),D()}},[[51,1,2]]]);
//# sourceMappingURL=main.41b2e195.chunk.js.map