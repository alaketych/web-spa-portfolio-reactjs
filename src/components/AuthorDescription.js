import React, {Component} from "react"

class AuthorDescription extends Component {
    render() {
        return (
            <div className="poster">
                <div className="poster-block">
                    <div className="information">
                    <div className="circle"/>
                    <div className="dev-name">
                    <a>Alexandr Laketych</a>
                    </div>
                    <div className="dev-job">
                    <a>Software Developer</a>
                </div>
                    <div className="social-network">
                    <img src={require("../images/github-brands.svg")} />
                    <img src={require("../images/linkedin-brands.svg")} />
                    </div>
                </div>
            </div>

            <div className="or-spacer">
                <div className="mask"></div>
            </div>

            <div className="buttons">
                <button>DOWNLOAD RESUME</button>
                <button>CONTACT ME</button>
                </div>
          </div>
        );
    }
}

export default AuthorDescription;