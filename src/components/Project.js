import React from "react";

const Project = ({project, onProjectClick}) => {

    const handleClick = function () {
        // console.log(`Clicked on ${project}`)
        onProjectClick(project);
    }

    return (
        <div className="project">
        <h4 onClick={handleClick}>{project.title}</h4>
        {/* <p>{project.description}</p> */}
        </div>
    
    )
};

export default Project;