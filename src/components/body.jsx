/* eslint-disable react/prop-types */

// import { Outlet } from "react-router-dom";
import { TbDownload } from "react-icons/tb";
import About from "./about";
import Projects from "./projects";

export default function Body () {


    return (
      
        <div className=' relative mainbody scale-95 phoneLg:scale-100 -mt-28 phoneLg:mt-10  min-h-[90svh]'>
        
        {/* <Outlet /> */}
        <About />
        <Projects />
          {/* resume  */}
          <h6 className=" fixed opacity-0 bottom-10  right-5 laptop:bottom-20 laptop:right-10 p-3 laptop:scale-100  scale-[0.65] tablet:scale-75 rounded-full w-max cursor-pointer text-white bg-darkpink dark:bg-cyan-400 hover:bg-cyan-600 duration-500 z-30 ">
          <div className="flex relative   z-30  before:duration-00 before:content-['] hover:before:content-['Download_Resume'] before:text-sm before:z-0 before:hover:ring-2 before:rounded-lg before:w-0 hover:before:w-max before:absolute before:bottom-10 before:right-8  before:p-1 ">
            <TbDownload className="text-4xl z-30" />

          </div>
            {/* Download Resume */}
          </h6>
      </div>
      
      
    )
}