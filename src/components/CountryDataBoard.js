import React from 'react'


// {countryData}  = props ===> destructure
// takes in data outputs it like below 
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
  


export default CountryDataBoard