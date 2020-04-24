import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'



function Navbar(){
    return (
      <div className='nav-bar'>
         <ul className='links-container' >
          <li><Link className='nav-link' to='/'>Home</Link></li>
          <li><Link className='nav-link' to='/global'>Global Status</Link></li>
          <li><Link className='nav-link' to='/country'>Country Selection</Link></li>
        </ul>
      </div>
    )
  }
  
export default Navbar;