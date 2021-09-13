
import { ApolloClient, InMemoryCache } from '@apollo/client'
const auth = Buffer.from(
    process.env.RP_GRAPHQL_AUTH_USER + ':' + process.env.RP_GRAPHQL_AUTH_PASS
).toString('base64')

const Client = new ApolloClient({
    uri: process.env.RP_GRAPHQL_URI,
    headers: {
        Authorization: `Basic ${auth}`,
    },
    cache: new InMemoryCache()
})

export default Client;