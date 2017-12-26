import React from 'react'
import Link from 'gatsby-link'

const InGeneral = () => (
    <div
      style={{
        padding: 20,
        border: '1px solid #dfdfdf',
      }}
    >
    <p style={{marginBottom:15}}><strong>A4纸尺寸：21厘米 × 29.7厘米（210毫米 × 297毫米）</strong></p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们平时所用的A4纸是全球使用的标准纸张尺寸（A4纸由ISO 216定义的。ISO 216定义了A、B、C三组纸张尺寸，C组纸张尺寸主要使用于信封），北美国家除外。 美国，加拿大和墨西哥的标准尺寸为8.5英寸×11英寸（约21.5厘米×27.9厘米），通常称为“信件”尺寸。 而A4纸稍微长一点，大约在8.27英寸乘11.75英寸（21厘米乘29.7厘米）。 这种和其他类型的“A”纸张尺寸基于公制测量系统并通过国际欧洲标准建立。</p>
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
	</ul>
)

const Paragraphs = () => (
	<div style={{margin: '15px 0'}}>
		<dl className="clearfix">
			<dt id="a4z-size">① A4纸大小(单位：毫米)</dt>
			<dd>
			    <p style={{ marginTop: 15, paddingLeft: 20}}>
			    	<strong>A4纸大小：210 × 297；</strong><br />
					A3纸大小：297 × 420；<br />
					A2纸大小：420 × 594；<br />
					A1纸大小：594 × 841；<br />
					A0纸大小：841 × 1189；
			    </p>
			</dd>
			<dt id="a4z-origin">② A4纸形成的基础</dt>
			<dd>
				<p style={{ marginTop: 15, paddingLeft: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A4纸和相似尺寸基于公制测量。 如下图：一张A0纸张铺平后，面积为一平方米，最大尺寸为84.1厘米×118.9厘米（约33英寸×46.75英寸）。 切成两半的A0纸在大约59.4厘米乘84.1厘米（或23.38英寸乘33英寸）处变成A1尺寸。 A1减半是A2，依此类推到A6。
					</p>
				<p style={{ marginTop: 15, paddingLeft: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;这将生产不同尺寸的纸张，但都是1：1.414的高宽比。 欧洲标准还包括B纸张尺寸。 B0纸是一米宽，1.414米高（大约39.37英寸乘55.75英寸）; B1是B0切成两半，依此类推到B5。
					</p>
				<p style={{ marginTop: 15, paddingLeft: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;纸张尺寸的这个系统的价值是每个尺寸与下一个尺寸成比例。 A4纸例如大约21厘米×29.7厘米（大约8.27英寸×11.75英寸），而A3是29.7厘米×42厘米（大约11.75英寸×16.5英寸）。 如果有人在一张A4纸上放置了文字或图像，并想把它放大到A3纸上，可以很容易地完成，而不会丢失文档的任何内容。 这个使用两个平方根（即1.414）的比例被称为Lichtenberg比率，以德国物理学家的名字命名，他首先指出了它的用处。
					</p>
				<img src={'/img/a4z.jpg'} alt="A4纸尺寸：21厘米 × 29.7厘米（210毫米 × 297毫米）" title="A4纸尺寸：21厘米 × 29.7厘米（210毫米 × 297毫米）"/>			
			</dd>
			<dt id="a4z-weight">③ A4纸张重量</dt>
			<dd>
				<p style={{ marginTop: 15, paddingLeft: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欧洲纸张的重量基于公制系统，并在ISO标准536（最初于1976年开发并于1995年更新）标准化。欧洲和其他非美国纸张的加权基于每平方米的克数（g / m2 ）为每种类型的纸张。 A4纸可用于大多数标准纸张重量; A4打印纸的重量为90克/平方米，而封面纸为250克/平方米。</p>			
			</dd>			
		</dl>
	</div>
)
const IndexPage = () => (
  <div>
  	<InGeneral />
  	<IndexNav />
  	<Paragraphs />
  </div>
)

export default IndexPage
