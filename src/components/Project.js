import React from "react";

const Project = ({project, onProjectClick}) => {

    const handleClick = function () {
        onProjectClick(project);
    }

    return (
        <div className="project">
        <button onClick={handleClick}>{project.title}</button>
        </div>
    
    )
};

export default Project;