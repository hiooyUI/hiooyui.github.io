import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
const ProductList = () => {
  const products = [
    {
      imgUrl:
        "http://img.alicdn.com/bao/uploaded/i4/2873624458/TB1ZfRBbkfb_uJjSsrbXXb6bVXa_!!0-item_pic.jpg",
      productName:
        "【汇东纸业】彩色复印纸500张80g粉红黄打印彩色a4纸彩纸手工折纸",
      link: "https://s.click.taobao.com/Xcu6qUw",
      supplierName: "汇东旗舰店",
      price: "10.50",
      sell: "4163",
      pid: "532546898741"
    },
    {
      imgUrl:
        "http://img.alicdn.com/bao/uploaded/i3/2979051958/TB11xUrctnJ8KJjSszdXXaxuFXa_!!0-item_pic.jpg",
      productName:
        "包邮悠米A4纸打印复印纸80g办公用白纸a4复印纸70g500张整箱批发",
      link: "https://s.click.taobao.com/zsu6qUw",
      supplierName: "悠米办公用品旗舰店",
      price: "17.80",
      sell: "5876",
      pid: "548662262305"
    },
    {
      imgUrl:
        "http://img.alicdn.com/bao/uploaded/i2/407910984/TB1FJ6SnnnI8KJjy0FfXXcdoVXa_!!0-item_pic.jpg",
      productName:
        "得力爱琴海复印纸双面打印A4纸办公用品70克/80克纯木浆整箱5包装",
      link: "https://s.click.taobao.com/38v6qUw",
      supplierName: "得力官方旗舰店",
      price: "104.00",
      sell: "5737",
      pid: "520911000555"
    },
    {
      imgUrl:
        "http://img.alicdn.com/bao/uploaded/i3/1636564082/TB1asmXklTH8KJjy0FiXXcRsXXa_!!0-item_pic.jpg",
      productName:
        "史泰博 A4打印白纸复印纸500张70g/5包办公用纸 a4纸整箱批发包邮",
      link: "https://s.click.taobao.com/cIq6qUw",
      supplierName: "史泰博旗舰店",
      price: "103.00",
      sell: "4660",
      pid: "521510123453"
    },
    {
      imgUrl:
        "http://img.alicdn.com/bao/uploaded/i2/725677994/TB1vUWtk8HH8KJjy0FbXXcqlpXa_!!0-item_pic.jpg",
      productName: "广博F7052复印/打印纸办公用品 70g A4纸 500张/包单包",
      link: "https://s.click.taobao.com/pOw6qUw",
      supplierName: "天猫超市",
      price: "25.00",
      sell: "3334",
      pid: "537763035138"
    },
    {
      imgUrl:
        "http://img.alicdn.com/bao/uploaded/i2/2883950360/TB1skcWb7fb_uJkHFJHXXb4vFXa_!!0-item_pic.jpg",
      productName: "亚太/百旺 绿百旺 a4纸a4打印复印纸白纸500张70g80g整箱批发",
      link: "https://s.click.taobao.com/9dv6qUw",
      supplierName: "百旺旗舰店",
      price: "24.80",
      sell: "523",
      pid: "533814974099"
    }
  ];
  return (
    <div className="product-list">
      <ul>
        {products.map(product => (
          <li key={product.pid} className="item clearfix">
            <a
              className="image"
              href={product.link}
              title={product.productName}
              rel="nofollow"
              target="_blank"
            >
              <img src={product.imgUrl} />
            </a>
            <a
              className="line-1"
              href={product.link}
              title={product.productName}
              rel="nofollow"
              target="_blank"
            >{`${product.productName} [${product.supplierName}]`}</a>
            <div className="line-2">
              <a
                href={product.link}
                className="price"
                rel="nofollow"
                target="_blank"
              >
                <span>¥</span>
                <em>{product.price}</em>
              </a>
              <a
                href={product.link}
                className="sell fr"
                rel="nofollow"
                target="_blank"
              >
                月销<em>{product.sell}</em>笔
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
const SecondPage = () => (
  <div style={{ paddingBottom: 50, minHeight: "55vh" }}>
    <Helmet
      title="A4纸价格 - A4纸网"
      meta={[
        { name: "description", content: "A4纸网" },
        { name: "keywords", content: "A4纸尺寸,A4纸, A4纸网" }
      ]}
    />
    <div className="breadcrumb">
      <span className="breadcrumb-link">
        <Link to="/">首页</Link>
      </span>
      <span className="breadcrumb-separator">/</span>
      <span className="breadcrumb-link">A4纸价格</span>
    </div>
    <h2
      style={{ backgroundColor: "#efefef", padding: "10px 0", marginBottom: 0 }}
    >
      A4纸热门商品推荐
    </h2>
    <ProductList />
    <h2 style={{ backgroundColor: "#efefef", padding: "10px 0" }}>
      A4纸价格快捷链接
    </h2>
    <p style={{ marginTop: 15 }} className="price-list clearfix">
      <a
        href="https://list.tmall.com/search_product.htm?q=a4%D6%BD&type=p"
        rel="nofollow"
        style={{ backgroundColor: "#FF0036" }}
        target="_blank"
      >
        天猫商城 A4纸价格
      </a>
      <a
        href="http://search.jd.com/Search?keyword=a4%E7%BA%B8&enc=utf-8"
        rel="nofollow"
        style={{ backgroundColor: "#f30213" }}
        target="_blank"
      >
        京东商城 A4纸价格
      </a>
      <a
        href="https://s.taobao.com/search?q=a4"
        rel="nofollow"
        style={{ backgroundColor: "#f50" }}
        target="_blank"
      >
        淘宝商城 A4纸价格
      </a>
      <a
        href="http://search.dangdang.com/?key=A4%D6%BD&act=input"
        rel="nofollow"
        style={{ backgroundColor: "#ff2832" }}
        target="_blank"
      >
        当当网 A4纸价格
      </a>
      <a
        href="https://re.suning.com/keyword.htm?q=a4%E7%BA%B8&fromhot=search_toolbar"
        rel="nofollow"
        style={{ backgroundColor: "#ffaa00" }}
        target="_blank"
      >
        苏宁易购 A4纸价格
      </a>
      <a
        href="https://www.1688.com/chanpin/-.html?keywords=a4%D6%BD"
        rel="nofollow"
        style={{ backgroundColor: "#ff7300" }}
        target="_blank"
      >
        阿里巴巴 A4纸价格
      </a>
      <a
        href="http://cn.made-in-china.com/hot-search/A4%E7%BA%B8-1.html"
        rel="nofollow"
        style={{ backgroundColor: "#e41b2e" }}
        target="_blank"
      >
        中国制造网 A4纸价格
      </a>
      <a
        href="https://s.hc360.com/?w=A4%D6%BD&mc=seller&ap=A&pab=B"
        rel="nofollow"
        style={{ backgroundColor: "#ee2e2c" }}
        target="_blank"
      >
        慧聪网 A4纸价格
      </a>
      <a
        href="http://detail.zol.com.cn/print_medium/s3702/"
        rel="nofollow"
        style={{ backgroundColor: "#297acc" }}
        target="_blank"
      >
        中关村在线 A4纸价格
      </a>
      <a
        href="https://www.china.cn/search/5wdv.shtml"
        rel="nofollow"
        style={{ backgroundColor: "#d20000" }}
        target="_blank"
      >
        中国供应商 A4纸价格
      </a>
    </p>
    <h2
      style={{ backgroundColor: "#efefef", padding: "10px 0", marginTop: 15 }}
    >
      A4纸热门品牌
    </h2>
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <p style={{ marginTop: 15 }}>
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
    <h2
      style={{ backgroundColor: "#efefef", padding: "10px 0", marginTop: 15 }}
    >
      办公复印A4纸热门品牌
    </h2>
    <p style={{ marginTop: 15 }} className="brand-list">
      <strong>Deli/得力</strong> | <strong>M＆G/晨光</strong> |{" "}
      <strong>Comix/齐心</strong> | <strong>Double a/达伯埃</strong> |{" "}
      <strong>汇东</strong> | <strong>TRANSMATE/传美</strong> |{" "}
      <strong>paperone/百旺</strong> | <strong>Truecolor/真彩</strong> |{" "}
      <strong>UMI/悠米</strong> | <strong>Staples/史泰博</strong> |{" "}
      <strong>SHVG</strong> | <strong>广博</strong> | <strong>HP/惠普</strong> |{" "}
      <strong>元浩</strong> | <strong>尖兵</strong> |{" "}
      <strong>Oaego/文仪易购</strong> | <strong>BENEFIT/多利</strong> |{" "}
      <strong>如歌</strong> | <strong>金雅</strong> | <strong>晨鸣共好</strong>{" "}
      | <strong>点金石</strong> | <strong>椿鸣</strong> | <strong>驰鹏</strong>{" "}
      | <strong>DAZZLELIGHT/炫亮</strong> | <strong>歌乐</strong> |{" "}
      <strong>On Hing Hui Dong Paper/安兴汇东纸业</strong> |{" "}
      <strong>umi</strong> | <strong>PRINT－RITE/天威</strong> |{" "}
      <strong>港丰</strong> | <strong>Fleet Footed/飞毛腿</strong> |{" "}
      <strong>淮星</strong> | <strong>集文</strong> |{" "}
      <strong>Maxleaf/玛丽</strong> | <strong>环美</strong> |{" "}
      <strong>BX/百兴</strong> | <strong>莱盛</strong> | <strong>ANO</strong> |{" "}
      <strong>富强</strong> | <strong>金得利</strong> |{" "}
      <strong>Canon/佳能</strong> | <strong>傳美</strong> |{" "}
      <strong>UPM Yes/益思</strong> | <strong>Resehigh/研高</strong> |{" "}
      <strong>Tango</strong> | <strong>UPM Copykid/欣乐</strong> |{" "}
      <strong>粤冠</strong> | <strong>科星</strong> |{" "}
      <strong>BSD/百事达</strong> | <strong>秋乐</strong> |{" "}
      <strong>UPM Jetset/佳印</strong> | <strong>新好</strong> |{" "}
      <strong>晨鸣</strong> | <strong>佳顺</strong> |{" "}
      <strong>Kingdee/金蝶</strong> | <strong>yide</strong> |{" "}
      <strong>flagship/金旗舰</strong> | <strong>图润</strong> |{" "}
      <strong>MATEIST/欧标</strong> | <strong>传美</strong> |{" "}
      <strong>红鑫</strong> | <strong>粤双叶</strong> | <strong>永图</strong> |{" "}
      <strong>唯彩</strong> | <strong>朗博</strong> | <strong>金美图</strong> |{" "}
      <strong>格之格</strong> | <strong>星朋</strong> |{" "}
      <strong>OPTIMUM PARTNER/黄金搭档</strong> | <strong>chanyi/创易</strong> |{" "}
      <strong>畅印</strong> | <strong>嘉帆</strong> | <strong>ADOL/艾兜</strong>{" "}
      | <strong>林中王</strong> | <strong>冠墨</strong> | <strong>爱好</strong>{" "}
      | <strong>方菱</strong> | <strong>奥友</strong> |{" "}
      <strong>Eagle/益而高</strong> | <strong>千彩乐</strong> |{" "}
      <strong>卓联</strong> | <strong>增美耗材</strong> |{" "}
      <strong>SPRT/思普瑞特</strong> | <strong>AGFAPHOTO/爱克发影像</strong> |{" "}
      <strong>华富鹰</strong> | <strong>BESSIE</strong> | <strong>溢彩</strong>{" "}
      | <strong>多好</strong> | <strong>火鸡</strong> |{" "}
      <strong>Laminat/雷明特</strong> | <strong>SHIFENGHK</strong> |{" "}
      <strong>汇集</strong> | <strong>Imacolor/艺美佳</strong> |{" "}
      <strong>力武</strong> | <strong>如佳</strong> | <strong>琪盛</strong> |{" "}
      <strong>佳印</strong> | <strong>淼犇</strong> |{" "}
      <strong>甲骨文天之印</strong> | <strong>OAE</strong> |{" "}
      <strong>SB/商本</strong> | <strong>LPS/乐普升</strong> |{" "}
      <strong>PUBLIC COLOR/众诚</strong> | <strong>蓝光苏牌</strong> |{" "}
      <strong>ETIQUETTE LOYAL MERCY/礼忠仁</strong> |{" "}
      <strong>港派（3C）</strong> | <strong>雅梓</strong> |{" "}
      <strong>齐力（数码）</strong> | <strong>OPTIMUM PARTNER/黄金搭挡</strong>{" "}
      | <strong>Multicolor Paper/万紫千红</strong> |{" "}
      <strong>RYSTAL/亮丽</strong> | <strong>诚纳</strong> |{" "}
      <strong>bostik</strong> | <strong>车田</strong>
    </p>
    <h2
      style={{ backgroundColor: "#efefef", padding: "10px 0", marginTop: 15 }}
    >
      打印介质著名品牌
    </h2>
    <p style={{ marginTop: 15 }} className="brand-list">
      <strong>惠普</strong> | <strong>Double A</strong> | <strong>得力</strong>{" "}
      | <strong>天章</strong> | <strong>佳能</strong> | <strong>旗舰</strong> |{" "}
      <strong>理想</strong> | <strong>爱普生</strong> | <strong>高品乐</strong>{" "}
      | <strong>金珊</strong> | <strong>百旺</strong> | <strong>兴业</strong> |{" "}
      <strong>传美</strong> | <strong>力武</strong> | <strong>凯豪</strong> |{" "}
      <strong>LG</strong> | <strong>豪艺</strong> | <strong>科朗鑫盛</strong> |{" "}
      <strong>探戈</strong> | <strong>逊镭</strong> | <strong>丽标</strong> |{" "}
      <strong>青联</strong> | <strong>嘉视图</strong> | <strong>领航</strong> |{" "}
      <strong>嗣大</strong> | <strong>财友</strong> | <strong>汇美影像</strong>{" "}
      | <strong>蜂鸟</strong> | <strong>奥家</strong> |{" "}
      <strong>文仪易购</strong> | <strong>谊宝</strong> |{" "}
      <strong>战斗金刚</strong> | <strong>和利金</strong> |{" "}
      <strong>欣码</strong> | <strong>贝迪</strong> | <strong>锦成印刷</strong>{" "}
      | <strong>普贴</strong> | <strong>喜盛</strong> | <strong>登峰</strong> |{" "}
      <strong>美库</strong> | <strong>topcent</strong> | <strong>寒子城</strong>{" "}
      | <strong>易利丰</strong> | <strong>金富州</strong> |{" "}
      <strong>Ling Long</strong> | <strong>驰怡</strong> |{" "}
      <strong>HA.BC</strong> | <strong>兆洋</strong> | <strong>雅鹏</strong> |{" "}
      <strong>普伟</strong> | <strong>诚码</strong> | <strong>安图</strong> |{" "}
      <strong>迅想</strong> | <strong>领先办公</strong> | <strong>秋乐</strong>{" "}
      | <strong>火光</strong> | <strong>艺美佳</strong> |{" "}
      <strong>西玛表单</strong> | <strong>镭达</strong> |{" "}
      <strong>优必利</strong> | <strong>如歌</strong> | <strong>太慕斯</strong>{" "}
      | <strong>砹石</strong> | <strong>鸿图</strong> |{" "}
      <strong>富士施乐</strong> | <strong>科美</strong> | <strong>印爽</strong>{" "}
      | <strong>百顺</strong> | <strong>鼎好</strong> | <strong>柏旺</strong> |{" "}
      <strong>大博爱</strong> | <strong>E M I</strong> |{" "}
      <strong>Office One</strong> | <strong>爱宝</strong> |{" "}
      <strong>安妮</strong> | <strong>UPM</strong> | <strong>幸运鸟</strong> |{" "}
      <strong>天威</strong> | <strong>微笑</strong> | <strong>冠豪</strong> |{" "}
      <strong>华威</strong> | <strong>清华同方</strong> | <strong>红鸟</strong>{" "}
      | <strong>益思</strong> | <strong>蓝剑</strong> | <strong>清晰</strong> |{" "}
      <strong>东森</strong> | <strong>达善</strong> | <strong>恩倍</strong> |{" "}
      <strong>古德</strong> | <strong>汇东</strong> | <strong>永图</strong> |{" "}
      <strong>瑞丽</strong> | <strong>点金石</strong> | <strong>丝韵</strong> |{" "}
      <strong>百思达</strong> | <strong>优立方</strong> | <strong>金鸟</strong>{" "}
      | <strong>追求</strong> | <strong>乐标</strong> | <strong>凯萨</strong> |{" "}
      <strong>金球</strong> | <strong>清风</strong> | <strong>西玛</strong> |{" "}
      <strong>欣乐</strong> | <strong>联华</strong> | <strong>玛丽</strong> |{" "}
      <strong>芬尚</strong> | <strong>百兴</strong> | <strong>贺氏爱宝</strong>{" "}
      | <strong>小钢炮</strong> ...
    </p>
    <p style={{ marginTop: 60 }}>
      <a href="mailto:kbl_1794@qq.com" rel="nofollow">
        商务合作
      </a>{" "}
      | <Link to="/">返回首页</Link>
    </p>
  </div>
);

export default SecondPage;
