import './Header.css'
import githubIcon from '../assets/images/icon-github.svg'
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg'
import linkedinIcon from '../assets/images/icon-linkedin.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'
import profilePicture from '../assets/images/image-profile-mobile.webp'

function Header() {
    return (
        <header>
            <div className="header-container">
                <h1 className="title">nhdrizzt</h1>
                <nav>
                    <div className="nav-container">
                        <img src={githubIcon} alt="github-icon"/>
                        <img src={frontEndIcon} alt="github-icon"/>
                        <img src={linkedinIcon} alt="github-icon"/>
                        <img src={twitterIcon} alt="github-icon"/>
                    </div>
                </nav>
                <picture>
                    <source media='(min-width: 62.5em)' srcSet='../assets/images/image-profile-desktop.webp'/>
                    <source media='(min-width: 37.5em)' srcSet='../assets/images/image-profile-tablet.webp'/>
                    <img className="image-wrapper" src={profilePicture} alt="profilepicture"/>
                </picture>
            </div>
        </header>
    )
}
export default Header