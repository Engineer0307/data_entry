import React, { Component } from "react";
import "./WorkExperienceForm.css";
import { Button, Col, Row } from "react-bootstrap";
import axios from "axios";
//--------------------------------------------------
import FloatingLabel from "react-bootstrap-floating-label";
import Form from "react-bootstrap/Form";
class WorkExperienceForm extends Component {
  state = {};
  componentWillMount() {}
  render() {
    return (
      <div>
        <h2 id='role-form-title'>Dashboard</h2>
        <div id='role-form-outer-div'>
          <p></p>
          <Form id='form' onSubmit={this.props.onWorkExperienceSubmit}>
            <Row className='g-4'>
              <Col md>
                <FloatingLabel
                  controlId='floatingPassword'
                  label='ID'
                  className='mb-3'>
                  <Form.Control type='text' placeholder='ID' />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId='floatingPassword' label='COMPANY'>
                  <Form.Control type='text' placeholder='COMPANY' />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId='floatingPassword' label='NAME'>
                  <Form.Control type='text' placeholder='NAME' />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId='floatingPassword' label='EMAIL'>
                  <Form.Control type='email' placeholder='EMAIL' />
                </FloatingLabel>
              </Col>
            </Row>

            <Row className='g-4'>
              <Col md>
                <FloatingLabel
                  controlId='floatingPassword'
                  label='MOBILE NUMBER'
                  className='mb-3'>
                  <Form.Control type='number' placeholder='MOBILE NUMBER' />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId='floatingPassword' label='CITY'>
                  <Form.Control type='text' placeholder='CITY' />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId='floatingPassword' label='DISTRICT'>
                  <Form.Control type='text' placeholder='DISTRICT' />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId='floatingPassword' label='ZIP'>
                  <Form.Control type='number' placeholder='ZIP' />
                </FloatingLabel>
              </Col>
            </Row>

            <Row className='g-4'>
              <Col md>
                <FloatingLabel
                  controlId='floatingPassword'
                  label='STATE'
                  className='mb-3'>
                  <Form.Control type='text' placeholder='STATE' />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId='floatingPassword' label='ADDRESS'>
                  <Form.Control type='text' placeholder='ADDRESS' />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId='floatingPassword' label='LOAN'>
                  <Form.Control type='text' placeholder='LOAN' />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel controlId='floatingPassword' label='DATE'>
                  <Form.Control type='date' placeholder='DATE' />
                </FloatingLabel>
              </Col>
            </Row>
            <Row className='g-4'>
              <Col md>
                <Form.Group id='form-button'>
                  <Button type='submit'>Submit</Button>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group id='form-button'>
                  <Button type='button'>Save</Button>
                </Form.Group>
              </Col>
              <Col md>
                <Form.Group id='form-button'>
                  <Button type='reset' onClick={this.props.onFormClose}>
                    Clear All
                  </Button>
                </Form.Group>
              </Col>
              <Col md></Col>
              <Col md></Col>
              <Col md></Col>
              <Col md></Col>
            </Row>
          </Form>
          {/* <Form id='form' onSubmit={this.props.onWorkExperienceSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                ID___
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='Text' placeholder='text' required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Company
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='Text' placeholder='Microsoft' required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='Text' placeholder='GerdMuler' required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control
                  type='email'
                  placeholder='xxxx@xxxx.com'
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                MobileNumber
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='text' placeholder='123456789' required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                City
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='text' placeholder='Here city...' required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                District
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control
                  type='text'
                  placeholder='Here district...'
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                ZIP
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='text' placeholder='text' required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                State
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='text' placeholder='text' required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Address
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='text' placeholder='text' required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Loan
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='text' placeholder='text' required />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Date
              </Form.Label>
              <Col sm={10} className='form-input'>
                <Form.Control type='date' placeholder='xx/xx/xxxx' required />
              </Col>
            </Form.Group>
            <br />

            <Form.Group as={Row} id='form-submit-button'>
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type='submit'>Submit</Button>
              </Col>
            </Form.Group>
            <Form.Group as={Row} id='form-cancel-button'>
              <Col sm={{ span: 10, offset: 2 }} id='form-cancel-button-inner'>
                <Button type='reset' onClick={this.props.onFormClose}>
                  cancel
                </Button>
              </Col>
            </Form.Group>
          </Form> */}
        </div>
      </div>
    );
  }
}

export default WorkExperienceForm;
