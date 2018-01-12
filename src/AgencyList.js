import React, {Component} from 'react';
import ReactTable from 'react-table';
import Filters from './Filters';
import Footer from './Footer';
import AgencyListSubItem from './AgencyListSubItem';

export default class AgencyList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      filterOnClass:'filter_open',
      filterOffClass:'filter_closed',
      filterNowClass:'filter_closed',
      agencyListNarrowClass:'agency_list_narrow',
      agencyListWideClass:'agency_list_wide',
      agencyListNowClass:'agency_list_wide'
    }

    //so method can get class vars in scope
    this.click_filter = this.click_filter.bind(this);

  }

  //toggles right hand filter UI
  click_filter() {

    if (this.state.filterNowClass == this.state.filterOnClass) {
      this.setState({filterNowClass:this.state.filterOffClass});
      this.setState({agencyListNowClass:this.state.agencyListWideClass});
      return;
    }

    if (this.state.filterNowClass == this.state.filterOffClass) {
      this.setState({filterNowClass:this.state.filterOnClass});
      this.setState({agencyListNowClass:this.state.agencyListNarrowClass});
    }

  }

  componentDidMount() {
    //hack to fix that one stupid corner box
    document.getElementById("agencies_table_shell").firstChild.firstChild.firstChild.className += " bc_table_headerColumn";
  }

  render() {

    let data = this.props.tableData;

    //ReactTable configs
    const columns = [
    {
      Header: 'Name',
      accessor: 'name',
      headerClassName:'bc_table_headerColumn'
    },{
      Header: d => <span>#Agents<span className='red'> (Expired)</span></span>,
      accessor: 'agents',
      headerClassName:'bc_table_headerColumn',
      Cell: props => <span>{props.value}</span>
    },{
      Header: d => <span>#Licenses<span className='red'> (Expired)</span></span>,
      accessor: 'licenses',
      headerClassName:'bc_table_headerColumn',
      Cell: (rowInfo) => {return <span>{rowInfo.row.licenses}<span className='red'> ({rowInfo.row._original.licensesexp})</span></span>; }
    },{
      Header: d => <span>#Policies<span className='red'> (Expired)</span></span>,
      accessor: 'policies',
      headerClassName:'bc_table_headerColumn',
      Cell: (rowInfo) => {return <span>{rowInfo.row.policies}<span className='red'> ({rowInfo.row._original.policiesexp})</span></span>; }
    },{
      Header: props => <span>States</span>,
      accessor: 'states',
      headerClassName:'bc_table_headerColumn'
    }];

    return (
      <div id="body" className="clear">
        <div id="agencies_header" className="clear">
          <div className="agencies_header_title">
            Agencies
          </div>
          <div className="agencies_header_filters_nav" onClick={this.click_filter.bind(this)}>
            <img src="./images/ui_filters_icon_128x98.jpg" alt=""/>
            <div>Filters</div>
          </div>
        </div>
        <div id="agencies_body" className="clear">
          <div id="agencies_table_shell" className={this.state.agencyListNowClass}>
            <ReactTable
              className="react_table"
              data={data}
              columns={columns}
              getTheadGroupTrProps={
                (state) => {
                  console.log("state",state);
                }
              }
              SubComponent={(row) => {
                    return (
                        <AgencyListSubItem
                          email={row.original.contactinfo.email}
                          phone={row.original.contactinfo.phone}
                          address={row.original.contactinfo.address} />
                    );
                  }
                }
                style={{
                  height: "60vh"
                }}
                className="-highlight -striped"
              />
              <Footer/>
          </div>
          <div id="agencies_filter" className={this.state.filterNowClass}>
            <Filters/>
          </div>
        </div>
      </div>
    );
  }
}
