import React, { Component } from "react";

export class Summary extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h1>Enter Summary</h1>
        <div className="summary-container">
          <div className="summary-enter">
            <form className="summary-form">
              <label>
                Summary (Max 1500 characters):
                <br></br>
                <textarea
                  className="textarea-summary"
                  onChange={handleChange("summary")}
                  placeholder="Enter a summary"
                  defaultValue={values.summary}
                  maxLength="1500"
                />
              </label>
            </form>
          </div>
          <div className="tips">
            <h3>Write about:</h3>
            <li>Experience</li>
            <li>Skills</li>
            <li>Job Highlights</li>
          </div>
        </div>
        <div className="button-container">
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.continue}>Continue</button>
        </div>
      </div>
    );
  }
}

export default Summary;
