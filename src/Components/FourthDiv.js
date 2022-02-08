import React from 'react'
import bg from './images/assessment.png'
import bg2 from './images/arrow.png'
import "./FourthDiv.css"
function FourthDiv(){
    return(
        <div class="fourthContain">
            <div class="fourthTextContain">
                <p class="bold">Showcase your talent by taking</p>
                <p class="bold">Our HR endorsed assessment</p>
                <p class="light">pass the online assessment once and for all</p>
                <div class="learnMore">
                    <p>LEARN MORE</p>
                    <img src={bg2}></img>
                </div>
            </div>
            <div class="imgContain">
            <img class="assessment"src={bg}></img>
            </div>
        </div>
    );
}


export default FourthDiv