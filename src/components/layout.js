import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  );

  return (
    <div class='page'>
      <div class='section header'>
        <Link to={`/`}>{data.site.siteMetadata.title}</Link>
      </div>
      <div class='section menu'>
        <Link to={`/map/`}>Map</Link> |
        <Link to={`/definitions/`}>Defs</Link> |
        <Link to={`/about/`}>About</Link>
      </div>
      <div class='section content'>
        {children}
      </div>
      <div class='section footer'>
        Copyright &copy; 2019-2020, {data.site.siteMetadata.author}. All rights reserved.
      </div>
    </div>
  )
};
