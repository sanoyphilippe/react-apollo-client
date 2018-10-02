import gql from "graphql-tag";
import React from 'react';
import { Query } from "react-apollo";

// query returning all users or all properties matching user input string
const UsersProperties = (props) => {
  if (props.text && props.text.length > 0) {
    return (
    <Query
      variables={props}
      query={gql`
        query User($text: String!){
          users(text: $text) {
            id
            firstName
            lastName
            properties {
              id
              city
              street
              rent
              zip
              state
            }
          }
          properties(text: $text) {
            id
            city
            street
            rent
            zip
            state
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        // remove header when no user is found
        const userHeader = data.users.length > 0 ? <h2 key="user">Users</h2> : null;
        // remove header when no property is found
        const propertyHeader = data.properties.length > 0 ? <h2 key="property">Properties</h2> : null;
        // list of users that match user's input
        const users = (
          <ul key="userList" className="list-group">
          {data.users.map((user) => (
            <div key={user.id}>
              <li className="list-group-item">
                { `${user.firstName} ${user.lastName}` }
                { user.properties && user.properties.length >= 0 ? (
                  <React.Fragment>
                  <div className="row">
                    <div className="col-md-3">
                      <h5>
                        {`${user.firstName}'s`} Properties
                        &nbsp;<span className="badge badge-primary badge-pill">{user.properties.length}</span>
                      </h5>
                    </div>
                  </div>
                  <ul className="list-group list-group-flush">
                    {user.properties && user.properties.map((property) => (
                      <li key={property.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {`${property.city} ${property.street} ${property.rent}`}
                      </li>
                    ))}
                  </ul>
                  </React.Fragment>
                ) : <p>{`${user.firstName}`} has no properties</p>
                }
              </li>
            </div>
          ))}
        </ul>
        )
        // list of properties that match user's input
        const properties = (
          <ul key="propertyList" className="list-group">
            {data.properties.map((property) => (
              <div key={property.id}>
                  <li className="list-group-item">
                    <div className="row">
                      Address: {`${property.street} ${property.city} ${property.state} ${property.zip}`}
                    </div>
                    <div className="row">
                      Rent: {`${property.rent}`}
                    </div>
                  </li>
              </div>
            ))}
          </ul>
        );
        // place all dom parts in an array
        const dom = [userHeader, users, propertyHeader, properties]
        return dom;
      }}
    </Query>
    )
  }
  return null;
};

export default UsersProperties;
