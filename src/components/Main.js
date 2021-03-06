import React from 'react';
import Content from './Content';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Resume from './Resume';

function Main({ currentPage }) {

    const renderPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <About />;
            case 'projects':
                return <Projects />;
            case 'contact':
                return <Contact />;
            case 'resume':
                return <Resume />;
            default:
                return <About />;
        }
    };

    return (
        <section>
            <Content>{renderPage()}</Content>
        </section>
    );
};

export default Main;