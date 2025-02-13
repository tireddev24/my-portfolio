/* eslint-disable react/prop-types */

import projectsdata from "../data/projectsdata"


export default function Projects (props) {
  



    return (
        <>
       <div id='projects' className="  -mb-12 phoneLg:mb-10 phoneLg:my-10  mx-[10%] desktop:mx-[15%] flex flex-col tems-center">
          <section className=" relative"   >
          <p className="section-title">Projects</p>
            <div className=" -ml-4 phoneLg:ml-0 tablet:grid tablet:gap-4 tablet:grid-cols-2 laptop:grid-cols-[300px,250px] place-items-center desktop:grid-cols-3 mt-4 mb-10 desktop:gap-5 laptop:gap-10 "  >
           {projectsdata.map((proj, key) =>  
           (
          <div  key={key} className={` ${proj.class}   laptop:hover:translate-y-[-10px]  hover:z-30 z-20 duration-500 h-[250px] tablet:h-[300px] laptop:h-[400px] min-w-[400px] projects link font-bold   ml-0 relative`}  >
            <img src={proj.projectImage} 
            alt={props.alt} 
            className={`  ring-2 ring-darkpink dark:ring-cyan-950  m-7 mt-6 rounded-lg  h-[250px] tablet:h-[300px] laptop:h-[400px] w-[250px] tablet:w-[300px] laptop:w-[400px] hover:scale-[1.0]  duration-500 `}
            />
         
            <div  className={ `hover:backdrop-brightness-[45%] backdrop:textlight dark:hover:backdrop-brightness-[35%] opacity-0 hover:opacity-100 bg-transparent  h-[250px] tablet:h-[300px] laptop:h-[400px]  hover:h-[250px] tablet:hover:h-[300px] laptop:hover:h-[400px] w-[250px] tablet:w-[300px] laptop:w-[400px] absolute rounded-md max-h-[420px] bottom-0 tablet:-bottom-6  left-7 duration-500` } >
                <p className="text-center text-white text-md laptop:text-xl mt-[10%] laptop:mt-[10%] uppercase">{proj.projectName} </p>
                <p className="h-20 text-sm laptop:text-lg  mt-3 laptop:mt-5 text-center mx-auto w-[75%] text-white dark:text-white tracking-wider">{proj.description}</p>
                <div className=" mt-[25%] flex items-center justify-center mx-auto gap-3  laptop:gap-5 text-sm *:rounded-md *:p-2 text-textlight dark:text-textdark *:bg-bglight dark:*:bg-black">
                  <a href={proj.url}   className={`${proj.isLive? 'cursor-pointer' : ' cursor-not-allowed pointer-events-none opacity-70 text-gray-600' } ` }>View live site</a>
                  <a href={proj.github} className="cursor-pointer">View github</a>
                </div>
            </div>
          </div>
           
           )  ) 
           }
        
        </div>
    
          </section>
        </div>
        </>
      
    )
}