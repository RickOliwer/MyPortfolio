import { ApolloClient, InMemoryCache } from '@apollo/client'
const auth = Buffer.from(
    process.env.RP_GRAPHQL_AUTH_USER + ':' + process.env.RP_GRAPHQL_AUTH_PASS
).toString('base64')

const Fetcher = new ApolloClient({
    uri: process.env.RP_GRAPHQL_URI,
    headers: {
        Authorization: `Basic ${auth}`,
    },
    cache: new InMemoryCache()
})

// const WP_API = process.env.RP_GRAPHQL_URI;

// async function Fetcher(query, { variables } = {}){
//     const res = await fetch(WP_API, {
//         method: "POST",
//         headers: { "content-Type": "application/json" },
//         body: JSON.stringify({ query, variables }),
//     });

//     const json = await res.json();
//     return json;
// }

export default Fetcher;