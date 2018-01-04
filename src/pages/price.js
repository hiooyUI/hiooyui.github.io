import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div style={{paddingBottom: 50, minHeight: '55vh',}}>
    <Helmet
      title="A4纸价格 - A4纸网"
      meta={[
        { name: 'description', content: 'A4纸网' },
        { name: 'keywords', content: 'A4纸尺寸,A4纸, A4纸网' },
      ]}
    />
    <div className="breadcrumb">
	    <span className="breadcrumb-link"><Link to="/">首页</Link></span>
	    <span className="breadcrumb-separator">/</span>
	    <span className="breadcrumb-link">A4纸价格</span>
    </div>
    <h1>A4纸价格</h1>
    <p>开发中...<br /><br /></p>
    <a href="mailto:kbl_1794@qq.com" rel="nofollow">商务合作</a><br /><br />
    <Link to="/">返回首页</Link>
  </div>
)

export default SecondPage
