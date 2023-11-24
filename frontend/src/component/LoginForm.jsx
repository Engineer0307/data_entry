
import React, { Component } from "react";

class LoginForm extends Component {
  render () {
    return (
      <>
      <div id="outer-login-form-div">
      <form action="" method="" onSubmit={this.props.onSubmit}>
        {/* <div className="form-group"> */}
          <input className="login-form-input"
            type="text"
            // className="form-control"
            placeholder="Email"
            required="required"
            name="Username"
          />
        {/* </div> */}
        {/* <div className="form-group"> */}
          <input className="login-form-input"
            type="password"
            // className="form-control"
            placeholder="Password"
            required="required"
          />
        {/* </div> */}
        {/* <div className="form-group"> */}
          <input className="login-form-input"
            type="submit"
            // className="btn btn-primary btn-block btn-lg btn-mystyle"
            value="Sign in"
            id="submitBtn"
          />
    
        {/* </div> */}
        {!this.props.pass ? (
          <p className="alert">Invalid UserName or Password</p>
        ) : (
          ""
        )}
      </form>
      </div>
      </>
    );

  }

}
export default LoginForm;