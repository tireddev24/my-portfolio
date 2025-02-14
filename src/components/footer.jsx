/* eslint-disable react/prop-types */

import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import data from '../data/data.jsx'
const linkclass = " tablet:p-2  px-1 text-4xl   rounded-md  tablet:-mr-1 z-30 duration-500  tablet:text-5xl wider_desktop:text-[4.5rem]"
 

 function Footer (){
    const links = [
        { link:'Email', data: data.email, icon: <SiGmail className={`${linkclass} text-red-500 ` }  />, color:'before:brightness-105 dark:before:brightness-100 before:bg-gradient-to-tr before:from-red-500 before:from-62% before:via-[#f2a60c] before:via-27% before:to-[#08851b]  *:hover:text-white ' },
        { link:'Whatsapp', data: data.whatsapp, icon: <BsWhatsapp className={`${linkclass}  text-green-500 `} />, color: 'before:bg-green-500 dark:before:bg-green-600 *:hover:text-white'  },
        { link:'Github', data: data.github, icon: <PiGithubLogoBold className={`${linkclass} text-[#2e4053]`} />, color: 'before:bg-gray-600 brightness-150 dark:before:bg-[#2e4053] *:hover:text-white' },
        { link:'LinkedIn', data: data.linkedin, icon: <FaLinkedinIn  className={`${linkclass} text-[#0077b5] `} />, color: 'before:bg-[#0077b5] *:hover:text-white'  },
    ]

    return (
        <>
        <footer  className=' appear py-2 pt-5 text-center duration-100 ease-linear border-t-2 border-[#8a045c] dark:border-darkText border-solid' id='contact'>
                <div className='tablet:mx-auto laptop:w-auto tablet: scale-90 tablet:w-[50%] laptop:mx-[0%]' >
            <div className='my-3  mb-1  *:tracking-wider flex items-center *:max-w-max gap-4 tablet:gap-2 justify-center tablet:items-start laptop:flex laptop:items-center laptop:justify-center tablet:grid tablet:grid-cols-2  laptop:gap-20'>
            {
                links.map((prop, key)=> 
                (   
                    
                        <a href={prop.data} key={key} target='_blank' className={`${prop.color}  z-30 tablet:p-0 before:rounded-lg tablet:before:rounded-3xl before:duration-300 before:z-0 before:border-1 before:h-[100%] before:absolute  before:w-[0%] before:hover:w-[100%] before:max-wmax  relative  border-1 cursor-pointer  duration-500 border-purple-700 rounded-md flex gap- items-center `}>
                        {prop.icon}
                        <p className={` ml-2 mr-2 text-xl z-50 duration-300 hidden tablet:block font-semibold wider_desktop:text-2xl`}>{prop.link}</p>
                        </a>                     
                    
                ))
            }
              </div>
            
              </div>  
          <small className='before:bg-gradient-to-r before:from-red-500 before:from-25% before:via-[#f2a60c] before:via-75% before:to-[#08851b]  tablet:text-[19px] text-black dark:text-slate-600 tracking-wide font-bold font-mono  '>&copy; 2025 TiredDev Development.</small>
        </footer>
        </>
    )
}

export default Footer

