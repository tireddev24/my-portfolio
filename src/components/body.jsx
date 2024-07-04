/* eslint-disable react/prop-types */

import Projects from "./projects";
import projectsdata from "../data/projectsdata";

export default function Body (props) {

  const projects = projectsdata.map(proj => {
    return (
      <Projects
                key = {proj.id}
                projectName= {proj.projectName}
                projectImage= {proj.projectImage}
                url = {proj.url}
                darkmode = {props.darkmode}
             />
      )   
  }
  )

    return (
      
        <div className={props.darkmode? 'mainbody dark' : 'mainbody'}>
        <section className='mainbody-about' >
        <h4 className='about title'> About </h4>
        <p className='about content'> I&apos;m 
           <b> Michael Amao. </b> A 300 level software engineering student at Babcock University, Ilishan-Remo, Ogun State, Nigeria. I work with React JS. 
        
        </p>
        </section>

          <section className="mainbody-interests">

        <h4 className='interests title'>Interests </h4>
        <div className='interests content' >
          <ol className="interest-list" id="projects">
            <li>Frontend Development</li>
            <li >Backend Development</li>
            <li >Machine learning, AI Development</li>
          </ol>
                
        </div>
        
          </section>
          <section className="mainbody-projects" >
          <p className="projects title">Projects</p>
              {projects}
          
          </section>




        <section className="mainbody-stack">

        <b className='stack title'>Stack</b>
        <ul className='stack list'>
                  <li>HTML</li>
                  <li>CSS  </li>
                  <li>Javascript</li>
                  <li>PHP</li>
                  
          </ul>
        </section>

          <section className='mainbody-more'>

        <details>
          <summary className='more title'>Read more</summary>
          <p className='more content'>Credits to <a href="https://v2.scrimba.com/learn-react-c0e" target="_blank">Bob Ziroll</a></p>
          
        </details>
          </section>
      </div>
      
      
    )
}