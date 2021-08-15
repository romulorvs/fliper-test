import { ApolloClient, InMemoryCache, HttpLink, from } from '@apollo/client'

import { onError } from '@apollo/client/link/error'

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (process?.env.NODE_ENV !== 'development') return

  if (graphQLErrors) {
    graphQLErrors.map(({ message }) => {
      console.error('graphQLErrors: ', message)
    })
  }

  if (networkError) {
    console.error('networkError: ', networkError.message)
  }
})

const link = from([
  errorLink,
  new HttpLink({
    uri: process?.env.REACT_APP_GRAPHQL_URI,
    headers: {
      'x-hasura-admin-secret': process?.env.REACT_APP_GRAPHQL_KEY,
    },
  }),
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
})

export default client
