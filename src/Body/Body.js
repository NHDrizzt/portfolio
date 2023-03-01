import './Body.css'
import projectOne from '../assets/images/thumbnail-project-1-small.webp'
import projectTwo from '../assets/images/thumbnail-project-2-small.webp'
import projectThree from '../assets/images/thumbnail-project-3-small.webp'
import projectFour from '../assets/images/thumbnail-project-4-small.webp'
import projectFive from '../assets/images/thumbnail-project-5-small.webp'
import projectSix from '../assets/images/thumbnail-project-6-small.webp'


function Body() {
    return (
        <main className='main-content'>
            <article className='about-me'>
                <h1>Nice to meet you! I'm <span>Gabriel Carvalho.</span></h1>
                <p>Based in the BR, I'm a fullstack developer passionate about
                    building accessible web apps that users love.</p>
                <h3>Contact me</h3>
            </article>
            <article className='my-experience'>
                <div className="my-experience-container">
                    <div id='html'>
                        <h1>HTML</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="CSS">
                        <h1>CSS</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="javascript">
                        <h1>JavaScript</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="acessibility">
                        <h1>Accessibility</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="react">
                        <h1>React</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="tailwind">
                        <h1>Tailwind</h1>
                        <p>3 Months Experience</p>
                    </div>
                </div>
            </article>
            <article className='my-projects'>
                <div className="my-projects-header">
                    <h1>Projects</h1>
                    <h3>Contact me</h3>
                </div>
                <div className="project">
                    <picture>
                        <img src={projectOne} alt="project-one"/>
                    </picture>
                    <h2>Design portfolio</h2>
                    <div className="project-title-tec">
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>
                    <div className="project-view-code">
                        <h3>View project</h3>
                        <h3>View code</h3>
                    </div>
                </div>
                <div className="project">
                    <picture>
                        <img src={projectTwo} alt=""/>
                    </picture>
                    <h2>E-learning landing page</h2>
                    <div className="project-title-tec">
                        <p>HTML</p>
                        <p>CSS</p>
                    </div>
                    <div className="project-view-code">
                        <h3>View project</h3>
                        <h3>View code</h3>
                    </div>
                </div>
                <div className="project">
                    <picture>
                        <img src={projectThree} alt=""/>
                    </picture>
                    <h2>Todo web app</h2>
                    <div className="project-title-tec">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div className="project-view-code">
                        <h3>View project</h3>
                        <h3>View code</h3>
                    </div>
                </div>
                <div className="project">
                    <picture>
                        <img src={projectFour} alt=""/>
                    </picture>
                    <h2>Entertainment web app</h2>
                    <div className="project-title-tec">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div className="project-view-code">
                        <h3>View project</h3>
                        <h3>View code</h3>
                    </div>
                </div>
                <div className="project">
                    <picture>
                        <img src={projectFive} alt=""/>
                    </picture>
                    <h2>Memory Game</h2>
                    <div className="project-title-tec">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div className="project-view-code">
                        <h3>View project</h3>
                        <h3>View code</h3>
                    </div>
                </div>
                <div className="project">
                    <picture>
                        <img src={projectSix} alt=""/>
                    </picture>
                    <h2>Art gallery showcase</h2>
                    <div className="project-title-tec">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                    <div className="project-view-code">
                        <h3>View project</h3>
                        <h3>View code</h3>
                    </div>
                </div>
            </article>
            <article>
                <h1>Contact</h1>
    
                <p>I would love to hear about your project and how I could help. Please
                    fill in the form, and I’ll get back to you as soon as possible.</p>
    
                <input type="text"/>Name
                <input type="text"/>Email
                <input type="text"/>Message
    
                <p>Send message</p>
            </article>
        </main>
    )
}

export default Body