import React, {Component} from 'react';

export default class AgencyListSubItem extends Component {

  render() {
    return (
      <div className="agency_item_detail">
        <div className="agency_item_detail_address">{this.props.address}</div>
        <div className="agency_item_detail_phone_email">
          <span className="agency_item_inline_phone">{this.props.phone}</span> |
          <span className="agency_item_inline_email"> <a href={"mailto:"+this.props.email}>email</a></span>
        </div>
        <div className="agency_item_inline_edit">
          <a href="#">Edit Agency</a>
        </div>
      </div>
    );
  }
}
