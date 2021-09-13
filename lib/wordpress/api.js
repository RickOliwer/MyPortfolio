// grab the first 20 posts
import { gql } from '@apollo/client';
export const ALL_POSTS = gql`query AllPosts {
    posts(first: 20, where: {orderby: {field: DATE, order: DESC}}){
        edges{
            node {
                id
                date
                title
                slug
                excerpt
                postContent {
                  projectImage {
                    mediaItemUrl
                  }
                  projectText
                  projectTitle
                }
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
            }
        }
        
    }
}`;

// get all slugs from static single pages 
export const GET_ALL_POSTS = gql`query AllPostsQuery{
    posts{
        edges{
            node{
                slug
            }
        }
    }
}`

// post by a slug display
export const GET_POST_BY_SLUG = gql`query PostQuery($slug: String!) {
  postBy(slug: $slug) {
        title
        id
        date
        content
        slug
        excerpt
        featuredImage {
        node {
            sourceUrl(size: LARGE)

        }
    }
  }
}
`
// get all uri from static pages
export const GET_ALL_PAGES = gql`query AllPagesQuery{
    pages {
        edges {
          node {
            uri
            slug
          }
        }
      }
    
}`

export const GET_PAGE_BY_URI = gql`query PageQuery($slug: ID!){
        page(id: $slug, idType: URI) {
          date
          content
          featuredImage {
            node {
              mediaItemUrl
            }
          }
          title
          uri
          slug
        }
}`
