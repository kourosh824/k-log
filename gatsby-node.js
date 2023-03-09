const { create } = require("domain");
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const articleTemplate = path.resolve(`src/templates/ArticlePage.js`);
    const authorTemplate = path.resolve(`src/templates/AuthorPage.js`);

    return graphql(`
        query {
            allContentfulArticle {
                nodes {
                    title
                    image {
                        gatsbyImageData(width: 900)
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
            allContentfulAuthor {
                nodes {
                    fullName
                    image {
                        gatsbyImageData(width: 500)
                    }
                    biography {
                        raw
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
                component: articleTemplate,
                context: {
                    ...node
                },
            });
        });

        result.data.allContentfulAuthor.nodes.forEach(node => {
            createPage({
                path: `/authors/${node.fullName.toLowerCase().replace(/ /g, '-')}`,
                component: authorTemplate,
                context: {
                    ...node
                },
            });
        });
    });
}