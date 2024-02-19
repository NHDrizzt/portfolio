import React from 'react';
import './Body.css'
import MyProjects from "./components/MyProjects";
import ContactMe from "./components/ContactMe";

const LowerContent = () => {
    return (
        <main className='main-content main-lowercontent'>
            <MyProjects />
            <ContactMe/>
        </main>
    );
};

export default LowerContent;
