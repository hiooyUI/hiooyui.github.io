import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const InGeneral = () => (
    <div
      style={{
        padding: 20,
        border: '1px solid #dfdfdf',
      }}
    >
    <p style={{marginBottom:15}}><strong>A4纸尺寸（宽 × 高）：21厘米 × 29.7厘米（或 210毫米 × 297毫米）</strong></p>
    <p style={{marginBottom:15, textIndent:'2em'}}>我们平时所用的A4纸是全球使用的标准纸张尺寸（A4纸由ISO 216定义的。ISO 216定义了A、B、C三组纸张尺寸，C组纸张尺寸主要使用于信封），北美国家除外。 美国，加拿大和墨西哥的标准尺寸为8.5英寸×11英寸（约21.5厘米×27.9厘米），通常称为“信件”尺寸。 而A4纸稍微长一点，大约在8.27英寸乘11.75英寸（21厘米乘29.7厘米）。 这种和其他类型的“A”纸张尺寸基于公制测量系统并通过国际欧洲标准建立。</p>
    </div>	
)

const IndexNav = () => (
	<ul 
		className="index-nav-list clearfix"
		style={{
			display: 'block',
			marginTop: 15,
	    	backgroundColor: '#efefef',
		}}
	>
		<li><a rel="nofollow" href="#a4z-size">A4纸大小</a></li>
		<li><a rel="nofollow" href="#a4z-origin">A4纸形成的基础</a></li>
		<li><a rel="nofollow" href="#a4z-weight">A4纸张重量</a></li>
		<li><a rel="nofollow" href="#a4z-pixel">A4纸像素分辨率换算</a></li>
	</ul>
)

