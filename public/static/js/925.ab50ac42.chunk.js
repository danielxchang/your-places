"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[925],{6925:function(e,n,t){t.r(n);var r=t(5861),a=t(885),i=t(7757),c=t.n(i),o=t(2791),u=t(8931),l=t(2810),s=t(3999),d=t(3373),f=t(9895),p=t(5434),h=t(5094),v=t(9508),m=t(3108),x=t(291),y=(t(8055),t(184));n.default=function(e){var n=(0,v.x)(),t=n.isLoading,i=n.error,b=n.sendRequest,j=n.clearError,Z=(0,o.useState)(),C=(0,a.Z)(Z,2),g=C[0],E=C[1],N=(0,u.UO)().placeId,V=(0,u.k6)(),k=(0,o.useContext)(m.V),w=(0,h.c)({title:{value:"",isValid:!1},description:{value:"",isValid:!1}},!1),T=(0,a.Z)(w,3),A=T[0],I=T[1],S=T[2];(0,o.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b("".concat("https://mern-dc.herokuapp.com","/api/places/").concat(N));case 3:n=e.sent,E(n.place),S({title:{value:n.place.title,isValid:!0},description:{value:n.place.description,isValid:!0}},!0),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[b,N,S]);var P=function(){var e=(0,r.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,b("".concat("https://mern-dc.herokuapp.com","/api/places/").concat(N),"PATCH",JSON.stringify({title:A.inputs.title.value,description:A.inputs.description.value}),{Authorization:"Bearer ".concat(k.token),"Content-Type":"application/json"});case 4:V.push("/".concat(k.userId,"/places")),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(n){return e.apply(this,arguments)}}();return t?(0,y.jsx)("div",{className:"center",children:(0,y.jsx)(f.Z,{})}):g||i?(0,y.jsxs)(o.Fragment,{children:[(0,y.jsx)(p.Z,{error:i,onClear:j}),!t&&g&&(0,y.jsxs)("form",{className:"place-form",onSubmit:P,children:[(0,y.jsx)(l.Z,{element:"input",id:"title",type:"text",label:"Title",validators:[(0,x.hg)()],errorText:"Please enter a valid title.",onInput:I,initialValue:g.title,initialValid:!0}),(0,y.jsx)(l.Z,{element:"textarea",id:"description",label:"Description",validators:[(0,x.CP)(5)],errorText:"Please enter a valid description (min. 5 characters).",onInput:I,initialValue:g.description,initialValid:!0}),(0,y.jsx)(s.Z,{type:"submit",disabled:!A.isValid,children:"UPDATE PLACE"})]})]}):(0,y.jsx)("div",{className:"center",children:(0,y.jsx)(d.Z,{children:(0,y.jsx)("h2",{children:"Could not find place!"})})})}},3999:function(e,n,t){t.d(n,{Z:function(){return i}});t(2791);var r=t(1523),a=t(184),i=function(e){return e.href?(0,a.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,a.jsx)(r.rU,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,a.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}},2810:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(885),a=t(1413),i=t(2791),c=t(291),o=t(184),u=function(e,n){switch(n.type){case"CHANGE":return(0,a.Z)((0,a.Z)({},e),{},{value:n.val,isValid:(0,c.Gu)(n.val,n.validators)});case"TOUCH":return(0,a.Z)((0,a.Z)({},e),{},{isTouched:!0});default:return e}},l=function(e){var n=(0,i.useReducer)(u,{value:e.initialValue||"",isTouched:!1,isValid:e.initialValid||!1}),t=(0,r.Z)(n,2),a=t[0],c=t[1],l=e.onInput,s=e.id,d=a.value,f=a.isValid,p=a.isTouched;(0,i.useEffect)((function(){l(s,d,f)}),[l,s,d,f]);var h=function(n){c({type:"CHANGE",val:n.target.value,validators:e.validators})},v=function(){c({type:"TOUCH"})},m="input"===e.element?(0,o.jsx)("input",{id:s,type:e.type,placeholder:e.placeholder,onChange:h,onBlur:v,value:d}):(0,o.jsx)("textarea",{id:s,rows:e.rows||3,onChange:h,onBlur:v,value:d});return(0,o.jsxs)("div",{className:"form-control ".concat(!f&&p&&"form-control--invalid"),children:[(0,o.jsx)("label",{htmlFor:s,children:e.label}),m,!f&&p&&(0,o.jsx)("p",{children:e.errorText})]})}},3373:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var r=t(184),a=function(e){return(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},5434:function(e,n,t){t(2791);var r=t(2921),a=t(3999),i=t(184);n.Z=function(e){return(0,i.jsx)(r.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,i.jsx)(a.Z,{onClick:e.onClear,children:"Okay"}),children:(0,i.jsx)("p",{children:e.error})})}},2921:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(1413),a=t(2791),i=t(4164),c=t(4595),o=t(9422),u=t(184),l=function(e){var n=(0,u.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,u.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,u.jsx)("h2",{children:e.header})}),(0,u.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,u.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,u.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return i.createPortal(n,document.getElementById("modal-hook"))},s=function(e){return(0,u.jsxs)(a.Fragment,{children:[e.show&&(0,u.jsx)(o.Z,{onClick:e.onCancel}),(0,u.jsx)(c.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,u.jsx)(l,(0,r.Z)({},e))})]})}},5094:function(e,n,t){t.d(n,{c:function(){return u}});var r=t(885),a=t(4942),i=t(1413),c=t(2791),o=function(e,n){switch(n.type){case"INPUT_CHANGE":var t=!0;for(var r in e.inputs)e.inputs[r]&&(t=r===n.inputId?t&&n.isValid:t&&e.inputs[r].isValid);return(0,i.Z)((0,i.Z)({},e),{},{inputs:(0,i.Z)((0,i.Z)({},e.inputs),{},(0,a.Z)({},n.inputId,{value:n.value,isValid:n.isValid})),isValid:t});case"SET_DATA":return{inputs:n.inputs,isValid:n.formIsValid};default:return e}},u=function(e,n){var t=(0,c.useReducer)(o,{inputs:e,isValid:n}),a=(0,r.Z)(t,2),i=a[0],u=a[1];return[i,(0,c.useCallback)((function(e,n,t){u({type:"INPUT_CHANGE",value:n,isValid:t,inputId:e})}),[]),(0,c.useCallback)((function(e,n){u({type:"SET_DATA",inputs:e,formIsValid:n})}),[])]}},9508:function(e,n,t){t.d(n,{x:function(){return u}});var r=t(5861),a=t(885),i=t(7757),c=t.n(i),o=t(2791),u=function(){var e=(0,o.useState)(!1),n=(0,a.Z)(e,2),t=n[0],i=n[1],u=(0,o.useState)(),l=(0,a.Z)(u,2),s=l[0],d=l[1],f=(0,o.useRef)([]),p=(0,o.useCallback)(function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,o,u,l,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:"GET",r=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:{},i(!0),o=new AbortController,f.current.push(o),e.prev=6,e.next=9,fetch(n,{method:t,body:r,headers:a,signal:o.signal});case 9:return u=e.sent,e.next=12,u.json();case 12:if(l=e.sent,f.current=f.current.filter((function(e){return e!==o})),u.ok){e.next=16;break}throw new Error(l.message);case 16:return i(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),i(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,o.useEffect)((function(){return function(){f.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:t,error:s,sendRequest:p,clearError:function(){d(null)}}}},291:function(e,n,t){t.d(n,{Ox:function(){return s},CP:function(){return l},hg:function(){return u},Gu:function(){return d}});var r=t(8192);var a="REQUIRE",i="MINLENGTH",c="MAXLENGTH",o="EMAIL",u=function(){return{type:a}},l=function(e){return{type:i,val:e}},s=function(){return{type:o}},d=function(e,n){var t,u=!0,l=function(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,o=!0,u=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){u=!0,c=e},f:function(){try{o||null==t.return||t.return()}finally{if(u)throw c}}}}(n);try{for(l.s();!(t=l.n()).done;){var s=t.value;s.type===a&&(u=u&&e.trim().length>0),s.type===i&&(u=u&&e.trim().length>=s.val),s.type===c&&(u=u&&e.trim().length<=s.val),"MIN"===s.type&&(u=u&&+e>=s.val),"MAX"===s.type&&(u=u&&+e<=s.val),s.type===o&&(u=u&&/^\S+@\S+\.\S+$/.test(e))}}catch(d){l.e(d)}finally{l.f()}return u}},8055:function(){}}]);
//# sourceMappingURL=925.ab50ac42.chunk.js.map