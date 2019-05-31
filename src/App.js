import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Form from './components/Form/Form';
import Header from './components/Header/Header';


class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: [
      {
        name: '',
        price: '',
        image: ''
      },

    ]
  }

  this.getInventoryList = this.getInventoryList.bind(this);
}

  getInventoryList = (products) => {
    this.setState({ inventory: products })
  }

  // componentDidMount() {
  //   axios
  //       .get(``).then(( response ) => {
  //           console.log(response);
  //           this.setState({ track: response.data.results[0] })
  //       })
  // }


  render() {
  return (
    <div>
      <Header component={Header}/>

      <div className='main'>
        <div className='dashboard'>
          <Dashboard inventory={this.state.inventory} component={Dashboard}/>
        </div>

        <div className='form'>
          <Form component={Form}/>
        </div>
      </div>

      

    </div>
  );
}
}


export default App;
