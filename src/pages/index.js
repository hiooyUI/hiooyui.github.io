import React, { Component } from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

const InGeneral = () => (
  <div
    style={{
      padding: 20,
      border: "1px solid #dfdfdf"
    }}
    className="clearfix"
  >
    <div className="fl" style={{ width: "70%" }}>
      <p style={{ marginBottom: 15 }} title="A4纸尺寸大小">
        <strong style={{ textShadow: "rgb(221, 221, 221) 2px 2px 0px" }}>
          A4纸尺寸大小（宽 × 高）：21厘米 × 29.7厘米（或 210毫米 × 297毫米）
        </strong>
      </p>
      <p style={{ marginBottom: 15, textIndent: "2em" }}>
        我们平时所用的A4纸是全球使用的标准纸张尺寸（A4纸由ISO 216定义的。ISO
        216定义了A、B、C三组纸张尺寸，C组纸张尺寸主要使用于信封），北美国家除外。
        美国，加拿大和墨西哥的标准尺寸为8.5英寸×11英寸（约21.5厘米×27.9厘米），通常称为“信件”尺寸。
        而<strong>
          A4纸稍微长一点，大约在8.27英寸 × 11.75英寸（21厘米 × 29.7厘米）
        </strong>。
        这种和其他类型的“A”纸张尺寸基于公制测量系统并通过国际欧洲标准建立。
      </p>
      <p style={{ marginBottom: 15, textIndent: "2em" }}>
        那么<strong style={{ textShadow: "rgb(221, 221, 221) 2px 2px 0px" }}>
          A4纸是几寸? 8.91寸 × 6.3寸
        </strong>。寸也是常说的中国的市寸，10寸 = 1尺，10尺 = 1仗，3尺 =
        1米，所以1寸=3.33333333333333厘米
      </p>
    </div>
    <div className="fr" style={{ width: "28%" }}>
      <img
        src={"/img/a4p.jpg"}
        alt="A4纸尺寸：21厘米 × 29.7厘米（210毫米 × 297毫米）"
        title="A4纸尺寸：21厘米 × 29.7厘米（210毫米 × 297毫米）"
      />{" "}
    </div>
  </div>
);

const IndexNav = ({ fixed }) => (
  <ul
    className={"index-nav-list clearfix " + fixed}
    style={{
      display: "block",
      marginTop: 15,
      backgroundColor: "#efefef"
    }}
    id="index-nav-list"
  >
    <li>
      <a rel="nofollow" href="#a4z-size" title="A4纸尺寸大小">
        A4纸尺寸大小
      </a>
    </li>
    <li>
      <a rel="nofollow" href="#a4z-origin" title="A4纸形成的基础">
        A4纸形成的基础
      </a>
    </li>
    <li>
      <a rel="nofollow" href="#a4z-weight" title="A4纸张重量">
        A4纸张重量
      </a>
    </li>
    <li>
      <a rel="nofollow" href="#a4z-pixel" title="A4纸像素分辨率换算">
        A4纸像素分辨率换算
      </a>
    </li>
    <li>
      <a rel="nofollow" href="#a4z-brand" title="A4纸哪个品牌好">
        A4纸哪个品牌好
      </a>
    </li>
  </ul>
);

