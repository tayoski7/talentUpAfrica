import React from 'react';
import bg from './images/landing.png'
import bg1 from './images/newlogo.svg'
import bg2 from './images/instagramlogo.jpg'
import bg3 from './images/facebooklogo.jpg'
import bg4 from './images/twitterlogo.jpg'
import bg5 from './images/linkedinlogo.jpg'
import './Flutter.css'

const Flutter = () => {
    return(
        <div>
            <div class='uppercontainer'>
                <div class='inside'>
                    <div class='landing'><img src={bg}/></div>
                        <div class='writeup'>
                            <div class='first'>
                                <p>Land a dream US remote job.</p>
                            </div>
                                <div class='second'>
                                    <p>Employers are always looking at our pool of talent for their next hire.</p>
                                </div>
                        </div>
                            <div class='btn'>
                                <a href='#'><button class='btn1'>Join Now</button></a>
                                <a href='#'><button class='btn2'>Search Jobs</button></a>
                            </div>
                        </div>

            </div>

         <div class='lowercontainer'>

            <div class='icons'>

                        <div class='newlogo'><img src={bg1}/></div>

                        <div class='logo'>
                            <div class='instagram'><img src={bg2}/></div>
                            <div class='facebook'><img src={bg3}/></div>
                            <div class='twitter'><img src={bg4}/></div>
                            <div class='linkedin'><img src={bg5}/></div>
                        </div>

                            <p>© Copyright 2020</p>


            </div>

            <div class='linkscontainer'>

                <div class='solutions'>
                    <p>Solutions</p>
                    <div class='set'>
                    <a href='#'>Join Talent Pool</a>
                    <a href='#'>Find Jobs</a>
                    <a href='#'>Talent Pool</a>
                    </div>
                </div>

                <div class='company'>
                    <p>Company</p>
                    <div class='set1'>
                    <a href='#'>About</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Terms of Service</a>
                    </div>
                </div>

                <div class='resources'>
                    <p>Resources</p>
                    <div class='set2'><a href='#'>Blog</a></div>
                </div>


            </div>

            </div>

        </div>
    )
}
export default Flutter