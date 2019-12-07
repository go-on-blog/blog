import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    <h1>About &laquo;&nbsp;{data.site.siteMetadata.title}&nbsp;&raquo;</h1>
    <p>
      My name is {data.site.siteMetadata.author}. I am working at Wemanity as an Agile coach.
    </p>
    <p>
      I created this blog to help me during my Agile trainings sessions.
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
        title
      }
    }
  }
`
