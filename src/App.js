import React, {Component } from 'react'
import './App.css'
import axios from 'axios'

class Countries extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      data: {},
      globalData: {},
      selectedCountry: {}
  
    }
  }
  
  componentDidMount() {
      axios.get(`https://api.covid19api.com/summary`).then(res => {
        this.setState({
          data: res.data,
         
        })
        console.log(this.state.data)
      
      
         
      ;
    }).catch(error => {
      console.log (error)
    })
  


  }

  render() { 
   
    return (
      <div>

  
      </div>
  )}
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
     < Countries />
      </header>
    </div>
  );
}

export default App;
