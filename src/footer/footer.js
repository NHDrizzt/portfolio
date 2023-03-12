import './footer.css'
import githubIcon from '../assets/images/icon-github.svg'
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg'
import linkedinIcon from '../assets/images/icon-linkedin.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'

function Footer() {
    return (
        <footer className='footer'>
            <div className="wrapper">
                <div className="nav-footer-container">
                    <h1>nhdrizzt</h1>
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