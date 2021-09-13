import Client from '../../lib/client';
import{GET_ALL_POSTS, GET_POST_BY_SLUG} from '../../lib/wordpress/api';
import {useRouter} from 'next/router';
import Hero from '../../components/hero'
import parse from 'html-react-parser'

const Post = ({post}) => {
  //const blocks = JSON.parse(post?.blocksJSON)
 
    return (
        <div>
        
        <Hero {...post}/>
        <main className="w-4/5 m-auto main-content">
          {post.date && (<p>{post.date}</p>)}
          {post.excerpt && (<div className="my-5 excerpt">{parse(post.excerpt)}</div>)}
          {post.content && (<div>{parse(post.content)}</div>)}
        </main>
        </div>
    );
}
 
export default Post;

export async function getStaticPaths() {

    const response = await Client.query({query: GET_ALL_POSTS})
   console.log("data", response);
    const paths = response.data.posts.edges.map((edge) => {
      const node = edge.node
      const post = node
      console.log("edge", edge);
      return {
        params: {slug: post.slug}
      }
    })
    console.log("paths", paths);
      return {
        paths,
        fallback: false
      }
}

export async function getStaticProps({params}) {

    const {data} = await Client.query({
        query: GET_POST_BY_SLUG,
        variables: {slug: params.slug}
    })
    console.log("new data", data);
    
      return {
        props: {
          post: data?.postBy
        },
        revalidate: 300
      }
}
