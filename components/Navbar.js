import React from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'



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
  
export default Navbar;