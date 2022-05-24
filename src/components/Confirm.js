import React, { Component } from "react";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        location,
        email,
        phone,
        summary,
        experience,
      },
    } = this.props;
    return (
      <>
        <div className="cv-container"></div>
        Confirm Screen
        <div className="button-container">
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </>
    );
  }
}

export default Confirm;
