/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "GO ON",
    description: "A blog on Agile topics",
    author: "Guillaume Oriol",
    siteUrl: "https://go-on.blog",
    image: `/images/gatsby-icon.png`
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "content",
        "path": "./src/content/"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": "./src/images/"
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              urlOverrides: [
                {
                  id: 'youtube',
                  embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
                }
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          },
          'gatsby-remark-graphviz' // place before other plugins that modify code blocks (such as prismjs)
        ]
      }
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: `Oswald`,
            file: `https://fonts.googleapis.com/css2?family=Oswald&display=swap`,
          },
          {
            name: `Source Sans Pro`,
            file: `https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@0;1&display=swap`
          },
          {
            name: `IBM Plex Mono`,
            file: `https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital@0;1&display=swap`
          }
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        "icon": "src/images/gatsby-icon.png"
      }
    } 
  ]
};