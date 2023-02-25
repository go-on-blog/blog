import * as React from "react"
import Layout from "../components/layout"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const AboutPage = ({ data }) => {
  const { title, author} = useSiteMetadata()

  return (
    <Layout>
      <div class="post">
        <h1>About &laquo;&nbsp;{title}&nbsp;&raquo;</h1>
        <div class="text">
          <p>
             My name is {author}. I am working at Wemanity as an Agile coach.
          </p>
          <p>
            I created this blog to help me during my Agile training sessions.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage