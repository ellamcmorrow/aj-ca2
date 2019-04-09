import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hunter from "./Hunter";
import axios from "axios";
import "./app.css";
import "bulma/css/bulma.css";

class HunterList extends Component {
  constructor(props) {
    super(props);
    // store the array of users in state
    //events need to be bound to this.
    this.state = { hunters: [] };
    this.updateHunters = this.updateHunters.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // when the component mounts, fetch the user data from the server
    this.updateHunters();
  }

  updateHunters() {
    // make a GET request to the server for the user data, store it in state
    axios
      .get("api/hunters")
      .then(response => {
        this.setState({ hunters: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete(hunterId) {
    // make a DELETE request to the server to remove the user with this userId
    axios
      .delete("api/hunters", {
        data: {
          id: hunterId
        }
      })
      .then(response => {
        // if delete was successful, re-fetch the list of users, will trigger a re-render
        this.updateHunters();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // for each user object, produce a User Component
    const hunterList = this.state.hunters.map(u => (
      <Hunter
        key={u._id}
        id={u._id}
        name={u.name}
        description={u.description}
        image={u.picture}
        handleDelete={this.handleDelete}
      />
    ));

    return (
      <div>
        <div className="tabs is-centered">
          <ul>
            <li>
              <Link to={"/"}>Homes</Link>
            </li>
            <li>
              <Link to={"/hunters"}>People</Link>
            </li>
            <li>
              <Link to={"/users"}>Users</Link>
            </li>
          </ul>
        </div>
        <div className="section">
          <Link to={"/create-hunter"}>Create New Advert </Link>
        </div>
        <div className="section">
          <div className="columns is-multiline  is-centered is-offset-6">
            <div>{hunterList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HunterList;
