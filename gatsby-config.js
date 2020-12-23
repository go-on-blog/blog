module.exports = {
    siteMetadata: {
        title: "GO ON",
        description: "A blog on Agile topics",
        author: "Guillaume Oriol"
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                commonmark: true,
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
                        resolve: `gatsby-remark-images`,
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 590
                        },
                    },
                    'gatsby-remark-graphviz' // place before other plugins that modify code blocks (such as prismjs)
                ],
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                  `Yanone Kaffeesatz\:500`,
                  `IBM Plex Mono\:400,400i,500`
                ],
                display: 'swap'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `GO ON, a blog on Agile topics`,
                short_name: `GO ON`,
                start_url: `/`,
                background_color: `#6b37bf`,
                theme_color: `#6b37bf`,
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: `standalone`,
                icon: `src/images/gatsby-icon.png`,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-react-helmet`
    ]
};
