import React, { Component, createContext } from 'react'
import axios from 'axios'


// GlobalState setting up context 
export const GlobalState = createContext()

export default class  GlobalContext extends Component {
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
        //loop through array of countries and get the names uing .method
        countries: res.data.Countries.map(countryData => countryData.Country),
        // first obj in th api
        globalData: res.data.Global
      })
    ;
    }).catch(error => {
      console.log (error)
    })
  }

  selectCountry = (countryName) => {
    // filters arr: keeps/retuns items if conditional is true
    const countryArr = 
        this.state.data.Countries.filter(countryData => countryData.Country === countryName)
    // since it return an array, only need the first element 
    this.setState({
      selectedCountryData: countryArr[0]
    })
  }


  render() {
    // destructering the state for context 
    const context = {
      globalData: this.state.globalData, 
      countries: this.state.countries,
      selectedCountryData: this.state.selectedCountryData,
      selectCountry: this.selectCountry,
    }

    return (
      <div className='globalContext'>
        <GlobalState.Provider value={context}>
            { this.props.children }
        </GlobalState.Provider>
      </div>
  )}
}




