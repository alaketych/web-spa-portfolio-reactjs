import React, { Component } from "react";
import Headlines from "./Headlines"
import "../style.css"
import "../Contact.css"

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="contact-form">
                    <Headlines firstWord  = {this.props.firstWord}
                                secndWord = {this.props.secndWord} />

                    <div className="horz-divider"></div>

                    <form>
                        <input      name="name"     type="text"             className="feedback-input" placeholder="Name"   />
                        <input      name="email"    type="text"             className="feedback-input" placeholder="Email"  />
                        <textarea   name="text"     className="feedback-input"                         placeholder="Comment"/>
                        <input      type="submit"   value="Submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
