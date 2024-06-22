/* eslint-disable react/prop-types */
import '../App.css'

export default function Projects (props) {


    return (

        
        <ul className={props.darkmode? "mainbody-projects-list dark": "mainbody-projects-list"}>
          <li className="mainbody-projects-link">
            <a href='#top'>{props.projectName}</a>
            <img src={props.projectImage} alt='Meme Generator Home Page' className='mainbody-projects-img' />
          </li>
         
        </ul>
      
    )
}