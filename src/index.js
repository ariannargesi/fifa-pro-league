import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom"

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'

import App from "./App";
import ReduxProvider from './redux/index'

import "./index.css";
import "./custom.css";

const httpLink = createHttpLink({
  uri: 'https://fpc-api.com/'
  //uri: 'http://localhost:4000/'
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const user = JSON.parse(localStorage.getItem('user'));
  const token = user ? user.token : "";
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <ReduxProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ReduxProvider>
  </Router>,
  root
);
