import Client from '../lib/client';
import{GET_ALL_PAGES, GET_PAGE_BY_URI} from '../lib/wordpress/api';
import {useRouter} from 'next/router';
import Hero from '../components/hero'
import parse from 'html-react-parser'

const Page = ({page}) => {
    return (
        <div>
            {page.title && (<h1>{parse(page.title)}</h1>)}
            {page.content && (<div>{parse(page.content)}</div>)}
        </div>
    );
}
 
export default Page;

export async function getStaticPaths() {
    const response = await Client.query({query: GET_ALL_PAGES})
    console.log("data", response);

    const paths = response.data.pages.edges.map((edge) => {
        const node = edge.node
        const page = node
        console.log("edge", edge);
        return {
            params: {slug: page.slug}
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
        query: GET_PAGE_BY_URI,
        variables: {slug: params.slug}
    })
    console.log("HELLO DATA", data);
    return{
        props:{
            page: data?.page
        }, 
        revalidate: 300
    }
}