webpackJsonp([0x67ef26645b2a,60335399758886],{89:function(e,t){e.exports={layoutContext:{}}},176:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},o=l(4),r=n(o),i=l(180),c=n(i),u=l(89),f=n(u);t.default=function(e){return r.default.createElement(c.default,a({},e,f.default))},e.exports=t.default},268:function(e,t){},180:function(e,t,l){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=l(4),c=n(i),u=l(8),f=n(u),d=l(32),m=n(d),s=l(187),p=l(37),h=n(p);l(268);var E=function(e){var t=e.location,l=t.pathname;return c.default.createElement("div",{className:"header-nav",style:{borderBottom:"2px solid #343434",height:40,lineHeight:40}},c.default.createElement("ul",{className:"nav-list clearfix",style:{margin:"0 auto",maxWidth:960,display:"block",padding:"0 40px",height:40,overflow:"hidden"}},c.default.createElement("li",{className:"/"===l?"active":null},c.default.createElement(m.default,{to:"/"},"首页")),c.default.createElement("li",{className:l.match(/\/fun/i)?"active":null},c.default.createElement(m.default,{to:"/fun"},"A4纸知多少")),c.default.createElement("li",{className:l.match(/\/news/i)?"active":null},c.default.createElement(m.default,{to:"/news"},"A4纸趣闻")),c.default.createElement("li",{className:l.match(/\/price/i)?"active":null},c.default.createElement(m.default,{to:"/price"},"A4纸价格"))))},g=function(){return c.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1rem 1.0875rem"},className:"clearfix"},c.default.createElement("div",{style:{margin:0,maxWidth:"50%"},className:"logo fl"},c.default.createElement(m.default,{to:"/",style:{color:"#ff9c00",textDecoration:"none"}},c.default.createElement("img",{src:"/img/logo.png",alt:"A4纸网"}))),c.default.createElement("div",{style:{margin:0,maxWidth:"50%"},className:"friends-link fr"},c.default.createElement("a",{href:"http://www.iampua.com/",target:"_blank",style:{fontSize:16,color:"#333"}},"泡学达人")," | ",c.default.createElement("a",{href:"https://github.com/hiooyUI/hiooyui.github.io",rel:"nofollow",target:"_blank",style:{fontSize:16,color:"#333"}},"Github")))},b=function(){return c.default.createElement("div",{style:{background:"#b1dff0 url(/img/banner-2017.jpg) no-repeat center center",height:94}})},y=function(e){var t=e.location;return c.default.createElement("div",{style:{marginBottom:"1rem"}},c.default.createElement(g,null),c.default.createElement(E,{location:t}),c.default.createElement(b,null))},v=function(){return c.default.createElement("div",{style:{width:"100%",background:"#efefef",borderTop:"1px solid #eee",fontSize:14}},c.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",textAlign:"center"}},"注：本站内容全部原创或者来源于网络，如遇引用版权问题，欢迎与本站站长联系！",c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("a",{href:"mailto:kbl_1794@qq.com",rel:"nofollow"},"联系站长")," | ",c.default.createElement("a",{href:"mailto:kbl_1794@qq.com",rel:"nofollow"},"商务合作"),c.default.createElement("br",null),"友情链接：",c.default.createElement("a",{href:"http://www.iampua.com/",target:"_blank"},"泡学达人 - 追女孩子的方法、泡妞秘籍、泡妞技巧、如何泡妞、怎么泡妞、泡妞教程、泡妞攻略")," | ",c.default.createElement("a",{href:"mailto:kbl_1794@qq.com",rel:"nofollow"},"申请友情链接"),c.default.createElement("br",null),"A4纸网 - 专注于A4纸  保留所有权 © 2017~2018 a4z.cn"))},w=function(){return c.default.createElement("div",{className:"return-top",style:{width:50,height:50,lineHeight:"50px",textAlign:"center",position:"fixed",right:20,bottom:50,color:"#ddd",border:"1px solid #ddd",fontSize:16,fontWeight:700,cursor:"pointer",backgroundColor:"#fff"},onClick:function(){(0,s.goTop)()}},"个")},x=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props,t=e.children,l=e.location;return c.default.createElement("div",{style:{minHeight:"100%",position:"relative"}},c.default.createElement(h.default,{link:[{type:"image/x-icon",rel:"shortcut icon",href:"/favicon.ico"}],script:[{src:"https://hm.baidu.com/hm.js?96d9604e16c1245896d37f6e50c29669"}]}),c.default.createElement(y,{location:l}),c.default.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 20px"}},t()),c.default.createElement(v,null),c.default.createElement(w,null))},t}(i.Component);x.propTypes={children:f.default.func},t.default=x,e.exports=t.default},187:function(e,t){"use strict";t.__esModule=!0;t.goTop=function(e,t){var l=e||-.02,n=t||16,a=function e(){var t=0,a=0,o=0;document.documentElement&&(t=document.documentElement.scrollTop||0),document.body&&(a=document.body.scrollTop||0),o=window.scrollY||0;var r=Math.max(t,Math.max(a,o)),i=l*Math.sqrt(-2*r/l)*n;window.scrollTo(0,Math.floor(r+i)),r>0&&window.setTimeout(function(){e()},n)};a()}}});
//# sourceMappingURL=component---src-layouts-index-js-cf3457cbd7024708c6cd.js.map