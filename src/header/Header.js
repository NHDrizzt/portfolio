import './Header.css'
import githubIcon from '../assets/images/icon-github.svg'
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg'
import linkedinIcon from '../assets/images/icon-linkedin.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'
import {useContext} from "react";
import {ScrollToView} from "../context/ScrollToViewContext";

function Header() {
    const { scrollToTopOfThePage } = useContext(ScrollToView);
    return (
        <header className='header' ref={ scrollToTopOfThePage }>
            <div className="wrapper">
                <nav className="nav-container">
                    <h1 className="title">nhdrizzt</h1>
                    <a href="https://github.com/NHDrizzt" target="_blank">
                        <img src={githubIcon} alt="github-icon"/>
                    </a>
                    {/*<img src={frontEndIcon} alt="github-icon"/>*/}
                    <a href="https://www.linkedin.com/in/gabriel-de-sousa-carvalho/" target="_blank">
                        <img src={linkedinIcon} alt="github-icon"/>
                    </a>
                    {/*<a href="">*/}
                    {/*    <img src={twitterIcon} alt="github-icon"/>*/}
                    {/*</a>*/}
                </nav>
            </div>
        </header>
    )
}
export default Header
