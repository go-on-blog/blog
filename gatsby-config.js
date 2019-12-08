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
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                  `Yanone Kaffeesatz\:500`,
                  `Nanum Gothic\:400,700`
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
