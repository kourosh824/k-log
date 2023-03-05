/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `K-LOG`,
        siteUrl: `https://www.yourdomain.tld`
    },
    plugins: [{
        resolve: 'gatsby-source-contentful',
        options: {
        "accessToken": "EXoGs4-j2EFd11qJVqFlVkCJQmvDZODH4kLbmJgf0jg",
        "spaceId": "6iuuciih0s8k"
        }
    }, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};  