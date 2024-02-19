import React from 'react';
import './Body.css'

import Introduction from "./components/Introduction";
import MyExperience from "./components/MyExperience";

const MainContent = () => {
    return (
        <main className={"main-content"}>
            <Introduction />
            <MyExperience />
        </main>
    );
};

export default MainContent;
