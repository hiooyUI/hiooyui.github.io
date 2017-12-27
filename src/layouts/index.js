import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import {goTop} from '../util/tool'

import './index.css'

const HeaderNav = () => (
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
      <li className="active">
        <Link
          to="/"
        >
          首页
        </Link>
      </li>
      <li>
        <Link
          to="/fun"
        >
          A4纸知多少
        </Link>
      </li>
      <li>
        <Link
          to="/news"
        >
          A4纸资讯
        </Link>
      </li>
      <li>
        <Link
          to="/price"
        >
          A4纸价格
        </Link>
      </li>
    </ul>
  </div>
)

const HeaderTop = () => (
  <div
    style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1rem 1.0875rem',
    }}
  >
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: '#ff9c00',
          textDecoration: 'none',
        }}
      >
        <img src={'/img/logo.png'} alt="A4纸网" />
      </Link>
    </h1>
  </div>
)

const HeaderBanner = () => (
    <div
      style={{
        background: '#b1dff0 url(/img/banner-2017.jpg) no-repeat center center',
        minWidth: 960,
        height: 94,
      }}
    >
    </div>
)

const Header = () => (
  <div
    style={{
      marginBottom: '1rem',
    }}
  >
    <HeaderTop />
    <HeaderNav />
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
      A4纸网 - 专注于A4纸  保留所有权 © 2017~2018 a4z.cn
    </div>
  </div>
)

class TemplateWrapper extends Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{minHeight:'100%',position:'relative'}}>
        <Helmet
          title="A4纸尺寸大小是多少？什么是A4纸？标准A4纸像素分辨率换算 - A4纸网"
          meta={[
            { name: 'description', content: 'A4纸网' },
            { name: 'keywords', content: 'A4纸尺寸,A4纸, A4纸网' },
          ]}
        />
        <Header />
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
      </div>
    )
  }
}
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
