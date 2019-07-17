import React, { Component } from "react"
import ReactDOM from "react-dom"
import Home from "./components/Home"
import "./style.css"
import { BrowserRouter as Router} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <Router>
                <Home />
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'))