import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Scattered notes on Agile</h1>
        <h4>{data.allMarkdownRemark.totalCount} posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div class='log' key={node.id}>
            <Link to={node.fields.slug}>
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
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
