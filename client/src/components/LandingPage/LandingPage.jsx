import React, { Component }from "react";
import SparrowLogo from "./SparrowLogo";
import { Route,Link } from "react-router-dom";
import SparrowVideo from "./SparrowVideo";
import SignUp from "../Page/SignUp";

//import "node_modules/video-react/dist/video-react.css";
//import sparrowVideo from "../../assets/img/Sparrow2_0.mp4";
import "./style.css";

class LandingPage extends Component {
 
componentDidMount(props){
  console.log(this.props);
}

render() {
return (
    <div>
     <div className="authContainer">
       <Link to="/login"> 
        <button className="btn btn-warning btn-2" id="sign-in">Login</button>
       </Link>
        <Link to="/signup"> 
        <a className="btn btn-warning btn-3" id="sign-up">Join Sparrow</a>
        </Link>
    </div>
    <SparrowLogo />
    <SparrowVideo/>
    </div>
  )
}

};



 
export default LandingPage;