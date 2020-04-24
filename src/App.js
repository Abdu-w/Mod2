import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import GlobalContext from './components/GlobalContext'
import SingleCountry from './components/SingleCountry'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'



function App() {
  return (
    <div className="App">
      <GlobalContext>
        <BrowserRouter>
            <Navbar /> 

            <Switch>
              <Route path ='/global' component={HomePage} /> 
              <Route path ='/country' component={SingleCountry} />
            </Switch>
        </BrowserRouter> 
      </GlobalContext>
      < Footer />
    </div>               
    
  );
}

export default App;


