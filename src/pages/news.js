import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div>
    <Helmet
      title="A4纸资讯 - A4纸网"
      meta={[
        { name: 'description', content: 'A4纸网' },
        { name: 'keywords', content: 'A4纸尺寸,A4纸, A4纸网' },
      ]}
    />
    <h1>A4纸资讯</h1>
    <p>开发中...</p>
    <Link to="/">返回首页</Link>
  </div>
)

export default SecondPage
