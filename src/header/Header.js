import './Header.css'
import githubIcon from '../assets/images/icon-github.svg'
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg'
import linkedinIcon from '../assets/images/icon-linkedin.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'

function Header() {
    return (
        <header className='header'>
            <div className="wrapper">
                <nav className="nav-container">
                    <h1 className="title">nhdrizzt</h1>
                    <img src={githubIcon} alt="github-icon"/>
                    <img src={frontEndIcon} alt="github-icon"/>
                    <img src={linkedinIcon} alt="github-icon"/>
                    <img src={twitterIcon} alt="github-icon"/>
                </nav>
            </div>
        </header>
    )
}
export default Header