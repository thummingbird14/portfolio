import React from "react";
import Project from "./Project";
import styled from 'styled-components';

const ProjectBox = ({projects, onProjectClick}) => {

    const ProjectNodes = projects.map((project,index) => {
        return(
            <Project project={project} key={index} onProjectClick={onProjectClick}/>
        )
    });

    const Box = styled.div`
        display: flex;
    `

    return (
        <>
        <h3>Projects</h3>
        <Box>   
            {ProjectNodes}
        </Box>
        </>
    )
};

export default ProjectBox;