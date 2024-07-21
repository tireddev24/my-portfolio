/* eslint-disable react/prop-types */

import projectsdata from "../data/projectsdata"
import Projects from "./projects"

export default function Project(props){


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
        <>
            <p className="projects title">Projects</p>
            {projects}
        </>





    )
}