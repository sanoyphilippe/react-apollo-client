// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import React from "react";
import { render } from "react-dom";
import { Query } from "react-apollo";
import registerServiceWorker from './registerServiceWorker';
import config from './configuration/config';

import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: config.get('GRAPHQL_URI')
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
      <UsersProperties />
    </div>
  </ApolloProvider>
);

const UsersProperties = () => (
  <Query
    query={gql`
      {
        users {
          firstName
          lastName
          properties {
            city
            street
            rent
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.users.map(({id, firstName, lastName, properties }) => (
        <div key={id}>
          <p>{`${firstName} ${lastName}`}</p>
        </div>
      ));
    }}
  </Query>
);

render(<ApolloApp />, document.getElementById("root"));
registerServiceWorker();

client
  .query({
    query: gql`
      {
        users {
          firstName
          lastName
          properties {
            city
            street
            rent
          }
        }
      }
    `
  })
  .then(result => console.log(result));
