import React, { Component } from "react";
import "./WorkExperience.css";
import axios from "axios";
import WorkExperienceTable from "./WorkExperienceTable.jsx";
import WorkExperienceForm from "./WorkExperienceForm.jsx";
import WorkExperienceFormEdit from "./WorkExperienceFormEdit.jsx";
class WorkExperience extends Component {
  state = {
    table: true,
    editForm: false,
    editData: {},

  };

  render() {
    return (
      <React.Fragment>
        {/* <h1>iiiiiiiiiinnnnnnnnnnnnnn{
          JSON.stringify(this.props.data)}</h1> */}

        {this.state.table ? (
          this.state.editForm ? (
            <WorkExperienceFormEdit
              onWorkExperienceEditUpdate={this.handleWorkExperienceEditUpdate}
              onFormEditClose={this.handleEditFormClose}
              editData={this.state.editData}

            />
          ) : (
              <WorkExperienceTable
                onAddWorkExperience={this.handleAddWorkExperience}
                onEditWorkExperience={this.handleEditWorkExperience}
                data={this.props.data}
                back={this.props.back}
              />
            )
        ) : (
            <WorkExperienceForm
              onWorkExperienceSubmit={this.handleWorkExperienceSubmit}
              onFormClose={this.handleFormClose}
              onGenderChange={this.handleAddFormGenderChange}
            />
          )}
      </React.Fragment>
    );
  }
  handleWorkExperienceSubmit = event => {
    event.preventDefault();
    console.log("id", event.target[0].value, event.target[1].value);
    this.setState({ table: true });

    let body = {

      ID___: event.target[0].value, 
      Company: event.target[1].value,
      Name: event.target[2].value,
      Email: event.target[3].value,
      MobileNumber: event.target[4].value,
      City: event.target[5].value,
      District: event.target[6].value,
      Zip: event.target[7].value,
      State: event.target[8].value,
      Address: event.target[9].value,
      Loan: event.target[10].value,
      Date: event.target[11].value
    };
    
    axios
      .post("http://localhost:4000/api/work-experience/" + this.props.data["_id"], body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      })
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  handleAddWorkExperience = () => {
    console.log("clicked1");
    this.setState({ table: false });
  };
  handleEditWorkExperience = e => {
    console.log(e);
    console.log("clicked6");
    this.setState({ editForm: true });
    this.setState({ editData: e });
    this.setState({ editFormGender: e["Gender"] })
  };
  handleFormClose = () => {
    console.log("clicked1");
    this.setState({ table: true });
  };
  handleEditFormClose = () => {
    console.log("clicked5");
    this.setState({ editForm: false });
  };
  // handleFormClose = () => {
  //   console.log("clicked1");
  //   this.setState({ table: true });
  // };
  handleWorkExperienceEditUpdate = (info, newInfo) => {
    newInfo.preventDefault();
    console.log("zero data", newInfo.target[0].value);
    let body = {
      ID___: newInfo.target[0].value,
      Company: newInfo.target[1].value,
      Name: newInfo.target[2].value,
      Email: newInfo.target[3].value,
      MobileNumber: newInfo.target[4].value,
      City: newInfo.target[5].value,
      District: newInfo.target[6].value,
      Zip: newInfo.target[7].value,
      State: newInfo.target[8].value,
      Address: newInfo.target[9].value,
      Loan: newInfo.target[10].value,
      Date: newInfo.target[11].value
    };
    console.log("update", body); 
    axios
      .put(
        "http://localhost:4000/api/work-experience/" + info["_id"],
        body, {
        headers: {
          authorization: localStorage.getItem("token") || ""
        }
      }
      )
      .then(res => {
        this.setState({ table: false });
        this.setState({ table: true });
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({ editForm: false });
  };

}

export default WorkExperience;
