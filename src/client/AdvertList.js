import React, { Component } from "react";
import { Link } from "react-router-dom";
import Advert from "./Advert";
import axios from "axios";
import "./app.css";
import "bulma/css/bulma.css";

class AdvertList extends Component {
  constructor(props) {
    super(props);
    // store the array of Adverts in state
    this.state = { adverts: [] };
    this.updateAdverts = this.updateAdverts.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    // when the component mounts, get the Advert data from the server
    this.updateAdverts();
  }

  updateAdverts() {
    // make a GET request to the server for the Advert data, store it in state
    axios
      .get("api/adverts")
      .then(response => {
        this.setState({ adverts: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleDelete(AdvertId) {
    // make a DELETE request to the server to remove the Advert with this AdvertId
    axios
      .delete("api/adverts", {
        data: {
          id: AdvertId
        }
      })
      .then(response => {
        // if delete was successful, re-fetch the list of Adverts, will trigger a re-render
        this.updateAdverts();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // for each Advert object, produce a Advert Component props insert the name description and img
    const advertList = this.state.adverts.map(u => (
      <Advert
        key={u._id}
        id={u._id}
        name={u.name}
        description={u.description}
        image={u.picture}
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
          <div className="columns is-multiline  is-centered is-offset-6">
            <div>{advertList}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdvertList;
