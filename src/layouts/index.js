import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import {goTop} from '../util/tool'
import Helmet from 'react-helmet'

import './index.css'

const HeaderNav = ({location}) => {
  const {pathname} = location;
  return (
    <div
      className="header-nav"
      style={{
        borderBottom: '2px solid #343434',
        height: 40,
        lineHeight: 40,
      }}
    >
      <ul className="nav-list clearfix"
        style={{
          margin: '0 auto',
          maxWidth: 960,
          display: 'block',
          padding: '0 40px'
        }}
      >
        <li className={pathname === '/' ? 'active' : null}>
          <Link
            to="/"
          >
            首页
          </Link>
        </li>
        <li className={pathname.match(/\/fun/i) ? 'active' : null}>
          <Link
            to="/fun"
          >
            A4纸知多少
          </Link>
        </li>
        <li className={pathname.match(/\/news/i) ? 'active' : null}>
          <Link
            to="/news"
          >
            A4纸趣闻
          </Link>
        </li>
        <li className={pathname.match(/\/price/i) ? 'active' : null}>
          <Link
            to="/price"
          >
            A4纸价格
          </Link>
        </li>
      </ul>
    </div>
  )
}

const HeaderTop = () => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1rem 1.0875rem',
    }}
  >
    <div style={{ margin: 0 }} className="logo">
      <Link
        to="/"
        style={{
          color: '#ff9c00',
          textDecoration: 'none',
        }}
      >
        <img src={'/img/logo.png'} alt="A4纸网" />
      </Link>
    </div>
  </div>
)

const HeaderBanner = () => (
    <div
      style={{
        background: '#b1dff0 url(/img/banner-2017.jpg) no-repeat center center',
        height: 94,
      }}
    >
    </div>
)

const Header = ({location}) => (
  <div
    style={{
      marginBottom: '1rem',
    }}
  >
    <HeaderTop />
    <HeaderNav location={location} />
    <HeaderBanner />
  </div>
)

const Footer = () => (
  <div
    style={{
      width:'100%',
      background: '#efefef',
      borderTop: '1px solid #eee',
      position:'absolute',
      left:0,
      bottom:0
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
        textAlign: 'center'
      }}
    >
      注：本站内容全部原创或者来源于网络，如遇引用版权问题，欢迎与本站站长联系！<br /><br />
      <a href="mailto:kbl_1794@qq.com" rel="nofollow">联系站长</a> | <a href="mailto:kbl_1794@qq.com" rel="nofollow">商务合作</a><br />
      A4纸网 - 专注于A4纸  保留所有权 © 2017~2018 a4z.cn
    </div>
  </div>
)

const ReturnTop = () => (
  <div
    className="return-top" 
    style={{
      width:50,
      height:50,
      lineHeight:'50px',
      textAlign:'center',
      position:'fixed',
      right:20,
      bottom:50,
      color:'#ddd',
      border:'1px solid #ddd',
      fontSize:16,
      fontWeight:700,
      cursor:'pointer',
      backgroundColor:'#fff',
    }}
    onClick={
      () => {
        goTop();
      }
    }
  >个</div>
)

class TemplateWrapper extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <div style={{minHeight:'100%',position:'relative'}}>
        <Helmet
          link={[{type:'image/x-icon',rel:'shortcut icon',href:'/favicon.ico'}]}
          script={[{src:'https://hm.baidu.com/hm.js?96d9604e16c1245896d37f6e50c29669'}]}
          meta={[
            { name: 'baidu-site-verification', content: 'lKNsTG5Yhn' },
          ]}
        />
        <Header location={location}/>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 150px',
          }}
        >
          {children()}
        </div>
        <Footer />
        <ReturnTop />
      </div>
    )
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
