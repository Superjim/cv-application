import React, { Component } from "react";

class ExperiencePage extends Component {
  continue = (e) => {
    e.preventDefault();
    //handlesubmit
    this.props.nextStep();
  };

  previous = (e) => {
    e.preventDefault();
    //handlesubmit
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <h1>Work Experience</h1>
        <div className="experience-container">
          <label>
            Job Title:
            <input name="title" type="text" placeholder="Job Title" />
          </label>
          <br></br>
          <label>
            Company:
            <input name="company" type="text" placeholder="Company" />
          </label>
          <br></br>
          <label>
            Start Date:
            <input name="start" type="date" />
          </label>
          <label>
            End Date:
            <input name="end" type="date" />
          </label>
          <br></br>
          <input type="submit" value="Add Experience" />
        </div>
        <div className="button-container">
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default ExperiencePage;
