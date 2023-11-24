import React, { Component } from "react";
// import "./WorkExperienceFormEdit.css";
// import { Form,Button } from "react-bootstrap";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";

class WorkExperienceForm extends Component {
  state = {
    // WorkExperienceData: this.props.editData["WorkExperienceName"],

    ID___Data: this.props.editData["ID___"],
    CompanyData: this.props.editData["Company"],
    NameData: this.props.editData["Name"],
    EmailData: this.props.editData["Email"],
    MobileNumberData: this.props.editData["MobileNumber"],
    CityData: this.props.editData["City"],
    DistrictData: this.props.editData["District"],
    ZipData: this.props.editData["Zip"],
    StateData: this.props.editData["State"],
    AddressData: this.props.editData["Address"],
    LoanData: this.props.editData["Loan"],
    DateData: this.props.editData["Date"],
  };
  onID___DataChange(e) {
    this.setState({ ID___Data: e.target.value });
  }
  onCompanyDataChange(e) {
    this.setState({ CompanyData: e.target.value });
  }
  onNameDataChange(e) {
    this.setState({ NameDataData: e.target.value });
  }
  onEmailDataChange(e) {
    this.setState({ EmailData: e.target.value });
  }
  onMobileNumberDataChange(e) {
    this.setState({ MobileNumberData: e.target.value });
  }
  onCityDataChange(e) {
    this.setState({ CityData: e.target.value });
  }
  onDistrictDataChange(e) {
    this.setState({ DistrictData: e.target.value });
  }
  onZipDataChange(e) {
    this.setState({ ZipData: e.target.value });
  }
  onStateDataChange(e) {
    this.setState({ StateData: e.target.value });
  }
  onAddressDataChange(e) {
    this.setState({ AddressData: e.target.value });
  }
  onLoanDataChange(e) {
    this.setState({ LoanData: e.target.value });
  }
  onDateDataChange(e) {
    this.setState({ DateData: e.target.value });
  }

  componentWillMount() {
  }

  render() {
    return (
      <div>
        <h2 id="role-form-title">Edit WorkExperience Details</h2>

        <div id="role-form-outer-div">
          <Form
            id="form"
            onSubmit={e =>
              this.props.onWorkExperienceEditUpdate(this.props.editData, e)
            }
          >
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              ID___
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="ID___"
                  required
                  value={this.state.ID___Data}
                  onChange={value => this.onID___DataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Company
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Microsoft"
                  required
                  value={this.state.Company}
                  onChange={value => this.onCompanyDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Name
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Type name here..."
                  required
                  value={this.state.Name}
                  onChange={value => this.onNameDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Email
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="email"
                  placeholder="xxxx@xxx.com"
                  required
                  value={this.state.Email}
                  onChange={value => this.onEmailDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              MobileNumber
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="123456789"
                  required
                  value={this.state.MobileNumber}
                  onChange={value => this.onMobileNumberDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              City
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Type city here"
                  required
                  value={this.state.City}
                  onChange={value => this.onCityDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              District
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="email"
                  placeholder="Type district here"
                  required
                  value={this.state.District}
                  onChange={value => this.onDistrictDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Zip
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="text"
                  placeholder="Type zip here..."
                  required
                  value={this.state.Zip}
                  onChange={value => this.onZipDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              State
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Type zip here..."
                  required
                  value={this.state.State}
                  onChange={value => this.onStateDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Address
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Type address here..."
                  required
                  value={this.state.Address}
                  onChange={value => this.onAddressDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Loan
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="Text"
                  placeholder="Type Loan here..."
                  required
                  value={this.state.Loan}
                  onChange={value => this.onLoanDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
              Date
              </Form.Label>
              <Col sm={10} className="form-input">
                <Form.Control
                  type="date"
                  placeholder="xx/xx/xxxx"
                  required
                  value={this.state.Date}
                  onChange={value => this.onTateDataChange(value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-submit-button">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Update</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id="form-cancel-button">
              <Col sm={{ span: 10, offset: 2 }} id="form-cancel-button-inner">
                <Button type="reset" onClick={this.props.onFormEditClose}>
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

export default WorkExperienceForm;
