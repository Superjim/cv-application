import React, { Component } from "react";

export class Profile extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h1>Enter Profile Details</h1>
        <form>
          <label>
            First Name:
            <input
              onChange={handleChange("firstName")}
              type="text"
              placeholder="First Name"
              defaultValue={values.firstName}
            />
          </label>
          <label>
            Last Name:
            <input
              onChange={handleChange("lastName")}
              type="text"
              placeholder="Last Name"
              defaultValue={values.lastName}
            />
          </label>
          <br></br>
          <label>
            Location:
            <input
              onChange={handleChange("location")}
              type="text"
              placeholder="Location"
              defaultValue={values.location}
            />
          </label>
          <br></br>
          <label>
            Email Address:
            <input
              onChange={handleChange("email")}
              type="email"
              placeholder="Email Address"
              defaultValue={values.email}
            />
          </label>
          <br></br>
          <label>
            Phone Number:
            <input
              onChange={handleChange("phone")}
              type="tel"
              placeholder="Phone Number"
              defaultValue={values.phone}
            />
          </label>
          <br></br>
          <button onClick={this.continue}>Continue</button>
        </form>
      </div>
    );
  }
}

export default Profile;
