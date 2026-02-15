import { Grid } from '@mui/material';

import profilePic from './assets/46593.jpg'

const leftSideMarginLeft = 30;
const leftSideMarginRight = 30;
const leftSideMarginBot = 20;

const rightSideMarginTop = 30;
const rightSideMarginRight = 20;

const leftSideStyle = {
    marginLeft: leftSideMarginLeft,
    marginRight: leftSideMarginRight,
    marginBottom: leftSideMarginBot
}

const rightSideStyle = {
    marginRight: rightSideMarginRight

}

function LeftSide() {

    function Photo() {

        const stylePhoto = {
            marginTop: '10%',
            display: 'inline-block',
            width: '220px',
            height: '5px',
            borderRadius: '50%',
            overflow: 'hidden'
        }

        return (

            <div class="photo-container" style={leftSideStyle}>
                <div class="photo" style={stylePhoto}>
                    {/* <img src={profilePic} width="220" /> */}
                </div>
                <h2>BAHADIR ARSLAN<br /><span> Python / C++ Developer</span></h2>
            </div>
        )
    }

    function Skills() {

        return (
            <div class="skills" style={leftSideStyle}>
                <h3 class="title">Skills</h3>
                <h4 class="subtitle">Programming Languages</h4>
                <li>Python</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>Mel Scripting</li>
                <li>C#</li>
                {/* <li>Java</li> */}
                <h4 class="subtitle">Libraries/Frameworks/Tools</h4>
                <li>Qt/PySide</li>
                <li>OpenCV </li>
                <li>Numpy/Pandas/PyTorch </li>
                <li>Maya Python Library</li>
                <li>Unreal Engine/Maya/Blender</li>
                <li>React</li>
                <li>FastAPI/Flask/Django</li>
                <li>Git/Azure DevOps</li>
            </div>
        )
    }

    function Education() {

        return (
            <div class="education-container" style={leftSideStyle}>
                <div class="education">
                    <h3 class="title">Education</h3>
                    <li>
                        <span>Civil Engineering (BSc)</span><br />
                        <span>Dokuz Eylul University (Izmir/Turkey)</span>
                    </li>
                    <li class="uls">
                        <span>Computer Graphics and Game Design (MSc)</span><br></br>
                        <span>Hacettepe University (Ankara/Turkey) and Hochschule der Medien
                            (Stuttgart/Germany)</span>
                    </li>
                </div>
            </div>
        )
    }

    function Languages() {

        return (
            <div class="languages-container" style={leftSideStyle}>
                <div class="languages">
                    <h3 class="title">Languages</h3>
                    <li>
                        <span class="text">Turkish</span>
                    </li>
                    <li>
                        <span class="text">English</span>
                    </li>
                    <li>
                        <span class="text">German</span>
                    </li>
                </div>
            </div>

        )
    }

    function ContactInfo() {

        return (
            <div class="contact-info-container" style={leftSideStyle}>
                <div class="contact-info">
                    <h3 class="title">Contact</h3>
                    <li>
                        <span class="icon"></span>
                        <span>+49 157 3626 86 30 / </span>
                        <span class="text">arslan.bah@gmail.com</span>
                    </li>
                    <li>
                        <span class="icon"></span>
                        <span class="text">linkedin.com/in/bahadir-arslan-07687161</span>
                    </li>
                </div>
            </div>
        )
    }

    const style = {
        background: '#003147',
        color: 'white',
        height: '297mm',
    };

    return (
        <div class="left-side" style={style} >
            <Grid container>
                <Grid item={2}>
                    <Photo />
                </Grid>
                <Grid item={2}>
                    <Skills />
                </Grid>
                <Grid item={2}>
                    <Education />
                </Grid>
                <Grid item={2}>
                    <Languages />
                </Grid>
                <Grid item={2}>
                    <ContactInfo />
                </Grid>
                <Grid item={2}>
                </Grid>
            </Grid>
        </div>
    );
}

