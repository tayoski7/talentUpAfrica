import React from 'react'
import "./FirstDIV.css"

const Hero = () => {

    return(
        <div className= "Body">
    
           <div className= "heading"> <h5> Recently posted jobs</h5> </div>
           <div className= "bnbarr">
              <a href="#"><div className="boxes">
                    <img src={require('./images/prudential2.png')} className="logohead"/>
                    
                       
                    <div className= "lefttext">
                    <p className='fin'>Financial Sales Advisors</p>
                    <p className="pru">Prudential Zenith Life Insurance</p>
                    <p className="lag">Lagos</p> 
                    <button className="days">5 days ago</button>
                     <button className="app">APPLY</button>
                     
                    </div>
                        
                 </div>
                 </a> 

            <a href="#"> <div className="boxes">
               <p className="logohead">
                    D
                    </p>
                       
                    <div className= "lefttext">
                    <p className='fin'>Frontend Developer</p>
                    <p className="pru">Drugstoc E-Hub Nigeria Limited</p>
                    <p className="lag">Lagos</p>
                    <button className="days">5 days ago</button>
                     <button className="app">APPLY</button>  
                     </div>
                </div>
                </a>

                <a href="#"><div className="boxes">
               <p className="logohead">
                    D
                    </p>
                       
                    <div className= "lefttext">
                    <p className='fin'>Backend Developer</p>
                    <p className="pru">Drugstoc E-Hub Nigeria Limited</p>
                    <p className="lag">Lagos</p>
                    <button className="days">5 days ago</button>
                     <button className="app">APPLY</button> 
                     </div>
               </div>
               </a>
           </div>


           <div className= "bnbar02">

           <a href="#"><div className="boxes">
           <img src={require('./images/company.jpg')} className="logohead"/>
                       
                    <div className= "lefttext">
                    <p className='fin'>Programmer</p>
                    <p className="pru">nol</p>
                    <p className="dot">.</p>
                    <button className="days">4 days ago</button>
                     <button className="app">APPLY</button> 
                     </div>
               </div>
               </a>

               <a href="#"><div className="boxes">
               <img src={require('./images/kobo.png')} className="logohead"/>
                       
                    <div className= "lefttext">
                    <p className='fin'>Backend Engineer</p>
                    <p className="pru">Kobo 360 (Kobo Logistics Limited</p>
                    <p className="lag">Lagos</p>
                    <button className="days">5 months ago</button>
                     <button className="app">APPLY</button>  
                     </div>
                </div>
                </a>

                <a href="#"><div className="boxes">
                <img src={require('./images/reliance2.jpeg')} className="logohead"/>
                       
                    <div className= "lefttext">
                    <p className='fin'>Influencer & Community Manager</p>
                    <p className="pru">Reliance HMO Limited</p>
                    <p className="lag">Lagos</p>
                    <button className="days">5 months ago</button>
                     <button className="app">APPLY</button>
                     </div>
               </div>
               </a>
           </div>

           <div className="heading02"> <h5 className="h5bn"> Explore US-based jobs</h5></div>
           <div className= "bnbar03">

           <a href="#"><div className="boxes">
           <img src={require('./images/company.jpg')} className="logohead"/>
                       
                    <div className= "lefttext">
                    <p className='fin'>IOS Mobile Developer</p>
                    <p className="pru">TUA Nigeria Inter-Global Hiring Limited</p>
                    <p className="dot">.</p>
                    <button className="days">14 days ago</button>
                     <button className="app">APPLY</button>
                     </div>
                </div>
                </a>

             </div>

             <div className="explore">
             <a href="#"><p className="expbn"> EXPLORE ALL JOBS</p></a>
             </div>

             <div className="chatbn">
                  <a href="#"> <img src={require('./images/Chaticon.png')} className="chatbut"/> </a>
             </div>
   
  </div>
          

    )
}

export default Hero