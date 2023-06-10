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
                        <img src={githubIcon} alt="github-icon"/>
                        <img src={frontEndIcon} alt="github-icon"/>
                        <img src={linkedinIcon} alt="github-icon"/>
                        <img src={twitterIcon} alt="github-icon"/>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer
