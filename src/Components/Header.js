import React from 'react'
import "./Header.css"
import logo_black from './images/logo_black.png'
    const Header = () => {
        return(
            <div class="navContain">
                <div class="logo-header">
                   <img src={logo_black}></img>
                </div>
                <div class="navs">
                    <a class="he" href='#'>Find Job</a>
                    <a  class="he" href='#'>Coaching</a>
                    <a class="he" href='#'>Sign in</a>
                    <a class="employers" href='#'> For Employers</a>
                </div>
            </div>
            
        )
    }

    export default Header