import React from 'react';
import FooterFiller from './FooterFiller'



function Footer(){
    return (
      
      <div className='footer'>
         <  FooterFiller />
         <ul className='footer-container'>
          <li><p className='footer-links'>Check out</p></li>
          <li><a  className='footer-links' href="https://ourworldindata.org/coronavirus" >world data↗</a></li>
          <li><a  className='footer-links' href="https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/world-map.html" >world map↗</a></li>
          <li><a  className='footer-links'href="https://www.cdc.gov/">cdc↗</a></li>
        </ul>

        <ul className='footer-filler'>
          <li className='footer-links'>About</li>
          <li className='footer-links'>Stories</li>
          <li className='footer-links'>Press</li>
          <li className='footer-links'>Latest News</li>
          <li className='footer-links'>Treatments</li>
        </ul>
      </div>
    )
  }




  
export default Footer;