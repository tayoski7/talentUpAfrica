import React from 'react'
import bg from './images/career.png'
import bg2 from './images/arrow.png'
import './FifthDiv.css'

function FifthDiv (){
    return(
        <div class="fifthContain">
            <div class="careerContain">
            <img  class="career"src={bg}></img>
            </div>
            <div class="fifthTextContain">
                <h1>Career coaching</h1>
                <p class="smallText">We offer periodic FREE career coaching to mid senior level managers</p>
                <p class="smallText">We help you review your career path, optimize your CV to land bigger</p>
                <p class="smallText">roles,prep you for interviews and negotiations</p>
                <div class="Learn">
                    <p>Learn more</p>
                    <img class="arr"src={bg2}></img>
                </div>
            </div>
        </div>
    );
}

export default FifthDiv