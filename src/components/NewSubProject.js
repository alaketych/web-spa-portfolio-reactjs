import React, { Component } from "react";

// class NewSubProject extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="gallery-image">
//                     <div className="img-box">
//                         <img src={require("../images/1.jpg")} />
//                         <div className="transparent-box">
//                             <div className="caption">
//                                 <p>Library</p>
//                                 <p className="opacity-low">Architect Design</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

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
