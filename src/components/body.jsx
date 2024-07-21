/* eslint-disable react/prop-types */

import data from "../data/data";
import Contact from './contact';
import Project from "./project";

export default function Body (props) {


    return (
      
        <div className={props.darkmode? 'mainbody dark' : 'mainbody'}>
        <section className='mainbody-content about' >
        <h4 className='about title'> About </h4>
        <p className='about content'> I&apos;m 
           <b> {data[0].fullName}. </b> {data[0].about}
        
        </p>
        </section>

        <section className="mainbody-content interests">

        <h4 className='interests title'>Interests </h4>
        <div className='interests content' >
          <ol className="interest list" id="projects">
            <li>{data[0].interests[0]}</li>
            <li >{data[0].interests[1]}</li>
            <li >{data[0].interests[2]}</li>
          </ol>
                
        </div>
        
          </section>
          <section className="mainbody-content projects" >
          <Project 
                darkmode = {props.darkmode}
          />
          
          </section>

        <section className="mainbody-content stack">

        <b className='stack title'>Stack</b>
        <ul className='stack list'>
                  <li>HTML</li>
                  <li>CSS  </li>
                  <li id="contact">Javascript</li>
                  {/* <li>PHP</li> */}
                  
          </ul>
        </section>

          {/* <section className='mainbody-more'>

        <details>
          <summary className='more title'>Read more</summary>
          <p className='more content'>Credits to <a href="https://v2.scrimba.com/learn-react-c0e" target="_blank">Bob Ziroll</a></p>
          
        </details>
          </section> */}
          <section className="mainbody-content contact">
            <Contact />
            
          </section>
          {/* resume  */}
          {/* <h6 className="resume">
            Download Resume
          </h6> */}
      </div>
      
      
    )
}