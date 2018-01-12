import React, {Component} from 'react';

export default class FilterRadioButton extends Component {

  render() {
    return (
      <div className="filter_radio">
        <input type="checkbox" name="site_name"/>{this.props.label}
      </div>
    );
  }
}
