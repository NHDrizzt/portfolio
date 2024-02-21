import React, {useContext} from 'react';
import projectPictureTwoLarge from "../../assets/images/dictionaryApp-large.jpg";
import projectTwo from "../../assets/images/dictionaryApp-small.jpg";
import projectPictureThreeLarge from "../../assets/images/thumbnail-project-3-large.webp";
import projectThree from "../../assets/images/thumbnail-project-3-small.webp";
import projectPictureFourLarge from "../../assets/images/apipay-large.jpg";
import projectFour from "../../assets/images/apipay-small.jpg";
import projectPictureFiveLarge from "../../assets/images/kanban-large.jpg";
import projectFive from "../../assets/images/kanban-small.jpg";
import projectPictureSixLarge from "../../assets/images/port-large.png";
import projectSix from "../../assets/images/port-small.png";
import {useInView} from "react-intersection-observer";
import {ScrollToView} from "../../context/ScrollToViewContext";
import TrybeProjects from "./TrybeProjects";

const MyProjects = () => {
    
    const { scrollToComponent } = useContext(ScrollToView);
    
    const { ref: myFirstProject, inView: myFirstProjectIsVisible } = useInView({
        triggerOnce: true,
    });
    
    const { ref: mySecondProject, inView: mySecondProjectIsVisible } = useInView({
        triggerOnce: true,
    });
    const { ref: myThirdProject, inView: myThirdProjectIsVisible } = useInView({
        triggerOnce: true,
    });
    const { ref: myFourthProject, inView: myFourthProjectIsVisible } = useInView({
        triggerOnce: true,
    });
    const { ref: myFifthProject, inView: myFifthProjectIsVisible } = useInView({
        triggerOnce: true,
    });
    
    
    return (
        <article className='my-projects'>
            <div className="wrapper test">
                <div className="my-projects-header">
                    <h1>Projects</h1>
                    <button onClick={ scrollToComponent }>
                        <h3>Contact me</h3>
                    </button>
                </div>
                <div className="grid-container">
                    <div ref={myFirstProject} className={`${"project"} ${"fifth-project"} ${myFirstProjectIsVisible ? 'my-fifth-project-effect' : ''}`}>
                        <div className="proj-hover">
                            <picture>
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureFiveLarge}
                                    width="540px"
                                    height="400px"
                                />
                                <img className="image-effect" src={projectFive} alt=""/>
                            </picture>
                            <div className="project-view-code-hover middle-hover">
                                <a href="https://kanban-taskmanagement.vercel.app" target="_blank" rel="noreferrer">
                                    <h3>View Project</h3>
                                </a>
                                <a href="https://github.com/NHDrizzt/frontend-projects/tree/master/kanban-task-management-app" target="_blank" rel="noreferrer">
                                    <h3>View code</h3>
                                </a>
                            </div>
                        </div>
                        <h2>Kanban Task Manager web app</h2>
                        <div className="project-title-tec">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Tailwind</p>
                            <p>Context Api</p>
                        </div>
                        <div className="project-view-code">
                            <a href="https://kanban-taskmanagers.netlify.app/" target="_blank" rel="noreferrer">
                                <h3>View Project</h3>
                            </a>
                            <a href="https://github.com/NHDrizzt/frontend-projects/tree/master/kanban-task-management-app" target="_blank" rel="noreferrer">
                                <h3>View code</h3>
                            </a>
                        </div>
                    </div>
                    <div ref={mySecondProject} className={`${"project"} ${"second-project"} ${mySecondProjectIsVisible ? 'my-second-project-effect' : ''}`}>
                        <div className="proj-hover">
                            <picture>
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureTwoLarge}
                                    width="540px"
                                    height="400px"
                                />
                                <img className="image-effect" src={projectTwo} alt=""/>
                            </picture>
                            <div className="project-view-code-hover middle-hover">
                                <a href="https://magical-rabanadas-1218c4.netlify.app/" target="_blank" rel="noreferrer">
                                    <h3>View project</h3>
                                </a>
                                <a href="https://github.com/NHDrizzt/frontend-projects/tree/master/dictionary-web-app" target="_blank" rel="noreferrer">
                                    <h3>View code</h3>
                                </a>
                            </div>
                        </div>
                        <h2>Dictionary web app</h2>
                        <div className="project-title-tec">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                        </div>
                        <div className="project-view-code">
                            <a href="https://magical-rabanadas-1218c4.netlify.app/" target="_blank" rel="noreferrer">
                                <h3>View project</h3>
                            </a>
                            <a href="https://github.com/NHDrizzt/frontend-projects/tree/master/dictionary-web-app" target="_blank" rel="noreferrer">
                                <h3>View code</h3>
                            </a>
                        </div>
                    </div>
                    <div ref={myThirdProject} className={`${"project"} ${"third-project"} ${myThirdProjectIsVisible ? 'my-third-project-effect' : ''}`}>
                        <div className='proj-hover'>
                            <picture>
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureThreeLarge}
                                    width="540px"
                                    height="400px"
                                />
                                <img className="image-effect" src={projectThree} alt=""/>
                            </picture>
                            <div className="project-view-code-hover middle-hover">
                                <a href="http://tan-nose.surge.sh/" target="_blank" rel="noreferrer">
                                    <h3>View project</h3>
                                </a>
                                <a href="https://github.com/NHDrizzt/frontend-projects/tree/master/todo-list-app" target="_blank" rel="noreferrer">
                                    <h3>View code</h3>
                                </a>
                            </div>
                        </div>
                        <h2>Todo web app</h2>
                        <div className="project-title-tec">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                        </div>
                        <div className="project-view-code">
                            <a href="http://tan-nose.surge.sh/" target="_blank" rel="noreferrer">
                                <h3>View project</h3>
                            </a>
                            <a href="https://github.com/NHDrizzt/frontend-projects/tree/master/todo-list-app" target="_blank" rel="noreferrer">
                                <h3>View code</h3>
                            </a>
                        </div>
                    </div>
                    <div ref={myFourthProject} className={`${"project"} ${"fourth-project"} ${myFourthProjectIsVisible ? 'my-fourth-project-effect' : ''}`}>
                        <div className="proj-hover">
                            <picture>
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureFourLarge}
                                    width="540px"
                                    height="400px"
                                />
                                <img className="image-effect" src={projectFour} alt=""/>
                            </picture>
                            <div className="project-view-code-hover middle-hover">
                                <a href="https://pretty-oranges.surge.sh/" target="_blank" rel="noreferrer">
                                    <h3>View project</h3>
                                </a>
                                <a href="https://github.com/NHDrizzt/frontend-projects/tree/master/payapi-multi-page-app" target="_blank" rel="noreferrer">
                                    <h3>View code</h3>
                                </a>
                            </div>
                        </div>
                        <h2>PayApi Multi-page web app</h2>
                        <div className="project-title-tec">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                        </div>
                        <div className="project-view-code">
                            <a href="https://pretty-oranges.surge.sh/" target="_blank" rel="noreferrer">
                                <h3>View project</h3>
                            </a>
                            <a href="https://github.com/NHDrizzt/frontend-projects/tree/master/payapi-multi-page-app" target="_blank" rel="noreferrer">
                                <h3>View code</h3>
                            </a>
                        </div>
                    </div>
                    
                    <div ref={myFifthProject} className={`${"project"} ${"sixth-project"} ${myFifthProjectIsVisible ? 'my-sixth-project-effect' : ''}`}>
                        <div className="proj-hover">
                            <picture>
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureSixLarge}
                                    width="540px"
                                    height="400px"
                                />
                                <img className="image-effect" src={projectSix} alt=""/>
                            </picture>
                            <div className="project-view-code-hover middle-hover">
                                <a href="https://github.com/NHDrizzt/portfolio" target="_blank" rel="noreferrer">
                                    <h3>View code</h3>
                                </a>
                            </div>
                        </div>
                        
                        <h2>My Portfolio</h2>
                        <div className="project-title-tec">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                        </div>
                        <div className="project-view-code">
                            <a href="https://github.com/NHDrizzt/portfolio" target="_blank" rel="noreferrer">
                                <h3>View code</h3>
                            </a>
                        </div>
                    </div>
                    <TrybeProjects />
                </div>
            </div>
        </article>
    );
};

export default MyProjects;
