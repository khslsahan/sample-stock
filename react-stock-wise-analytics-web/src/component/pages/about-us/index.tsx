import React from 'react';
import './about-us.css'
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';


function AboutUs() {
    return (
        <>
            <div className="about-us">
                <SectionOne />
                <SectionTwo />
            </div>
        </>
    );
}

export default AboutUs;