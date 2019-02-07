import React,{ Component } from "react";
import "./style.css";
import API from "../../API/API"

import {Redirect } from "react-router-dom";

class LogIn extends Component {
   state = {
    username : "",
    email : "",
    password : "",
    userLoginSuccess : false
  }
  componentDidMount(props){
  console.log(this.props);
}
  handleInputChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    this.setState({[name]: value});
    console.log(this.state.email);
  }

  handleLogin = (event) => {
    event.preventDefault();
    console.log("New user signed - ",this.state);
    //console.log(this.state)
    this.loginUser(this.state)

  }

  loginUser = (user) => {

    API.login(user).then(res => {
      console.log("res");
      this.setState({userLoginSuccess: true})

    }).catch(err => console.log(err));
    }


render() {

  if (this.state.userLoginSuccess) {
      return <Redirect to='/dashboard' />
    }
    return (
 
<form  id="Login" name="login" className="formPosition">
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card custCard">
            <div className="card-header text-center">
              <h3 className="title">Enter your credentials</h3>
            </div>
            <div className="card-body">
              
                <div className="row">
                  <div className="col-md-4 pr-md-1">
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" placeholder="Username" onChange={this.handleInputChange} name="username"/>
                    </div>
                  </div>
                  <div className="col-md-4 pl-md-1">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" placeholder="john.doe@gmail.com" onChange={this.handleInputChange} name="email"/>
                    </div>
                  </div>
                  <div className="col-md-4 pl-md-1">
                    <div className="form-group">
                      <label>Password</label>
                      <input name="password" type="password" className="form-control" name="password" onChange={this.handleInputChange}/>
                    </div>
                  </div>
                </div>
                
            
            <div className="card-footer">
              <button type="submit" className="btn btn-fill btn-success" id="addNewUser" onClick={this.handleLogin}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </form>
  )

}

};

export default LogIn;