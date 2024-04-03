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
                <li>Java</li>
                <h4 class="subtitle">Libraries/Frameworks/Tools</h4>
                <li>Qt / PySide</li>
                <li>OpenCV </li>
                <li>Numpy/Pandas/PyTorch </li>
                <li>Maya Python Library</li>
                <li>Unreal Engine/Maya/Blender</li>
                <li>React/Flask/Django</li>
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
                        <span>Computer Graphics and Game Design (MA)</span><br></br>
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
                        <span class="text">+49 157 3626 86 30</span>
                    </li>
                    <li>
                        <span class="icon"></span>
                        <span class="text">arslan.bah@gmail.com</span>
                    </li>
                    <li>
                        <span class="icon"></span>
                        <span class="text">linkedin.com/in/bahadir-arslan-07687161</span>
                    </li>
                    <li>
                        <span class="icon"></span>
                        <span class="text">Koerschstrasse 17 / 70599 Stuttgart</span>
                    </li>
                </div>
            </div>
        )
    }

    const style = {
        background: '#003147',
        color: 'white',
        height: '100%',
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
                    <h2>Objective</h2><br />
                    <span>
                        Python / C++ developer with extensive work experience in computer graphics production pipeline.
                        Looking for opportunities to get more familiar with AI / machine learning as well as automation in manufacturing.
                    </span>
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
                            <span>Developed, tested and documented in-house applications using mostly Python and C++. Used various libraries such as PySide/Qt.</span>
                        </li>
                        <li>
                            <span>Collaborated with cross-functional teams to design and implement new
                                  features and functionality for the company's Unreal Engine and AWS based products.</span>
                        </li>
                        <li>
                            <span>Provided technical support for digital artists in custom tool creation and
                                automation of batch processes in Maya (Vray), Blender and Unreal Engine.</span>
                        </li>
                        <li>
                            <span> Created Python modules to automate mediapackages for configurator tools / pipelines of various car companies.
                            </span>
                        </li>
                        <li>
                            <span> Developed tools for batch image comparison and editing using OpenCV.</span>
                        </li>
                        <li>
                            <span>Worked in conversion of traditional VRay rendering pipeline to Unreal Engine
                                for more than 50% performance gains. </span>
                        </li>
                        <li>
                            <span> Developed websites/tools based on react frontend and python backend and handled testing and documentation.</span>
                        </li>
                        <li>
                            <span> Worked on bugfixing and upgrading of the company's already existing tools and libraries in various programming and scripting languages such as C# and Mel Scripting.</span>
                        </li>
                    </span>
                </span>
            </div>
        );
    }

    function AdmosStudio() {

        return (
            <div class="experience-2">
                <h2>Admo's Studio (Start-Up)</h2>
                <h3>Ankara / Turkey</h3>
                <span>
                    <h3 class="uls">Technical Artist (Sep 2014 - Aug 2015)</h3>
                    <span>
                        <li>
                            <span>Supported in character modeling, texturing,
                                rigging, animation, and sound design for mobile game development.</span>
                        </li>
                        <li>
                            <span>Worked with Unreal Engine for architectural visualization projects.</span>
                        </li>
                        <li>
                            <span>Pulished mobile game: KaFa (2015).</span>
                        </li>
                    </span>
                </span>
            </div>
        );
    }

    function SanalGerceklikTeknolojileri() {

        return (
            <div class="experience-1">
                <h2>Sanal Gerceklik Teknolojileri (Start-Up)</h2>
                <h3 class="uls">Ankara / Turkey</h3>
                <span>
                    <h3>Technical Director (Jun 2011 - Sep 2014)</h3>
                    <span>
                        <li>
                            <span>Led an architectural visualization team,
                                supported in interpretation and understanding of architectural projects,
                                scheduled meetings with architects.</span>
                        </li>
                        <li>
                            <span>Provided technical support for the research and development of a holographic
                                display
                                device for the start-up company.</span>
                        </li>
                        <li>
                            <span>Managed and produced in-house tools for automating the rendering pipeline,
                                using Python and 3ds Max scripting language to increase productivity.</span>
                        </li>
                        <li>
                            <span>Took part in modeling and animation, as well as post-production and
                                advertising.</span>
                        </li>
                    </span>
                </span>
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
                <Grid item={1}>
                </Grid>
                <Grid item={1}>
                    <div>
                        <h2>Experience</h2>
                    </div>
                </Grid>
                <Grid item={3}>
                    <EderGmbH />
                </Grid>
                <Grid item={3}>
                    <AdmosStudio />
                </Grid>
                <Grid item={3}>
                    <SanalGerceklikTeknolojileri />
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