const Paragraphs = () => (
	<div style={{margin: '15px 0'}}>
		<dl className="clearfix">
			<dt id="a4z-size">① A4纸大小(单位：毫米)</dt>
			<dd>
			    <table style={{ marginTop: 15, paddingLeft: 20}}>
				    <tbody>
					    <tr><td colSpan={2}>A纸</td><td colSpan={2}>B纸</td><td colSpan={2}>C纸</td></tr>
					    <tr><td>A0</td><td>841 x 1189</td><td>B0</td><td>1000 x 1414</td><td>C0</td><td>917 x 1297</td></tr>
					    <tr><td>A1</td><td>594 x 841</td><td>B1</td><td>707 x 1000</td><td>C1</td><td>648 x 917</td></tr>
					    <tr><td>A2</td><td>420 x 594</td><td>B2</td><td>500 x 707</td><td>C2</td><td>458 x 648</td></tr>
					    <tr><td>A3</td><td>297 x 420</td><td>B3</td><td>353 x 500</td><td>C3</td><td>324 x 458</td></tr>
					    <tr><td style={{borderBottom:'2px solid #000'}}><strong>A4</strong></td><td style={{borderBottom:'2px solid #000'}}><strong>210 x 297</strong></td><td>B4</td><td>250 x 353</td><td>C4</td><td>229 x 324</td></tr>
					    <tr><td>A5</td><td>148 x 210</td><td>B5</td><td>176 x 250</td><td>C5</td><td>162 x 229</td></tr>
					    <tr><td>A6</td><td>105 x 148</td><td>B6</td><td>125 x 176</td><td>C6</td><td>114 x 162</td></tr>
					    <tr><td>A7</td><td>74 x 105</td><td>B7</td><td>88 x 125</td><td>C7</td><td>81 x 114</td></tr>
					    <tr><td>A8</td><td>52 x 74</td><td>B8</td><td>62 x 88</td><td>C8</td><td>57 x 81</td></tr>
					    <tr><td>A9</td><td>37 x 52</td><td>B9</td><td>44 x 62</td><td>C9</td><td>110 x 220</td></tr>
					    <tr><td>A10</td><td>26 x 37</td><td>B10</td><td>31 x 44</td><td>C10</td><td>81 x 162</td></tr>
			    	</tbody>
			    </table>
			</dd>
			<dt id="a4z-origin">② A4纸形成的基础</dt>
			<dd>
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>A4纸和相似尺寸基于公制测量。 如下图：一张A0纸张铺平后，面积为一平方米，最大尺寸为84.1厘米×118.9厘米（约33英寸×46.75英寸）。 切成两半的A0纸在大约59.4厘米乘84.1厘米（或23.38英寸乘33英寸）处变成A1尺寸。 A1减半是A2，依此类推到A6。
					</p>
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>这将生产不同尺寸的纸张，但都是1：1.414的高宽比。 欧洲标准还包括B纸张尺寸。 B0纸是一米宽，1.414米高（大约39.37英寸乘55.75英寸）; B1是B0切成两半，依此类推到B5。
					</p>
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>纸张尺寸的这个系统的价值是每个尺寸与下一个尺寸成比例。 A4纸例如大约21厘米×29.7厘米（大约8.27英寸×11.75英寸），而A3是29.7厘米×42厘米（大约11.75英寸×16.5英寸）。 如果有人在一张A4纸上放置了文字或图像，并想把它放大到A3纸上，可以很容易地完成，而不会丢失文档的任何内容。 这个使用2的平方根（即1.414）的比例被称为Lichtenberg比率，以德国物理学家的名字命名，他首先指出了它的用处。
					</p>
				<img src={'/img/a4z.jpg'} alt="A4纸尺寸：21厘米 × 29.7厘米（210毫米 × 297毫米）" title="A4纸尺寸：21厘米 × 29.7厘米（210毫米 × 297毫米）"/>			
			</dd>
			<dt id="a4z-weight">③ A4纸张重量</dt>
			<dd>
				<p style={{ marginTop: 15, paddingLeft: 20, textIndent:'2em'}}>欧洲纸张的重量基于公制系统，并在ISO标准536（最初于1976年开发并于1995年更新）标准化。欧洲和其他非美国纸张的加权基于每平方米的克数（g / m2 ）为每种类型的纸张。 A4纸可用于大多数标准纸张重量; A4打印纸的重量为90克/平方米，而封面纸为250克/平方米。</p>			
			</dd>
			<dt id="a4z-pixel">④ A4纸像素分辨率换算</dt>
			<dd>
				<p style={{ marginTop: 15, paddingLeft: 20}}>
					<strong>分辨率为 72</strong> 像素/英寸：用于屏幕显示，如网页，PPT等。此时，像素 <strong>宽 × 高</strong>  = （72 × 21 / 2.54） × （72 × 29.7 / 2.54）<strong> ≈ 595 像素 × 842 像素</strong><br /><br />
					<strong>分辨率为 150</strong> 像素/英寸：用于报纸印刷。此时，像素 <strong>宽 × 高</strong>  = （150 × 21 / 2.54） × （150 × 29.7 / 2.54）<strong> ≈ 1240 像素 × 1754 像素</strong><br /><br />
					<strong>分辨率为 200</strong> 像素/英寸：用于彩打等。此时，像素 <strong>宽 × 高</strong>  = （200 × 21 / 2.54） × （200 × 29.7 / 2.54）<strong> ≈ 1654 像素 × 2339 像素</strong><br /><br />
					<strong>分辨率为 300</strong> 像素/英寸：用于印刷，出版，杂志画报印刷等。此时，像素 <strong>宽 × 高</strong>  = （300 × 21 / 2.54） × （300 × 29.7 / 2.54）<strong> ≈ 2479 像素 × 3508 像素</strong>
				</p>		
				<p style={{ marginTop: 15, paddingLeft: 20}}>注意：<br/>分辨率（像素/英寸）：意思是每英寸像素的个数（1英寸=2.54厘米）。<br/>像素宽 = 宽（英寸） × 分辨率<br/>像素高 = 高（英寸） × 分辨率</p>
			</dd>		
		</dl>
	</div>
)
const IndexPage = () => (
  <div>
    <Helmet
      title="A4纸尺寸大小是多少？什么是A4纸？标准A4纸像素分辨率换算 - A4纸网"
      meta={[
        { name: 'description', content: 'A4纸网' },
        { name: 'keywords', content: 'A4纸尺寸,A4纸, A4纸网' },
      ]}
    />
  	<InGeneral />
  	<IndexNav />
  	<Paragraphs />
  </div>
)

export default IndexPage
