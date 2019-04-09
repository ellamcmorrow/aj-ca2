import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class CreateHunter extends Component {
  constructor(props) {
    super(props);
    // store form fields in state
    this.state = { name: "", description: "", picture: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // one of the input boxes changed, update the state to match
    // note: name of the input boxes must match the property names in state
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    // send a POST request to the server
    // the request includes the state, which is the info. for the new user to be created
    axios
      .post("/api/hunters", this.state)
      .then(res => this.props.history.push("/hunters")) // if successful go to hunters page
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // note: name of the inputs must match the property names in state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Create New Hunt Ad</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Image:
            <input
              type="text"
              name="picture"
              value={this.state.picture}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreateHunter;
