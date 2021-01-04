import React from 'react'
import { render } from 'react-dom'
import App from './App'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { URI, HASURA_SECRET } from './secret.js'

const client = new ApolloClient({
  uri: URI,
  headers: {
    'x-hasura-admin-secret': HASURA_SECRET
  }
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
