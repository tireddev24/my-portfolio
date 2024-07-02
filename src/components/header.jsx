/* eslint-disable react/prop-types */
// import Navbar from './navbar'

import photo from "../images/photo.png"
import mail from '../assets/envelope.svg'
import codelight from '../assets/code-light.svg';
import codedark from '../assets/code-dark.svg'

function Header (props) {


    return (
        <>
           
            <div className={props.darkmode? 'header dark' : "header"}>

                <img src={photo} className="header-photo" />
                <div className="header-info">


                <p className="header-name">
                <div>Hi, I&apos;m Michael</div>
                {!props.isMenuClicked &&<div className="header-name-emoji" >
                 &#128075;&#127997; </div>} 
                 </p>

                {/* <div className="spinner"></div> */}

                <div className="header-role"><a href="https://en.m.wikipedia.org/wiki/Front-end_web_development" target="_blank">
                Frontend Developer </a><img className="header-role-icon"
                 src={props.darkmode? codelight : codedark}/> </div>

                <div className="header-links">

                    <div className="header-email">
                        <img src={mail} className="email-icon"/> 
                        <a href="mailto:michaelamao442@gmail.com"
                        className="header-email-link" > Email </a>
                    </div>
        
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Header