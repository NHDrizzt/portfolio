import './footer.css'
import githubIcon from '../assets/images/icon-github.svg'
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg'
import linkedinIcon from '../assets/images/icon-linkedin.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'
import {useContext} from "react";
import {ScrollToView} from "../context/ScrollToViewContext";

function Footer() {
    const { scrollToTop } = useContext(ScrollToView);
    
    return (
        <footer className='footer'>
            <div className="wrapper" ref={ scrollToTop }>
                <div className="nav-footer-container">
                    <button onClick={ scrollToTop }>
                        <h1>nhdrizzt</h1>
                    </button>
                    
                    <nav>
                        <a href="https://github.com/NHDrizzt" target="_blank">
                            <img src={githubIcon} alt="github-icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/gabriel-de-sousa-carvalho/" target="_blank">
                            <img src={linkedinIcon} alt="github-icon"/>
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
