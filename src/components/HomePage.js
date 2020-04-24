import React from 'react'
import { GlobalState } from './GlobalContext'
import CountryDataBoard from './CountryDataBoard'
import { BrowserRouter, Route, Switch,Link} from 'react-router-dom'


function HomePage(){
    return(
    //pull the Global data straight from context and render it 
    //then pass in the data as props into a function 
     <div className='global-data'>
      <GlobalState.Consumer>
       {(context) => (
         <React.Fragment>
            <h2>Global Stats</h2>
            <CountryDataBoard countryData={context.globalData} />
         </React.Fragment>
       )}
     </GlobalState.Consumer>
    </div>
    )
  }

  export default HomePage;
  
  