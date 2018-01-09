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
    <h2>A4纸热门品牌</h2>
    <p style={{ marginTop: 15}}><strong>佳印-UPM欣乐</strong> (芬欧汇川旗下，芬欧汇川(常熟)纸业有限公司 十佳复印纸/打印纸品牌) </p> 
    <p style={{ marginTop: 15}}><strong>旗舰-小钢炮-金旗舰</strong> (新加坡APP金光集团旗下，亚龙昆山纸业,十佳复印纸品牌)</p>
    <p style={{ marginTop: 15}}><strong>Double A</strong> (泰国曼谷亿王亚哥集团，东南亚著名造纸品牌)</p>   
    <p style={{ marginTop: 15}}><strong>幸运鸟</strong> (新加坡APP金光集团旗下，金华盛纸业（苏州工业园区）有限公司，十佳复印纸/打印纸品牌)</p>    
    <p style={{ marginTop: 15}}><strong>金太阳-威尔</strong> (山东太阳纸业股份有限公司/兖州枫叶纸业，十佳复印纸品牌)</p>    
    <p style={{ marginTop: 15}}><strong>百旺-高品乐</strong> (新加坡金鹰国际集团广东亚太纸业，十佳复印纸品牌)</p>    
    <p style={{ marginTop: 15}}><strong>王子</strong> (日本王子制纸集团，十佳复印纸/打印纸品牌)</p>   
    <p style={{ marginTop: 15}}><strong>永丰</strong> (中国驰名商标，四川永丰纸业股份有限公司，十佳复印纸品牌)</p>    
    <p style={{ marginTop: 15}}><strong>安妮</strong> (厦门安妮股份有限公司 股票代码：002235，下称“安妮股份”)</p>    
    <p style={{ marginTop: 15}}><strong>金丝雀</strong> (新加坡APP金光集团旗下，金鑫(清远)纸业有限公司）</p>
    <p style={{ marginTop: 15}}><a href="mailto:kbl_1794@qq.com" rel="nofollow">商务合作</a> | <Link to="/">返回首页</Link></p>
  </div>
)

export default SecondPage
