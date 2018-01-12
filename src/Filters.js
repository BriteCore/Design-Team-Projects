import React, {Component} from 'react';
import OverlayFilterButton from './OverlayFilterButton';
import FilterRadioButton from './FilterRadioButton';
import FilterSearch from './FilterSearch';

export default class Filters extends Component {

  render() {
    return (
      <div id="Filters">

        <div className="filters_section">
          <FilterSearch/>
        </div>

        <div className="filters_section filters_policies">
          <h1>Policies</h1>
          <OverlayFilterButton count="2" label="Show with these Policies"/>
          <div className="filters_checkBoxContainer clear">
            <FilterRadioButton label="Show Expired"/>
            <FilterRadioButton label="Show Non-Expired"/>
          </div>
        </div>

        <div className="filters_section filters_licenses">
          <h1>Licenses</h1>
          <OverlayFilterButton count="4" label="Show with these Licenses"/>
          <div className="filters_checkBoxContainer clear">
            <FilterRadioButton label="Show Expired"/>
            <FilterRadioButton label="Show Non-Expired"/>
          </div>
        </div>

        <div className="filters_section">
          <h1>States</h1>
          <div className="filters_checkBoxContainer clear">
            <div className="state_row clear">
              <FilterRadioButton label="AL"/>
              <FilterRadioButton label="HI"/>
              <FilterRadioButton label="MI"/>
              <FilterRadioButton label="NC"/>
              <FilterRadioButton label="UT"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="AK"/>
              <FilterRadioButton label="ID"/>
              <FilterRadioButton label="MN"/>
              <FilterRadioButton label="ND"/>
              <FilterRadioButton label="VT"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="AZ"/>
              <FilterRadioButton label="IL"/>
              <FilterRadioButton label="MS"/>
              <FilterRadioButton label="OH"/>
              <FilterRadioButton label="VA"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="AR"/>
              <FilterRadioButton label="IN"/>
              <FilterRadioButton label="MO"/>
              <FilterRadioButton label="OK"/>
              <FilterRadioButton label="WA"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="CA"/>
              <FilterRadioButton label="IA"/>
              <FilterRadioButton label="MT"/>
              <FilterRadioButton label="OR"/>
              <FilterRadioButton label="WV"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="CO"/>
              <FilterRadioButton label="KS"/>
              <FilterRadioButton label="NE"/>
              <FilterRadioButton label="PA"/>
              <FilterRadioButton label="WI"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="CT"/>
              <FilterRadioButton label="KY"/>
              <FilterRadioButton label="NV"/>
              <FilterRadioButton label="RI"/>
              <FilterRadioButton label="WY"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="DE"/>
              <FilterRadioButton label="LA"/>
              <FilterRadioButton label="NH"/>
              <FilterRadioButton label="SC"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="DC"/>
              <FilterRadioButton label="ME"/>
              <FilterRadioButton label="NJ"/>
              <FilterRadioButton label="SD"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="FL"/>
              <FilterRadioButton label="MD"/>
              <FilterRadioButton label="NM"/>
              <FilterRadioButton label="TN"/>
            </div>
            <div className="state_row clear">
              <FilterRadioButton label="GA"/>
              <FilterRadioButton label="MA"/>
              <FilterRadioButton label="NY"/>
              <FilterRadioButton label="TX"/>
            </div>

          </div>
        </div>

      </div>
    );
  }
}
