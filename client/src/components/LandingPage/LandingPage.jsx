import React from "react";
import SparrowLogo from "./SparrowLogo";
import { Route,Link } from "react-router-dom";
import SparrowVideo from "./SparrowVideo";
import SignUp from "../Page/SignUp";
import BackVid from "./BackVid";
//import "node_modules/video-react/dist/video-react.css";
//import sparrowVideo from "../../assets/img/Sparrow2_0.mp4";
import "./style.css";

function LandingPage()  {
	return (

        
	<div >
	{/*<div className="videoContainer">*/}
    <div className="authContainer">
    <Link to ="/signin">
    <button className="btn btn-warning btn-2" id="sign-in">
        <p>Login</p>
    </button>
    </Link>
    <Link to="/signup">
    <button className="btn btn-warning btn-3" id="sign-up">
        <p>Join Sparrow</p>
    </button>
    </Link>
        {/* <a href="/signin" className="btn btn-warning btn-2" id="sign-in">Login</a> */}
        {/* <a className="btn btn-warning btn-3" id="sign-up"><Link to="/signup">Join Sparrow</Link></a> */}
    </div>
    <SparrowLogo/>
    <SparrowVideo/>
    <BackVid/>
    <SignUp/>
    <Route path="/signup" component={SignUp}/>
    
    </div>
  )

}
 
export default LandingPage;