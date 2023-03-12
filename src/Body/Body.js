import './Body.css'
import projectOne from '../assets/images/thumbnail-project-1-small.webp'
import projectTwo from '../assets/images/thumbnail-project-2-small.webp'
import projectThree from '../assets/images/thumbnail-project-3-small.webp'
import projectFour from '../assets/images/thumbnail-project-4-small.webp'
import projectFive from '../assets/images/thumbnail-project-5-small.webp'
import projectSix from '../assets/images/thumbnail-project-6-small.webp'
import ringImage from '../assets/images/pattern-rings.svg'
import profilePicture1200 from "../assets/images/image-profile-desktop.webp";
import profilePicture600 from "../assets/images/image-profile-tablet.webp";
import profilePicture375 from "../assets/images/image-profile-mobile.webp";
import circleImage from "../assets/images/pattern-circle.svg";
import projectPictureOneLarge from "../assets/images/thumbnail-project-1-large.webp";
import projectPictureTwoLarge from "../assets/images/thumbnail-project-2-large.webp";
import projectPictureThreeLarge from "../assets/images/thumbnail-project-3-large.webp";
import projectPictureFourLarge from "../assets/images/thumbnail-project-4-large.webp";
import projectPictureFiveLarge from "../assets/images/thumbnail-project-5-large.webp";
import projectPictureSixLarge from "../assets/images/thumbnail-project-6-large.webp";


function Body() {
    return (
        <main className='main-content'>
            <article className='about-me'>
                <div className='wrapper'>
                    <div className="hero-content">
                        <picture>
                            <source media='(min-width: 1200px)' srcSet={profilePicture1200}/>
                            <source media='(min-width: 675px)' srcSet={profilePicture600}/>
                            <img src={profilePicture375} className="hero-image" srcSet={profilePicture375} alt='profila'/>
                        </picture>
                        <img className='ring-image' src={ringImage} alt="ring"/>
                        <img className='circle-image' src={circleImage} alt="circle"/>
                        <div className="hero-text">
                            <h1>Nice to meet you! <br/> I'm <span>Gabriel Carvalho.</span></h1>
                            <p>Based in the BR, I'm a fullstack developer passionate about
                                building accessible web apps that users love.</p>
                            <h3>Contact me</h3>
                        </div>
                    </div>
                </div>
                
            </article>
            <article className='my-experience'>
                <div className='wrapper'>
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
                    <picture>
                        <img className='second-ring-image' src={ringImage} alt=""/>
                    </picture>
                </div>
            </article>
            <article className='my-projects'>
                <div className="wrapper">
                    <div className="my-projects-header">
                        <h1>Projects</h1>
                        <h3>Contact me</h3>
                    </div>
                    <div className="grid-container">
                        <div className="project">
                            <picture>
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureOneLarge}
                                    width="540px"
                                    height="400px"
                                />
                                <img
                                    src={projectOne}
                                    alt="project-one"/>
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
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureTwoLarge}
                                    width="540px"
                                    height="400px"
                                />
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
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureThreeLarge}
                                    width="540px"
                                    height="400px"
                                />
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
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureFourLarge}
                                    width="540px"
                                    height="400px"
                                />
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
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureFiveLarge}
                                    width="540px"
                                    height="400px"
                                />
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
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureSixLarge}
                                    width="540px"
                                    height="400px"
                                />
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
                    </div>
                </div>
            </article>
            <article className='contact-me'>
                <div className="contact-me-container">
                    <h1>Contact</h1>
                    <p>I would love to hear about your project and how I could help. Please
                        fill in the form, and I’ll get back to you as soon as possible.</p>
                    <form action="">
                        <div className="contact-me-inputs">
                            <span>Name</span>
                            <input id='name' type="text"/>
                            <span>Email</span>
                            <input id='email' type="text"/>
                            <span>Message</span>
                            <textarea id='message' type="text" rows='4' minLength='5' maxLength='255'/>
                        </div>
                        <div id='contact-me-send-button'>
                            <button >Send message</button>
                        </div>
                    </form>
                </div>
                <picture>
                    <img className='third-ring-image' src={ringImage} alt=""/>
                </picture>
            </article>
        </main>
    )
}

export default Body