import React from 'react';
import './about-us.css'
import SectionOne from './sectionOne';
import SectionTwo from './sectionTwo';
import SectionThree from './sectionThree';


function AboutUs() {
    return (
        <>
            <div className="about-us ">
                <div className='container'>
                    <SectionOne />
                    <SectionTwo />
                    <SectionThree />
                </div>
            </div>
        </>
    );
}

export default AboutUs;