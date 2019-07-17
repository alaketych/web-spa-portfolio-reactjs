import React, { Component } from "react"
import AuthorDescription from "./AuthorDescription"
import About from "./About"
import Contact from "./Contact"
import Navigation from "./Navigation"
import Project from "./Project"
import "../style.css"
import { Switch, Route } from "react-router-dom"


class Home extends Component {
  render() {
    return (
      <div className="App">

        <Navigation />
        <AuthorDescription />

        <div className="feed">

          <Switch>
            <Route path="/" exact component = { About } />
            <Route path="/Contact" render = { () => <Contact firstWord="Contact" secndWord="Form" /> } />
            <Route path="/Project" render = { () => <Project firstWord="My" secndWord="Projects" /> } />
          </Switch>

        </div>
      </div>
    )
  }
}

export default Home;