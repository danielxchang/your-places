"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[743],{9743:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var r=t(5861),c=t(885),a=t(7757),s=t.n(a),o=t(8931),i=t(2791),l=t(9508),u=t(3373),d=t(3999),h=t(2921),f=t(184),m=function(e){var n=(0,i.useRef)(),t=e.center,r=e.zoom;return(0,i.useEffect)((function(){var e=new window.google.maps.Map(n.current,{center:t,zoom:r});new window.google.maps.Marker({position:t,map:e})}),[t,r]),(0,f.jsx)("div",{ref:n,className:"map ".concat(e.className),style:e.style})},p=t(5434),x=t(9895),j=t(3108),v=function(e){var n=(0,l.x)(),t=n.isLoading,a=n.error,o=n.sendRequest,v=n.clearError,g=(0,i.useContext)(j.V),Z=(0,i.useState)(!1),C=(0,c.Z)(Z,2),b=C[0],k=C[1],E=(0,i.useState)(!1),w=(0,c.Z)(E,2),N=w[0],_=w[1],y=function(){k((function(e){return!e}))},D=function(){_((function(e){return!e}))},S=function(){var n=(0,r.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _(!1),n.prev=1,n.next=4,o("".concat("https://mern-dc.herokuapp.com","/api/places/").concat(e.id),"DELETE",null,{Authorization:"Bearer ".concat(g.token)});case 4:e.onDelete(e.id),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(1);case 9:case"end":return n.stop()}}),n,null,[[1,7]])})));return function(){return n.apply(this,arguments)}}();return(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(p.Z,{error:a,onClear:v}),(0,f.jsx)(h.Z,{show:b,onCancel:y,header:e.address,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",footer:(0,f.jsx)(d.Z,{onClick:y,children:"CLOSE"}),children:(0,f.jsx)("div",{className:"map-container",children:(0,f.jsx)(m,{center:e.coordinates,zoom:16})})}),(0,f.jsx)(h.Z,{show:N,onCancel:D,header:"Are you sure?",footerClass:"place-item__modal-actions",footer:(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(d.Z,{inverse:!0,onClick:D,children:"CANCEL"}),(0,f.jsx)(d.Z,{danger:!0,to:"",onClick:S,children:"DELETE"})]}),children:(0,f.jsx)("p",{children:"Do you want to proceed and delete this place? Please note that it can't be undone thereafter."})}),(0,f.jsx)("li",{className:"place-item",children:(0,f.jsxs)(u.Z,{className:"place-item__content",children:[t&&(0,f.jsx)(x.Z,{asOverlay:!0}),(0,f.jsx)("div",{className:"place-item__image",children:(0,f.jsx)("img",{src:"".concat("https://mern-dc.herokuapp.com","/").concat(e.image),alt:e.title})}),(0,f.jsxs)("div",{className:"place-item__info",children:[(0,f.jsx)("h2",{children:e.title}),(0,f.jsx)("h3",{children:e.address}),(0,f.jsx)("p",{children:e.description})]}),(0,f.jsxs)("div",{className:"place-item__actions",children:[(0,f.jsx)(d.Z,{inverse:!0,onClick:y,children:"VIEW ON MAP"}),g.userId===e.creatorId&&(0,f.jsx)(d.Z,{to:"/places/".concat(e.id),children:"EDIT"}),g.userId===e.creatorId&&(0,f.jsx)(d.Z,{danger:!0,onClick:D,children:"DELETE"})]})]})})]})},g=function(e){return 0===e.items.length?(0,f.jsx)("div",{className:"place-list center",children:(0,f.jsxs)(u.Z,{children:[(0,f.jsx)("h2",{children:"No places found. Maybe create one?"}),(0,f.jsx)(d.Z,{to:"/places/new",children:"Share Place"})]})}):(0,f.jsx)("ul",{className:"place-list",children:e.items.map((function(n){return(0,f.jsx)(v,{id:n.id,image:n.image,title:n.title,description:n.description,address:n.address,creatorId:n.creator,coordinates:n.location,onDelete:e.onDeletePlace},n.id)}))})},Z=function(e){var n=(0,o.UO)().userId,t=(0,i.useState)(),a=(0,c.Z)(t,2),u=a[0],d=a[1],h=(0,l.x)(),m=h.isLoading,j=h.error,v=h.sendRequest,Z=h.clearError;(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v("".concat("https://mern-dc.herokuapp.com","/api/places/user/").concat(n));case 3:t=e.sent,d(t.places),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[v,n]);return(0,f.jsxs)(i.Fragment,{children:[(0,f.jsx)(p.Z,{error:j,onClear:Z}),m&&(0,f.jsx)("div",{className:"center",children:(0,f.jsx)(x.Z,{})}),!m&&u&&(0,f.jsx)(g,{items:u,onDeletePlace:function(e){d((function(n){return n.filter((function(n){return n.id!==e}))}))}})]})}},3999:function(e,n,t){t.d(n,{Z:function(){return a}});t(2791);var r=t(1523),c=t(184),a=function(e){return e.href?(0,c.jsx)("a",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),href:e.href,children:e.children}):e.to?(0,c.jsx)(r.rU,{to:e.to,exact:e.exact,className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),children:e.children}):(0,c.jsx)("button",{className:"button button--".concat(e.size||"default"," ").concat(e.inverse&&"button--inverse"," ").concat(e.danger&&"button--danger"),type:e.type,onClick:e.onClick,disabled:e.disabled,children:e.children})}},3373:function(e,n,t){t.d(n,{Z:function(){return c}});t(2791);var r=t(184),c=function(e){return(0,r.jsx)("div",{className:"card ".concat(e.className),style:e.style,children:e.children})}},5434:function(e,n,t){t(2791);var r=t(2921),c=t(3999),a=t(184);n.Z=function(e){return(0,a.jsx)(r.Z,{onCancel:e.onClear,header:"An Error Occurred!",show:!!e.error,footer:(0,a.jsx)(c.Z,{onClick:e.onClear,children:"Okay"}),children:(0,a.jsx)("p",{children:e.error})})}},2921:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(1413),c=t(2791),a=t(4164),s=t(4595),o=t(9422),i=t(184),l=function(e){var n=(0,i.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[(0,i.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:(0,i.jsx)("h2",{children:e.header})}),(0,i.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[(0,i.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),(0,i.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return a.createPortal(n,document.getElementById("modal-hook"))},u=function(e){return(0,i.jsxs)(c.Fragment,{children:[e.show&&(0,i.jsx)(o.Z,{onClick:e.onCancel}),(0,i.jsx)(s.Z,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:(0,i.jsx)(l,(0,r.Z)({},e))})]})}},9508:function(e,n,t){t.d(n,{x:function(){return i}});var r=t(5861),c=t(885),a=t(7757),s=t.n(a),o=t(2791),i=function(){var e=(0,o.useState)(!1),n=(0,c.Z)(e,2),t=n[0],a=n[1],i=(0,o.useState)(),l=(0,c.Z)(i,2),u=l[0],d=l[1],h=(0,o.useRef)([]),f=(0,o.useCallback)(function(){var e=(0,r.Z)(s().mark((function e(n){var t,r,c,o,i,l,u=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>1&&void 0!==u[1]?u[1]:"GET",r=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{},a(!0),o=new AbortController,h.current.push(o),e.prev=6,e.next=9,fetch(n,{method:t,body:r,headers:c,signal:o.signal});case 9:return i=e.sent,e.next=12,i.json();case 12:if(l=e.sent,h.current=h.current.filter((function(e){return e!==o})),i.ok){e.next=16;break}throw new Error(l.message);case 16:return a(!1),e.abrupt("return",l);case 20:throw e.prev=20,e.t0=e.catch(6),d(e.t0.message),a(!1),e.t0;case 25:case"end":return e.stop()}}),e,null,[[6,20]])})));return function(n){return e.apply(this,arguments)}}(),[]);return(0,o.useEffect)((function(){return function(){h.current.forEach((function(e){return e.abort()}))}}),[]),{isLoading:t,error:u,sendRequest:f,clearError:function(){d(null)}}}}}]);
//# sourceMappingURL=743.e5ddc3f7.chunk.js.map