(this.webpackJsonpclient_side=this.webpackJsonpclient_side||[]).push([[0],{17:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),r=a(14),o=a.n(r),c=(a(22),a(4)),m=(a(23),a(24),a(3)),d=a(15),s=a.n(d).a.create({baseURL:"/api/",headers:{"Content-type":"application/json"}}),u=function(){return s.get("get-store-data")},i=function(){var e=Object(l.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(l.useEffect)((function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).API_URL),u().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("table",{className:"StoreTable"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Your Stores"),n.a.createElement("th",null,"Total footfall ",n.a.createElement(m.c,null)),n.a.createElement("th",null,"New footfall ",n.a.createElement(m.c,null)),n.a.createElement("th",null,"Returning footfall ",n.a.createElement(m.c,null)),n.a.createElement("th",null,"Total time spent in the shop ",n.a.createElement(m.c,null)),n.a.createElement("th",null,"Total departments visited ",n.a.createElement(m.c,null)),n.a.createElement("th",null,"Average department visit time ",n.a.createElement(m.c,null)),n.a.createElement("th",null,"Bounce rate ",n.a.createElement(m.c,null)),n.a.createElement("th",null,"Store performance"))),n.a.createElement("tbody",null,null===a||void 0===a?void 0:a.map((function(e){return n.a.createElement("tr",{key:e.id},n.a.createElement("td",null,n.a.createElement("span",{className:"StoreTable__StoreName"}," ",e.st_name)),n.a.createElement("td",null,e.st_total_footfall),n.a.createElement("td",null,e.st_total_footfall-e.st_returning_footfall),n.a.createElement("td",null,e.st_returning_footfall),n.a.createElement("td",null,e.st_time_spent," h"),n.a.createElement("td",null,e.st_tot_dep_visited," / ",e.st_tot_departments),n.a.createElement("td",null,e.st_avg_dep_time," h"),n.a.createElement("td",null,e.st_bounce_rate,"%"),n.a.createElement("td",null,e.rank))})))))},_=(a(42),a(16)),E=function(e){var t=e.open,a=e.onClose;return t?n.a.createElement("div",{className:"AddStoreModal"},n.a.createElement("div",{className:"AddStoreModal__container"},n.a.createElement("h3",{className:"AddStoreModal__title"},n.a.createElement(_.a,{className:"AddStoreModal__titleIcon"}),"Add a Store"),n.a.createElement("form",{className:"AddStoreModal__form"},n.a.createElement("div",{className:"AddStoreModal__formGroup"},n.a.createElement("label",null,"Store name"),n.a.createElement("input",{type:"text",className:"AddStoreModal__formInputs"})),n.a.createElement("div",{className:"AddStoreModal__formGroup"},n.a.createElement("label",null,"Total football"),n.a.createElement("input",{type:"text",className:"AddStoreModal__formInputs"})),n.a.createElement("div",{className:"AddStoreModal__formGroup"},n.a.createElement("label",null,"New football"),n.a.createElement("input",{type:"text",className:"AddStoreModal__formInputs"})),n.a.createElement("div",{className:"AddStoreModal__formGroup"},n.a.createElement("label",null,"Returning football"),n.a.createElement("input",{type:"text",className:"AddStoreModal__formInputs"})),n.a.createElement("div",{className:"AddStoreModal__formGroup"},n.a.createElement("label",null,"Total time spent in the shop"),n.a.createElement("input",{type:"text",className:"AddStoreModal__formInputs"})),n.a.createElement("div",{className:"AddStoreModal__formGroup"},n.a.createElement("label",null,"Total departments"),n.a.createElement("input",{type:"text",className:"AddStoreModal__formInputs"})),n.a.createElement("div",{className:"AddStoreModal__formGroup"},n.a.createElement("label",null,"Total departments vistied"),n.a.createElement("input",{type:"text",className:"AddStoreModal__formInputs"}))),n.a.createElement("span",{className:"AddStoreModal__closeBtn",onClick:a},n.a.createElement(m.a,null)))):null};var p=function(){var e=Object(l.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1];return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"App__Container"},n.a.createElement("button",{className:"App__addStoreBtn btn-grad",onClick:function(){return r(!0)}},n.a.createElement(m.b,null)," Add Store"),n.a.createElement(i,null)),n.a.createElement(E,{open:a,onClose:function(){return r(!1)}}))};o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ae0526a2.chunk.js.map