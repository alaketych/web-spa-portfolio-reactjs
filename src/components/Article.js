import React, { Component } from "react";
import Headlines from "./Headlines"

class Article extends Component {
  render() {
    return (
      <div className="article">

        <Headlines firstWord = { this.props.firstWord }
                   secndWord = { this.props.secndWord } />

        <div className="horz-divider" />

        <div className="info-text">
          <div className="first-info">
            <p>{this.props.firstInfo}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
