import React, { Component } from "react"
import "../style.css"
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {

    return (
      <div className="icon-bar">
        <Link to = "/">  <a href="#">  <i className="fa fa-user"       />  </a>  </Link>
        <Link to = "/Resume">  <a href="#">  <i className="fa fa-sticky-note"/>  </a>  </Link>
        <Link to = "/Project">  <a href="#">  <i className="fa fa-folder-open"/>  </a>  </Link>
        <Link to = "/Contact">  <a href="#">  <i className="fa fa-envelope"   />  </a>  </Link>
      </div>

    )
  }
}

export default Navigation;