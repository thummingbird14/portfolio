import React from "react";
import Project from "./Project";
import styled from 'styled-components';

const ProjectBox = ({projects, onProjectClick}) => {

    const ProjectNodes = projects.map((project,index) => {
        return(
            <Project project={project} key={index} onProjectClick={onProjectClick}/>
        )
    });

    const Title = styled.div`
        margin-left: 100px;
        margin-right: 100px
    `
    const Box = styled.div`
        display: flex;
        justify-content: space-evenly;
    `

    return (
        <>
        <Title>
        <h3>Projects</h3>
        </Title>
        <Box>   
            {ProjectNodes}
        </Box>
        </>
    )
};

export default ProjectBox;