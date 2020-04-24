
import React, {Component, createContext  } from 'react'
import './App.css'
import axios from 'axios'
export const GlobalState = createContext()

export default class  GlobalContext extends Component {
  state = {
    data: {},
    globalData: {},
    countries: [],
    selectedCountryData: {},
  }
  
  componentDidMount() {
    axios.get(`https://api.covid19api.com/summary-`).then(res => {
      this.setState({
        data: res.data,   
        countries: res.data.Countries.map(countryData => countryData.Country),
        globalData: res.data.Global
      })
    ;
    }).catch(error => {
      console.log (error)
    })
  }

  selectCountry = (countryName) => {
    const countryArr = 
        this.state.data.Countries.filter(countryData => countryData.Country === countryName)
    this.setState({
      selectedCountryData: countryArr[0]
    })
  }


  render() {
    const context = {
      globalData: this.state.globalData, 
      countries: this.state.countries,
      selectedCountryData: this.state.selectedCountryData,
      selectCountry: this.selectCountry,
    }

    return (
      <div className='App'>
        <GlobalState.Provider value={context}>
            { this.props.children }
        </GlobalState.Provider>
      </div>
  )}
}

const CountryDataBoard = ({countryData}) => (
  <React.Fragment>
    <p>TotalRecovered: {countryData.TotalRecovered}</p>
      <p>TotalConfirmed: {countryData.TotalConfirmed}</p>
      <p>TotalDeaths: {countryData.TotalDeaths}</p>
      <p>NewConfirmed: {countryData.NewConfirmed}</p>
      <p>NewRecovered: {countryData.NewRecovered}</p>
      <p>NewDeaths: {countryData.NewDeaths}</p>
  </React.Fragment>
)



function HomePage(){
  return(
    <GlobalState.Consumer>
     {(context) => (
       <React.Fragment>
          <h2>Global Stats</h2>
          <CountryDataBoard countryData={context.globalData} />
       </React.Fragment>
     )}
   </GlobalState.Consumer>
  )
}
class SingleCountry  extends Component{

  state ={
    nameOfCountry: '',
  }
  filterCountry = (country) => { 
    this.setState({
      nameOfCountry: country,
    })
  }

  render(){
    return( 
      <GlobalState.Consumer>
        {context => ( 
            <React.Fragment>

            <select 
               id="country"
               onChange={(e) => {
                this.filterCountry(e.target.value)
                 context.selectCountry(e.target.value)
               }} >
               <option>-</option>
               { 
                 
                 context.countries.map((countryName,index) => 
                   <option key={index} value={countryName}>{countryName}</option>
                 )
               }
             </select>
     
            
           </React.Fragment>
          
         
        )}
      </GlobalState.Consumer>
    )
  }
}








function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* < GlobalContext /> */}
        < HomePage />
      </header>
    </div>
  );
}

export default App;
