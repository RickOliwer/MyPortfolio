import Head from 'next/head'
import Fetcher from '../lib/fetcher';

import { ALL_POSTS } from '../lib/wordpress/api';

import Post from '../components/post';


export default function Home({allPosts}) {
  const posts = allPosts;
  
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
                    return <Post {...post}/>
                  })
                }
              </div>
            </div>
          </section>
    </>
  )
}

export async function getStaticProps(){
  const response = await Fetcher.query({query: ALL_POSTS})
  const allPosts = response.data.posts.edges;

  return {
    props: { allPosts },
    revalidate: 1,
  }
}

