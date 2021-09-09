import Head from 'next/head'
import { Client } from '../lib/client';
import { gql } from '@apollo/client';
import Post from '../components/post';


export default function Home({posts}) {
  console.log(posts);
  
  return (
    <>
      <Head>
        <title>Rick | Home</title>
        <meta name="keywords" content="rick"/>
      </Head>
          <section className="flex items-center md:h-full">
            <div class="container px-5 py-24 mx-auto">

              <div className=" sm:w-1/2 lg:w-1/3">
                <h1 className="m-2">Hello Home</h1>
              </div>

              <div className="flex flex-wrap m-2">
                {
                  posts.map(({node:post}) => {
                    console.log(post);
                    return <Post {...post}/>
                  })
                }
              </div>
            </div>
          </section>
    </>
  )
}

export const getStaticProps = async() => {
try {
  const response = await Client.query({
    query:gql`
    query GetAllPosts {
      posts {
        edges {
          node {
            title
            content
            excerpt
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }`
  })
  return {
    props:{
      posts:response.data.posts.edges

    }
  }
  console.log(response); 
} catch(error){

  console.log(error);
}
  
}

