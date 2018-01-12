import React, {Component} from 'react';

export default class FilterSearch extends Component {

  render() {
    return (
      <div className="filter_search">
        <input type="text" placeholder="Search" name="filter_search_field"/>
        <img src="./images/icon_search_21x21.png" alt=""/>
      </div>
    );
  }
}
