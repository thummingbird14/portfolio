import React from "react";
import Project from "./Project";

const ProjectDetail = ({project}) => {

    return (
        <div className="project-detail">
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        </div>
    )
}

export default ProjectDetail;