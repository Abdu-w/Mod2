import React, {Fragment} from 'react';



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




  function FooterFiller(){
    return(
      <Fragment>
        <div className='footer-subs-container'>
          <div className='footer-subs'>
            <p>More news on covid-19</p>
  
            <input 
              className='email' 
              type="email" 
              name="email" 
              placeholder='email'
              />
          </div>
  
      
      </div>
   </Fragment>
    )}
  
export default Footer;