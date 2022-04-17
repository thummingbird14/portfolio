import React from "react";
import styled from "styled-components"

const Project = ({project, onProjectClick}) => {

    const handleClick = function () {
        onProjectClick(project);
    }
    
    const Button = styled.div`
        width: 250px;
        background-image: linear-gradient(92.88deg, #455EB5 9.16%, #5643CC 43.89%, #673FD7 64.72%);
        border-radius: 8px;
        border-style: none;
        box-sizing: border-box;
        color: #FFFFFF;
        cursor: pointer;
        flex-shrink: 0;
        font-size: 16px;
        font-weight: 500;
        height: 4rem;
        padding: 0 1.6rem;
        text-align: center;
        transition: all .5s;
        touch-action: manipulation;
    `

    return (
        <div>
        <Button>
        <button onClick={handleClick}>{project.title}</button>
        </Button>
        </div>
    
    )
};

export default Project;