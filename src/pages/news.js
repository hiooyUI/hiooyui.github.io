import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div style={{paddingBottom: 50,minHeight: '55vh',}}>
    <Helmet
      title="A4纸资讯 - A4纸网"
      meta={[
        { name: 'description', content: 'A4纸网' },
        { name: 'keywords', content: 'A4纸尺寸,A4纸, A4纸网' },
      ]}
    />
    <div className="breadcrumb">
	    <span className="breadcrumb-link"><Link to="/">首页</Link></span>
	    <span className="breadcrumb-separator">/</span>
	    <span className="breadcrumb-link">A4纸趣闻
</span>
    </div>
    <h1>A4纸趣闻
</h1>
	<ul className="news-list">
	    <li><Link to="/news/a4z-zhang-jia-2017-12-22-a">【深度】废纸打包厂一天亏百万 纸价“过山车”上的众生相</Link> [华龙网] [2017年12月22日]</li>
	    <li><Link to="/news/a4z-zhang-jia-2017-12-22">全国废纸涨价潮来袭 全国51家纸企应声最高再涨200元/吨！</Link> [废品之家] [2017年12月20日-21日]</li>
	    <li><Link to="/news/a4z-zhang-jia-2017-12-21">废纸价格遭遇“过山车” 产业亟盼纸浆期货“稳定器”</Link> [中国证券报·中证网] [2017年12月21日]</li>
		<li><Link to="/news/a4z-zhang-jia-2017-09-25">一箱A4纸涨价20到30元不等，纸张悄然涨价啦</Link> [济源晨报] [2017年09月25日]</li>
	</ul>
  </div>
)

export default SecondPage
