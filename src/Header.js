import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <div id="header" className="clear">
        <div className="header_main, clear">
          <div className="header_logo">
            <img src="./images/britecore_logo_650x99.png" alt=""/>
          </div>
          <div className="header_admin">
            <div className="admin_name">
              Super Big Carrier Co.
            </div>
            <div className="admin_portrait">
              <div>
                <img src="./images/logo_stateFarm_256x256.jpg" alt=""/>
              </div>
            </div>
          </div>
        </div>
        <div id="header_nav" className="clear">
          <ul className="nav_container, clear">
            <li id="header_nav_agencies">Agencies</li>
            <li id="header_nav_licenses">Licenses</li>
            <li id="header_nav_policies">Policies</li>
          </ul>
          <div className="header_bottom_bar"></div>
          <div className="header_nav_indicator">
            <div className="header_bottom_bar_activeLinkShell">
              <div className="header_bottom_bar_activeLink, arrow-down"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
