import './projectcard.styles.css';

function ProjectCard(props) {
    return (
        <div className="project-card">
            <a href={props.url}>
            <img className='project-banner' src={props.thumbnail} alt="" />
            <div className="project-desp">  
                <p className="date">{props.project_name}</p>
                <p className="desc">
                {props.details.length <= 150 ? props.details : props.details.slice(0, 150)+"..."}
                </p>
            </div>
            </a>
        </div>
    )
}

export default ProjectCard;