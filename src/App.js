import React, { Component } from 'react';
import Header from './Header';
import AgencyList from './AgencyList';
import 'react-table/react-table.css'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.tableData = this.getData();
  }

  //simulate data pull from API
  getData() {

    let data1 = [
      { name: 'Some Long Agency Name', agents: 6,  licenses:2222, licensesexp:21, policies:2222, policiesexp:100, states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 8,  licenses:2222, licensesexp:0,  policies:2222, policiesexp:0,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 12, licenses:2222, licensesexp:0,  policies:2222, policiesexp:90,  states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 2,  licenses:2222, licensesexp:14, policies:2222, policiesexp:10,  states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 1,  licenses:2222, licensesexp:0,  policies:2222, policiesexp:0,   states:5,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 4,  licenses:2222, licensesexp:0,  policies:2222, policiesexp:1,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 7,  licenses:2222, licensesexp:4,  policies:2222, policiesexp:0,   states:11,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 2,  licenses:2222, licensesexp:0,  policies:2222, policiesexp:0,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 2,  licenses:2222, licensesexp:0,  policies:2222, policiesexp:44,  states:0,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 7,  licenses:2222, licensesexp:13, policies:2222, policiesexp:0,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 3,  licenses:222,  licensesexp:0,  policies:2222, policiesexp:0,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 2,  licenses:222,  licensesexp:0,  policies:2222, policiesexp:0,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 2,  licenses:222,  licensesexp:0,  policies:2222, policiesexp:44,  states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 7,  licenses:222,  licensesexp:13, policies:2222, policiesexp:0,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 3,  licenses:22,   licensesexp:0,  policies:2222, policiesexp:0,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 3,  licenses:22,   licensesexp:0,  policies:2222, policiesexp:0,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      },
      { name: 'Some Long Agency Name', agents: 3,  licenses:22,   licensesexp:0,  policies:2222, policiesexp:0,   states:50,
        contactinfo:{
          address:'San Francisco, CA 88888',
          phone:'1-888-888-8888',
          email:'a@a.com'
        }
      }
    ];

    return data1;

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <AgencyList tableData={this.tableData}/>
      </div>
    );
  }
}

export default App;
