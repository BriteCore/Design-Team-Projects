import React, {Component} from 'react';

export default class Footer extends Component {

  render() {
    return (
      <div id="footer">
        <p>
          <span className="site-address">BriteCore, 2305 South Blackman Road, Building A Suite 200, Springfield, MO, 65809</span>
        </p>
        <p>
          <span rel="tel" className="site-phone">417-851-1289</span>
          <span> <a href="mailto:info@britecore.com" className="site-email">info@britecore.com</a></span>
        </p>
      </div>
    );
  }
}
