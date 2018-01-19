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
	    <li><Link to="/baike/a0z" title="A0纸尺寸">A0纸</Link></li>
	    <li><Link to="/baike/a1z" title="A1纸尺寸">A1纸</Link></li>
	    <li><Link to="/baike/a2z" title="A2纸尺寸">A2纸</Link></li>
      <li><Link to="/baike/a3z" title="A3纸尺寸">A3纸</Link></li>
      <li><Link to="/baike/a4z" title="A4纸尺寸">A4纸</Link></li>
      <li><Link to="/baike/a5z" title="A5纸尺寸">A5纸</Link></li>
      <li><Link to="/baike/a6z" title="A6纸尺寸">A6纸</Link></li>
      <li><Link to="/baike/a7z" title="A7纸尺寸">A7纸</Link></li>
      <li><Link to="/baike/a8z" title="A8纸尺寸">A8纸</Link></li>
      <li><Link to="/baike/a9z" title="A9纸尺寸">A9纸</Link></li>
      <li><Link to="/baike/a10z" title="A10纸尺寸">A10纸</Link></li>
	</ul>
  <ul className="news-list green clearfix">
      <li><Link to="/baike/b0z" title="B0纸尺寸">B0纸</Link></li>
      <li><Link to="/baike/b1z" title="B1纸尺寸">B1纸</Link></li>
      <li><Link to="/baike/b2z" title="B2纸尺寸">B2纸</Link></li>
      <li><Link to="/baike/b3z" title="B3纸尺寸">B3纸</Link></li>
      <li><Link to="/baike/b4z" title="B4纸尺寸">B4纸</Link></li>
      <li><Link to="/baike/b5z" title="B5纸尺寸">B5纸</Link></li>
      <li><Link to="/baike/b6z" title="B6纸尺寸">B6纸</Link></li>
      <li><Link to="/baike/b7z" title="B7纸尺寸">B7纸</Link></li>
      <li><Link to="/baike/b8z" title="B8纸尺寸">B8纸</Link></li>
      <li><Link to="/baike/b9z" title="B9纸尺寸">B9纸</Link></li>
      <li><Link to="/baike/b10z" title="B10纸尺寸">B10纸</Link></li>
  </ul>
  <ul className="news-list purple clearfix">
      <li><Link to="/baike/c0z" title="C0纸尺寸">C0纸</Link></li>
      <li><Link to="/baike/c1z" title="C1纸尺寸">C1纸</Link></li>
      <li><Link to="/baike/c2z" title="C2纸尺寸">C2纸</Link></li>
      <li><Link to="/baike/c3z" title="C3纸尺寸">C3纸</Link></li>
      <li><Link to="/baike/c4z" title="C4纸尺寸">C4纸</Link></li>
      <li><Link to="/baike/c5z" title="C5纸尺寸">C5纸</Link></li>
      <li><Link to="/baike/c6z" title="C6纸尺寸">C6纸</Link></li>
      <li><Link to="/baike/c7z" title="C7纸尺寸">C7纸</Link></li>
      <li><Link to="/baike/c8z" title="C8纸尺寸">C8纸</Link></li>
      <li><Link to="/baike/c9z" title="C9纸尺寸">C9纸</Link></li>
      <li><Link to="/baike/c10z" title="C10纸尺寸">C10纸</Link></li>
  </ul>
  <ul className="news-list orange clearfix">
      <li><Link to="/baike/2kz" title="对开纸尺寸">2k纸 / 对开纸</Link></li>
      <li><Link to="/baike/4kz" title="4开纸尺寸">4k纸 / 4开纸</Link></li>
      <li><Link to="/baike/8kz" title="8开纸尺寸">8k纸 / 8开纸</Link></li>
      <li><Link to="/baike/16kz" title="16开纸尺寸">16k纸 / 16开纸</Link></li>
      <li><Link to="/baike/32kz" title="32开纸尺寸">32k纸 / 32开纸</Link></li>
  </ul>
  <ul className="news-list green clearfix">
      <li><Link to="/baike/copy-paper" title="什么是复印纸">复印纸</Link></li>
      <li><Link to="/baike/print-paper" title="什么是打印纸">打印纸</Link></li>
      <li><Link to="/baike/thermal-paper" title="什么是热敏纸">热敏纸</Link></li>
      <li><Link to="/baike/photo-paper" title="什么是相片纸">相片纸 / 喷墨纸</Link></li>
      <li><Link to="/baike/tracing-paper" title="什么是描图纸">描图纸 / 硫酸纸 / 牛油纸 / 底图纸</Link></li>
      <li><Link to="/baike/transfer-paper" title="什么是转印纸">转印纸</Link></li>
      <li><Link to="/baike/engineering-print-paper" title="什么是工程复印纸">工程复印纸</Link></li>
      <li><Link to="/baike/drawing-paper" title="什么是绘图纸">绘图纸 / 白图纸</Link></li>
  </ul>
  <ul className="news-list purple clearfix">
      <li><Link to="/baike/art-paper" title="什么是铜版纸">铜版纸</Link></li>
      <li><Link to="/baike/ivory-board" title="什么是白卡纸">白卡纸</Link></li>
      <li><Link to="/baike/ivory-board-1" title="什么是蓝白双面铜版卡纸">蓝白双面铜版卡纸</Link></li>
      <li><Link to="/baike/ivory-board-2" title="什么是白底铜版卡纸">白底铜版卡纸</Link></li>
      <li><Link to="/baike/ivory-board-3" title="什么是灰底铜版卡纸">灰底铜版卡纸</Link></li>
      <li><Link to="/baike/yellow-straw-board" title="什么是黄纸板">黄纸板 / 草纸板</Link></li>
      <li><Link to="/baike/liner-board" title="什么是箱纸板">箱纸板 / 麻纸板</Link></li>
      <li><Link to="/baike/self-adhesive-paper" title="什么是不干胶纸">不干胶纸</Link></li>
      <li><Link to="/baike/sack-paper" title="什么是纸袋纸">纸袋纸 / 水泥袋纸</Link></li>
      <li><Link to="/baike/glass-cardboard" title="什么是玻璃卡纸">玻璃卡纸</Link></li>
      <li><Link to="/baike/cellophane" title="什么是玻璃纸">玻璃纸 / 赛璐玢</Link></li>
      <li><Link to="/baike/corrugated-board" title="什么是瓦楞纸板">瓦楞纸板 / 波纹纸板</Link></li>
  </ul>
  <ul className="news-list orange clearfix">
      <li><Link to="/baike/writing-paper" title="什么是书写纸">书写纸</Link></li>
      <li><Link to="/baike/white-paper-board" title="什么是白纸板">白纸板 / 马尼拉纸</Link></li>
      <li><Link to="/baike/white-board" title="什么是白板纸">白板纸</Link></li>
      <li><Link to="/baike/small-corrugated-board" title="什么是细瓦楞">细瓦楞 / E型瓦楞纸</Link></li>
      <li><Link to="/baike/plate-paper" title="什么是凹版印刷纸">凹版印刷纸</Link></li>
      <li><Link to="/baike/offset-paper" title="什么是胶版印刷纸">胶版印刷纸 / 胶版纸</Link></li>
      <li><Link to="/baike/newspaper" title="什么是新闻纸">新闻纸 / 白报纸</Link></li>
      <li><Link to="/baike/letterpress-paper" title="什么是凸版印刷纸">凸版印刷纸</Link></li>
      <li><Link to="/baike/composite-paper" title="什么是复合纸">复合纸</Link></li>
      <li><Link to="/baike/bond-paper" title="什么是证券纸">证券纸</Link></li>
      <li><Link to="/baike/aluminized-pape" title="什么是铝箔纸">铝箔纸</Link></li>
      <li><Link to="/baike/aluminum-foil-liner" title="什么是铝箔衬纸">铝箔衬纸</Link></li>
  </ul>
  <ul className="news-list green clearfix">
      <li><Link to="/baike/wood-free-printed-paper" title="什么是双胶纸">双胶纸</Link></li>
      <li><Link to="/baike/no-light-art-paper" title="什么是哑粉纸">哑粉纸 / 无光铜版纸</Link></li>
      <li><Link to="/baike/pearl-paper" title="什么是珠光纸">珠光纸</Link></li>
  </ul>
  </div>
)

export default SecondPage
