import React, {useEffect, useRef} from 'react';
import {ScrollToView} from "./ScrollToViewContext";

const ScrollToViewProvider = ({ children }) => {
    
    const scrollToViewRef = useRef(null);
    const scrollToTopOfThePage = useRef(null)
    
    const scrollToComponent = () => {
        scrollToViewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    
    const scrollToTop = () => {
        scrollToTopOfThePage.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    }
    
    
    
    
    const value = {
        scrollToViewRef,
        scrollToComponent,
        scrollToTopOfThePage,
        scrollToTop,
    }
    
    return (
        <ScrollToView.Provider value={ value }>
            { children }
        </ScrollToView.Provider>
    );
};

export default ScrollToViewProvider;
