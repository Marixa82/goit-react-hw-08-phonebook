"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[524],{3524:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,o,a,i,l,c,d,s,x,p,u,h,f,g=t(2791),m=t(6494),b=t(9439),Z=t(168),F=t(5706),v=F.Z.button(r||(r=(0,Z.Z)(["\n  background-color: #333333;\n  margin: 10px;\n  padding: 10px 25px;\n  text-align: center;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: #F5FFFA;\n  box-shadow: 0 0 20px #eee;\n  border-radius: 10px;\n  display: block;\n\n  &:hover {\n    background-color:#e9d362;\n    color: #333333;\n    text-decoration: none;\n  }\n"]))),j=F.Z.label(o||(o=(0,Z.Z)(["\nfont-weight: bold;\nfont-size: 20px;\ndisplay:flex;\nflex-direction:column;\n"]))),w=F.Z.form(a||(a=(0,Z.Z)(["\nmax-width:400px;\nborder: 1px solid #2A363B;\n\npadding:20px;\nborder-radius: 10px;\ndisplay:flex;\nflex-direction:column;\ngap:20px;\nbackground-color: rgba(0, 0, 0, 0.3);\n"]))),y=F.Z.input(i||(i=(0,Z.Z)(["\nfont-size: 10px;\nwidth:200px;\nheight:20px;\nborder-radius: 5px;\nborder: none;\noutline:none;\n\n/* &:hover {\n  background-color: #e9d362;\n    color: #333333;\n  } */\n"]))),k=F.Z.span(l||(l=(0,Z.Z)(["\ntext-align: start;\nmargin-bottom: 5px;\ncolor: #F5FFFA;\ntext-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n\n"]))),C=t(9434),A=t(24),z=t(3329),S=function(){var n=(0,g.useState)(""),e=(0,b.Z)(n,2),t=e[0],r=e[1],o=(0,g.useState)(""),a=(0,b.Z)(o,2),i=a[0],l=a[1],c=(0,C.I0)(),d=(0,C.v9)(A.el.selectContacts),s=function(n){var e=n.target,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":l(o);break;default:return}},x=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",t=crypto.getRandomValues(new Uint8Array(n));n--;){var r=63&t[n];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e}(),p=function(){r(""),l("")},u=function(){return t&&i?function(n){var e=!!d.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}));return e&&alert("".concat(n," is already in items")),!e}(t):(alert("Some field is empty"),!1)};return(0,z.jsxs)(w,{onSubmit:function(n){n.preventDefault(),u()?(c(A.mh.addContact({id:x,name:t,number:i})),p()):p()},children:[(0,z.jsxs)(j,{htmlFor:x,children:[(0,z.jsx)(k,{children:"Name :"}),(0,z.jsx)(y,{type:"text",name:"name",value:t,id:x,onChange:s,placeholder:"Enter contact name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,minLength:2})]}),(0,z.jsxs)(j,{htmlFor:"",children:[(0,z.jsx)(k,{children:"Number :"}),(0,z.jsx)(y,{type:"tel",name:"number",value:i,onChange:s,placeholder:"Enter contact number",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,z.jsx)(v,{type:"submit",children:"Add contact"})]})},D=t(1413),E=F.Z.li(c||(c=(0,Z.Z)(["\n\ndisplay: flex;\njustify-content: space-between;\nmargin-bottom: 5px;\nalign-items: center;\n  gap: 5px;\n  color: #F5FFFA;\n  background-color: rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);"]))),I=F.Z.button(d||(d=(0,Z.Z)(["\n\n background-color: #333333;\n  margin: 10px;\n  padding: 10px 15px;\n  text-align: center;\n  transition: 0.5s;\n  background-size: 200% auto;\n  color: #F5FFFA;\n  box-shadow: 0 0 20px #eee;\n  border-radius: 10px;\n  display: block;\n\n  &:hover {\n    background-color:#e9d362;\n    color: #333333;\n    text-decoration: none;\n  }"]))),_=F.Z.span(s||(s=(0,Z.Z)(["\n  font-weight: 400;\n  padding: 10px;\n  list-style: none;\n  display: flex;\n  \n"]))),L=function(n){var e=n.id,t=n.name,r=n.number,o=(0,C.I0)();return(0,z.jsxs)(E,{children:[(0,z.jsx)(_,{children:(0,z.jsx)("b",{children:t})}),(0,z.jsx)(_,{children:r}),(0,z.jsx)(I,{type:"button",onClick:function(){return o(A.mh.deleteContact(e))},children:"Delete"})]})},q=F.Z.ul(x||(x=(0,Z.Z)(["\n  min-width: 300px;\n padding-left: 0px;\n  border-collapse: collapse;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  /* margin-right: 0; */\n  gap: 5px;\n  color: #f5fffa;\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);\n"]))),N=t(1775),B=function(){var n=(0,C.v9)(N.h);return 0===n?null:(0,z.jsx)(q,{children:n.map((function(n){var e=n.id;return(0,z.jsx)(L,(0,D.Z)({},n),e)}))})},H=F.Z.input(p||(p=(0,Z.Z)(["\nfont-size: 10px;\nwidth:200px;\nheight:20px;\nborder-radius: 5px;\nborder: none;\noutline:none;\n\n&:hover {\n  background-color: #e9d362;\n    color: #333333;\n  }"]))),P=F.Z.span(u||(u=(0,Z.Z)(["\nmargin-bottom: 5px;\ncolor: #F5FFFA;\ntext-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n\n"]))),R=F.Z.label(h||(h=(0,Z.Z)(["\npadding: 20px;\nfont-weight: bold;\ndisplay:flex;\nflex-direction:column;\ngap:10px;\nalign-items:flex-start;\njustify-content: flex-start;\n"]))),U=F.Z.div(f||(f=(0,Z.Z)(["\ndisplay: flex;\ntext-align: center;"]))),W=t(732),J=function(){var n=(0,C.v9)(A.el.selectFilter),e=(0,C.I0)();return(0,z.jsx)(U,{children:(0,z.jsxs)(R,{children:[(0,z.jsx)(P,{children:"Find contact by name"}),(0,z.jsx)(H,{type:"text",name:"filter",value:n,onChange:function(n){return e((0,W.T)(n.target.value))},placeholder:"Enter name for Search"})]})})},M=function(){var n=(0,C.I0)(),e=(0,C.v9)(A.el.selectIsLoading),t=(0,C.v9)(A.el.selectError);return(0,g.useEffect)((function(){n(A.mh.fetchContacts())}),[n]),(0,z.jsxs)(m.W2,{children:[(0,z.jsx)(m.Dx,{children:"Phonebook"}),(0,z.jsx)(S,{}),(0,z.jsx)(m.H2,{children:"Contacts"}),(0,z.jsx)(J,{}),e&&!t&&(0,z.jsx)("b",{children:"Request in progress..."}),(0,z.jsx)(B,{})]})}},6494:function(n,e,t){t.d(e,{Dr:function(){return f},Dx:function(){return p},H2:function(){return u},W2:function(){return h},ZC:function(){return x},jj:function(){return g}});var r,o,a,i,l,c,d=t(168),s=t(5706),x=s.Z.div(r||(r=(0,d.Z)(["\ndisplay: flex;\nflex-direction: column;\nmargin-top: 20px;\nalign-items: center;\ncolor: #F5FFFA;\nmargin-left: auto;\nmargin-right: auto;\ntext-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n  "]))),p=s.Z.h1(o||(o=(0,d.Z)(["\nfont-weight: 900;\nmargin: 15px 0px;\ncolor: #F5FFFA;\ntext-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n\n  "]))),u=s.Z.h2(a||(a=(0,d.Z)(["\nfont-weight: 400;\nmargin: 10px 0;\ncolor: #F5FFFA;\ntext-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\n\n  "]))),h=s.Z.div(i||(i=(0,d.Z)(["\n\n    display: flex;\nalign-items: center;\nflex-direction: column;\n    \n"]))),f=s.Z.span(l||(l=(0,d.Z)(["\n margin-top: 15px;\n font-weight: 500;\n \n &:hover{\n\n  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);\ncolor: #e9d362;\n}"]))),g=s.Z.div(c||(c=(0,d.Z)(["\n  /* color: #fc8181; */\n  font-size: 0.75rem;\n  text-align: left;\n  margin-top: 0.25rem;\n\n "])))}}]);
//# sourceMappingURL=524.3e0519fa.chunk.js.map