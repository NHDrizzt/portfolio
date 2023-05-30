import React from 'react';
import ringImage from "../../assets/images/pattern-rings.svg";

const MyExperience = () => {
    return (
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
    );
};

export default MyExperience;
