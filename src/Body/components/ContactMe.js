import React from 'react';
import ringImage from "../../assets/images/pattern-rings.svg";
import Design from "../../utils/Design";

const ContactMe = () => {
    return (
        <article className='contact-me'>
            {/*<Design/>*/}
            <div className="wrapper">
                <div className="contact-me-container">
                    <div className="contact-description">
                        <h1>Contact</h1>
                        <p>I would love to hear about your project and how I could help. Please
                            fill in the form, and I’ll get back to you as soon as possible.</p>
                    </div>
                    <form className='form-description' action="src/Body">
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
            </div>
        </article>
    );
};

export default ContactMe;
