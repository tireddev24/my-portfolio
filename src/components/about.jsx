/* eslint-disable react/prop-types */
import data from "../data/data"; 

function About(){


    return (
        <>
        <div id='about' className=" my-10  text-[14px] tablet:text-[17px] flex flex-col mx-[10%] desktop:mx-[15%]  desktop:items-start">
             <section className='mainbody-content about ' >
        <h4 className='section-title  '> About </h4>
        <p className='content ml-5   mt-3  wide:max-w-[90%] '> I&apos;m 
           <b className="scale-70 "> {data.fullName}. </b> {data.about}
        </p>
        </section>

        <section className="mt-5 interests">

        <h4 className='section-title appear'>Interests </h4>
        <div className='content ml-5 mt-3' >
          <ol className="list  list-inside">
            <li>{data.interests[0]}</li>
            <li >{data.interests[1]}</li>
            <li >{data.interests[2]}</li>
          </ol>
                
        </div>
        
          </section>
          <section className=" mt-5 stack appear">

      <b className='section-title '>Technologies</b>
    <ul className='stack list list-disc list-inside ml-5  mt-4 font-semibold *:marker:text-darkpink *:dark:marker:text-darkText drop-shadow-xl drop-shadow-darkpink'>
          <li>HTML</li>
          <li>CSS</li>
          <li >Javascript</li>
          <li>React JS</li>
          <li >Tailwind CSS</li>
      </ul>
      </section>
      
      <section className=" mt-5 appear">
      <b className='section-title '>Skills</b>
      <ul className='stack list list-disc list-inside ml-5 mt-4  *:marker:text-darkpink *:dark:marker:text-darkText drop-shadow-xl drop-shadow-darkpink'>
          <li>Converting elegant designs to fully functional and responsive user interfaces.</li>
          
      </ul>

      </section>


</div>
</>
    )
}

export default About