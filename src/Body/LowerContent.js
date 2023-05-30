import React from 'react';
import './Body.css'
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";

const LowerContent = () => {
    return (
        <main className='main-content'>
            <MyProjects />
            <ContactMe/>
        </main>
    );
};

export default LowerContent;
