import './App.css'

import Header from './components/header'
import Body from './components/body';
import Navbar from './components/navbar';
import Footer from './components/footer'
import { useEffect, useState } from 'react';

export default function App(){
    const [mode, setMode] = useState(false)

    function toggleDarkMode(){
        setMode(prevMode => !prevMode)
    }
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {

        window.addEventListener('resize', watchWidth )

        function watchWidth () {
            setWindowWidth(window.innerWidth)
            console.log(windowWidth)

        }
        // return () =>{
        //     removeEventListener('resize', watchWidth)
        //     console.log("clean")
        // }

    }, [windowWidth])
    
    const[isMenuClicked, setIsMenuClicked] = useState(false)
    
    function menuClicked () {
        setIsMenuClicked(prevMode => !prevMode)
    }

    return (
        <div className={mode?"container dark": "container"}>
        <Navbar
            toggle = {toggleDarkMode}
            darkmode = {mode}
            toggleMenu = {menuClicked}
            isMenuClicked = {isMenuClicked}

         />
        <Header
        
            darkmode = {mode}
            isMenuClicked = {isMenuClicked}
        
         />
        <Body

            darkmode = {mode}
            />
        <Footer

            darkmode = {mode}
            />




        </div>
    )


}