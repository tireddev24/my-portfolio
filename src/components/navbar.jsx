/* eslint-disable react/prop-types */
import reactlogo from '../assets/react.svg'
import sun from '../assets/sun.svg'
import moon from '../assets/moon.svg';
import '../App.css'
import { useState, useEffect } from 'react';

function Navbar(props){

    let width = window.innerWidth
    if(width > 1000 ){
        width = true
    }
    else {
        width = false
    }
    const [burgerClass, setBurgerClass]  = useState('burger-bar unclicked')
    const [menuClass, setMenuClass] = useState('menu hidden')


    useEffect(() => {
        
        if(props.isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass('burger-bar unclicked')
            setMenuClass("menu hidden")
    
        }
    }, [props.isMenuClicked])
    
        
        
        
        
        
        return (
            <>
            <div className={props.darkmode? "navbar dark" : 'navbar'}>
                  
                  {!width &&
                    <div className='hamburger'>

                <div  href=''  onClick={props.toggleMenu} className='burger-menu'>
                    <div className={burgerClass} ></div>
                    <div className={burgerClass} ></div>
                    <div className={burgerClass} ></div>
                </div>

                    </div>
                  }
                <div className={menuClass} onClick={props.toggleMenu}>
                <a href='#top' className='navbar-home'>Home</a>
                    <a href="#blog" className='navbar-blog'>Blog</a>
                    <a href="#projects" className='navbar-projects'>Projects</a>
                    <a href="#footer" className='navbar-contact'>Contact</a>
                    
                </div>

     
                <div className='navbar-title'>
                <img src={reactlogo} className='navbar-icon'/>
                <p className='navbar-title-text'>TiredDev</p>
                </div>

                
                
                {width && <div className='navbar-links'>
                    <a href='#top' className='navbar-home'>Home</a>
                    <a href="#blog" className='navbar-blog'>Blog</a>
                    <a href="#projects" className='navbar-projects'>Projects</a>
                    <a href="#footer" className='navbar-contact'>Contact</a>
                    
                </div>
                }
                <div className='navbar-mode'>
                 
                <img className='navbar-mode-icon .bounce' 
                    src={props.darkmode ? sun : moon} 
                    onClick={props.toggle}
                />  
                   

                </div>
                {/* <div className='navbar-time'>
                <div className='flip-time'>

                            <div className='flip-time-inner'>
                                <div className='flip-time-front'>{props.time}</div>
                                <div className='flip-time-back'>{props.date}</div>
                            </div>
                  </div>
                </div> */}
            </div>
        </>
    )
}

export default Navbar