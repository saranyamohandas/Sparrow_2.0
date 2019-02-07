import React,{ Component } from "react";
import API from "../../API/API"
import "./style.css";
import { Redirect } from "react-router-dom";


class SignUp extends Component {
  state = {
    username : "",
    email : "",
    password : "",
    firstname : "",
    lastname : "",
    userSignupSuccess : false
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

  handleSignup = (event) => {
    event.preventDefault();
    console.log("New user signed - ",this.state);
    //console.log(this.state)
    this.signupUser(this.state)

  }

  signupUser = (user) => {
    API.signup(user).then(res => {
      console.log("res");
      this.setState({userSignupSuccess: true})

    }).catch(err => console.log(err));
    }
  

render() {

if (this.state.userSignupSuccess) {
      return <Redirect to='/dashboard' />
    }
    return (
<form  id="signup" name="signup" className="formPosition">
    <div className="content">
      <div className="row">
        <div className="col-md-12">
          <div className="card custCard">
            <div className="card-header text-center">
              <h3 className="title">Create Profile</h3>
            </div>
            <div className="card-body">
              
                <div className="row">
                  <div className="col-md-4 pr-md-1">
                    <div className="form-group">
                      <label>Username</label>
                      <input type="text" className="form-control" onChange={this.handleInputChange} placeholder="Username" name="username"/>
                    </div>
                  </div>
                  <div className="col-md-4 pl-md-1">
                    <div className="form-group">
                      <label>Email Address</label>
                      <input type="email" className="form-control" onChange={this.handleInputChange} placeholder="john.doe@gmail.com" name="email"/>
                    </div>
                  </div>
                  <div className="col-md-4 pl-md-1">
                    <div className="form-group">
                      <label>Password</label>
                      <input name="password" type="password" className="form-control" onChange={this.handleInputChange} name="password" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 pr-md-1">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" className="form-control" placeholder="First Name" name="firstname"/>
                    </div>
                  </div>
                  <div className="col-md-6 pl-md-1">
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" className="form-control" placeholder="Last Name" name="lastname"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Address</label>
                      <input type="text" className="form-control"  placeholder="Home Address"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 pr-md-1">
                    <div className="form-group">
                      <label>City</label>
                      <input type="text" className="form-control" placeholder="City"/>
                    </div>
                  </div>
                  <div className="col-md-4 px-md-1">
                    <div className="form-group">
                      <label>Country</label>
                      <input type="text" className="form-control" placeholder="Country"/>
                    </div>
                  </div>
                  <div className="col-md-4 pl-md-1">
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input type="number" className="form-control" placeholder="ZIP Code"/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-8">
                    <div className="form-group">
                      <label>About Me</label>
                      <textarea rows="4" cols="80" className="form-control" placeholder="Tell us a bit about yourself"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            
            <div className="card-footer">
              <button type="submit" onClick={this.handleSignup} className="btn btn-fill btn-success" id="addNewUser">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  )
  }


};

export default SignUp;