import React from "react";
import styled from "styled-components";

const ProjectDetail = ({project}) => {

    const Detail = styled.div`
        margin-left: 100px;
        margin-right: 100px
    `

    return (
        <>
        <Detail>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        </Detail>
        </>
    )
}

export default ProjectDetail;