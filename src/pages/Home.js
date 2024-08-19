import {React, useEffect, useRef } from 'react';
import Header from './Header';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';
import Extracurriculars from "./Extracurriculars";
import '../css/index.css'
// import { timelineAnimation } from '../js/TimelineAnimation';

function Home() {

    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    // Timeline animation
    // useEffect(() => {timelineAnimation();}, []);

    return (
        <div className="main">

            <Header/> {/* main home header component + navbar */}
            <About/> {/* about page */}
            <Experience/> {/* experience page */}
            <Projects/> {/* projects page */}
            <Extracurriculars/> {/* extracurriculars page */}
            <Contact/> {/* contact page */}

            {/* -------------------------- footer --------------------------- */}
            <footer>
                <p>Made with ❤ by Rachel Pu using React</p>
            </footer>
        </div>
    );
}

export default Home;