function RightSide() {

    function Objective() {

        return (
            <div class="profile-container">
                <div class="objective">
                    <span>
                        Python/C++ developer with extensive experience building computer graphics production pipelines,
                        seeking senior engineering roles to drive AI/ML integration and manufacturing automation initiatives.
                    </span>
                    <br/>
                </div>
            </div>
        );

    }

    function Experience() {
        return (
            <div class="profile-container">
                <div class="experience">
                    <h2>Experience</h2><br />
                </div>
            </div>
        );
    }

    function EderGmbH() {

        return (
            <div class="experience-3">
                <h2>eder GmbH</h2>
                <h3>Stuttgart / Germany</h3>
                <span>
                    <h3 class="uls">Pipeline Developer (Sep 2017 - Present)</h3>
                    <span>
                        <li>
                            <span>
                                Designed, developed, tested, and documented multiple in-house applications in Python and C++,
                                using libraries such as PySide/Qt to support production workflows.
                            </span>
                        </li>
                        <li>
                            <span>
                                Collaborated with cross-functional teams to design and implement new features for Unreal
                                Engine- and AWS-based products, improving stability and usability for internal users.
                            </span>
                        </li>
                        <li>
                            <span>
                                Built custom tools and automated batch processes for digital artists in Maya (VRay),
                                Blender, and Unreal Engine, significantly reducing manual effort in daily tasks.
                            </span>
                        </li>
                        <li>
                            <span>
                                Created Python modules to automate mediapackage generation for configurator pipelines
                                used by various car companies, streamlining content delivery.
                            </span>
                        </li>
                        <li>
                            <span>
                                Developed OpenCV-based batch image comparison and editing tools, as well as React
                                frontend/Python backend web applications, and took ownership of their testing and documentation.
                            </span>
                        </li>
                        <li>
                            <span>
                                Reengineered the traditional VRay rendering pipeline to Unreal Engine, achieving more than
                                50% performance gains in rendering workflows.
                            </span>
                        </li>
                        <li>
                            <span>
                                Maintained and enhanced existing tools and libraries, fixing bugs and adding features across
                                multiple languages, including C# and MEL scripting.
                            </span>
                        </li>
                    </span>
                </span>
            </div>
        );
    }

function PreviousRelevantWorkExperience() {
    return (
        <div class="experience">
            <h2>Previous Relevant Work Experience</h2>

            <div class="experience-item">
                <h3>Technical Director (Jun 2011 – Sep 2014)</h3>
                <ul>
                    <li>Led an architectural visualization team, collaborated with architects, and developed in-house automation tools using Python and 3ds Max scripting.</li>
                    <li>Contributed to research and development of a holographic display device.</li>
                    <li>Handled modeling, animation, post-production, and advertising tasks.</li>
                </ul>
            </div>

            <div class="experience-item">
                <h3>Technical Artist (Sep 2014 – Aug 2015)</h3>
                <ul>
                    <li>Supported mobile game development with character modeling, texturing, rigging, animation, and sound design.</li>
                    <li>Worked with Unreal Engine on architectural visualization projects.</li>
                    <li>Contributed to the release of a mobile game in 2015.</li>
                </ul>
            </div>
        </div>
    );
}


    const style = {};

    return (
        <div class="right-side" style={rightSideStyle}>
            <Grid container spacing={2}>
                <Grid item={1}>
                    <Objective />
                </Grid>
                <Grid item={3}>
                    <EderGmbH />
                </Grid>
                <Grid item={3}>
                    <PreviousRelevantWorkExperience />
                </Grid>
            </Grid>
        </div>
    );

}

function Resume() {

    const style = {
        fontSize: '13px',
        marginTop: 0
    };

    return (
        <div style={style}>
            <Grid container spacing={0} id='a4'>
                <Grid container spacing={3}>
                    <Grid item xs={4.5}>
                        <LeftSide />
                    </Grid>
                    <Grid item xs={7.5}>
                        <div style={{ marginTop: rightSideMarginTop }}>
                            <RightSide />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}


export default Resume