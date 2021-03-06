import React, { Component } from 'react'
import { GlobalState } from './GlobalContext'
import CountryDataBoard from './CountryDataBoard'


export default class SingleCountry  extends Component{

    state ={
      nameOfCountry: '',
    }
  
  
    // declaration taking in selected country and change state 
    filterCountry = (country) => { 
      this.setState({
        nameOfCountry: country,
      })
    }

    render(){
      return(
        // getting state from the context 
        <GlobalState.Consumer>
          {context => ( 
            <React.Fragment >
            <div className='single-country-body'>
             <select 
                className='slelect-button'
                id="country"
                onChange={(e) => {
                  // e.target.value ==> countryName ==> this changes state
                  this.filterCountry(e.target.value)
                  // use function from context to grab the name of country
                  context.selectCountry(e.target.value)
                }} >
                <option>-</option>
                { 
                  // map through the countries-obj grabbing all countries 
                  context.countries.map((countryName,index) => 
                    <option key={index} value={countryName}>{countryName}</option>
                  )
                }
              </select>
      
              { 
            // when the name of country is a name/true render the country board component passed in the data from conexts : dropdown = all country names
                this.state.nameOfCountry
                ? (
                  <div className='single-country-data'>
                    <h2>{this.state.nameOfCountry}</h2>
                    <CountryDataBoard  countryData={context.selectedCountryData} />
                  </div>
                )
                : <div className='slelect-button-title'>Select a counrty</div>
              } 
            </div>  
            </React.Fragment>
          )}
        </GlobalState.Consumer>
      )
    }
  }
  