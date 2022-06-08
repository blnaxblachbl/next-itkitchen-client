import {
    ApolloClient,
    InMemoryCache,
    ApolloLink,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { setContext } from '@apollo/client/link/context'
import cookie from 'cookie'
import createUploadLink from "apollo-upload-client/public/createUploadLink.js"

const domain = 'http://localhost:4000'

export const host = process.env.NODE_ENV === 'production' ? domain : 'http://localhost:4000'
// export const host = domain

export let client

const isServer = typeof window === 'undefined'
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState

export const initApollo = (token = '', forceNew = false, nextHeaders = null) => {

    if (!client || forceNew) {
        const URL = !isServer ? `${host}/graphql` : 'http://localhost:4000/graphql'

        const uploadLink = createUploadLink({
            uri: URL,
            credentials: 'same-origin'
        })

        const authLink = setContext((_, { headers }) => {
            let _token = ''
            if (!isServer) {
                const { token } = cookie.parse(document.cookie)
                _token = token ? token : ''
            } else {
                _token = token
            }
            return {
                headers: {
                    ...headers,
                    ...nextHeaders,
                    authorization: 'Bearer ' + _token,
                }
            }
        })

        const errorLink = onError(({ graphQLErrors, networkError, forward, operation }) => {
            if (graphQLErrors) {
                graphQLErrors.map(async ({ message, locations, path }) => {
                    console.error(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    )
                })
            }
            if (networkError) console.error(`[Network error]: ${networkError}`)
        })

        const link = ApolloLink.from([errorLink, authLink, uploadLink])

        const apollo = new ApolloClient({
            ssrMode: isServer,
            link,
            cache: new InMemoryCache().restore(windowApolloState || {})
        })
        client = apollo
    }

    return client
}