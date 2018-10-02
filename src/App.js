import ApolloClient from "apollo-boost";
import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import SearchInput from './components/SearchInput';
import UsersProperties from './queries/UsersProperties';
import 'bootstrap/dist/css/bootstrap.css';

const GRAPHQL_URI = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_GRAPHQL_URI : process.env.REACT_APP_DEV_GRAPHQL_URI;
// setting up apollo client to connect to graphql server
const client = new ApolloClient({
  uri: GRAPHQL_URI
});

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      searchString: "",
    };
  }
  handleSearch = () => {
    // set search string value
    this.setState({ searchString: document.getElementById('searchInput').value })
  };
  render() {
    return (
      <div className="container">
        <ApolloProvider client = { client }>
          <div>
            <h1>Tworent</h1>
            <p>Welcome! Do you want Tworent? Get it? Two-rent :D</p>
            <SearchInput onSearch = { this.handleSearch } />
            <UsersProperties text = { this.state.searchString }/>
          </div>
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
