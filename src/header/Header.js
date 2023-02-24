import './Header.css'

function Header() {
    return (
        <header>
            <h1>My Portfolio</h1>
            <nav>
                <div className="header-container">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
        
            </nav>
        </header>
    )
}
export default Header