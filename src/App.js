
import React, {Component, createContext  } from 'react'
import './App.css'
import axios from 'axios'

class  GlobalContext  extends Component {
  state = {
    data: {},
    globalData: {},
    countries: [],
    selectedCountryData: {},
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
  selectCountry = (countryName) => {
        this.state.data.Countries.filter(countryData => countryData.Country === countryName)
    this.setState({
      selectedCountryData: countryArr[0]
    })
  }



  render() {
    render() 
      return (
        <div className='context'>
          <GlobalState.Provider value={context}>
              { this.props.children }
          </GlobalState.Provider>
        </div>
    )}
}










function App() {
  return (
    <div className="App">
      <header className="App-header">
        < GlobalContext />
      </header>
    </div>
  );
}

export default App;
