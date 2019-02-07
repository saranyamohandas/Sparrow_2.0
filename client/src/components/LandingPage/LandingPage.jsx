import React,{Component} from "react";
import SparrowLogo from "./SparrowLogo";
import { Link } from "react-router-dom";
import SparrowVideo from "./SparrowVideo";
import BackVid from "./BackVid";
import {Component} from "react";
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
        <button className="btn btn-success btn-2" id="sign-in">Login</button>
       </Link>
        <Link to="/signup"> 
        <a className="btn btn-success btn-3" id="sign-up">Join Sparrow</a>
        </Link>

      </div>
    <SparrowLogo />
    <SparrowVideo/>

    <BackVid/>
  
    

    </div>
  )
}

};



 
export default LandingPage;