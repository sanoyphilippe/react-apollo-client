import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <input type="text" id="searchInput"></input>
        </div>
        <div className="col-md-2">
          <button className="btn btn-sm btn-primary" onClick={this.props.onSearch}> Search </button>
        </div>
      </div>
    );
  }
}

export default SearchInput;
