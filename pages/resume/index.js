import React from 'react'
import { resumeSection } from '../../Portfolio'

const Resume = () => {
    const ResumeItems = ({ item, i }) => {
        return (
            <ul key={i}>
                <li>{item}</li>
            </ul>
        )
    }
    return (
        <>
            <section className="service-container">
                <div className="container">
                    <span className="heading">{resumeSection.resumeheading}</span>
                    <div className="timeline">
                        <div className="timebar left" data-aos="flip-right">
                            <div className="content">
                                <span>{resumeSection.companiesyear}</span>
                                {resumeSection.companies.map((item, i) => {
                                    return <ResumeItems key={i} item={item} />;
                                })}
                            </div>
                        </div>
                        <div className="timebar right" data-aos="flip-right">
                            <div className="content">
                                <span>{resumeSection.collegeyear}</span>
                                {resumeSection.college.map((item, i) => {
                                    return <ResumeItems key={i} item={item} />;
                                })}
                            </div>
                        </div>
                        <div className="timebar left" data-aos="flip-right">
                            <div className="content">
                                <span>{resumeSection.schoolyear}</span>
                                {resumeSection.school.map((item, i) => {
                                    return <ResumeItems key={i} item={item} />;
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="resume-btn">
                        <a href={resumeSection.resumepdf} target="_blank" rel="noreferrer" className="main-btn">{resumeSection.resume}</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume