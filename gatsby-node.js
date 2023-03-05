const { create } = require("domain");
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const template = path.resolve(`src/templates/ArticlePage.js`);

    return graphql(`
        query {
            allContentfulArticle {
                nodes {
                    title
                    image {
                        gatsbyImageData(width: 500)
                    }
                    body {
                        raw
                    }
                    publicationDate
                    author {
                        fullName
                    }
                }
              }
        }
    `)
    .then( result => {
        if (result.errors) {
            throw result.errors;
        }

        result.data.allContentfulArticle.nodes.forEach(node => {
            createPage({
                path: `/articles/${node.title.toLowerCase().replace(/ /g, '-')}/`,
                component: template,
                context: {
                    ...node
                },
            });
        });
    });
}