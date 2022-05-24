import React, { Component, useContext } from "react";
import ExperienceForm from "./ExperienceForm";
import ExperienceContext from "../context/ExperienceContext";

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

    const { jobs } = useContext(ExperienceContext);

    return (
      <div>
        <div className="experience-container"></div>
        <ExperienceForm />
        <div className="button-container">
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default ExperiencePage;
