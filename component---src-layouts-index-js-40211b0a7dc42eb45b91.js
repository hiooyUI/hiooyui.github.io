webpackJsonp([0x67ef26645b2a,60335399758886],{89:function(e,t){e.exports={layoutContext:{}}},176:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n(2),r=a(o),i=n(180),u=a(i),c=n(89),d=a(c);t.default=function(e){return r.default.createElement(u.default,l({},e,d.default))},e.exports=t.default},269:function(e,t){},180:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n(2),u=a(i),c=n(7),d=a(c),f=n(32),s=a(f),m=n(188);n(269);var p=function(e){var t=e.location,n=t.pathname;return u.default.createElement("div",{className:"header-nav",style:{borderBottom:"2px solid #343434",height:40,lineHeight:40}},u.default.createElement("ul",{className:"nav-list clearfix",style:{margin:"0 auto",maxWidth:960,display:"block",padding:"0 40px"}},u.default.createElement("li",{className:"/"===n?"active":null},u.default.createElement(s.default,{to:"/"},"首页")),u.default.createElement("li",{className:n.match(/\/fun/i)?"active":null},u.default.createElement(s.default,{to:"/fun"},"A4纸知多少")),u.default.createElement("li",{className:n.match(/\/news/i)?"active":null},u.default.createElement(s.default,{to:"/news"},"A4纸资讯")),u.default.createElement("li",{className:n.match(/\/price/i)?"active":null},u.default.createElement(s.default,{to:"/price"},"A4纸价格"))))},h=function(){return u.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1rem 1.0875rem"}},u.default.createElement("h1",{style:{margin:0}},u.default.createElement(s.default,{to:"/",style:{color:"#ff9c00",textDecoration:"none"}},u.default.createElement("img",{src:"/img/logo.png",alt:"A4纸网"}))))},g=function(){return u.default.createElement("div",{style:{background:"#b1dff0 url(/img/banner-2017.jpg) no-repeat center center",minWidth:960,height:94}})},E=function(e){var t=e.location;return u.default.createElement("div",{style:{marginBottom:"1rem"}},u.default.createElement(h,null),u.default.createElement(p,{location:t}),u.default.createElement(g,null))},y=function(){return u.default.createElement("div",{style:{width:"100%",background:"#efefef",borderTop:"1px solid #eee",position:"absolute",left:0,bottom:0}},u.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center"}},"A4纸网 - 专注于A4纸  保留所有权 © 2017~2018 a4z.cn"))},v=function(){return u.default.createElement("div",{className:"return-top",style:{width:50,height:50,lineHeight:"50px",textAlign:"center",position:"fixed",right:20,bottom:50,color:"#ddd",border:"1px solid #ddd",fontSize:16,fontWeight:700,cursor:"pointer",backgroundColor:"#fff"},onClick:function(){(0,m.goTop)()}},"个")},b=function(e){function t(){return l(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.location;return u.default.createElement("div",{style:{minHeight:"100%",position:"relative"}},u.default.createElement(E,{location:n}),u.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 150px"}},t()),u.default.createElement(y,null),u.default.createElement(v,null))},t}(i.Component);b.propTypes={children:d.default.func},t.default=b,e.exports=t.default},188:function(e,t){"use strict";t.__esModule=!0;t.goTop=function(e,t){var n=e||-.02,a=t||16,l=function e(){var t=0,l=0,o=0;document.documentElement&&(t=document.documentElement.scrollTop||0),document.body&&(l=document.body.scrollTop||0),o=window.scrollY||0;var r=Math.max(t,Math.max(l,o)),i=n*Math.sqrt(-2*r/n)*a;window.scrollTo(0,Math.floor(r+i)),r>0&&window.setTimeout(function(){e()},a)};l()}}});
//# sourceMappingURL=component---src-layouts-index-js-40211b0a7dc42eb45b91.js.map