/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`
      },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `src`,
              path: `${__dirname}/src/`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-remark`,
        {
          resolve: `gatsby-plugin-scroll-reveal`,
          options: {
            threshold: 0.4, // Percentage of an element's area that needs to be visible to launch animation
            once: true, // Defines if animation needs to be launched once
            disable: false, // Flag for disabling animations
    
            // Advanced Options
    
            selector: '[data-sal]', // Selector of the elements to be animated
            animateClassName: 'sal-animate', // Class name which triggers animation
            disabledClassName: 'sal-disabled', // Class name which defines the disabled state
            rootMargin: '0% 100%', // Corresponds to root's bounding box margin
            enterEventName: 'sal:in', // Enter event name
            exitEventName: 'sal:out' // Exit event name
          }
        }
    ]
}
