import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const SecondPage = () => (
  <div style={{paddingBottom: 50}}>
    <Helmet
      title="A4纸知多少 - A4纸网"
      meta={[
        { name: 'description', content: 'A4纸纸张大小,A4纸历史,A4纸容差' },
        { name: 'keywords', content: 'A4纸尺寸,A4纸, A4纸网' },
      ]}
    />
    <div className="breadcrumb">
	    <span className="breadcrumb-link"><Link to="/">首页</Link></span>
	    <span className="breadcrumb-separator">/</span>
	    <span className="breadcrumb-link">A4纸知多少</span>
    </div>
    <h1>A4纸知多少</h1>
    <div style={{ marginTop: 25}}>
	    <strong>A4纸趣闻</strong>
		<ul className="news-list orange clearfix">
			<li><Link to="/fun/a4-skinny-waist-challenge" title="A4腰，什么是A4腰，A4腰挑战">A4腰，A4纸腰，什么是A4腰，A4腰挑战</Link></li>
			<li><Link to="/fun/3d-paper-snowflake" title="如何用A4纸制作3D纸雪花">如何用A4纸制作3D纸雪花</Link></li>
			<li><Link to="/fun/why-paper-cuts-hurt-so-much" title="A4纸的纸边伤到手，不会破坏皮肤，但可能会非常痛苦。 为什么？">A4纸的纸边伤到手，不会破坏皮肤，但可能会非常痛苦。 为什么？</Link></li>
		</ul>
    </div>
    <p style={{ marginTop: 25}}>
	    <strong>A4纸张尺寸大小</strong>

<br />   

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;许多纸张尺寸标准的惯例已经存在于不同的时间和不同的国家。 今天，包括常用的A4尺寸大小的ISO216的A和B系列是几乎所有国家都使用的国际标准。 然而，在美洲和菲律宾的许多国家，“信封”等北美系列纸张尺寸更为普遍。

		纸张尺寸会影响书写纸张，文具，卡片和一些打印文档。 信封的国际标准是ISO 269的C系列。

    </p>
		<table style={{ marginTop: 15, marginBottom: 30, fontSize: 15}}>
		<caption>ISO纸张尺寸（毫米与英寸两种单位）</caption>
		<tbody><tr>
		<th>纸张类型</th>
		<th colSpan={2} style={{textAlign:'center', borderBottom: '2px solid orange'}}>A 系列</th>
		<th colSpan={2} style={{textAlign:'center', borderBottom: '2px solid green'}}>B 系列</th>
		<th colSpan={2} style={{textAlign:'center', borderBottom: '2px solid purple'}}>C 系列</th>
		</tr>
		<tr>
		<th>尺寸大小</th>
		<th>毫米 × 毫米</th>
		<th>英寸 × 英寸</th>
		<th>毫米 × 毫米</th>
		<th>英寸 × 英寸</th>
		<th>毫米 × 毫米</th>
		<th>英寸 × 英寸</th>
		</tr>
		<tr>
		<th>0</th>
		<td>841 × 1189</td>
		<td>33.1 × 46.8</td>
		<td>1000 × 1414</td>
		<td>39.4 × 55.7</td>
		<td>917 × 1297</td>
		<td>36.1 × 51.1</td>
		</tr>
		<tr>
		<th>1</th>
		<td>594 × 841</td>
		<td>23.4 × 33.1</td>
		<td>707 × 1000</td>
		<td>27.8 × 39.4</td>
		<td>648 × 917</td>
		<td>25.5 × 36.1</td>
		</tr>
		<tr>
		<th>2</th>
		<td>420 × 594</td>
		<td>16.5 × 23.4</td>
		<td>500 × 707</td>
		<td>19.7 × 27.8</td>
		<td>458 × 648</td>
		<td>18.0 × 25.5</td>
		</tr>
		<tr>
		<th>3</th>
		<td>297 × 420</td>
		<td>11.7 × 16.5</td>
		<td>353 × 500</td>
		<td>13.9 × 19.7</td>
		<td>324 × 458</td>
		<td>12.8 × 18.0</td>
		</tr>
		<tr>
		<th style={{borderBottom: '1px solid #000', fontWeight: 700, color:'#000'}}>4</th>
		<td style={{borderBottom: '1px solid #000', fontWeight: 700, color:'#000'}}>210 × 297</td>
		<td style={{borderBottom: '1px solid #000', fontWeight: 700, color:'#000'}}>8.27 × 11.7</td>
		<td>250 × 353</td>
		<td>9.84 × 13.9</td>
		<td>229 × 324</td>
		<td>9.02 × 12.8</td>
		</tr>
		<tr>
		<th>5</th>
		<td>148 × 210</td>
		<td>5.83 × 8.27</td>
		<td>176 × 250</td>
		<td>6.93 × 9.84</td>
		<td>162 × 229</td>
		<td>6.38 × 9.02</td>
		</tr>
		<tr>
		<th>6</th>
		<td>105 × 148</td>
		<td>4.13 × 5.83</td>
		<td>125 × 176</td>
		<td>4.92 × 6.93</td>
		<td>114 × 162</td>
		<td>4.49 × 6.38</td>
		</tr>
		<tr>
		<th>7</th>
		<td>74 × 105</td>
		<td>2.91 × 4.13</td>
		<td>88 × 125</td>
		<td>3.46 × 4.92</td>
		<td>81 × 114</td>
		<td>3.19 × 4.49</td>
		</tr>
		<tr>
		<th>8</th>
		<td>52 × 74</td>
		<td>2.05 × 2.91</td>
		<td>62 × 88</td>
		<td>2.44 × 3.46</td>
		<td>57 × 81</td>
		<td>2.24 × 3.19</td>
		</tr>
		<tr>
		<th>9</th>
		<td>37 × 52</td>
		<td>1.46 × 2.05</td>
		<td>44 × 62</td>
		<td>1.73 × 2.44</td>
		<td>40 × 57</td>
		<td>1.57 × 2.24</td>
		</tr>
		<tr>
		<th>10</th>
		<td>26 × 37</td>
		<td>1.02 × 1.46</td>
		<td>31 × 44</td>
		<td>1.22 × 1.73</td>
		<td>28 × 40</td>
		<td>1.10 × 1.57</td>
		</tr>
		</tbody></table>


    <p style={{ marginTop: 25}}>
	    <strong>ISO 216</strong><br />   

	    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 216规定了当今世界大多数国家使用的国际标准（ISO）纸张尺寸，加拿大，美国，墨西哥或多米尼加共和国除外。 该标准定义了“A”和“B”系列纸张尺寸，其中<strong>A4是最常用的尺寸（210毫米 × 297毫米）</strong>。 两个补充标准ISO 217和ISO 269定义了相关的纸张尺寸; ISO 269“C”系列通常与A和B尺寸一起列出。
		<br /><br />  
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 所有ISO 216，ISO 217和ISO 269纸张尺寸（除了某些信封外）在四舍五入至毫米的范围内具有相同的纵横比为2的平方根。 这个比例具有独特的性质，当以半宽方式切割或折叠时，半部分也具有相同的纵横比。 每个ISO纸张尺寸是同一系列中下一个较大尺寸面积的一半。
    </p>
    <p style={{ marginTop: 25}}>
	    <strong>历史</strong><br />   

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1786年，德国科学家克里斯托弗·利希滕伯格（Georg Christoph Lichtenberg）在致约翰·贝克曼（Johann Beckmann）的一封信中描述了将纸张尺寸设置为纵横比2的平方根的优点。成为ISO纸张尺寸A2，A3，B3，B4和B5的格式是在法国开发的。他们被列入1798年关于出版物征税的法律，这部分是基于页面大小。

		<br /><br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个系统的主要优点是它的缩放。长宽比为2的平方根的长方形纸张具有独特的属性，在其短边中间切割或折叠一半时，每一半都具有相同的2的平方根纵横比和整个表格的一半面积。等价地，如果将长宽比为2的平方根的两张相同大小的纸张沿着它们的长边并排放置，则会形成一个更大的矩形， 2的平方根的纵横比和每个单独表单面积的两倍。

		<br /><br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;纸张尺寸的ISO系统利用2的平方根长宽比的这些属性。在每个尺寸系列（例如，系列A）中，最大尺寸编号为0（例如A0），并且每个连续尺寸（例如，A1，A2等）具有前一页面积的一半，并且可以通过减小前面尺寸纸张的长度来切割。新的测量值向下舍入到最近的毫米。可以使用下一张较大尺寸的纸张来制作折叠的小册子（例如，将一张A4纸折叠成一张尺寸为A5页的小册子，可以设计一个办公室复印机或打印机，以将页面从A4减少到A5或将页面从A4放大到A3;同样，可以缩小两张A4纸张以适合一张A4纸张，而没有多余的空白纸张。

			<br /><br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这个系统也简化了计算纸张的重量。根据ISO 536，纸的克重定义为每平方米（g / m<sup>2</sup>或gsm）的单位面积克数（g）。由于A0板材的面积为1平方米，其克重与克重相同。可以通过算术除法得到其他大小的克重（g / m<sup>2</sup>）。由80克/平方米纸张制成的标准A4纸张重量为5克，因为它是四分之一，忽略四舍五入）的A0页面。因此，通过计算所使用的纸张的数量，重量和相关的邮资率可以很容易地近似。

		<br /><br />   		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1975年至1995年间首次发布了ISO 216及其相关标准：

		<br /> 		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 216：2007，定义A和B系列的纸张尺寸
		<br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 269：1985，定义信封的C系列
		<br />  		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ISO 217：2013，定义RA和SRA系列原始（“未修剪”）纸张尺寸
	</p>
    <p style={{ marginTop: 25}}>
	    <strong>容差</strong><br />   

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标准中规定的容差是：<br />   

		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1、尺寸达150毫米时为±1.5毫米，<br />   
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2、对于150至600毫米范围内的尺寸为±2.0毫米，<br />   
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3、600毫米以上的尺寸为±3.0毫米。<br />   
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这些与A，B和C系列之间的比较有关。
    </p>

    <p style={{ marginTop: 25}}>
    	<strong>北美纸张尺寸</strong><br />  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美国、还有其他几个北美国家和菲律宾主要使用与世界其他地方不同的纸张尺寸系统。 目前的标准尺寸对于这个北美大陆来说是独一无二的，目前由于北美市场的规模以及来自该地区的软件和印刷硬件的激增，世界其他地方已经越来越熟悉这些尺寸。 
<br /> <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>Letter，Legal和Ledger / Tabloid</strong>是迄今为止这些日常活动中最常用的，也是CSS（Cascading Style Sheets，层叠样式表）中唯一包含的。
<br /> <br />
	<span style={{ marginTop: 0,textAlign:'center',marginBottom: 15,display:'block'}}>
    <img src={'/img/a4nletter.jpg'} alt="A4纸与Letter纸的区别" title="A4纸与Letter纸的区别"/>
    </span>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信纸尺寸（8 <sup>1</sup>/2英寸×11英寸或216毫米×279毫米）的确切尺寸的起源在传统中已经丧失，并且没有很好的记载。 美国森林和造纸协会认为，尺寸起源于手工造纸时代，而11英寸的长度大约是“经验丰富的纸浆工人的手臂的平均最大伸展量”的四分之一。 这并不能解释宽度或宽高比。
<br /> <br />
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在北美以外，信纸尺寸也可以被称为“美国四重奏”。 如果接受一些修剪，尺寸确实是古代帝国印刷纸张大小的四分之一，即17 <sup>1</sup>/2英寸×22 <sup>1</sup>/2英寸（444毫米×572毫米）。
    </p>

	<table style={{ marginTop: 25, marginBottom: 0, fontSize: 15}}>
	<caption>北美纸张尺寸（毫米与英寸两种单位）</caption>
	<tbody><tr>
	<th>尺寸大小</th>
	<th>英寸 × 英寸</th>
	<th>毫米 × 毫米</th>
	<th>长宽比</th>
	</tr>
	<tr>
	<th>Letter</th>
	<td><span>8 <sup>1</sup>⁄<sub>2</sub></span> × 11</td>
	<td>216 × 279</td>
	<td>1.2941…</td>
	</tr>
	<tr>
	<th>Legal</th>
	<td><span>8 <sup>1</sup>⁄<sub>2</sub></span> × 14</td>
	<td>216 × 356</td>
	<td>1.6470…</td>
	</tr>
	<tr>
	<th>Tabloid</th>
	<td>11 × 17</td>
	<td>279 × 432</td>
	<td>1.5483…</td>
	</tr>
	<tr>
	<th>Ledger</th>
	<td>17 × 11</td>
	<td>432 × 279</td>
	<td>0.6470…</td>
	</tr>
	<tr>
	<th>Junior Legal</th>
	<td>5 × 8</td>
	<td>127 × 203</td>
	<td>1.6</td>
	</tr>
	<tr>
	<th>Half Letter, Memo</th>
	<td><span>5 <sup>1</sup>⁄<sub>2</sub></span> × <span>8 <sup>1</sup>⁄<sub>2</sub></span></td>
	<td>140 × 216</td>
	<td>1.5428…</td>
	</tr>
	<tr>
	<th>Government Letter</th>
	<td>8 × <span>10 <sup>1</sup>⁄<sub>2</sub></span></td>
	<td>203 × 267</td>
	<td>1.3125</td>
	</tr>
	<tr>
	<th>Government Legal</th>
	<td><span>8 <sup>1</sup>⁄<sub>2</sub></span> × 13</td>
	<td>216 × 330</td>
	<td>1.5294…</td>
	</tr>
	</tbody></table>
	
  </div>
)

export default SecondPage
