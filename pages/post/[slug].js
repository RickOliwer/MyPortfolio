import Fetcher from '../../lib/fetcher';
import{GET_ALL_POSTS_WITH_SLUG, POST_BY_SLUG} from '../../lib/wordpress/api';
import {useRouter} from 'next/router';

const Post = ({postData}) => {
    const blogPost = postData.data;
    // const router = useRouter;
    // if(!router.isFallback && !blogPost?.slug){
    //     return <ErrorPage status={404}/>
    // }
    return (
        <div>

            <h1>{blogPost.title}</h1>

        </div>
    );
}
 
export default Post;

export async function getStaticPaths() {

    const response = await Fetcher.query({query: GET_ALL_POSTS_WITH_SLUG})
    const allPosts = response.data.posts.edges;
    console.log(allPosts)
    const paths = allPosts.map(({node:post}) => {
        return {
            params: {
                slug: post.slug
            }
        }
    })
    console.log(paths)
    return {
        paths: paths,
        fallback: false,
    }

}

export async function getStaticProps({params}) {
    const variables = {
        slug: params.slug,
        post:"SLUG",
        
    }

    const data = await Fetcher.query({query: POST_BY_SLUG, variables});
    return{
        props: {
            postData: data,
        }
    };
}