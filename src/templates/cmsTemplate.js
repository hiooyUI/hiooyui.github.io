import React from "react";
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="cms-post-container">
      <Helmet
        title={frontmatter.title + ' - A4纸网'}
      />
      <div className="cms-post">
        <div className="breadcrumb">
          <span className="breadcrumb-link"><Link to="/">首页</Link></span>          
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-link"><Link to="/news">A4纸趣闻
</Link></span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-link">{frontmatter.title}</span>
        </div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="cms-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query CmsPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        path
        title
      }
    }
  }
`;