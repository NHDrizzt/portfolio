import React from 'react';
import ringImage from "../../assets/images/pattern-rings.svg";
import {useInView} from "react-intersection-observer";

const MyExperience = () => {
    
    const { ref: myHtmlRef, inView: myHtmlIsVisible } = useInView({triggerOnce: true,});
    const { ref: myCssRef, inView: myCssIsVisible } = useInView({triggerOnce: true,});
    const { ref: myJsRef, inView: myJsIsVisible } = useInView({triggerOnce: true,});
    const { ref: myAccRef, inView: myAccIsVisible } = useInView({triggerOnce: true,});
    const { ref: myReactRef, inView: myReactIsVisible } = useInView({triggerOnce: true,});
    const { ref: myTailwindRef, inView: myTailwindIsVisible } = useInView({triggerOnce: true,});
    
    return (
        <article className='my-experience'>
            <div className='wrapper'>
                <div className={`${'my-experience-container'}`}>
                    <div id='html' ref={myHtmlRef} className={`${'my-experience-html'} ${myHtmlIsVisible ? 'my-experience-html-effect' : ''}`}>
                        <h1>HTML</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="CSS" ref={myCssRef} className={`${'my-experience-css'} ${myCssIsVisible ? 'my-experience-css-effect' : ''}`}>
                        <h1>CSS</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="javascript" ref={myJsRef} className={`${'my-experience-js'} ${myJsIsVisible ? 'my-experience-js-effect' : ''}`}>
                        <h1>JavaScript</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="acessibility" ref={myAccRef} className={`${'my-experience-acc'} ${myAccIsVisible ? 'my-experience-acc-effect' : ''}`}>
                        <h1>Accessibility</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="react" ref={myReactRef} className={`${'my-experience-react'} ${myReactIsVisible ? 'my-experience-react-effect' : ''}`}>
                        <h1>React</h1>
                        <p>1 Year Experience</p>
                    </div>
                    <div id="tailwind" ref={myTailwindRef} className={`${'my-experience-tailwind'} ${myTailwindIsVisible ? 'my-experience-tailwind-effect' : ''}`}>
                        <h1>Tailwind</h1>
                        <p>6 Months Experience</p>
                    </div>
                </div>
                <picture>
                    <img className='second-ring-image' src={ringImage} alt=""/>
                </picture>
            </div>
        </article>
    );
};

export default MyExperience;
