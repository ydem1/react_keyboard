(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),s=n(4),o=n(5),r=n(7),u=n(6),i=n(1),p=n.n(i),y=n(0),d=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={key:""},e.handleDocumentKeyup=function(t){e.setState({key:t.key})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleDocumentKeyup)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleDocumentKeyup)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsx)("p",{className:"App__message",children:""===this.state.key?"Nothing was pressed yet":"The last pressed key is [".concat(this.state.key,"]")})})}}]),n}(p.a.Component);n(13);c.a.render(Object(y.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.aa312306.chunk.js.map