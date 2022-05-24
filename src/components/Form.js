import React, { Component } from "react";
import Profile from "./Profile";
import Summary from "./Summary";
import Confirm from "./Confirm";
import Experience from "./Experience";

export class Form extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    phone: "",
    summary: "",
    experience: [],
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };

  handleArrayChange = (input) => (e) => {
    this.setState({ [input]: [...this.state.input, e.target.value] });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, location, email, phone, summary, experience } =
      this.state;
    const values = {
      firstName,
      lastName,
      location,
      email,
      phone,
      summary,
      experience,
    };

    switch (step) {
      default:
        return console.log("error");

      case 1:
        return (
          <Profile
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
          <Summary
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <Experience
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 4:
        return <h1>Education</h1>;

      case 5:
        return <h1>Skills</h1>;
      case 6:
        return (
          <Confirm
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            values={values}
          />
        );
    }
  }
}

export default Form;
