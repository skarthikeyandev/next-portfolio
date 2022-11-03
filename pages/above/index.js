import React from 'react'
import Link from 'next/link'
import { aboutSections } from '../../Portfolio';

const About = () => {

    return(
        <section className="about-container">
            <div className="container">
                <span className="heading">{aboutSections.aboutheading}</span>
                <div className="u-container-layout" data-aos="slide-up">
                    <div className="image-box">
                        <img alt="karthikeyan" src={aboutSections.profilephoto} className="u-image" />
                        <h1>{aboutSections.aboutname}</h1>
                        <div className="resume-btn">
                            <Link href="/resume" className="main-btn">Resume </Link>
                        </div>
                    </div>
                    <div className="content-section">
                        <h2>{aboutSections.aboutrole}</h2>
                        <p>{aboutSections.description} </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About