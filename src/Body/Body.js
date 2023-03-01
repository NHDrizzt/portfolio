import './Body.css'
function Body() {
    return (
        <main className='main-content'>
            <article className='about-me'>
                <h1>Nice to meet you! I'm <span>Gabriel Carvalho.</span></h1>
                <p>Based in the BR, I'm a fullstack developer passionate about
                    building accessible web apps that users love.</p>
                <h3>Contact me</h3>
            </article>
            <article className='my-experience'>
                <h1>HTML</h1>
                <p>1 Year Experience</p>
    
                <h1>CSS</h1>
                <p>1 Year Experience</p>
    
                <h1>JavaScript</h1>
                <p>1 Year Experience</p>
    
                <h1>Accessibility</h1>
                1 Year Experience
    
                <h1>React</h1>
                1 Year Experience
    
                <h1>Tailwind</h1>
                <p>3 Months Experience</p>
            </article>
            <article className='my-projects'>
                <h1>Projects</h1>
    
                <h3>Contact me</h3>
    
                <p>Design portfolio</p>
                <p>HTML</p> <p>CSS</p>
                <p>View project</p>
                <p>View code</p>
    
                <p>E-learning landing page</p>
                <p>HTML</p> <p>CSS</p>
                <p>View project</p>
                <p>View code</p>
    
                <p>Todo web app</p>
                <p>HTML</p> <p>CSS</p> <p>JavaScript</p>
                <p>View project</p>
                <p>View code</p>
    
                <p>Entertainment web app</p>
                <p>HTML</p> <p>CSS</p> <p>JavaScript</p>
                <p>View project</p>
                <p>View code</p>
    
                <p>Memory Game</p>
                <p>HTML</p> <p>CSS</p> <p>JavaScript</p>
                <p>View project</p>
                <p>View code</p>
    
                <p>Art gallery showcase</p>
                <p>HTML</p> <p>CSS</p> <p>JavaScript</p>
                <p>View project</p>
                <p>View code</p>
            </article>
            
            <article>
                <h1>Contact</h1>
    
                <p>I would love to hear about your project and how I could help. Please
                    fill in the form, and I’ll get back to you as soon as possible.</p>
    
                <input type="text"/>Name
                <input type="text"/>Email
                <input type="text"/>Message
    
                <p>Send message</p>
            </article>
        </main>
    )
}

export default Body