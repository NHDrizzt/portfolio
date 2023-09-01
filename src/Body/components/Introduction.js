import React, {useContext, useRef} from 'react';
import profilePicture1200 from "../../assets/images/desktop.png";
import profilePicture600 from "../../assets/images/tablet.png";
import profilePicture375 from "../../assets/images/mobile.png";
import ringImage from "../../assets/images/pattern-rings.svg";
import circleImage from "../../assets/images/pattern-circle.svg";
import {ScrollToView} from "../../context/ScrollToViewContext";

const Introduction = () => {
    
    const { scrollToComponent } = useContext(ScrollToView);
    
    return (
        <article className='about-me'>
            <div className='wrapper testing'>
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
                        <button onClick={ scrollToComponent }>
                            <h3>Contact me</h3>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Introduction;
