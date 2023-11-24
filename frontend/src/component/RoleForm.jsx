import React, { Component } from "react";
import "./RoleForm.css";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class RoleForm extends Component {
  state = {
    companyInfo: []
  };
  companyData = [];
  loadCompanyInfo = () => {
    axios
      .get("http://localhost:4000/api/company", {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(response => {
        this.companyData = response.data;

        this.setState({ companyInfo: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };
  componentWillMount() {
    this.loadCompanyInfo();
  }
  render() {
    return (
      <div>
        <h2 id="role-form-title">Add Role Details</h2>
        <div id="role-form-outer-div">
          <Form id="form" onSubmit={this.props.onRoleSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Company
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control as="select" name="country" required>
                  <option value="" disabled selected>
                    Select your option
                  </option>
                  {this.companyData.map((data, index) => (
                    <option value={data["_id"]}>{data["ID___"]}</option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>

            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Role
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Role"
                  name="Role"
                  required
                />
              </Col>
            </Form.Group>

            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Submit</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="reset" onClick={this.props.onFormClose}>
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default RoleForm;
