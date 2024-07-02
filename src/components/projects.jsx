/* eslint-disable react/prop-types */
import '../App.css'

export default function Projects (props) {


    const url = props.url
  


    return (

        
        <ul className={props.darkmode? "mainbody-projects-list dark": "mainbody-projects-list"}>
          <li className="mainbody-projects-link" >
            <a href={url} target='_blank'>{props.projectName}
            </a>
            <img src={props.projectImage} 
            alt={props.alt} 
            className='mainbody-projects-img'
            />
          </li>
            <map name='map' >
              <area shape='rect' coords=' 0, 0, 400, 400' href={url} target='_blank' />
            </map>
         
        </ul>
      
    )
}