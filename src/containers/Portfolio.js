import React , {useState} from "react";
import ProjectBox from "../components/ProjectBox";
import ProjectDetail from "../components/ProjectDetail";
import styled from 'styled-components';

const Portfolio = () => {

    const [projects, setProjects] = useState(
        [
            {
                id: 1,
                title: "Misty Vets Python Project",
                description: "A vet management app written in Python"
            },
            {
                id: 2,
                title: "Studio Ghibli app",
                description: "A React app displaying data from the Studio Ghibli API"
            }
        ]
    )

    const [selectedProject, setSelectedProject] = useState(null);

    const onProjectClick = function(project) {
        setSelectedProject(project);
    }

    const About = styled.div`
        margin-left: 100px;
        margin-right: 100px
    `

    return (
        <div>
        <About>
        <h1>Tanya Purcell</h1>
        <h2>Software Developer</h2>
        <p>I am a software developer based in Edinburgh. I am experienced in 
        Python, JavaScript and React.js</p>
        </About>
        <ProjectBox projects={projects} onProjectClick={onProjectClick}/>
        {selectedProject ? <ProjectDetail project={selectedProject} /> : null}
        </div>
    );
}

export default Portfolio;