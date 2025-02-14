/* eslint-disable react/prop-types */

import Header from './components/header'
import Body from './components/body';
import Navbar from './components/navbar';
import Footer from './components/footer'
import { useEffect, useState } from 'react';


export default function App(){
    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')) || false ) 
    // console.log(mode)
    
    function toggleDarkMode(){
        setMode(prevMode => !prevMode)
    }
    
    useEffect(() => {    
        localStorage.setItem('mode', JSON.stringify(mode))
    },[mode])


    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    useEffect(() => {

        window.addEventListener('resize', watchWidth )

        function watchWidth () {
            setWindowWidth(window.innerWidth)
            // console.log(windowWidth)

        }

    }, [windowWidth])
    
    const[isMenuClicked, setIsMenuClicked] = useState(false)
    
    function menuClicked () {
        setIsMenuClicked(prevMode => !prevMode)
    }

    const [count, setCount] = useState(0)
    
    return (
        <div className='overflow-hidden    bg-red-100  dark:bg-slate-900 dark:text-white   ' >
        {/* <RouterProvider router={router}/> */}
        <Navbar 
            toggle = {toggleDarkMode}
            darkmode = {mode}
            toggleMenu = {menuClicked}
            isMenuClicked = {isMenuClicked}
            count = {count}
        />
        <Header
            darkmode = {mode}
            setCount = {setCount}
            />
        <Body />
        
        <Footer />
        </div>
    )


}