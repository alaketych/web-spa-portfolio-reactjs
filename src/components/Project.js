import React, { Component } from "react";
import NewSubProject from "./NewSubProject"
import Headlines from "./Headlines"
import "../Project.css"

class Project extends Component {
    render() {
        return (
            <div className="gallery-image">
                <Headlines  firstWord = { this.props.firstWord }
                            secndWord = { this.props.secndWord } />

                <div className="horz-divider"></div>

{/*
                <img src={require("../images/github-brands.svg")} /> */}
                <NewSubProject  ProjectView = {require('../images/frst_prjct.png')}
                                ProjectName = "Pure HTML/CSS Web Page"
                                ProjectDesc = "It was my first uploaded reposotiroty on github. I was proud of my self to write a small web-page and to upload it. I understand this is low level and i shouldn't share it with people. However it reminds me how it all began. So, here I've just used html and css tag and nothing else." />


                <NewSubProject  ProjectView = {require('../images/scnd_prjct.png')}
                                ProjectName = "Masserati Online Shop"
                                ProjectDesc = "This is my first attempt to find out the complexity of ASP.NET developing. Here I tried to work with database - Microsoft SQL Server. So, machine information is taken from the small database." />


                <NewSubProject  ProjectView = {require('../images/thrd_prjct.png')}
                                ProjectName = "Switch Button"
                                ProjectDesc = "Obviously, this doesn't count as a big project or the stuff like that, but here I wanted to show how I can design own components such as toggle button, button which is not in the Toolbox list and in addition it's a test task to be hired in a company." />


                <NewSubProject  ProjectView = {require('../images/frth_prjct.png')}
                                ProjectName = "Messenger"
                                ProjectDesc = "The original idea was to write a simple messenger with pen-friends by common interest. We were inspired to do it, although our knowledge in building such serious desktop application was enought difficult to handle with it. Therefore, my colleagues'd given up, but I did not. This messenger has authentification and registration for new user, all data is stored on SQL Server." />
            </div>
        )
    }
}

export default Project;
