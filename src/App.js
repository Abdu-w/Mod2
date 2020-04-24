
import React, {Component } from 'react'
import './App.css'
import axios from 'axios'

class Countries extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      data: {},
      globalData: {},
      countries: [],
      selectedCountry: {}
    }
  }
  
  componentDidMount() {
      axios.get(`https://api.covid19api.com/summary`).then(res => {
        this.setState({
          data: res.data,
          countries: res.data.Countries.map(c => c.Country),
          globalData: res.data.Global
        })
        console.log(this.state.data)
        // this.state.data.Countries.map((count, id) => {
        //   console.log(this.state.data.Countries[id].Country)
        //   })
      
         
      ;
    }).catch(error => {
      console.log (error)
    })
  }
  changeCountry = (e) => {
    const country = this.state.data.Countries.filter(c => c.Country === e.target.value)
    this.setState({
      selectedCountry: country[0]
    })
  }



  render() {
    console.log(this.state)
    const { globalData } = this.state

    console.log(this.state)
    return (
      <div className='App'>
        <h1>hello</h1>
        <div>
          <h2>Global</h2>
          <p>NewConfirmed: {globalData.NewConfirmed}</p>
          <p>TotalConfirmed: {globalData.TotalConfirmed}</p>
          <p>NewDeaths: {globalData.NewDeaths}</p>
          <p>TotalDeaths: {globalData.TotalDeaths}</p>
          <p>NewRecovered: {globalData.NewRecovered}</p>
          <p>TotalRecovered: {globalData.TotalRecovered}</p>
          
       
        </div>
        
        <select
        id="country"
        onChange={}>  
          <option>-</option> 
          { countries.map(c => <option key={c.CountryCode} value={c}>{c}</option> )}

        </select>
     
      </div>
  )}
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countries />
      </header>
    </div>
  );
}

export default App;
