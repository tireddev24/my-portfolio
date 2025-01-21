/* eslint-disable react/prop-types */

import { BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { PiGithubLogoBold } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
const linkclass = " tablet:p-2 tablet:h-14  px-1 text-4xl tablet:w-16 rounded-md  tablet:-mr-1 z-30 duration-500  tablet:text-5xl"
 

 function Footer (){
    const links = [
        { link:'Email', data: 'mailto:michaelamao442@gmail.com',icon: <SiGmail className={`${linkclass} text-red-500 ` }  />, color:' before:bg-gradient-to-tr before:from-red-500 before:from-62% before:via-[#f2a60c] before:via-27% before:to-[#08851b]  *:hover:text-white ' },
        { link:'Whatsapp', data: 'wa.me/+2348085958442', icon: <BsWhatsapp className={`${linkclass}  text-green-500 `} />, color: 'before:bg-green-500 dark:before:bg-green-600 *:hover:text-white'  },
        { link:'Github', data: 'https://github.com/mich-demo23', icon: <PiGithubLogoBold className={`${linkclass} text-[#2e4053]`} />, color: 'before:bg-gray-600 dark:before:bg-[#2e4053] *:hover:text-white' },
        { link:'LinkedIn', data: 'https://www.linkedin.com/in/michael-amao', icon: <FaLinkedinIn  className={`${linkclass} text-[#0077b5] `} />, color: 'before:bg-[#0077b5] *:hover:text-white'  },
    ]

    return (
        <>
        <footer  className=' appear py-2 pt-5 text-center duration-100 ease-linear border-t-2 border-[#8a045c] dark:border-darkText border-solid' id='contact'>

            <h4 className="uppercase text-sm tablet:text-xl font-bold w-max border-b-2 border-solid border-darkpink dark:border-cyan-400  rounded-md tablet:p-2 pb-1 ml-[20%] ">Let&apos;s connect </h4>
            <div className='tablet:mx-auto laptop:w-auto tablet: scale-90 tablet:w-[50%] laptop:mx-[0%]' >
            <div className='my-3  mb-1 flex items-center gap-4 tablet:gap-2 justify-center tablet:items-start laptop:flex laptop:items-center laptop:justify-center tablet:grid tablet:grid-cols-2  laptop:gap-20'>
            {
                links.map((prop, key)=> 
                (   
                    
                        <a href={prop.data} key={key} target='_blank' className={`${prop.color} before:rounded-3xl before:duration-500 before:z-0 before:border-1 before:h-[100%] before:absolute  before:w-[0%] before:hover:w-[100%]  relative  border-1 cursor-pointer  duration-500 border-purple-700 rounded-md flex gap- items-center `}>
                        {prop.icon}
                        <p className={`${prop.text} mr-2 text-xl z-30 hidden tablet:block font-semibold`}>{prop.link}</p>
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

//#3e65cf,#c71610,#f2a60c,#3b60c4,#08851b