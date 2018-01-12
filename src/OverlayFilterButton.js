import React, {Component} from 'react';

export default class OverlayFilterButton extends Component {

  render() {
    return (
      <div className="filters_button clear">
        <div className="filters_button_label">
          <span className="filters_chosen">({this.props.count})</span> {this.props.label}
        </div>
        <div className="filter_button_icon">
          <img src="./images/icon_button_overlay.png" alt=""/>
        </div>
      </div>
    );
  }
}
