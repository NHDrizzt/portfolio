import './footer.css'
import githubIcon from '../assets/images/icon-github.svg'
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg'
import linkedinIcon from '../assets/images/icon-linkedin.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'

function Footer() {
    return (
        <footer className='footer'>
            <h1>nhdrizzt</h1>
            <nav>
                <div className="nav-footer-container">
                    <img src={githubIcon} alt="github-icon"/>
                    <img src={frontEndIcon} alt="github-icon"/>
                    <img src={linkedinIcon} alt="github-icon"/>
                    <img src={twitterIcon} alt="github-icon"/>
                </div>
            </nav>
        </footer>
    )
}

export default Footer