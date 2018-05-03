import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { goTop } from "../util/tool";
import Helmet from "react-helmet";

import "./index.css";

const HeaderNav = ({ location }) => {
  const { pathname } = location;
  return (
    <div
      className="header-nav"
      style={{
        borderBottom: "2px solid #343434",
        height: 40,
        lineHeight: 40
      }}
    >
      <ul
        className="nav-list clearfix"
        style={{
          margin: "0 auto",
          maxWidth: 960,
          display: "block",
          padding: "0 40px",
          height: 40,
          overflow: "hidden"
        }}
      >
        <li className={pathname === "/" ? "active" : null}>
          <Link to="/" title={"A4纸尺寸大小"}>
            首页
          </Link>
        </li>
        <li className={pathname.match(/\/news/i) ? "active" : null}>
          <a href="/news/index.html" title="纸浆和造纸行业的新闻">
            纸浆和造纸行业的新闻
          </a>
        </li>
        <li className={pathname.match(/\/fun/i) ? "active" : null}>
          <Link to="/fun" title={"A4纸知多少"}>
            A4纸知多少
          </Link>
        </li>
        <li className={pathname.match(/\/baike/i) ? "active" : null}>
          <Link to="/baike" title={"A4纸网纸张百科"}>
            纸张百科
          </Link>
        </li>
        <li className={pathname.match(/\/price/i) ? "active" : null}>
          <Link to="/price" title={"A4纸价格"}>
            A4纸价格
          </Link>
        </li>
        <li className={pathname.match(/\/bbs/i) ? "active" : null}>
          <Link to="/bbs" title={"A4纸畅言吧"}>
            A4纸畅言吧
          </Link>
        </li>
      </ul>
    </div>
  );
};

const HeaderTop = () => (
  <div
    style={{
      margin: "0 auto",
      maxWidth: 960,
      padding: "1rem 1.0875rem"
    }}
    className="clearfix"
  >
    <div style={{ margin: 0, maxWidth: "30%" }} className="logo fl">
      <Link
        to="/"
        style={{
          color: "#ff9c00",
          textDecoration: "none"
        }}
        title={"A4纸网首页"}
      >
        <img src={"/img/logo.png"} alt="A4纸网LOGO" />
      </Link>
    </div>
    <div style={{ margin: 0, maxWidth: "50%" }} className="friends-link fr">
      <a
        href="http://www.iampua.com/"
        target="_blank"
        style={{ fontSize: 16, color: "#333", textShadow: "2px 2px 0px #ddd" }}
      >
        Sponsor 泡学达人
      </a>
    </div>
  </div>
);

const HeaderBanner = () => (
  <div
    style={{
      background: "#b1dff0 url(/img/banner-2017.jpg) no-repeat center center",
      height: 94
    }}
  />
);

const Header = ({ location }) => (
  <div
    style={{
      marginBottom: "1rem"
    }}
  >
    <HeaderTop />
    <HeaderNav location={location} />
    <HeaderBanner />
  </div>
);

const Footer = () => (
  <div
    style={{
      width: "100%",
      background: "#efefef",
      borderTop: "1px solid #eee",
      fontSize: 12
    }}
    className="footer"
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        textAlign: "center"
      }}
    >
      注：本站内容全部原创或者来源于网络，如遇引用版权问题，欢迎与本站站长联系！<br />
      <br />
      <Link to="/" title="A4纸尺寸大小">
        A4纸网首页
      </Link>{" "}
      -{" "}
      <a href="/news" title="纸浆和造纸行业的新闻">
        纸浆和造纸行业的新闻
      </a>{" "}
      -{" "}
      <Link to="/fun" title="A4纸知多少">
        A4纸知多少
      </Link>{" "}
      -{" "}
      <Link to="/baike" title="A4纸网纸张百科">
        纸张百科
      </Link>{" "}
      -{" "}
      <Link to="/price" title="A4纸价格">
        A4纸价格
      </Link>{" "}
      -{" "}
      <Link to="/bbs" title="A4纸畅言吧">
        A4纸畅言吧
      </Link>
      <br />
      <a href="mailto:kbl_1794@qq.com" rel="nofollow">
        联系站长
      </a>{" "}
      |{" "}
      <a href="mailto:kbl_1794@qq.com" rel="nofollow">
        商务合作
      </a>{" "}
      | <Link to="/message">在线留言</Link>
      <br />
      A4纸网 - 专注于A4纸 保留所有权 © 2017~2018 a4z.cn | 特聘法律顾问:杨律师 |{" "}
      <img
        src="/img/beiantu.png"
        style={{ verticalAlign: "middle" }}
        alt="A4纸网备案图标"
      />{" "}
      粤ICP备18002963号
    </div>
  </div>
);

const ReturnTop = () => (
  <div
    className="return-top"
    style={{
      width: 50,
      height: 50,
      lineHeight: "50px",
      textAlign: "center",
      position: "fixed",
      right: 20,
      bottom: 50,
      color: "#ddd",
      border: "1px solid #ddd",
      fontSize: 16,
      fontWeight: 700,
      cursor: "pointer",
      backgroundColor: "#fff"
    }}
    onClick={() => {
      goTop();
    }}
  >
    个
  </div>
);

const FlagCounter = () => (
  <div
    className="flag-counter"
    style={{
      position: "fixed",
      left: 3,
      bottom: 0
    }}
  >
    <a
      href="https://info.flagcounter.com/tD7Y"
      rel="nofollow"
      title="本站2018年1月17日起访客情况统计"
    >
      <img
        src="https://s11.flagcounter.com/count2/tD7Y/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
        alt="Flag Counter"
      />
    </a>
  </div>
);

class TemplateWrapper extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <div style={{ minHeight: "100%", position: "relative" }}>
        <Helmet
          link={[
            {
              type: "image/x-icon",
              rel: "shortcut icon",
              href: "/favicon.ico"
            },
            {
              href:
                "https://cdn.bootcss.com/pace/1.0.2/themes/yellow/pace-theme-minimal.min.css",
              rel: "stylesheet"
            }
          ]}
          script={[
            {
              src: "https://hm.baidu.com/hm.js?96d9604e16c1245896d37f6e50c29669"
            },
            { src: "https://cdn.bootcss.com/pace/1.0.2/pace.min.js" }
          ]}
        />
        <Header location={location} />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 20px",
            overflow: "auto"
          }}
        >
          {children()}
        </div>
        <Footer />
        <ReturnTop />
        <FlagCounter />
      </div>
    );
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
