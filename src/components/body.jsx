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
        <section className='mainbody-about' id="blog">
        <h4 className='mainbody-about-title'> About </h4>
        <p className='mainbody-about-content'> I&apos;m 
           <b> Michael Amao. </b> A 300 level software engineering student at Babcock University, Ilishan-Remo, Ogun State, Nigeria. 
        
        </p>
        </section>

          <section className="mainbody-interests">

        <h4 className='mainbody-interests-title'>Interests </h4>
        <div className='mainbody-interests-content' >
          <ol className="interest-list">
            <li>Frontend Development</li>
            <li>Backend Development</li>
            <li>Machine learning, AI Development</li>
          </ol>
                
        </div>
        
          </section>
          <section className="mainbody-projects" id="projects">
          <p className="mainbody-projects-title">Projects</p>
              {projects}
          
          </section>




          <section className='mainbody-more'>

        <details>
          <summary className='mainbody-more-title'>Read more</summary>
          <p className='mainbody-more-content'>Credits to <a href="https://v2.scrimba.com/learn-react-c0e" target="_blank">Bob Ziroll</a></p>
          
        </details>
          </section>

        <ul className='mainbody-list'>
        <b className='mainbody-list-title'>Stack</b>
                  <li>HTML</li>
                  <li>CSS  </li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>PHP</li>
                  
          </ul>
      </div>
      
      
    )
}