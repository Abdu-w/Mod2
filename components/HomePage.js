import React from 'react'
import { GlobalState } from './GlobalContext'
import CountryDataBoard from './CountryDataBoard'


function HomePage(){
    return(
    //pull the Global data straight from context and render it 
    //then pass in the data as props into a function 
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

  export default HomePage;
  
  