import React, {useContext} from 'react';
import ringImage from "../../assets/images/pattern-rings.svg";
import Design from "../../utils/Design";
import {ScrollToView} from "../../context/ScrollToViewContext";

const ContactMe = () => {
    const { scrollToViewRef } = useContext(ScrollToView);
    
    return (
        <article className='contact-me'>
            {/*<Design/>*/}
            <div className="wrapper" ref={ scrollToViewRef }>
                <div className="contact-me-container">
                    <div className="contact-description">
                        <h1>Contact</h1>
                        <p>I would love to hear about your project and how I could help. Please
                            fill in the form, and I’ll get back to you as soon as possible.</p>
                    </div>
                    <form action="https://formsubmit.co/7e7f49cdcd78d7565ef37b10e2043d78" method="POST" className='form-description'>
                        <div className="contact-me-inputs">
                            <span>Name</span>
                            <input id='name' name="Name" type="text" required/>
                            <span>Email</span>
                            <input id='email' name="Email" type="text" required/>
                            <span>Message</span>
                            <textarea id='message' name="Message" type="text" rows='4' minLength='5' maxLength='255' required/>
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
