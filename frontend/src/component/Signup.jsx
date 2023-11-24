
import React, { Component } from "react";

class Signup extends Component {
  render () {
    return (
      <>
      <div id="outer-login-form-div">
      <form action="" method="" onSubmit={this.props.onSubmit}>
        {/* </div> */}
        {/* <div className="form-group"> */}
          <input className="login-form-input"
            type="submit"
            // className="btn btn-primary btn-block btn-lg btn-mystyle"
            value="Sign Up"
            id="submitBtn"
          />

      </form>
      </div>
      </>
    );

  }

}
export default Signup;