import React from 'react';
import './App.css';
import { withRouter, Route } from 'react-router-dom';
import Zipcode from './components/Zipcode';
import { getRest } from './services/api-helper';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      formData: {
        zipcode: ''
      }
    }

  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      formData: {
        [name]: value
      }
    })
  }


  handleSubmit = async (e) => {
    e.preventDefault();
    const restaurants = await getRest(this.state.formData.zipcode);
    this.setState({
      restaurants 
    })
    console.log(this.state)
  }

  async componentDidMount() {
    const restaurants = await getRest(this.state.restaurants);
    this.setState({
      restaurants
    })
  }


  render() {
    return (
      <div className="app">

        <Zipcode 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          restaurants={this.state.restaurants}
          formData={this.state.formData}
          />

      </div>
    );
  }
}

export default withRouter(App);
