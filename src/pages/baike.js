import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div style={{paddingBottom: 50,minHeight: '55vh',}}>
    <Helmet
      title="纸张百科 - A4纸网"
      meta={[
        { name: 'description', content: '纸张百科 - A4纸网' },
        { name: 'keywords', content: '纸张百科,纸张类型' },
      ]}
    />
    <div className="breadcrumb">
	    <span className="breadcrumb-link"><Link to="/">首页</Link></span>
	    <span className="breadcrumb-separator">/</span>
	    <span className="breadcrumb-link">纸张百科
</span>
    </div>
    <h1>纸张百科
</h1>
	<ul className="news-list orange clearfix">
	    <li><Link to="/baike/a0z">A0纸</Link></li>
	    <li><Link to="/baike/a1z">A1纸</Link></li>
	    <li><Link to="/baike/a2z">A2纸</Link></li>
      <li><Link to="/baike/a3z">A3纸</Link></li>
      <li><Link to="/baike/a4z">A4纸</Link></li>
      <li><Link to="/baike/a5z">A5纸</Link></li>
      <li><Link to="/baike/a6z">A6纸</Link></li>
      <li><Link to="/baike/a7z">A7纸</Link></li>
      <li><Link to="/baike/a8z">A8纸</Link></li>
      <li><Link to="/baike/a9z">A9纸</Link></li>
      <li><Link to="/baike/a10z">A10纸</Link></li>
	</ul>
  <ul className="news-list green clearfix">
      <li><Link to="/baike/b0z">B0纸</Link></li>
      <li><Link to="/baike/b1z">B1纸</Link></li>
      <li><Link to="/baike/b2z">B2纸</Link></li>
      <li><Link to="/baike/b3z">B3纸</Link></li>
      <li><Link to="/baike/b4z">B4纸</Link></li>
      <li><Link to="/baike/b5z">B5纸</Link></li>
      <li><Link to="/baike/b6z">B6纸</Link></li>
      <li><Link to="/baike/b7z">B7纸</Link></li>
      <li><Link to="/baike/b8z">B8纸</Link></li>
      <li><Link to="/baike/b9z">B9纸</Link></li>
      <li><Link to="/baike/b10z">B10纸</Link></li>
  </ul>
  <ul className="news-list purple clearfix">
      <li><Link to="/baike/c0z">C0纸</Link></li>
      <li><Link to="/baike/c1z">C1纸</Link></li>
      <li><Link to="/baike/c2z">C2纸</Link></li>
      <li><Link to="/baike/c3z">C3纸</Link></li>
      <li><Link to="/baike/c4z">C4纸</Link></li>
      <li><Link to="/baike/c5z">C5纸</Link></li>
      <li><Link to="/baike/c6z">C6纸</Link></li>
      <li><Link to="/baike/c7z">C7纸</Link></li>
      <li><Link to="/baike/c8z">C8纸</Link></li>
      <li><Link to="/baike/c9z">C9纸</Link></li>
      <li><Link to="/baike/c10z">C10纸</Link></li>
  </ul>
  </div>
)

export default SecondPage
