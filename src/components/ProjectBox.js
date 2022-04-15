import React from "react";
import Project from "./Project";

const ProjectBox = ({projects, onProjectClick}) => {

    const ProjectNodes = projects.map((project,index) => {
        return(
            <Project project={project} key={index} onProjectClick={onProjectClick}/>
        )
    });

    return (
        <div className="project-box">
            <h3>Projects</h3>
            {ProjectNodes}
        </div>
    )
};

export default ProjectBox;