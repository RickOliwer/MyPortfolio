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
export const GET_ALL_POSTS_WITH_SLUG = gql`query getSlugs{
    posts(first: 100){
        edges{
            node{
                slug
            }
        }
    }
}`;

// post by a slug display
export const POST_BY_SLUG = gql`query PostBySlug ($slug: String!){
    postBy(slug: $slug, idType: URI) {
        title
        slug
        date
        content
        featuredImage {
            node {
            sourceUrl(size: LARGE)
            }
        }
    }
    
  }
  `