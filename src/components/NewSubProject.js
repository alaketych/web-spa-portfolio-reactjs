import React, { Component } from "react";

function NewSubProject(props) {
    return (
        <div className="gallery-image">
            <div className="img-box">
                <img src = { props.ProjectView } />
                <div className="transparent-box">
                    <div className="caption">
                        <p> { props.ProjectName } </p>
                        <p className="opacity-low"> { props.ProjectDesc } </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewSubProject;
