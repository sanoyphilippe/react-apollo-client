import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <input type="text" id="searchInput"></input>
        </div>
        <div className="col-sm-2">
          <button className="btn btn-sm" onClick={this.props.onSearch}> Search </button>
        </div>
        <div className="col-sm-8">
        </div>
      </div>
    );
  }
}

export default SearchInput;
