(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={item:"ContactListItem_item__38PTE",button:"ContactListItem_button__3a2tP"}},20:function(t,e,n){t.exports={label:"Filter_label__39_6l",input:"Filter_input__sHR07"}},21:function(t,e,n){t.exports={checkbox:"ThemeSelector_checkbox__yU8Fb"}},38:function(t,e,n){t.exports=n(88)},8:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3sDfq",contactLabel:"ContactForm_contactLabel__xofBd",contactInput:"ContactForm_contactInput__3gPst",contactSubmit:"ContactForm_contactSubmit__XMFZc"}},88:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(14),r=n.n(o),u=n(6),s=n(9),i=n(10),l=n(12),m=n(11),b=n(13),f=Object(a.createContext)(),h=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).toggleTheme=function(){n.setState({type:"dark"===n.state.type?"light":"dark"})},n.state={type:"light",themeConfig:{light:{headerBg:"#F7B30C",fontColor:"black",bodybg:"white"},dark:{headerBg:"#3c3c3c",fontColor:"white",bodybg:"black"}},toggleTheme:n.toggleTheme},n}return Object(b.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement(f.Provider,{value:this.state},this.props.children)}}]),e}(a.Component);h.Consumer=f.Consumer;var d=function(t){return function(e){return c.a.createElement(h.Consumer,null,(function(n){return c.a.createElement(t,Object.assign({},e,{theme:n}))}))}},C=n(3),p=n(2),g={addContactsRequest:Object(p.b)("/contacts/addRequest"),addContactsSuccess:Object(p.b)("/contacts/addSuccess"),addContactsError:Object(p.b)("/contacts/addError"),fetchContactsRequest:Object(p.b)("/contacts/fetchRequest"),fetchContactsSuccess:Object(p.b)("/contacts/fetchSuccess"),fetchContactsError:Object(p.b)("/contacts/fetchError"),removeContactsRequest:Object(p.b)("/contacts/removeRequest"),removeContactsSuccess:Object(p.b)("/contacts/removeSuccess"),removeContactsError:Object(p.b)("/contacts/removeError"),changeFilter:Object(p.b)("contacts/changeFilter")},v=n(7),j=n.n(v);j.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com/v1",j.a.defaults.headers.Authorization="f9f2a270-49b1-45db-b304-75c015e05a15",j.a.defaults.headers.post["Content-Type"]="application/json";var O={addContact:function(t){var e=t.name,n=t.number;return function(t){t(g.addContactsRequest()),j.a.post("/contacts",{name:e,number:n}).then((function(e){var n=e.data;return t(g.addContactsSuccess(n))})).catch((function(e){return t(g.addContactsError(e))}))}},fetchContacts:function(){return function(t){t(g.fetchContactsRequest()),j.a.get("/contacts").then((function(e){var n=e.data;return t(g.fetchContactsSuccess(n))})).catch((function(e){return t(g.fetchContactsError(e))}))}},removeContact:function(t){return function(e){e(g.removeContactsRequest()),j.a.delete("/contacts/".concat(t)).then((function(){return e(g.removeContactsSuccess(t))})).catch((function(t){return e(g.removeContactsError(t))}))}}},E=n(24),y=function(t){return t.contacts.items},F=function(t){return t.contacts.filter},_=Object(E.a)([y,F],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),k={getContacts:y,getFilter:F,getFilteredContacts:_,getContactById:function(t,e){return y(t).find((function(t){return t.id===e}))}},S=n(8),N=n.n(S),R=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleSubmit=function(t){t.preventDefault();var e=n.state,a=e.name,c=e.number,o=function(t){return t.length<1},r=n.props.contacts.find((function(t){return t.name===a}));o("".concat(a))||o("".concat(c))?alert("Please, fill in all required entry fields"):r?alert("".concat(a," is already in contacts")):(n.props.addContact({name:a,number:c}),n.setState({name:"",number:""}))},n.handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(C.a)({},a,c))},n}return Object(b.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement("form",{className:N.a.contactForm,onSubmit:this.handleSubmit},c.a.createElement("label",{className:N.a.contactLabel},"Name",c.a.createElement("input",{className:N.a.contactInput,type:"text",value:this.state.name,name:"name",onChange:this.handleChange})),c.a.createElement("label",{className:N.a.contactLabel},"Number",c.a.createElement("input",{className:N.a.contactInput,type:"text",value:this.state.number,name:"number",onChange:this.handleChange})),c.a.createElement("button",{className:N.a.contactSubmit,type:"submit"},"Add contact")))}}]),e}(a.Component),q={addContact:O.addContact},x=Object(u.b)((function(t){return{contacts:k.getContacts(t)}}),q)(R),L=n(35),w=n(19),I=n.n(w),T=Object(u.b)((function(t,e){var n=k.getContactById(t,e.id);return Object(L.a)({},n)}),(function(t,e){return{onRemoveContact:function(){return t(O.removeContact(e.id))}}}))((function(t){var e=t.name,n=t.number,a=t.onRemoveContact;return c.a.createElement("li",{className:I.a.item},c.a.createElement("p",{className:"TaskList-text"},e,": ",n),c.a.createElement("button",{className:I.a.button,type:"button",onClick:a},"Delete"))})),B=Object(u.b)((function(t){return{contacts:k.getFilteredContacts(t)}}))((function(t){var e=t.contacts;return c.a.createElement("div",null,c.a.createElement("h2",null,"Contacts"),c.a.createElement("ul",{className:"Contact"},e.map((function(t){var e=t.id;return c.a.createElement(T,{key:e,id:e})}))))})),P=n(20),A=n.n(P);var D,J,M={onChangeFilter:g.changeFilter},U=Object(u.b)((function(t){return{value:k.getFilter(t)}}),M)((function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("label",{className:A.a.label},"Find contacts by name",c.a.createElement("input",{type:"text",className:A.a.input,value:e,onChange:function(t){return n(t.target.value)}})))})),z=n(21),H=n.n(z),X=d((function(t){var e=t.theme;return c.a.createElement("div",{className:H.a.center},c.a.createElement("span",{className:"label"},e.type),c.a.createElement("input",{type:"checkbox",className:H.a.checkbox,checked:"dark"===e.type,onChange:function(){return e.toggleTheme()}}))})),Z=n(36),G=n.n(Z),K=function(t){function e(){return Object(s.a)(this,e),Object(l.a)(this,Object(m.a)(e).apply(this,arguments))}return Object(b.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.onFetchContacts()}},{key:"render",value:function(){var t=this.props.theme,e=t.themeConfig,n=t.type;return c.a.createElement("div",{style:{color:e[n].fontColor,background:e[n].bodybg}},this.props.isLoadingContacts&&c.a.createElement(G.a,{type:"Puff",color:"#00BFFF",height:50,width:50}),c.a.createElement(X,null),c.a.createElement(x,null),this.props.contacts.length>=2&&c.a.createElement(U,null),c.a.createElement(B,null))}}]),e}(a.Component),Q={onFetchContacts:O.fetchContacts},V=d(Object(u.b)((function(t){return{contacts:k.getContacts(t),isLoadingContacts:t.contacts.loading}}),Q)(K)),W=n(37),Y=n(5),$=Object(p.c)([],(D={},Object(C.a)(D,g.fetchContactsSuccess,(function(t,e){return e.payload})),Object(C.a)(D,g.addContactsSuccess,(function(t,e){return[].concat(Object(W.a)(t),[e.payload])})),Object(C.a)(D,g.removeContactsSuccess,(function(t,e){e.type;var n=e.payload;return t.filter((function(t){return t.id!==n}))})),D)),tt=Object(p.c)("",Object(C.a)({},g.changeFilter,(function(t,e){e.type;return e.payload}))),et=Object(p.c)(!1,(J={},Object(C.a)(J,g.fetchContactsRequest,(function(){return!0})),Object(C.a)(J,g.fetchContactsSuccess,(function(){return!1})),Object(C.a)(J,g.fetchContactsError,(function(){return!1})),Object(C.a)(J,g.addContactsRequest,(function(){return!0})),Object(C.a)(J,g.addContactsSuccess,(function(){return!1})),Object(C.a)(J,g.addContactsError,(function(){return!1})),Object(C.a)(J,g.removeContactsRequest,(function(){return!0})),Object(C.a)(J,g.removeContactsSuccess,(function(){return!1})),Object(C.a)(J,g.removeContactsError,(function(){return!1})),J)),nt=Object(Y.combineReducers)({items:$,filter:tt,loading:et}),at=Object(p.a)({reducer:{contacts:nt}});r.a.render(c.a.createElement(u.a,{store:at},c.a.createElement(h,null,c.a.createElement(V,null))),document.querySelector("#root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9ec40a9f.chunk.js.map