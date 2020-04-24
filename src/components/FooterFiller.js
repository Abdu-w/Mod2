import React, {Fragment} from 'react'


function FooterFiller(){
    return(
      <Fragment>
        <div className='footer-subs-container'>
          <div className='footer-subs'>
            <p className='footer-filler-sub'>More news on covid-19</p>
  
            <input 
              className='email' 
              type="email" 
              name="email" 
              placeholder='email'
              />
          </div>
        <div></div>
      
      </div>
   </Fragment>
    )}
  
export default FooterFiller;