import React from 'react'
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import GlobalContext, { GlobalState } from './components/GlobalContext'
import CountryDataBoard from './components/CountryDataBoard'
import SingleCountry from './components/SingleCountry'
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GlobalContext>
          <BrowserRouter>
             
          </BrowserRouter> 
        </GlobalContext>
       < Footer />
     </header>
    </div>               
    
  );
}

export default App;


