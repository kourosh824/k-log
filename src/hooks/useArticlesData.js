import { useStaticQuery, graphql } from "gatsby";

const useArticlesData = () => {
    return useStaticQuery(graphql`
        query {
            allContentfulArticle {
                nodes {
                    title
                    image {
                        gatsbyImageData(width: 200)
                    }
                    body {
                        raw
                    }
                }
            }
        }
    `).allContentfulArticle.nodes;
}

export default useArticlesData;