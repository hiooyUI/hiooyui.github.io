import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

class NotFoundPage extends Component {
  componentDidMount() {
    (function() {
      var appid = "cytpBqJkg";
      var conf = "prod_ba1b44d1eb09b841cb56489b47c07f1e";
      var width = window.innerWidth || document.documentElement.clientWidth;
      document.getElementById("SOHUCS").setAttribute("sid", "/404");
      if (width < 960) {
        var loadJs = function(d, a) {
          var c =
            document.getElementsByTagName("head")[0] ||
            document.head ||
            document.documentElement;
          var b = document.createElement("script");
          b.setAttribute("type", "text/javascript");
          b.setAttribute("id", "changyan_mobile_js");
          b.setAttribute("charset", "UTF-8");
          b.setAttribute("src", d);
          if (typeof a === "function") {
            if (window.attachEvent) {
              b.onreadystatechange = function() {
                var e = b.readyState;
                if (e === "loaded" || e === "complete") {
                  b.onreadystatechange = null;
                  a();
                }
              };
            } else {
              b.onload = a;
            }
          }
          c.appendChild(b);
        };
        loadJs(
          "https://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=" +
            appid +
            "&conf=" +
            conf,
          function() {}
        );
      } else {
        var loadJs = function(d, a) {
          var c =
            document.getElementsByTagName("head")[0] ||
            document.head ||
            document.documentElement;
          var b = document.createElement("script");
          b.setAttribute("type", "text/javascript");
          b.setAttribute("id", "changyan_pc_js");
          b.setAttribute("charset", "UTF-8");
          b.setAttribute("src", d);
          if (typeof a === "function") {
            if (window.attachEvent) {
              b.onreadystatechange = function() {
                var e = b.readyState;
                if (e === "loaded" || e === "complete") {
                  b.onreadystatechange = null;
                  a();
                }
              };
            } else {
              b.onload = a;
            }
          }
          c.appendChild(b);
        };
        loadJs("https://changyan.sohu.com/upload/changyan.js", function() {
          window.changyan.api.config({ appid: appid, conf: conf });
        });
      }
    })();
  }
  componentWillUnmount() {
    window.onscroll = "";
  }
  render() {
    return (
      <div style={{ paddingBottom: 50 }}>
        <Helmet
          title="404错误 你访问的页面不存在 - A4纸网"
          meta={[
            { name: "description", content: "A4纸网404错误 - A4纸网" },
            {
              name: "keywords",
              content: "A4纸畅言吧, A4纸吧, A4纸尺寸, A4纸大小, A4纸"
            }
          ]}
        />
        <div className="breadcrumb">
          <span className="breadcrumb-link">
            <Link to="/">首页</Link>
          </span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-link">404错误</span>
        </div>
        <h1>去外星探索去了？</h1>
        <p>404错误。你访问的页面不存在... 我的天啊，天涯何处无芳草！</p>
        <h2 style={{ paddingTop: 30 }}>给我们留个言？</h2>
        <div id="SOHUCS">
          <img
            src="/img/loading.gif"
            style={{
              verticalAlign: "middle",
              display: "block",
              width: 300,
              margin: "0 auto"
            }}
            alt="A4纸网加载中..."
          />
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
