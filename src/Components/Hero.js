import React from 'react'
import "./Hero.css"
import bg from './images/search.png'
function Hero(){
    return(
        <div class="heroContain">
            <h2> Land your dream job, <span class="orangeColor">home</span> and <span class="orangeColor">abroad</span> </h2>
            <p>We connect you with top companies hiring talented professionals in the <span class="orangeColor">US</span> and <span class="orangeColor">Africa</span></p>
            <div class="jobSearch">  
                <img src ={bg}></img>
                <input type="search" placeholder="job title or keyword" ></input>
                <button type="button">Search</button>
            </div>
        </div>
    )
}

export default Hero