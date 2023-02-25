import * as React from 'react'
import { Link, graphql } from "gatsby";
import Layout from '../components/layout'
import { Seo } from "../components/seo"

const IndexPage = ({ data }) => {
  const totalCount = data.allMarkdownRemark.edges.length;

  return (
    <Layout pageTitle="Home Page">
      <div>
        <h1>Scattered notes on Agile</h1>
        <h4>{totalCount} posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div class='log' key={node.id}>
            <Link to={"/content" + node.frontmatter.slug}>
              <h3>
                {node.frontmatter.title}{" "}<br />
                <span>{node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query {
  allMarkdownRemark(filter: {frontmatter: {slug: {nin: ["/map/", "/definitions/"]}}}, sort: {frontmatter: {date: DESC}}) {
    edges {
      node {
        html
        headings {
          depth
          value
        }
        frontmatter {
          # Assumes you're using title in your frontmatter.
          title
          slug
        }
        excerpt
      }
    }
  }
}`;

export const Head = () => (
  <Seo />
)

export default IndexPage