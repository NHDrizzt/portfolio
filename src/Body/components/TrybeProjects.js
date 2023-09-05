import React from 'react';
import recipesAppLarge from "../../assets/images/recipeApp-large.png";
import recipesAppMobile from "../../assets/images/recipesApp-small.png";
import trybeLogoLarge from "../../assets/images/trybe-logo-large.png";
import trybeLogoSmall from "../../assets/images/trybe-logo-small.png";
import {useInView} from "react-intersection-observer";

const TrybeProjects = () => {
    const { ref: trybeProjectsFrontEnd, inView: trybeProjectsFrontEndIsVisible } = useInView({
        triggerOnce: true,
    });
    
    const { ref: chosenTrybeProjectFrontend, inView: chosenTrybeProjectFrontendIsVisible } = useInView({
        triggerOnce: true,
    });
    
    return (
        <>
            <div ref={chosenTrybeProjectFrontend} className={`${"project"} ${"trybe-projects-frontend"} ${chosenTrybeProjectFrontendIsVisible ? 'trybe-projects-frontend-effect' : ''}`}>
                <div className="proj-hover">
                    <picture>
                        <source
                            media="(min-width: 62.5em)"
                            srcSet={recipesAppLarge}
                            width="540px"
                            height="400px"
                        />
                        <img className="image-effect" src={recipesAppMobile} alt=""/>
                    </picture>
                    <div className="project-view-code-hover middle-hover">
                        <a href="https://voracious-show.surge.sh/" target="_blank" rel="noreferrer">
                            <h3>View project</h3>
                        </a>
                        <a href="https://github.com/NHDrizzt/trybe-projects/tree/main/sd-030-a-project-recipes-app" target="_blank" rel="noreferrer">
                            <h3>View code</h3>
                        </a>
                    </div>
                </div>
        
                <h2>Recipes mobile-only(360x800) app</h2>
                <div className="project-title-tec">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>Jest</p>
                    <p>RTL</p>
                    <p>Tailwind</p>
                </div>
                <div className="project-view-code">
                    <a href="https://voracious-show.surge.sh/" target="_blank" rel="noreferrer">
                        <h3>View project</h3>
                    </a>
                    <a href="https://github.com/NHDrizzt/trybe-projects/tree/main/sd-030-a-project-recipes-app" target="_blank" rel="noreferrer">
                        <h3>View code</h3>
                    </a>
                </div>
            </div>
            <div ref={trybeProjectsFrontEnd} className={`${"project"} ${"trybe-projects-frontend"} ${trybeProjectsFrontEndIsVisible ? 'trybe-projects-frontend-effect' : ''}`}>
                <div className="proj-hover">
                    <picture>
                        <source
                            media="(min-width: 62.5em)"
                            srcSet={trybeLogoLarge}
                            width="540px"
                            height="400px"
                        />
                        <img className="image-effect" src={trybeLogoSmall} alt=""/>
                    </picture>
                    <div className="project-view-code-hover middle-hover">
                        <a href="https://github.com/NHDrizzt/trybe-projects" target="_blank" rel="noreferrer">
                            <h3>View code</h3>
                        </a>
                    </div>
                </div>
        
                <h2>More Frontend projects</h2>
                <div className="project-title-tec">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>React</p>
                    <p>RLT</p>
                    <p>Jest</p>
                    <p>Redux</p>
                </div>
                <div className="project-view-code">
                    <a href="https://github.com/NHDrizzt/trybe-projects" target="_blank" rel="noreferrer">
                        <h3>View code</h3>
                    </a>
                </div>
            </div>
            
            <div ref={trybeProjectsFrontEnd} className={`${"project"} ${"trybe-projects-frontend"} ${trybeProjectsFrontEndIsVisible ? 'trybe-projects-frontend-effect' : ''}`}>
                <div className="proj-hover">
                    <picture>
                        <source
                            media="(min-width: 62.5em)"
                            srcSet={trybeLogoLarge}
                            width="540px"
                            height="400px"
                        />
                        <img className="image-effect" src={trybeLogoSmall} alt=""/>
                    </picture>
                    <div className="project-view-code-hover middle-hover">
                        <a href="https://github.com/NHDrizzt/backend-projects" target="_blank" rel="noreferrer">
                            <h3>View code</h3>
                        </a>
                    </div>
                </div>
        
                <h2>Backend Projects</h2>
                <div className="project-title-tec">
                    <p>Node.js</p>
                    <p>Docker</p>
                    <p>Mysql</p>
                    <p>MSC</p>
                </div>
                <div className="project-view-code">
                    <a href="https://github.com/NHDrizzt/backend-projects" target="_blank" rel="noreferrer">
                        <h3>View code</h3>
                    </a>
                </div>
            </div>
        </>
    );
};

export default TrybeProjects;