const Paragraphs = () => (
  <div style={{ margin: "15px 0" }}>
    <dl className="clearfix">
      <dt id="a4z-size" title="A4纸尺寸大小">
        ① A4纸尺寸大小(单位：毫米)
      </dt>
      <dd>
        <table style={{ marginTop: 15, paddingLeft: 20 }}>
          <tbody>
            <tr>
              <td colSpan={2}>A纸</td>
              <td colSpan={2}>B纸</td>
              <td colSpan={2}>C纸</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a0z" title="A0纸尺寸">
                  A0
                </Link>
              </td>
              <td>841 x 1189</td>
              <td>
                <Link to="/baike/b0z" title="B0纸尺寸">
                  B0
                </Link>
              </td>
              <td>1000 x 1414</td>
              <td>
                <Link to="/baike/c0z" title="C0纸尺寸">
                  C0
                </Link>
              </td>
              <td>917 x 1297</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a1z" title="A1纸尺寸">
                  A1
                </Link>
              </td>
              <td>594 x 841</td>
              <td>
                <Link to="/baike/b1z" title="B1纸尺寸">
                  B1
                </Link>
              </td>
              <td>707 x 1000</td>
              <td>
                <Link to="/baike/c1z" title="C1纸尺寸">
                  C1
                </Link>
              </td>
              <td>648 x 917</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a2z" title="A2纸尺寸">
                  A2
                </Link>
              </td>
              <td>420 x 594</td>
              <td>
                <Link to="/baike/b2z" title="B2纸尺寸">
                  B2
                </Link>
              </td>
              <td>500 x 707</td>
              <td>
                <Link to="/baike/c2z" title="C2纸尺寸">
                  C2
                </Link>
              </td>
              <td>458 x 648</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a3z" title="A3纸尺寸">
                  A3
                </Link>
              </td>
              <td>297 x 420</td>
              <td>
                <Link to="/baike/b3z" title="B3纸尺寸">
                  B3
                </Link>
              </td>
              <td>353 x 500</td>
              <td>
                <Link to="/baike/c3z" title="C3纸尺寸">
                  C3
                </Link>
              </td>
              <td>324 x 458</td>
            </tr>
            <tr>
              <td style={{ borderBottom: "2px solid #000" }}>
                <strong>A4</strong>
              </td>
              <td style={{ borderBottom: "2px solid #000" }}>
                <strong>210 x 297</strong>
              </td>
              <td>
                <Link to="/baike/b4z" title="B4纸尺寸">
                  B4
                </Link>
              </td>
              <td>250 x 353</td>
              <td>
                <Link to="/baike/c4z" title="C4纸尺寸">
                  C4
                </Link>
              </td>
              <td>229 x 324</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a5z" title="A5纸尺寸">
                  A5
                </Link>
              </td>
              <td>148 x 210</td>
              <td>
                <Link to="/baike/b5z" title="B5纸尺寸">
                  B5
                </Link>
              </td>
              <td>176 x 250</td>
              <td>
                <Link to="/baike/c5z" title="C5纸尺寸">
                  C5
                </Link>
              </td>
              <td>162 x 229</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a6z" title="A6纸尺寸">
                  A6
                </Link>
              </td>
              <td>105 x 148</td>
              <td>
                <Link to="/baike/b6z" title="B6纸尺寸">
                  B6
                </Link>
              </td>
              <td>125 x 176</td>
              <td>
                <Link to="/baike/c6z" title="C6纸尺寸">
                  C6
                </Link>
              </td>
              <td>114 x 162</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a7z" title="A7纸尺寸">
                  A7
                </Link>
              </td>
              <td>74 x 105</td>
              <td>
                <Link to="/baike/b7z" title="B7纸尺寸">
                  B7
                </Link>
              </td>
              <td>88 x 125</td>
              <td>
                <Link to="/baike/c7z" title="C7纸尺寸">
                  C7
                </Link>
              </td>
              <td>81 x 114</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a8z" title="A8纸尺寸">
                  A8
                </Link>
              </td>
              <td>52 x 74</td>
              <td>
                <Link to="/baike/b8z" title="B8纸尺寸">
                  B8
                </Link>
              </td>
              <td>62 x 88</td>
              <td>
                <Link to="/baike/c8z" title="C8纸尺寸">
                  C8
                </Link>
              </td>
              <td>57 x 81</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a9z" title="A9纸尺寸">
                  A9
                </Link>
              </td>
              <td>37 x 52</td>
              <td>
                <Link to="/baike/b9z" title="B9纸尺寸">
                  B9
                </Link>
              </td>
              <td>44 x 62</td>
              <td>
                <Link to="/baike/c9z" title="C9纸尺寸">
                  C9
                </Link>
              </td>
              <td>40 × 57</td>
            </tr>
            <tr>
              <td>
                <Link to="/baike/a10z" title="A10纸尺寸">
                  A10
                </Link>
              </td>
              <td>26 x 37</td>
              <td>
                <Link to="/baike/b10z" title="B10纸尺寸">
                  B10
                </Link>
              </td>
              <td>31 x 44</td>
              <td>
                <Link to="/baike/c10z" title="C10纸尺寸">
                  C10
                </Link>
              </td>
              <td>28 × 40</td>
            </tr>
          </tbody>
        </table>
      </dd>
      <dt id="a4z-origin">② A4纸形成的基础</dt>
      <dd>
        <p style={{ marginTop: 15, paddingLeft: 20, textIndent: "2em" }}>
          A4纸和相似尺寸基于公制测量。
          如下图：一张A0纸张铺平后，面积为一平方米，最大尺寸为84.1厘米×118.9厘米（约33英寸×46.75英寸）。
          切成两半的A0纸在大约59.4厘米乘84.1厘米（或23.38英寸乘33英寸）处变成A1尺寸。
          A1减半是A2，依此类推到A6。
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20, textIndent: "2em" }}>
          这将生产不同尺寸的纸张，但都是1：1.414的高宽比(即1比2的平方根)。
          欧洲标准还包括B纸张尺寸。
          B0纸是一米宽，1.414米高（大约39.37英寸乘55.75英寸）;
          B1是B0切成两半，依此类推到B5。
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20, textIndent: "2em" }}>
          纸张尺寸的这个系统的价值是每个尺寸与下一个尺寸成比例。
          A4纸例如大约21厘米×29.7厘米（大约8.27英寸×11.75英寸），而A3是29.7厘米×42厘米（大约11.75英寸×16.5英寸）。
          如果有人在一张A4纸上放置了文字或图像，并想把它放大到A3纸上，可以很容易地完成，而不会丢失文档的任何内容。
          这个使用2的平方根（即1.414）的比例被称为Lichtenberg比率，以德国物理学家的名字命名，他首先指出了它的用处。
        </p>
        <img
          src={"/img/a4z.jpg"}
          alt="A4纸尺寸：21厘米 × 29.7厘米（210毫米 × 297毫米）"
          title="A4纸尺寸：21厘米 × 29.7厘米（210毫米 × 297毫米）"
        />
      </dd>
      <dt id="a4z-weight">③A4纸张重量</dt>
      <dd>
        <p style={{ marginTop: 15, paddingLeft: 20, textIndent: "2em" }}>
          根据纸张的厚度来分，比如<strong>60克、70克、75克、85克、120克</strong>等等，是指在单位面积纸的重量有多重，因为纸的密度基本上是一样的，在单位面积纸的厚度就越厚，纸的重量越重。办公用70克左右，80克的稍厚一些，手感更好，但贵一点，非专业打印用的话，没多大必要，市面上的复印店则为了省钱，经常会使用一些60克甚至更薄的纸。
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20, textIndent: "2em" }}>
          欧洲纸张的重量基于公制系统，并在ISO标准536（最初于1976年开发并于1995年更新）标准化。欧洲和其他非美国纸张的加权基于<strong
          >
            每平方米的克数（g / m<sup>2</sup> ）
          </strong>为每种类型的纸张。 A4纸可用于大多数标准纸张重量;{" "}
          <strong>A4打印纸的重量为90克/平方米</strong>，而封面纸为250克/平方米。
        </p>
      </dd>
      <dt id="a4z-pixel">④ A4纸像素分辨率换算</dt>
      <dd>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>分辨率为 72</strong>{" "}
          像素/英寸：用于屏幕显示，如网页，PPT等。此时，像素{" "}
          <strong>宽 × 高</strong> = （72 × 21 / 2.54） × （72 × 29.7 / 2.54）<strong
          >
            {" "}
            ≈ 595 像素 × 842 像素
          </strong>
          <br />
          <br />
          <strong>分辨率为 150</strong> 像素/英寸：用于报纸印刷。此时，像素{" "}
          <strong>宽 × 高</strong> = （150 × 21 / 2.54） × （150 × 29.7 / 2.54）<strong
          >
            {" "}
            ≈ 1240 像素 × 1754 像素
          </strong>
          <br />
          <br />
          <strong>分辨率为 200</strong> 像素/英寸：用于彩打等。此时，像素{" "}
          <strong>宽 × 高</strong> = （200 × 21 / 2.54） × （200 × 29.7 / 2.54）<strong
          >
            {" "}
            ≈ 1654 像素 × 2339 像素
          </strong>
          <br />
          <br />
          <strong>分辨率为 300</strong>{" "}
          像素/英寸：用于印刷，出版，杂志画报印刷等。此时，像素{" "}
          <strong>宽 × 高</strong> = （300 × 21 / 2.54） × （300 × 29.7 / 2.54）<strong
          >
            {" "}
            ≈ 2479 像素 × 3508 像素
          </strong>
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          注意：<br />分辨率（像素/英寸）：意思是每英寸像素的个数（1英寸=2.54厘米）。<br />像素宽
          = 宽（英寸） × 分辨率<br />像素高 = 高（英寸） × 分辨率
        </p>
      </dd>
      <dt id="a4z-brand">⑤ A4纸哪个品牌好</dt>
      <dd>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/U41HoUw"
              rel="nofollow"
              target="_blank"
            >
              佳印
            </a>-UPM<a
              href="https://s.click.taobao.com/L75HoUw"
              rel="nofollow"
              target="_blank"
            >
              欣乐
            </a>
          </strong>{" "}
          (芬欧汇川旗下，芬欧汇川(常熟)纸业有限公司 十佳复印纸/打印纸品牌){" "}
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            旗舰-<a
              href="https://s.click.taobao.com/A52HoUw"
              rel="nofollow"
              target="_blank"
            >
              小钢炮
            </a>-<a
              href="https://s.click.taobao.com/Dh9HoUw"
              rel="nofollow"
              target="_blank"
            >
              金旗舰
            </a>
          </strong>{" "}
          (新加坡APP金光集团旗下，亚龙昆山纸业,十佳复印纸品牌)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/NDAHoUw"
              rel="nofollow"
              target="_blank"
            >
              Double A
            </a>
          </strong>{" "}
          (泰国曼谷亿王亚哥集团，东南亚著名造纸品牌)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/Uh8HoUw"
              rel="nofollow"
              target="_blank"
            >
              幸运鸟
            </a>
          </strong>{" "}
          (新加坡APP金光集团旗下，金华盛纸业（苏州工业园区）有限公司，十佳复印纸/打印纸品牌)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/aO7HoUw"
              rel="nofollow"
              target="_blank"
            >
              金太阳
            </a>-<a
              href="https://s.click.taobao.com/Qn3CoUw"
              rel="nofollow"
              target="_blank"
            >
              威尔
            </a>
          </strong>{" "}
          (山东太阳纸业股份有限公司/兖州枫叶纸业，十佳复印纸品牌)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/Dd5HoUw"
              rel="nofollow"
              target="_blank"
            >
              百旺
            </a>-<a
              href="https://s.click.taobao.com/YO7HoUw"
              rel="nofollow"
              target="_blank"
            >
              高品乐
            </a>
          </strong>{" "}
          (新加坡金鹰国际集团广东亚太纸业，十佳复印纸品牌)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/Wx9HoUw"
              rel="nofollow"
              target="_blank"
            >
              史泰博(Staples)
            </a>
          </strong>{" "}
          (世界500强美国企业)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/Bv7HoUw"
              rel="nofollow"
              target="_blank"
            >
              Deli/得力
            </a>
          </strong>{" "}
          (中国驰名商标、中国文具百环奖、办公文具行业领导品牌)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/Y41HoUw"
              rel="nofollow"
              target="_blank"
            >
              Comix/齐心
            </a>
          </strong>{" "}
          (中国最大的办公用品集团之一)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/Bp0HoUw"
              rel="nofollow"
              target="_blank"
            >
              M＆G/晨光
            </a>
          </strong>{" "}
          (中国文具十大品牌)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/lhrBoUw"
              rel="nofollow"
              target="_blank"
            >
              天章(TANGO)
            </a>
          </strong>{" "}
          (天章“TANGO”、“世纪天章”、“天章龙”品牌复印纸获得了国家环境保护部授权的“中国环境标志产品认证
          证书”)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/XDAHoUw"
              rel="nofollow"
              target="_blank"
            >
              永丰
            </a>
          </strong>{" "}
          (中国驰名商标，四川永丰纸业股份有限公司，十佳复印纸品牌)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/NO6HoUw"
              rel="nofollow"
              target="_blank"
            >
              安妮
            </a>
          </strong>{" "}
          (厦门安妮股份有限公司 股票代码：002235，下称“安妮股份”)
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/Oh8HoUw"
              rel="nofollow"
              target="_blank"
            >
              金丝雀
            </a>
          </strong>{" "}
          (新加坡APP金光集团旗下，金鑫(清远)纸业有限公司）
        </p>
        <p style={{ marginTop: 15, paddingLeft: 20 }}>
          <strong>
            <a
              href="https://s.click.taobao.com/qTAHoUw"
              rel="nofollow"
              target="_blank"
            >
              王子
            </a>
          </strong>{" "}
          (日本王子制纸集团，十佳复印纸/打印纸品牌)
        </p>
      </dd>
    </dl>
  </div>
);
const FriendLinks = () => (
  <div className="friendlinks">
    <dt>友情链接</dt>
    <dd style={{ marginBottom: 15 }}>
      <a href="http://www.iampua.com/" target="_blank">
        泡妞秘籍
      </a>{" "}
      |{" "}
      <a href="http://xinyang.17house.com/" target="_blank">
        信阳装修网
      </a>{" "}
      |{" "}
      <a href="http://www.bjsuntrans.cn/" target="_blank">
        阳光创译翻译公司
      </a>{" "}
      | <Link to="/message"> +申请友情链接</Link>
    </dd>
    <dt>外部网盟</dt>
    <dd className="outer-links">
      <a href="http://www.zyvps.com/" target="_blank">
        香港服务器租用
      </a>{" "}
      |{" "}
      <a href="http://www.haohead.com/case/logo" target="_blank">
        公司logo设计
      </a>{" "}
      |{" "}
      <a href="http://www.yihuansh.com" target="_blank">
        拉力试验机
      </a>{" "}
      |{" "}
      <a href="http://ym.glofang.com/de" target="_blank">
        德国投资移民
      </a>{" "}
      |{" "}
      <a href="http://www.599188.com/meiyu" target="_blank">
        煤玉
      </a>{" "}
      |{" "}
      <a href="http://www.kangantu.com/a/zixunzhongxin/2017/0409/522.html" target="_blank">
      吉三代
      </a>{" "}
      |{" "}
      <a href="http://www.wnnyljxy.com" target="_blank">
      五常香米
      </a>{" "}
      | <Link to="/message"> +申请添加链接</Link>
    </dd>
  </div>
);
class IndexPage extends Component {
  constructor() {
    super();
    this.state = {
      fixed: ""
    };
    this.shallFixedNav = this.shallFixedNav.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.shallFixedNav);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.shallFixedNav);
  }
  shallFixedNav = () => {
    if (
      document.documentElement.scrollTop > 100 ||
      window.pageYOffset > 100 ||
      document.body.scrolltop > 100
    ) {
      this.setState({
        fixed: "fixed"
      });
    } else {
      this.setState({
        fixed: ""
      });
    }
  };
  render() {
    return (
      <div style={{ paddingBottom: 10 }}>
        <Helmet
          title="A4纸尺寸大小是多少？A4纸价格是多少？ - A4纸网"
          meta={[
            { name: "description", content: "A4纸网是一个专注于A4纸的网站" },
            { name: "keywords", content: "A4纸尺寸, A4纸大小, A4纸, A4纸价格" }
          ]}
        />
        <InGeneral />
        <IndexNav fixed={this.state.fixed} />
        <Paragraphs />
        <FriendLinks />
      </div>
    );
  }
}

export default IndexPage;
