import './Header.css'
import githubIcon from '../assets/images/icon-github.svg'
import frontEndIcon from '../assets/images/icon-frontend-mentor.svg'
import linkedinIcon from '../assets/images/icon-linkedin.svg'
import twitterIcon from '../assets/images/icon-twitter.svg'
import profilePicture375 from '../assets/images/image-profile-mobile.webp'
import profilePicture600 from '../assets/images/image-profile-tablet.webp'
import profilePicture1200 from '../assets/images/image-profile-desktop.webp'
import ringImage from '../assets/images/pattern-rings.svg'
import circleImage from '../assets/images/pattern-circle.svg'

function Header() {
    return (
        <header>
            <div className="header-container">
                <div className='header-content'>
                    <h1 className="title">nhdrizzt</h1>
                    <nav className="nav-container">
                        <img src={githubIcon} alt="github-icon"/>
                        <img src={frontEndIcon} alt="github-icon"/>
                        <img src={linkedinIcon} alt="github-icon"/>
                        <img src={twitterIcon} alt="github-icon"/>
                    </nav>
                </div>
                <div className='images-header'>
                    <picture>
                        <source media='(min-width: 1200px)' srcSet={profilePicture1200}/>
                        <source media='(min-width: 675px)' srcSet={profilePicture600}/>
                        <img src={profilePicture375} className="image-wrapper" srcSet={profilePicture375} alt='profila'/>
                    </picture>
                    <picture>
                        <img className='ring-image' src={ringImage} alt="ring"/>
                        <img className='circle-image' src={circleImage} alt="circle"/>
                    </picture>
                </div>
            </div>
        </header>
    )
}
export default Header