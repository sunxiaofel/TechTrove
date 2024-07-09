"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[366],{80559:function(Ye,$,t){t.r($),t.d($,{default:function(){return Xe}});var te=t(15009),P=t.n(te),ne=t(97857),L=t.n(ne),re=t(99289),N=t.n(re),se=t(5574),K=t.n(se),ie=t(57426),le=t(2618),p=t(35312);function oe(a,n){return k.apply(this,arguments)}function k(){return k=N()(P()().mark(function a(n,r){return P()().wrap(function(x){for(;;)switch(x.prev=x.next){case 0:return x.abrupt("return",(0,p.request)("/api/login/captcha",L()({method:"GET",params:L()({},n)},r||{})));case 1:case"end":return x.stop()}},a)})),k.apply(this,arguments)}var ue=t(87547),s=t(1413),f=t(67294),ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},de=ce,Q=t(91146),ge=function(n,r){return f.createElement(Q.Z,(0,s.Z)((0,s.Z)({},n),{},{ref:r,icon:de}))},fe=f.forwardRef(ge),X=fe,me={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zm-8 824H288V134h448v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"mobile",theme:"outlined"},ve=me,he=function(n,r){return f.createElement(Q.Z,(0,s.Z)((0,s.Z)({},n),{},{ref:r,icon:ve}))},pe=f.forwardRef(he),xe=pe,D=t(91),ye=t(10915),Se=t(28459),Fe=t(93967),je=t.n(Fe),Me=t(34994),G=t(4942),Ze=t(98082),Ce=function(n){return(0,G.Z)((0,G.Z)({},n.componentCls,{"&-container":{display:"flex",flex:"1",flexDirection:"column",height:"100%",paddingInline:32,paddingBlock:24,overflow:"auto",background:"inherit"},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",insetBlockStart:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:n.colorTextSecondary,fontSize:n.fontSize},"&-main":{minWidth:"328px",maxWidth:"580px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),"@media (min-width: @screen-md-min)",(0,G.Z)({},"".concat(n.componentCls,"-container"),{paddingInline:0,paddingBlockStart:32,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}))};function Pe(a){return(0,Ze.Xj)("LoginForm",function(n){var r=(0,s.Z)((0,s.Z)({},n),{},{componentCls:".".concat(a)});return[Ce(r)]})}var e=t(85893),be=["logo","message","contentStyle","title","subTitle","actions","children","containerStyle","otherStyle"];function Te(a){var n,r=a.logo,j=a.message,x=a.contentStyle,M=a.title,C=a.subTitle,b=a.actions,I=a.children,B=a.containerStyle,Z=a.otherStyle,y=(0,D.Z)(a,be),R=(0,ye.YB)(),O=y.submitter===!1?!1:(0,s.Z)((0,s.Z)({searchConfig:{submitText:R.getMessage("loginForm.submitText","\u767B\u5F55")}},y.submitter),{},{submitButtonProps:(0,s.Z)({size:"large",style:{width:"100%"}},(n=y.submitter)===null||n===void 0?void 0:n.submitButtonProps),render:function(d,F){var l,g=F.pop();if(typeof(y==null||(l=y.submitter)===null||l===void 0?void 0:l.render)=="function"){var v,i;return y==null||(v=y.submitter)===null||v===void 0||(i=v.render)===null||i===void 0?void 0:i.call(v,d,F)}return g}}),c=(0,f.useContext)(Se.ZP.ConfigContext),z=c.getPrefixCls("pro-form-login"),E=Pe(z),A=E.wrapSSR,S=E.hashId,o=function(d){return"".concat(z,"-").concat(d," ").concat(S)},u=(0,f.useMemo)(function(){return r?typeof r=="string"?(0,e.jsx)("img",{src:r}):r:null},[r]);return A((0,e.jsxs)("div",{className:je()(o("container"),S),style:B,children:[(0,e.jsxs)("div",{className:"".concat(o("top")," ").concat(S).trim(),children:[M||u?(0,e.jsxs)("div",{className:"".concat(o("header")),children:[u?(0,e.jsx)("span",{className:o("logo"),children:u}):null,M?(0,e.jsx)("span",{className:o("title"),children:M}):null]}):null,C?(0,e.jsx)("div",{className:o("desc"),children:C}):null]}),(0,e.jsxs)("div",{className:o("main"),style:(0,s.Z)({width:328},x),children:[(0,e.jsxs)(Me.A,(0,s.Z)((0,s.Z)({isKeyPressSubmit:!0},y),{},{submitter:O,children:[j,I]})),b?(0,e.jsx)("div",{className:o("main-other"),style:Z,children:b}):null]})]}))}var H=t(5966),w=t(74165),Y=t(15861),V=t(97685),Be=t(8232),Ae=t(55102),Le=t(14726),J=t(28614),Ie=["rules","name","phoneName","fieldProps","onTiming","captchaTextRender","captchaProps"],Re=f.forwardRef(function(a,n){var r=Be.Z.useFormInstance(),j=(0,f.useState)(a.countDown||60),x=(0,V.Z)(j,2),M=x[0],C=x[1],b=(0,f.useState)(!1),I=(0,V.Z)(b,2),B=I[0],Z=I[1],y=(0,f.useState)(),R=(0,V.Z)(y,2),O=R[0],c=R[1],z=a.rules,E=a.name,A=a.phoneName,S=a.fieldProps,o=a.onTiming,u=a.captchaTextRender,m=u===void 0?function(g,v){return g?"".concat(v," \u79D2\u540E\u91CD\u65B0\u83B7\u53D6"):"\u83B7\u53D6\u9A8C\u8BC1\u7801"}:u,d=a.captchaProps,F=(0,D.Z)(a,Ie),l=function(){var g=(0,Y.Z)((0,w.Z)().mark(function v(i){return(0,w.Z)().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.prev=0,c(!0),T.next=4,F.onGetCaptcha(i);case 4:c(!1),Z(!0),T.next=13;break;case 8:T.prev=8,T.t0=T.catch(0),Z(!1),c(!1),console.log(T.t0);case 13:case"end":return T.stop()}},v,null,[[0,8]])}));return function(i){return g.apply(this,arguments)}}();return(0,f.useImperativeHandle)(n,function(){return{startTiming:function(){return Z(!0)},endTiming:function(){return Z(!1)}}}),(0,f.useEffect)(function(){var g=0,v=a.countDown;return B&&(g=window.setInterval(function(){C(function(i){return i<=1?(Z(!1),clearInterval(g),v||60):i-1})},1e3)),function(){return clearInterval(g)}},[B]),(0,f.useEffect)(function(){o&&o(M)},[M,o]),(0,e.jsxs)("div",{style:(0,s.Z)((0,s.Z)({},S==null?void 0:S.style),{},{display:"flex",alignItems:"center"}),ref:n,children:[(0,e.jsx)(Ae.Z,(0,s.Z)((0,s.Z)({},S),{},{style:(0,s.Z)({flex:1,transition:"width .3s",marginRight:8},S==null?void 0:S.style)})),(0,e.jsx)(Le.ZP,(0,s.Z)((0,s.Z)({style:{display:"block"},disabled:B,loading:O},d),{},{onClick:(0,Y.Z)((0,w.Z)().mark(function g(){var v;return(0,w.Z)().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:if(h.prev=0,!A){h.next=9;break}return h.next=4,r.validateFields([A].flat(1));case 4:return v=r.getFieldValue([A].flat(1)),h.next=7,l(v);case 7:h.next=11;break;case 9:return h.next=11,l("");case 11:h.next=16;break;case 13:h.prev=13,h.t0=h.catch(0),console.log(h.t0);case 16:case"end":return h.stop()}},g,null,[[0,13]])})),children:m(B,M)}))]})}),Ne=(0,J.G)(Re),Oe=Ne,q=t(22270),ze=t(84567),_=t(68850),Ee=["options","fieldProps","proFieldProps","valueEnum"],we=f.forwardRef(function(a,n){var r=a.options,j=a.fieldProps,x=a.proFieldProps,M=a.valueEnum,C=(0,D.Z)(a,Ee);return(0,e.jsx)(_.Z,(0,s.Z)({ref:n,valueType:"checkbox",valueEnum:(0,q.h)(M,void 0),fieldProps:(0,s.Z)({options:r},j),lightProps:(0,s.Z)({labelFormatter:function(){return(0,e.jsx)(_.Z,(0,s.Z)({ref:n,valueType:"checkbox",mode:"read",valueEnum:(0,q.h)(M,void 0),filedConfig:{customLightMode:!0},fieldProps:(0,s.Z)({options:r},j),proFieldProps:x},C))}},C.lightProps),proFieldProps:x},C))}),ke=f.forwardRef(function(a,n){var r=a.fieldProps,j=a.children;return(0,e.jsx)(ze.Z,(0,s.Z)((0,s.Z)({ref:n},r),{},{children:j}))}),De=(0,J.G)(ke,{valuePropName:"checked"}),ee=De;ee.Group=we;var Ge=ee,He=t(40056),W=t(2453),Ve=t(11941),We=t(98257),Ue=t(73935),$e=t(67610),U=(0,We.kc)(function(a){var n=a.token;return{action:{marginLeft:"8px",color:"rgba(0, 0, 0, 0.2)",fontSize:"24px",verticalAlign:"middle",cursor:"pointer",transition:"color 0.3s","&:hover":{color:n.colorPrimaryActive}},lang:{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:n.borderRadius,":hover":{backgroundColor:n.colorBgTextHover}},container:{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%"}}}),Je=function(){var n=U(),r=n.styles;return _jsxs(_Fragment,{children:[_jsx(AlipayCircleOutlined,{className:r.action},"AlipayCircleOutlined"),_jsx(TaobaoCircleOutlined,{className:r.action},"TaobaoCircleOutlined"),_jsx(WeiboCircleOutlined,{className:r.action},"WeiboCircleOutlined")]})},Ke=function(){var n=U(),r=n.styles;return(0,e.jsx)("div",{className:r.lang,"data-lang":!0,children:p.SelectLang&&(0,e.jsx)(p.SelectLang,{})})},ae=function(n){var r=n.content;return(0,e.jsx)(He.Z,{style:{marginBottom:24},message:r,type:"error",showIcon:!0})},Qe=function(){var n=(0,f.useState)({}),r=K()(n,2),j=r[0],x=r[1],M=(0,f.useState)("account"),C=K()(M,2),b=C[0],I=C[1],B=(0,p.useModel)("@@initialState"),Z=B.initialState,y=B.setInitialState,R=U(),O=R.styles,c=(0,p.useIntl)(),z=function(){var o=N()(P()().mark(function u(){var m,d;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Z==null||(m=Z.fetchUserInfo)===null||m===void 0?void 0:m.call(Z);case 2:d=l.sent,d&&(0,Ue.flushSync)(function(){y(function(g){return L()(L()({},g),{},{currentUser:d})})});case 4:case"end":return l.stop()}},u)}));return function(){return o.apply(this,arguments)}}(),E=function(){var o=N()(P()().mark(function u(m){var d,F,l,g;return P()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,(0,le.x4)(L()(L()({},m),{},{type:b}));case 3:if(d=i.sent,d.status!=="ok"){i.next=12;break}return F=c.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),W.ZP.success(F),i.next=9,z();case 9:return l=new URL(window.location.href).searchParams,p.history.push(l.get("redirect")||"/"),i.abrupt("return");case 12:console.log(d),x(d),i.next=21;break;case 16:i.prev=16,i.t0=i.catch(0),g=c.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),console.log(i.t0),W.ZP.error(g);case 21:case"end":return i.stop()}},u,null,[[0,16]])}));return function(m){return o.apply(this,arguments)}}(),A=j.status,S=j.type;return(0,e.jsxs)("div",{className:O.container,children:[(0,e.jsx)(p.Helmet,{children:(0,e.jsxs)("title",{children:[c.formatMessage({id:"menu.login",defaultMessage:"\u767B\u5F55\u9875"}),"- ",$e.Z.title]})}),(0,e.jsx)(Ke,{}),(0,e.jsx)("div",{style:{flex:"1",padding:"32px 0"},children:(0,e.jsxs)(Te,{contentStyle:{minWidth:280,maxWidth:"75vw"},title:"Web\u6280\u672F\u6C47\u96C6",subTitle:c.formatMessage({id:"pages.layouts.userLayout.title"}),initialValues:{autoLogin:!0,username:"sxf",password:"admin"},onFinish:function(){var o=N()(P()().mark(function u(m){return P()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,E(m);case 2:case"end":return F.stop()}},u)}));return function(u){return o.apply(this,arguments)}}(),children:[(0,e.jsx)(Ve.Z,{activeKey:b,onChange:I,centered:!0,items:[{key:"account",label:c.formatMessage({id:"pages.login.accountLogin.tab",defaultMessage:"\u8D26\u6237\u5BC6\u7801\u767B\u5F55"})}]}),A==="error"&&S==="account"&&(0,e.jsx)(ae,{content:c.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(sxf/admin)"})}),b==="account"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(H.Z,{name:"username",fieldProps:{size:"large",prefix:(0,e.jsx)(ue.Z,{})},placeholder:c.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: sxf"}),rules:[{required:!0,message:(0,e.jsx)(p.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,e.jsx)(H.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,e.jsx)(X,{})},placeholder:c.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: admin"}),rules:[{required:!0,message:(0,e.jsx)(p.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]})]}),A==="error"&&S==="mobile"&&(0,e.jsx)(ae,{content:"\u9A8C\u8BC1\u7801\u9519\u8BEF"}),b==="mobile"&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(H.Z,{fieldProps:{size:"large",prefix:(0,e.jsx)(xe,{})},name:"mobile",placeholder:c.formatMessage({id:"pages.login.phoneNumber.placeholder",defaultMessage:"\u624B\u673A\u53F7"}),rules:[{required:!0,message:(0,e.jsx)(p.FormattedMessage,{id:"pages.login.phoneNumber.required",defaultMessage:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\uFF01"})},{pattern:/^1\d{10}$/,message:(0,e.jsx)(p.FormattedMessage,{id:"pages.login.phoneNumber.invalid",defaultMessage:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF\uFF01"})}]}),(0,e.jsx)(Oe,{fieldProps:{size:"large",prefix:(0,e.jsx)(X,{})},captchaProps:{size:"large"},placeholder:c.formatMessage({id:"pages.login.captcha.placeholder",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}),captchaTextRender:function(u,m){return u?"".concat(m," ").concat(c.formatMessage({id:"pages.getCaptchaSecondText",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})):c.formatMessage({id:"pages.login.phoneLogin.getVerificationCode",defaultMessage:"\u83B7\u53D6\u9A8C\u8BC1\u7801"})},name:"captcha",rules:[{required:!0,message:(0,e.jsx)(p.FormattedMessage,{id:"pages.login.captcha.required",defaultMessage:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801\uFF01"})}],onGetCaptcha:function(){var o=N()(P()().mark(function u(m){var d;return P()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,oe({phone:m});case 2:if(d=l.sent,d){l.next=5;break}return l.abrupt("return");case 5:W.ZP.success("\u83B7\u53D6\u9A8C\u8BC1\u7801\u6210\u529F\uFF01\u9A8C\u8BC1\u7801\u4E3A\uFF1A1234");case 6:case"end":return l.stop()}},u)}));return function(u){return o.apply(this,arguments)}}()})]}),(0,e.jsxs)("div",{style:{marginBottom:24},children:[(0,e.jsx)(Ge,{noStyle:!0,name:"autoLogin",children:(0,e.jsx)(p.FormattedMessage,{id:"pages.login.rememberMe",defaultMessage:"\u81EA\u52A8\u767B\u5F55"})}),(0,e.jsx)("a",{style:{float:"right"},children:(0,e.jsx)(p.FormattedMessage,{id:"pages.login.forgotPassword",defaultMessage:"\u5FD8\u8BB0\u5BC6\u7801"})})]})]})}),(0,e.jsx)(ie.$_,{})]})},Xe=Qe}}]);
