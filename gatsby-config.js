module.exports = {
  siteMetadata: {
    title: `Signature Coachworks`,
    description: `Premier coach and RV sales and full service repair shop in Beaumont, CA.`,
    author: `@signaturecoachworks`,
    keywords: `rv repair shop, coach repair, rv repair shop near me, coach repair near me, rv mechanic, rv mechanic near me, coach repair near me, coach repair beaumont, beaumont repair shop, repair shop, coach sales, rv sales, coaches for sale`,
    siteUrl: `https://signaturecoachworks.com/`,
    image: `src/images/coaches-hero-dark-2-min.jpg`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-background-image`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `1999prevostmarathonxl`,
        path: `${__dirname}/src/assets/data/images/1999-prevost-marathon-xl`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/assets/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Signature Coachworks`,
        short_name: `signaturecoachworks`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon-color.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
