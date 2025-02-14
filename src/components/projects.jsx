/* eslint-disable react/prop-types */

import projectsdata from "../data/projectsdata"


export default function Projects (props) {
  



    return (
        
       <div id='projects' className="  -mb-12 phoneLg:mb-10 phoneLg:my-10  mx-[10%] desktop:mx-[15%] flex flex-col item-center">
          <section className=""   >
          <p className="section-title  ">Projects</p>
            <div className="mx-[2%] wider_desktop:mx-[1%] relative  grid grid-cols-1 gap-10 tablet:gap- tablet:grid-cols-2 desktop:grid-cols-3 wider_desktop:grid-cols-4 my-6 mb-10 laptop:gap-20 place-items-center  justify-center"  >
           {projectsdata.map((proj, key) =>  
           (
          <div  key={key} className={` ${proj.class}hover:translate-y-[-8px]  hover:z-10 z-10 duration-500
           h-[230px] w-[250px]
           tablet:h-[190px] tablet:w-[200px]
          laptop:h-[270px]  laptop:w-[300px] 
          wider_desktop:h-[350px] wider_desktop:w-[350px]
           projects link font-bold  relative`}  >
            <img src={proj.projectImage} 
            alt={props.alt} 
            className={`  ring-2 ring-darkpink dark:ring-cyan-950  rounded-lg 
               h-[230px] w-[250px] tablet:h-[190px] tablet:w-[200px] laptop:h-[270px]  laptop:w-[300px] wider_desktop:h-[350px] wider_desktop:w-[350px]
              hover:scale-[1.0]  duration-500 `}
            />
            <div  className={ `absolute top-0 cursor-text hover:backdrop-brightness-[45%] backdrop:textlight dark:hover:backdrop-brightness-[35%] opacity-0 hover:opacity-100 
            h-[230px] w-[250px] tablet:h-[190px] tablet:w-[200px] laptop:h-[270px]  laptop:w-[300px] wider_desktop:h-[350px] wider_desktop:w-[350px]
              rounded-md  duration-500 z-50` } >
                <p className="text-center text-white text-md laptop:text-xl mt-[10%] uppercase">{proj.projectName} </p>
                <p className="h-10 desktop:h-12 text-[12px] laptop:text-md  mt-3 laptop:mt-5 text-center mx-auto w-[75%] text-white dark:text-white tracking-wider">{proj.description}</p>
                <div className=" mt-[25%] flex items-center justify-center mx-auto gap-3  laptop:gap-5 text-sm *:rounded-md *:p-2 text-textlight dark:text-textdark *:bg-bglight dark:*:bg-black">
                  <a href={proj.url}   className={`${proj.isLive? 'cursor-pointer' : ' cursor-not-allowed pointer-events-none opacity-70 text-gray-600' } ` }>View live site</a>
                  <a href={proj.github} className="cursor-pointer">View github</a>
                </div>
              </div>
            </div>
           
            ))
           }
        
        </div>
          </section>
           </div>
 
    )
}