/* eslint-disable react/prop-types */

import Projects from "./projects";
import projectsdata from "../data/projectsdata";
// import cafeteria from '../assets/cafeteria-services.png';
// import portfolio from '../assets/portfolio.png'

export default function Body (props) {

  const projects = projectsdata.map(proj => {
    return (
      <Projects
                key = {proj.id}
                projectName= {proj.projectName}
                projectImage= {proj.projectImage}
                darkmode = {props.darkmode}
             />
      )   
  }
  )

    return (
      
        <div className={props.darkmode? 'mainbody dark' : 'mainbody'}>
        <section className='mainbody-about' id="blog">
        <h4 className='mainbody-about-title'> About </h4>
        <p className='mainbody-about-content'> 
           <b> I&apos;m Michael Amao. </b> A 300 level software engineering student at Babcock University. I started off with frontend development, though I&apos;m not much of a creative. I started with learning React JS, struggled with styling, and tried my best to cope. Eventually, I left frontend after styling gave me a lot of headache while working on a school project. I then took a look at backend development, watched some youtube videos and decided to learn PHP. I then built up the courage to take on css and started my React journey again. Yes, I conquered and here I am styling my portfolio. As at January, 2024, I didn&apos;t think i would be able to do what your eyes behold right now.<b> A REACT JS DEV INFACT! </b> (Yes, I still have a lot of things to learn )
        
        </p>
        </section>

          <section className="mainbody-interests">

        <h4 className='mainbody-interests-title'>Interests </h4>
        <p className='mainbody-interests-content' >
                Machine learning, AI Development, I have been eager to get into this tech paradigm since the time I used the Snapchat AI and didn&apos;t get my desired answers.
        </p>
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