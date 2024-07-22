/* eslint-disable react/prop-types */


export default function Projects (props) {


    const url = props.url
  


    return (

        
        <ul className="projects list">
          <li className="projects link" >
            <a href={url} target='_blank'>{props.projectName}
            </a>
            <img src={props.projectImage} 
            alt={props.alt} 
            className='projects img'
            />
          </li>
            <map name='map' >
              <area shape='rect' coords=' 0, 0, 400, 400' href={url} target='_blank' />
            </map>
         
        </ul>
      
    )
}