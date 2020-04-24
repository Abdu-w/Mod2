
import React, {Component, createContext  } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'


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
    
            { 
              this.state.nameOfCountry
              ? (
                <div>
                  <h2>{this.state.nameOfCountry}</h2>
                  <CountryDataBoard countryData={context.selectedCountryData} />
                </div>
              )
              : <div>Select a counrty</div>
            } 
          </React.Fragment>
        )}
      </GlobalState.Consumer>
    )
  }
}

function Navbar(){
  return (
    <div className='nav'>
       <ul>
       <li><Link to='/global'>Global Status</Link></li>
       <li><Link to='/country'>Country Selection</Link></li>
        </ul>
    </div>
  )
}






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter> 
        {/* < GlobalContext /> */}
        < HomePage />
        < SingleCountry/>
        <Navbar />
        <Switch>
          <Route path ='/global' component={HomePage} /> 
          <Route path ='/country' component={SingleCountry} />

        </Switch>
        
        
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
