import React from 'react'
import  "./Seconddiv.css"
import Reliance from './images/Reliance.jpg'
import fairmoney from './images/fairmoney.jpg'
import elalan from './images/elalan.png'
import chris from './images/chris.png'
import woman from './images/woman.jpg'
import sbc from './images/sbc.jpg'
import gbfoods from './images/gbfoods.png'
import zercom from './images/zercom.jpg'
import arrow from './images/arrow.png'
import talent from './images/talent.png'

const Seconddiv = () => {
    return(
        <div class="secondContain">
            <div className='Words'><p>Companies recruiting from our Talent list</p></div>
            <div className='logos'>
                <img src={Reliance} alt='Reliance' width='180px' height='100px'/>
                <img src={fairmoney} alt='fairmoney' width='180px' height='100px'/>
                <img src={elalan} alt='elalan' width='180px' height='100px'/>
                <img src={chris} alt='chris' width='180px' height='80px'/>
            </div>
            <div className='logos2'>
            <img src={woman} alt='woman' width='180px' height='100px'/>
                <img src={sbc} alt='sbc' width='180px' height='100px'/>
                <img src={gbfoods} alt='gbfoods' width='180px' height='100px'/>
                <img src={zercom} alt='zercom' width='180px' height='80px'/>
            </div>
            <div className='Words2'><p>Let's help you stand out</p></div>
            <div className='notes'>
                <div class="note-left"> 
                    <p className='note1'>Join our Talent list</p>
                    <p className='note2'>Create your professional profile by uploading your CV and</p>
                    <p className='note3'>filing a profile form</p>
                    <div class="note4-contain">
                        <p className='note4'>JOIN NOW </p>
                        <img className='arrow' src={arrow} alt='arrow' /*width='20px' height='10px'*//>
                    </div>
                </div>
                <div class="note-right">
                    <img className='list' src={talent} alt='talent' /*width='280px' height='200px'*//>
                </div>
            </div>
        </div>
    );
}


 export default Seconddiv;