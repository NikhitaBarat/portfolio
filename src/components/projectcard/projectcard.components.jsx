import './projectcard.styles.css';
import Vibee from '../../assets/vibee.png'

function ProjectCard() {
    return (
        <div className="project-card">
            <img className='project-banner' src={Vibee} alt="" />
            <div className="project-desp">  
                <p className="date">APRIL, 2022</p>
                <p className="desc">
                    Vibee is a website for social interaction 
                    through remote means. Its main idea is to 
                    connect with neighbourly people and play 
                    games, deepen friendships and meet new 
                    and interesting people from various areas.
                </p>
            </div>
        </div>
    )
}

export default ProjectCard;