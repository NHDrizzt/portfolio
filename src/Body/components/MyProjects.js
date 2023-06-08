import React from 'react';
import projectPictureOneLarge from "../../assets/images/thumbnail-project-1-large.webp";
import projectOne from "../../assets/images/thumbnail-project-1-small.webp";
import projectPictureTwoLarge from "../../assets/images/thumbnail-project-2-large.webp";
import projectTwo from "../../assets/images/thumbnail-project-2-small.webp";
import projectPictureThreeLarge from "../../assets/images/thumbnail-project-3-large.webp";
import projectThree from "../../assets/images/thumbnail-project-3-small.webp";
import projectPictureFourLarge from "../../assets/images/thumbnail-project-4-large.webp";
import projectFour from "../../assets/images/thumbnail-project-4-small.webp";
import projectPictureFiveLarge from "../../assets/images/thumbnail-project-5-large.webp";
import projectFive from "../../assets/images/thumbnail-project-5-small.webp";
import projectPictureSixLarge from "../../assets/images/thumbnail-project-6-large.webp";
import projectSix from "../../assets/images/thumbnail-project-6-small.webp";
import {useInView} from "react-intersection-observer";

const MyProjects = () => {
    
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
    const { ref: mySixthProject, inView: mySixthProjectIsVisible } = useInView({
        triggerOnce: true,
    });
    
    
    return (
        <article className='my-projects'>
            <div className="wrapper">
                <div className="my-projects-header">
                    <h1>Projects</h1>
                    <h3>Contact me</h3>
                </div>
                <div className="grid-container">
                    <div ref={myFirstProject} className={`${"project"} ${"first-project"} ${myFirstProjectIsVisible ? 'my-first-project-effect' : ''}`}>
                        <div className={'proj-hover'}>
                            <picture>
                                <source
                                    media="(min-width: 62.5em)"
                                    srcSet={projectPictureOneLarge}
                                    width="540px"
                                    height="400px"
                                />
                                <img
                                    className="image-effect"
                                    src={projectOne}
                                    alt="project-one"/>
                            </picture>
                            <div className="project-view-code-hover middle-hover">
                                <h3>View project</h3>
                                <h3>View code</h3>
                            </div>
                        </div>
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
                                <h3>View project</h3>
                                <h3>View code</h3>
                            </div>
                        </div>
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
                                <h3>View project</h3>
                                <h3>View code</h3>
                            </div>
                        </div>
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
                                <h3>View project</h3>
                                <h3>View code</h3>
                            </div>
                        </div>
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
                    <div ref={myFifthProject} className={`${"project"} ${"fifth-project"} ${myFifthProjectIsVisible ? 'my-fifth-project-effect' : ''}`}>
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
                                <h3>View project</h3>
                                <h3>View code</h3>
                            </div>
                        </div>
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
                    <div ref={mySixthProject} className={`${"project"} ${"sixth-project"} ${mySixthProjectIsVisible ? 'my-sixth-project-effect' : ''}`}>
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
                                <h3>View project</h3>
                                <h3>View code</h3>
                            </div>
                        </div>
                        
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
    );
};

export default MyProjects;
