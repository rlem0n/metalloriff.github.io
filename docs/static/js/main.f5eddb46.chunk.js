(this["webpackJsonpmetalloriff-io"]=this["webpackJsonpmetalloriff-io"]||[]).push([[0],[,,,,,,,,,function(e,t,n){"use strict";function r(){for(var e="",t=0;t<arguments.length;t++){switch(typeof arguments[t]){case Array.isArray(arguments[t])&&"boolean"===typeof arguments[t][0]&&"object":!0===arguments[t][0]?e+=arguments[t][1]:arguments[t][2]&&(e+=arguments[t][2]);break;default:e+=arguments[t]}e+=" "}return e.trim()}function c(){return Math.random().toString(36).substr(7)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}))},,,function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return S})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i}));var r,c,a,i,s=n(3),o=n(6),l=n(22),u=n(16),d=n(11),j=n.n(d),h=n(13),b=n(4),p=n(5),f=n(8),v=n(7),O=n(1),m=n.n(O),x=(n(38),n(15)),g=n(17),y=n(10),k=n(14),C=n(23),w=n(9),N=n(0),M=[],S=function(t){Object(f.a)(d,t);var n=Object(v.a)(d);function d(){var e;Object(b.a)(this,d);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={active:!1,locked:!1,modals:[],closing:[]},e}return Object(p.a)(d,[{key:"componentDidMount",value:function(){var t=this;r=function(){var n=Object(h.a)(j.a.mark((function n(r){var c,a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.state.locked){n.next=5;break}return n.next=3,new Promise((function(t){return e(t)}));case 3:n.next=0;break;case 5:return n.next=7,new Promise((function(t){return e(t)}));case 7:return c=t.state.modals,a=c.push(r),t.setState({modals:c,active:!0}),n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),c=function(){if(t.state.modals.length>0){var e=Object(u.a)(t.state.modals),n=t.state.modals[e.length-1],r=Object(u.a)(t.state.closing);e.pop(n),r.push(n),t.state.active&&(t.setState({active:e.length>0,locked:!0,closing:r}),setTimeout((function(){t.state.closing.pop(n),t.setState({modals:e,locked:!1})}),300));var c,a=Object(l.a)(M);try{for(a.s();!(c=a.n()).done;){(0,c.value)()}}catch(i){a.e(i)}finally{a.f()}M=[]}},a=function(e){try{window.navigator.clipboard.writeText(e),g.a.showToast(Object(N.jsxs)("span",{children:[Object(N.jsx)("b",{children:e.length>=100?e.substr(0,100)+"...":e})," copied to clipboard"]}),"Success")}catch(t){console.error(t),g.a.showToast("Your browser does not support copying to clipboard!","Failure")}},i=function(e,t){var n=function(){var n=m.a.useRef(),r="function"===typeof t?t():null,a=function(e){var t=e.img,n=m.a.useState(-1),c=Object(o.a)(n,2),a=c[0],i=c[1];m.a.useEffect((function(){setTimeout((function(){t.current&&i(r.indexOf(t.current.src))}),500)}));var s=function(e,n){t.current.src=r[a+n],i(a+n),e.preventDefault(),e.stopPropagation()};return-1===a?null:Object(N.jsxs)("div",{className:"ArrowsContainer",children:[a>0?Object(N.jsx)("div",{className:"Arrow Left",onClick:function(e){return s(e,-1)},children:Object(N.jsx)(y.a,{className:"Icon",icon:k.a})}):null,a<r.length-1?Object(N.jsx)("div",{className:"Arrow Right",onClick:function(e){return s(e,1)},children:Object(N.jsx)(y.a,{className:"Icon",icon:k.b})}):null]})};return Object(N.jsxs)("div",{className:"ImageModal",onClick:function(){return c()},children:[Object(N.jsx)("img",{ref:n,src:e,alt:"Image failed to load."}),(null===r||void 0===r?void 0:r.length)?Object(N.jsx)(a,{img:n}):null]})};r(Object(N.jsx)(n,{}))},function(){var e=Object(h.a)(j.a.mark((function e(t){var n,a,i,s,o,l,u,d,h,b,p,f,v;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.title,a=void 0===n?"":n,i=t.description,s=void 0===i?"":i,o=t.yesText,l=void 0===o?"Yes":o,u=t.noText,d=void 0===u?"No":u,h=t.yesColor,b=void 0===h?"#ff6666":h,p=t.noColor,f=void 0===p?"":p,e.next=3,new Promise((function(e){r(Object(N.jsxs)("div",{className:"BoolModal PrimaryBg",children:[Object(N.jsx)("div",{className:"Title",dangerouslySetInnerHTML:{__html:a}}),Object(N.jsx)("div",{className:"Description",dangerouslySetInnerHTML:{__html:s}}),Object(N.jsxs)("div",{className:"Footer",children:[Object(N.jsx)("div",{className:"Button TertiaryBg",onClick:function(){return e(!1)},style:{backgroundColor:f},children:d}),Object(N.jsx)("div",{className:"Button TertiaryBg",onClick:function(){return e(!0)},style:{backgroundColor:b},children:l})]})]}))}));case 3:return v=e.sent,c(),e.abrupt("return",v);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),function(){var e=Object(h.a)(j.a.mark((function e(t){var n,a,i,o,l,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.rich,void 0!==n&&n,a=t.async,i=void 0!==a&&a,o=Object(w.a)(),l=o.id,e.next=4,new Promise((function(e){r(Object(N.jsx)(T,Object(s.a)(Object(s.a)({resolve:e},t),{},{id:l})))}));case 4:return u=e.sent,!i&&c(),e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},{key:"handleBackdropClick",value:function(e){var t,n;if(["Modal","ModalContainer"].some((function(t){return e.target.classList.contains(t)}))){var r=this.state.modals;(null!==(t=null===(n=r[r.length-1].props)||void 0===n?void 0:n.onBackdropClick)&&void 0!==t?t:c)()}}},{key:"render",value:function(){var e=this;return Object(N.jsx)(x.a,{children:Object(N.jsx)("div",{className:"ModalContainer"+(this.state.active?" Active":""),onMouseDown:this.handleBackdropClick.bind(this),children:this.state.modals.map((function(t){return Object(N.jsx)("div",{className:"Modal"+(e.state.closing.includes(t)||e.state.modals.indexOf(t)<e.state.modals.length-1&&0===e.state.closing.length?" Closing":""),style:{zIndex:10*e.state.modals.indexOf(t)},children:Object(N.jsx)(x.a,{children:t})},e.state.modals.indexOf(t))}))})})}}]),d}(m.a.Component);function T(e){var t=e.title,n=void 0===t?"":t,r=e.description,c=void 0===r?"":r,a=e.yesText,i=void 0===a?"Confirm":a,s=e.noText,l=void 0===s?"Cancel":s,u=e.yesColor,d=void 0===u?"":u,j=e.noColor,h=void 0===j?"":j,b=e.value,p=void 0===b?"":b,f=e.onChange,v=void 0===f?null:f,O=(e.rich,e.resolve),x=e.id,g=m.a.useState(!1),y=Object(o.a)(g,2),k=y[0],w=y[1],M=m.a.useState(!1),S=Object(o.a)(M,2),T=S[0],B=S[1];return Object(N.jsxs)("div",{className:"StringModal PrimaryBg",children:[Object(N.jsx)("div",{className:"Title",dangerouslySetInnerHTML:{__html:n}}),Object(N.jsx)("div",{className:"Description",dangerouslySetInnerHTML:{__html:c}}),Object(N.jsx)("input",{id:x,className:"Field TertiaryBg",defaultValue:p,onChange:v}),Object(N.jsxs)("div",{className:"Footer",children:[Object(N.jsx)("div",{className:"Button TertiaryBg",onClick:function(){return O(null),w(!0)},style:{backgroundColor:h},children:k?Object(N.jsx)(C.a,{}):l}),Object(N.jsx)("div",{className:"Button TertiaryBg",onClick:function(){return O(document.getElementById(x).value),B(!0)},style:{backgroundColor:d},children:T?Object(N.jsx)(C.a,{}):i})]})]})}}).call(this,n(28).setImmediate)},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(4),c=n(5),a=n(8),i=n(7),s=n(1),o=n.n(s),l=(n(39),n(12)),u=n(0),d=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={error:null,errorInfo:null,moreInfo:!1},c}return Object(c.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"showErrorInfo",value:function(){var e=this.state,t=e.error,n=e.errorInfo;Object(l.e)(Object(u.jsxs)("div",{className:"ErrorInfoModal PrimaryBg",onClick:function(){return Object(l.b)()},children:[Object(u.jsx)("h1",{children:t.message}),n.componentStack.split("\n").slice(0,10).map((function(e,t){return Object(u.jsx)("h2",{children:e},t)}))]}))}},{key:"renderError",value:function(){var e=this;this.state.moreInfo;return Object(u.jsxs)("div",{className:"ErrorBoundaryHandler",children:[Object(u.jsx)("h1",{children:"There was an error with this component!"}),Object(u.jsx)("h2",{children:"This is due to a plugin error or application error."}),Object(u.jsxs)("div",{className:"ErrorBoundaryFooter",children:[Object(u.jsx)("div",{className:"ErrorBoundaryButton TertiaryBg",onClick:function(){return e.showErrorInfo()},children:"More Info"}),Object(u.jsx)("div",{className:"ErrorBoundaryButton BackgroundDanger",onClick:function(){return e.setState({error:null})},children:"Retry"})]})]})}},{key:"render",value:function(){return this.state.error?this.renderError():this.props.children}}]),n}(o.a.Component)},,function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(16),c=n(4),a=n(5),i=n(8),s=n(7),o=n(6),l=n(1),u=n.n(l),d=(n(41),n(9)),j=function(){function e(t,n){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];Object(c.a)(this,e),this.callback=t,this.duration=n,this.remainingTime=n,r&&this.resume()}return Object(a.a)(e,[{key:"resume",value:function(){this.startTime=Date.now(),clearTimeout(this.id),this.id=setTimeout(this.callback,this.remainingTime)}},{key:"pause",value:function(){clearTimeout(this.id),this.remainingTime-=Date.now()-this.startTime}},{key:"end",value:function(){clearTimeout(this.id),this.callback()}}]),e}(),h=n(0);function b(e){var t=e.children,n=e.type,r=e.life,c=e.remove,a=e.callback,i=e.color,s=e.fixedTime,l=void 0!==s&&s,b=function(){O(!0),setTimeout(c,500)},p=u.a.useState(!1),f=Object(o.a)(p,2),v=f[0],O=f[1],m=u.a.useMemo((function(){return new j(b,1e3*r,!1)}),[]),x=u.a.useRef(),g=function(){m.pause(),x.current.style.animationPlayState="paused"},y=function(){m.resume(),x.current.style.animationPlayState="running"};return u.a.useEffect((function(){var e=function(){return!l&&y()},t=function(){return!l&&g()};return window.addEventListener("focus",e),window.addEventListener("blur",t),(l||document.hasFocus())&&y(),function(){window.removeEventListener("focus",e),window.removeEventListener("blur",t)}})),Object(h.jsxs)("div",{className:Object(d.b)("Toast",[v,"Closing"],n),onMouseEnter:l?null:g,onMouseLeave:l?null:y,onClick:a?function(e){a(e),m.end()}:function(){m.end()},style:{cursor:a?"pointer":null,backgroundColor:i},children:[t,Object(h.jsx)("div",{className:"ProgressBarContainer",children:Object(h.jsx)("div",{ref:x,className:"ProgressBar",style:{animationDuration:r+"s"}})})]})}var p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={toasts:[]},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){n.instance=this}},{key:"horizontalStyle",get:function(){return"Center"}},{key:"verticalStyle",get:function(){return"Bottom"}},{key:"render",value:function(){var e,t=this;return Object(h.jsxs)("div",{ref:n.ref,className:Object(d.b)("ToastsContainer",this.horizontalStyle,this.verticalStyle),children:[Object(h.jsx)("div",{className:Object(d.b)("ClearButton",[!!(null===(e=this.state.toasts)||void 0===e?void 0:e.length),"Visible"]),onClick:function(){return t.setState({toasts:[]})},children:Object(h.jsx)("u",{children:"Close all"})}),this.state.toasts]})}}],[{key:"showToast",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=a.callback,s=void 0===i?null:i,o=a.color,l=void 0===o?null:o,j=a.fixedTime,h=void 0!==j&&j,p=u.a.createElement(b,{key:Object(d.a)(),children:e,type:n,life:c,color:l,fixedTime:h,remove:function(){t.instance.setState({toasts:t.instance.state.toasts.filter((function(e){return e!==p}))})},callback:s});return this.instance.setState({toasts:[].concat(Object(r.a)(this.instance.state.toasts),[p])}),p}}]),n}(u.a.Component);p.ref=u.a.createRef()},,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1),n(44);var r=n(0);function c(){return Object(r.jsxs)("div",{className:"InlineLoadingContainer",children:[Object(r.jsx)("div",{className:"Dot A"}),Object(r.jsx)("div",{className:"Dot B"}),Object(r.jsx)("div",{className:"Dot C"})]})}},,,,,,,,,,,function(e,t,n){},,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(18),i=n.n(a),s=n(6),o=n(29),l=(n(34),n(12)),u=n(16),d=n(22),j=n(4),h=n(5),b=n(8),p=n(7),f=(n(45),n(10)),v=n(14),O=n(25),m=n(3),x=(n(46),n(9)),g=n(0);function y(e){var t=e.children,n=e.direction,r=void 0===n?"up":n,a=e.className,i=void 0===a?"":a,o=e.color,l=e.style,u=e.onClick,d=c.a.useState(!1),j=Object(s.a)(d,2),h=j[0],b=(j[1],c.a.useRef());return c.a.useEffect((function(){return b.current.parentElement.classList.add("HasTooltip"),function(){b.current&&b.current.parentElement.classList.remove("HasTooltip")}}),[t,r]),Object(g.jsxs)("div",{ref:b,className:Object(x.b)("TooltipContainer",r.toLowerCase(),[h,"Visible"],i),style:l,onClick:u,children:[Object(g.jsx)("div",{className:"Tooltip",style:{backgroundColor:o},children:t}),Object(g.jsx)("div",{className:"TooltipArrow",style:{backgroundColor:o}})]})}n(47);var k,C,w=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("a",Object(m.a)(Object(m.a)({className:"LinkWrapper"},this.props),{},{children:this.props.children}))}}]),n}(c.a.Component),N="Metalloriff \ud83d\udc95\ud83c\udf08#2891",M=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).startTime=Date.now(),e.buttonsContainerRef=c.a.createRef(),e.clearedDelays=!1,e.handleScroll=function(){var t=e.buttonsContainerRef.current;if(t){var n=t.getBoundingClientRect();if(t.style=n.left<window.innerWidth&&n.top+n.height/2<window.innerHeight?"transform:scale(1);opacity:1":"transform:scale(0.5);opacity:0",!e.clearedDelays){e.clearedDelays=!0;var r,c=Object(d.a)(e.paragraphs);try{for(c.s();!(r=c.n()).done;){r.value.style.animationDelay="".concat(Date.now()-e.startTime,"ms")}}catch(a){c.e(a)}finally{c.f()}}}},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.paragraphs=Object(u.a)(document.querySelectorAll(".MainPage > .Head > p"));var t,n=Object(d.a)(this.paragraphs);try{var r=function(){var n=t.value;n.addEventListener("animationstart",(function(){return e.paragraphs.splice(e.paragraphs.indexOf(n),1)}))};for(n.s();!(t=n.n()).done;)r()}catch(c){n.e(c)}finally{n.f()}window.addEventListener("scroll",this.handleScroll),window.location.hash.length&&this.handleScroll()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(g.jsxs)("div",{className:"MainPage",children:[Object(g.jsxs)("div",{className:"Head",children:[Object(g.jsx)("p",{children:"Hi,"}),Object(g.jsx)("p",{children:"I'm Israel."}),Object(g.jsxs)("p",{children:["I'm a hobby/freelance ",Object(g.jsx)("b",{children:"web"}),", ",Object(g.jsx)("b",{children:"software"}),", and ",Object(g.jsx)("b",{children:"game"})," developer."]}),Object(g.jsxs)("p",{children:["Fluent with ",Object(g.jsx)("b",{children:"C#"}),", ",Object(g.jsx)("b",{children:"JavaScript"}),", ",Object(g.jsx)("b",{children:"ReactJS"}),", ",Object(g.jsx)("b",{children:"CSS/SCSS"}),", ",Object(g.jsx)("b",{children:"Unity Engine"}),", ",Object(g.jsx)("b",{children:"HTML"}),", and ",Object(g.jsx)("b",{children:"LUA"}),"."]}),Object(g.jsxs)("p",{children:["I also work with ",Object(g.jsx)("b",{children:"Java"}),", ",Object(g.jsx)("b",{children:"Python"}),", ",Object(g.jsx)("b",{children:"3D modeling"}),", ",Object(g.jsx)("b",{children:"3D animation"}),", and ",Object(g.jsx)("b",{children:"vector art design"}),"."]})]}),Object(g.jsxs)("div",{className:"ButtonsContainer",ref:this.buttonsContainerRef,children:[Object(g.jsx)(w,{href:"#projects",children:Object(g.jsxs)("div",{className:"Button",children:[Object(g.jsx)(f.a,{icon:v.e}),Object(g.jsx)(y,{children:"My Projects"})]})}),Object(g.jsx)("div",{className:"Divider"}),Object(g.jsx)(w,{href:"https://www.github.com/Metalloriff",children:Object(g.jsxs)("div",{className:"Button",children:[Object(g.jsx)(f.a,{icon:O.b}),Object(g.jsx)(y,{children:"My GitHub"})]})}),Object(g.jsxs)("div",{className:"Button",onClick:function(){return Object(l.c)(N)},children:[Object(g.jsx)(f.a,{icon:O.a}),Object(g.jsxs)(y,{children:["My Discord - ",N]})]}),Object(g.jsx)(w,{href:"https://guilded.gg/Metalloriff",children:Object(g.jsxs)("div",{className:"Button",children:[Object(g.jsx)(f.a,{icon:O.c}),Object(g.jsx)(y,{children:"My Guilded - Guilded.gg/Metalloriff"})]})}),Object(g.jsx)("div",{className:"Divider"}),Object(g.jsxs)("div",{className:"Button",children:[Object(g.jsx)(f.a,{icon:v.c,style:{opacity:.5}}),Object(g.jsx)(y,{children:"Not yet added - you can contact me with any of the links to the left"})]})]})]})}}]),n}(c.a.Component),S=n(17),T=n(11),B=n.n(T),I=n(13),L=n(20),D=(n(48),n.p+"static/media/Chevron.c3ee4024.svg"),E=n(15);var P=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).ref=Object(r.createRef)(),e.docClickEv=function(t){!e.ref.current||e.ref.current.contains(t.target)||document.getElementsByClassName("ContextMenu")[0].contains(t.target)||e.close()},e}return Object(h.a)(n,[{key:"close",value:function(){n.activeWrapper&&n.activeWrapper.setState({menu:null,open:!1})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.docClickEv)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.docClickEv)}},{key:"render",value:function(){return Object(g.jsx)(E.a,{children:Object(g.jsx)("div",Object(m.a)(Object(m.a)({className:"ContextMenu"},this.props),{},{ref:this.ref,children:this.props.children}))})}}]),n}(c.a.Component);P.Handler=(C=k=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)(E.a,{children:Object(g.jsx)("div",{ref:P.Handler.ref,className:"ContextMenuWrapper MainContextMenuContainer"})})}}]),n}(c.a.Component),k.ref=Object(r.createRef)(),C),P.Wrapper=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={menu:null,open:!1},e.ref=Object(r.createRef)(),e.handleContextMenu=function(t){var n,r,c,a;if("function"===typeof t.preventDefault&&t.preventDefault(),P.activeWrapper){if(e.ref.current.contains(P.activeWrapper.ref.current)&&P.activeWrapper.props.menu!==e.props.menu)return;P.activeWrapper.setState({menu:null,open:!1})}P.activeWrapper=Object(L.a)(e);for(var s=(null===(n=(r=e.props.menu.props).overrideY)||void 0===n?void 0:n.call(r))||t.clientY,o=(null===(c=(a=e.props.menu.props).overrideX)||void 0===c?void 0:c.call(a))||t.clientX;o+200>window.innerWidth;)o-=10;e.setState({menu:i.a.createPortal(Object(g.jsx)("div",Object(m.a)(Object(m.a)({className:"ContextMenuContainer SecondaryBg"},e.publicProps),{},{style:{position:"fixed",top:s,left:o},children:e.props.menu})),P.Handler.ref.current),open:!0})},e}return Object(h.a)(n,[{key:"publicProps",get:function(){return function(e){for(var t=Object.assign({},e),n=arguments.length,r=new Array(n>1?n-1:0),c=1;c<n;c++)r[c-1]=arguments[c];for(var a=0,i=r;a<i.length;a++){delete t[i[a]]}return t}(this.props,"menu","openOnClick","wrapperClassName","overrideX","overrideY")}},{key:"componentDidUpdate",value:function(){var e=Object(I.a)(B.a.mark((function e(t,n,r){var c,a,i,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P.activeWrapper!==this||this.state.open||(P.activeWrapper=null),this.state.open&&this.ref.current&&(c=document.getElementsByClassName("ContextMenuContainer"),a=Object(s.a)(c,1),i=a[0],o=i.getBoundingClientRect(),i.style.transform=o.y+o.height>window.innerHeight?"translateY(".concat(window.innerHeight-(o.y+o.height)-20,"px)"):null);case 2:case"end":return e.stop()}}),e,this)})));return function(t,n,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.props.menu?Object(g.jsx)(E.a,{children:Object(g.jsxs)("div",Object(m.a)(Object(m.a)({ref:this.ref,className:"ContextMenuWrapper "+(this.props.wrapperClassName||""),onClick:this.props.openOnClick?function(t){"function"!==typeof t.target.onClick&&e.handleContextMenu(e.props.openOnClick())}:null},this.publicProps),{},{onContextMenu:this.handleContextMenu,children:[this.props.children,Object(g.jsx)(E.a,{children:this.state.open?this.state.menu:null})]}))}):this.props.children}}]),n}(c.a.Component),P.Item=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(t){t.preventDefault(),t.stopPropagation(),P.activeWrapper&&e.props.autoClose&&P.activeWrapper.setState({menu:null,open:!1}),e.props.onClick&&e.props.onClick(Object(L.a)(e))},e}return Object(h.a)(n,[{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.autoClose,delete e.icon,Object(g.jsxs)("div",Object(m.a)(Object(m.a)({className:"ContextMenuItem"},e),{},{onClick:this.handleClick,children:[this.props.icon?Object(g.jsx)(f.a,{icon:this.props.icon,className:"Icon"}):null,this.props.children]}))}}]),n}(c.a.Component),P.SubMenuItem=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={open:!1},e.handleMouseEnter=function(){e.setState({open:!0})},e.handleMouseLeave=function(){e.setState({open:!1})},e.handleClick=function(t){t.target==t.currentTarget&&(P.activeWrapper&&e.props.autoClose&&P.activeWrapper.setState({menu:null,open:!1}),e.props.onClick&&e.props.onClick(Object(L.a)(e)))},e}return Object(h.a)(n,[{key:"mount",value:function(e){if(e){var t=e.getBoundingClientRect();e.style.transform=t.y+t.height>window.innerHeight?"translateY(".concat(window.innerHeight-(t.y+t.height)-20,"px)"):null,t.x+t.width>window.innerWidth&&(e.style.left="unset",e.style.right="100%")}}},{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.autoClose,delete e.label,delete e.icon,Object(g.jsxs)("div",Object(m.a)(Object(m.a)({className:"ContextMenuItem HasSubMenu"},e),{},{onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,children:[this.props.icon?Object(g.jsx)(f.a,{icon:this.props.icon,className:"Icon"}):null,this.props.label," ",Object(g.jsx)("img",{className:"ContextSubMenuChevron",src:D}),this.state.open?Object(g.jsx)("div",{className:"ContextMenuContainer SubMenuContainer SecondaryBg",ref:this.mount,children:Object(g.jsx)("div",{className:"ContextMenu SubMenu",children:this.props.children})}):null]}))}}]),n}(c.a.Component),P.ToggleItem=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={checked:!1},e.callback=function(){P.activeWrapper&&e.props.autoClose&&P.activeWrapper.setState({menu:null,open:!1});var t=!e.state.checked;e.props.callback&&e.props.callback(t),e.setState({checked:t})},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({checked:this.props.checked})}},{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.autoClose,delete e.callback,Object(g.jsxs)("div",Object(m.a)(Object(m.a)({className:"ContextMenuItem ToggleItem"},e),{},{onClick:this.callback,children:[Object(g.jsx)("div",{className:"ToggleBox"+(this.state.checked?" Checked":""),children:this.state.checked?Object(g.jsx)("div",{className:"ToggleBoxTick"}):null}),this.props.children]}))}}]),n}(c.a.Component),P.Divider=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(g.jsx)("div",Object(m.a)({className:"ContextMenuDivider"},this.props))}}]),n}(c.a.Component);var W=P,H=(n(49),n(23));function R(e){var t,n,r=e.name,a=e.type,i=e.description,o=e.buttons,u=e.images,d=c.a.useState(0),j=Object(s.a)(d,2),h=j[0],b=j[1],p=c.a.useState(!1),f=Object(s.a)(p,2),v=f[0],O=f[1],m=c.a.useState(!1),k=Object(s.a)(m,2),C=k[0],N=k[1],M=c.a.useRef();return c.a.useEffect((function(){var e=setInterval(Object(I.a)(B.a.mark((function e(){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:b(h=h+1>=u.length?0:h+1),O(!1);case 5:case"end":return e.stop()}}),e)}))),5500);return M.current.getElementsByClassName("Description")[0].getBoundingClientRect().height>=200&&N(!0),function(){return clearInterval(e)}}),[]),Object(g.jsxs)("div",{className:"Item",ref:M,children:[Object(g.jsxs)("div",{className:"Header",children:[Object(g.jsx)("div",{className:"Name",children:r}),Object(g.jsx)("div",{className:"Type",children:a})]}),Object(g.jsxs)("div",{className:"ImageContainer",children:[Object(g.jsx)("img",{alt:"Image",src:null!==(t=u[h+1])&&void 0!==t?t:u[0]}),Object(g.jsx)("img",{alt:"Image",src:null!==(n=u[h])&&void 0!==n?n:u[0],className:v?"Transitioning":null,onClick:function(){return Object(l.d)(u[h],(function(){return u}))}})]}),Object(g.jsxs)("div",{className:"Footer",children:[Object(g.jsxs)("div",{className:"DescriptionWrapper",children:[Object(g.jsx)("div",{className:Object(x.b)("Description",[C,"Collapsed"]),dangerouslySetInnerHTML:{__html:i},onClick:function(){return N(!1)}}),C&&Object(g.jsx)(y,{direction:"down",children:"Show More"})]}),Object(g.jsx)("div",{className:"Buttons",children:o.map((function(e,t){var n;return Object(g.jsx)(w,{href:e.disabled?null:e.link,children:Object(g.jsxs)("div",{className:Object(x.b)("Button",[e.disabled,"Disabled"]),children:[Object(g.jsx)("span",{children:e.title}),(null===(n=e.tooltip)||void 0===n?void 0:n.length)&&Object(g.jsx)(y,{children:e.tooltip})]})},t)}))})]})]})}function A(){var e=c.a.useState(null),t=Object(s.a)(e,2),n=t[0],r=t[1];return c.a.useEffect((function(){fetch("https://dl.dropboxusercontent.com/s/53aehv6kh5tqdk8/my_projects.json?raw=1",{cache:"no-cache"}).then((function(e){return e.json()})).then(r).catch((function(e){return console.error(e),S.a.showToast("An unknown error occurred","Failure")}))}),[]),n?Object(g.jsxs)("div",{className:"ProjectsPage",children:[Object(g.jsxs)("div",{className:"LastUpdated",children:["Last Updated - ",Object(g.jsx)("span",{children:n.lastUpdated})]}),Object(g.jsx)("div",{className:"Items",children:n.projects.map((function(e,t){return Object(g.jsx)(R,Object(m.a)({},e),t)}))}),Object(g.jsx)("div",{className:"ButtonsContainer",style:{transform:"scale(1)",opacity:1},children:Object(g.jsx)(w,{href:"#",children:Object(g.jsxs)("div",{className:"Button",children:[Object(g.jsx)(f.a,{icon:v.d}),Object(g.jsx)(y,{children:"Home Page"})]})})})]}):Object(g.jsx)("div",{className:"ProjectsPage Loading",children:Object(g.jsx)(H.a,{})})}function F(){return Object(g.jsx)("div",{className:"MainPage",children:Object(g.jsxs)("div",{className:"Head",children:[Object(g.jsx)("p",{children:"Hi,"}),Object(g.jsx)("p",{children:"My name is Reggie!"}),Object(g.jsxs)("p",{children:["I like ",Object(g.jsx)("b",{children:"guys"}),"."]}),Object(g.jsxs)("p",{children:["I... really like ",Object(g.jsx)("b",{children:"guys"}),"."]}),Object(g.jsxs)("p",{children:["There's just something about them. I like their ",Object(g.jsx)("b",{children:"touch"}),", their ",Object(g.jsx)("b",{children:"smell"}),", their..."]}),Object(g.jsx)("p",{children:"( \u0361\xb0 \u035c\u0296 \u0361\xb0)"})]})})}var _=window.location.hash;function U(){var e=Object(o.useMediaQuery)({query:"(max-width: 1224px)"});U.isMobile=e;var t,n=c.a.useReducer((function(e){return e+1}),0),r=Object(s.a)(n,2)[1];switch(U.forceUpdate=r,window.location.hash.split(/#\/?/)[1]){default:t=M;break;case"projects":t=A;break;case"kek":t=F}var a=e?"none":"xMidYMid slice";return Object(g.jsxs)("div",{className:Object(x.b)("App",e?"Mobile":"Desktop"),children:[Object(g.jsxs)("svg",{viewBox:"0 0 1920 1080",className:"WaveVector",fill:"var(--primary-bg)",preserveAspectRatio:a,children:[Object(g.jsx)("path",{d:" M 0 526 Q 239.722 472.498 480 526 Q 730.682 581.818 960 526 L 960 1290 L 0 1290 L 0 526 Z "}),Object(g.jsx)("path",{d:" M 960 526 Q 1199.722 472.498 1440 526 Q 1690.682 581.818 1920 526 L 1920 1290 L 960 1290 L 960 526 Z "})]}),Object(g.jsxs)("svg",{viewBox:"0 0 1920 1080",className:"WaveVector Reverse",fill:"var(--secondary-bg)",preserveAspectRatio:a,children:[Object(g.jsx)("path",{d:" M 0 526 Q 239.722 472.498 480 526 Q 730.682 581.818 960 526 L 960 1290 L 0 1290 L 0 526 Z "}),Object(g.jsx)("path",{d:" M 960 526 Q 1199.722 472.498 1440 526 Q 1690.682 581.818 1920 526 L 1920 1290 L 960 1290 L 960 526 Z "})]}),Object(g.jsx)("div",{className:"Main",children:Object(g.jsx)(t,{})}),Object(g.jsxs)("footer",{className:"Footer",children:[Object(g.jsx)("div",{children:Object(g.jsx)("a",{href:"https://fontawesome.com/license",children:"Icon License"})}),Object(g.jsx)("div",{className:"Divider"}),Object(g.jsx)("div",{children:Object(g.jsx)("a",{href:"https://www.nordtheme.com/",children:"Color Palette"})}),Object(g.jsx)("div",{className:"Divider"}),Object(g.jsxs)("div",{children:["Copyright \xa9 2021-",(new Date).getFullYear()," Metalloriff"]})]}),Object(g.jsx)(l.a,{}),Object(g.jsx)(S.a,{}),Object(g.jsx)(W.Handler,{})]})}window.onpopstate=function(){window.location.hash!==_&&(U.forceUpdate(),_=window.location.hash)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[50,1,2]]]);
//# sourceMappingURL=main.f5eddb46.chunk.js.map