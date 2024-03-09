import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import './layout.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <div class='page'>
      <div class='section header'>
        <Link to={`/`}>{data.site.siteMetadata.title}</Link>
      </div>
      <div class='section menu'>
        <Link to={`/content/patterns/`}>/patterns</Link>&nbsp;
        <Link to={`/content/map/`}>/map</Link>&nbsp;
        <Link to={`/content/definitions/`}>/defs</Link>&nbsp;
        <Link to={`/about/`}>/about</Link>
      </div>
      <div class='section content'>
        {children}
      </div>
      <div class='section footer'>
        Copyright &copy; 2019-2024, {data.site.siteMetadata.author}. All rights reserved.
      </div>
    </div>
  )
}

export default Layout