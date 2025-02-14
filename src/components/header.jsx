/* eslint-disable react/prop-types */
// import Navbar from './navbar'
import data from "../data/data";

import photo from "../assets/images/photo3.png"
import { FaLinkedinIn } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
// import { TbDownload } from "react-icons/tb";

function Header (props) {


    return (
    
           <header id='header' className="relative mt-[3em] phoneLg:mt-[6rem]  laptop:mt-[8rem] scale-100 " >
    
            <div className='header flex flex-col mx-[1%] laptop:mx-[6%] wide_desktop:mx-[0%] items-center wide_desktop:items-center   laptop:gap-5 wide_desktop:gap-20 desktop:flex-row p-3'>

                {/* image */}
                <img src={photo} className="header-photo dark:brightness-75 h-[20rem] w-[20rem]  tablet:h-[22rem] tablet:w-[20rem] laptop:w-[25rem] laptop:h-[30rem] desktop:w-[30rem]   desktop:h-full  rounded-[10%]  duration-500" />

                {/* info part */}
                <div className=" flex scale-[0.85] phoneLg:scale-100 flex-col justify-center items-center desktop:ml-20 duration-500">


                <div className=" flex items-center text-[35px] tablet:text-[50px] laptop:text-[60px] font-bold text-nowrap mb-1 rounded-md border-b-[2px]  border-darkpink dark:border-darkText ">
                <div>Hi, I&apos;m {data.firstName}</div>
                <div className="header-name-emoji pb-[2px] z-10 wave" >&#128075;&#127997; </div>
                 </div>

                <div className=" flex items-center uppercase font-bold text-[20px]">
                    <a href="https://en.m.wikipedia.org/wiki/Front-end_web_development" target="_blank">{data.role} </a>
                    <FaCode className=" text-5xl h-14 ml-[10px]" /> 
                </div>

                <div className="header-links scale-90 tablet:scale-100  duration-300 flex p-[10px] gap-8 border-0 text-lg font-semibold *:border-[1px] *:border-dashed *:border-transparent *:">

                    <div className=" flex items-center p-[8px] rounded-md gap-2  *:hover:scale-105 hover:bg-transparent bg-orange-500 *:hover:text-orange-500 hover:border-orange-500 text-white  dark:bg-[#ea5827] cursor-pointer duration-300 ease-in-out dark:hover:border-[#ea5827]  *:dark:hover:text-[#ea5827] ">
                        <SiGmail className="text-2xl"/>
                        <a href={`mailto:${data.email}`}
                        className="header-email-link" > Email </a>
                    </div>
                    <div className="flex items-center p-[8px] rounded-md gap-1 *:hover:scale-105 hover:bg-transparent text-white bg-[#0077b5] hover:text-[#0077b5] hover:border-[#0077b5] dark:bg-cyan-900 cursor-pointer duration-300 ease-in-out hover:dark:border-cyan-700 *:dark:hover:text-cyan-700 ">
                        <FaLinkedinIn className=" text-2xl"/> 
                        <a href={data.linkedin}
                        className="header-email-link" >LinkedIn</a>
                    </div>
        
                </div>
                </div>
                
            </div>
           </header>
        
    )
}

export default Header