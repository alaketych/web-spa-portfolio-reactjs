import React, { Component } from "react";

function Headlines(props) {
    return (
        <div className="header-form">
            <a className="first-word">
                <p>{props.firstWord}</p>
            </a>

            <a className="second-word">
                <p>{props.secndWord}</p>
            </a>
        </div>
    );
}

export default Headlines;