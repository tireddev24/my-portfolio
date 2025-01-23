/* eslint-disable react/prop-types */

import About from "./about";
import Projects from "./projects";

export default function Body () {


    return (
      
        <div className=' relative mainbody scale-95 phoneLg:scale-100 -mt-28 phoneLg:mt-10  min-h-[90svh]'>        
          <About />
          <Projects />
      </div>
      
    )
}