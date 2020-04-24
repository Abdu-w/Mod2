import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'



function Navbar(){
    return (
      <div className='nav-bar'>
         <ul className='links-container' >
          <li className='golbal-link'><Link to='/global'>Global Status</Link></li>
          <li className='country-link'><Link to='/country'>Country Selection</Link></li>
        </ul>
      </div>
    )
  }
  
export default Navbar;