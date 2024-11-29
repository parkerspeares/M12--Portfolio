/* eslint-disable react/prop-types */
import "../App.css";

function Projects(props) {
    return (
    <div className="projectsCard" style={{backgroundImage: `url(${props.backgroundImg})`}}>
     <div>
        <h1>{props.title}</h1>
     </div>
     <div className="projectbtnMain">
        <a href={props.link}>
            <button className="projectbtn">GitHub</button>
        </a>
     </div>
                
    </div>
);
}

export default Projects;