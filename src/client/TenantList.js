import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./app.css";
/*Tenants list provides the info of tenants in a property --> the many in the one to many relationship */
//if there are tenants display them  if not display the no tenant message
class TenantList extends Component {
  constructor(props) {
    super(props);
    this.state = { tenants: [] };
  }

  componentDidMount() {
    axios
      .get(`api/adverts/${this.props.match.params.id}/tenants`)
      .then(response => {
        this.setState({ tenants: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const tenantList = this.state.tenants.map(u => (
      <Tenant
        key={u._id}
        id={u._id}
        name={u.name}
        image={u.image}
        body={u.body}
        contact={u.contact}
      />
    ));

    return (
      <div>
        <div className="container">
          <Link to={"/"}>Homes</Link>

          {tenantList.length ? (
            <div>
              <div className="title">Tenants</div>
              <div className="level">
                <div className="columns is-multiline is-centered is-offset-4">
                  {tenantList}
                </div>
              </div>
            </div>
          ) : (
            <h2>No tenants</h2>
          )}
        </div>
      </div>
    );
  }
}

const Tenant = props => {
  return (
    <div>
      {" "}
      <div className="level-item">
        <div className="column is-mobile">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={props.image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left" />
                <div className="media-content">
                  <p className="title is-6">{props.name}</p> <br />
                  <p className="subtitle is-6">{props.body}</p>
                  <p className="subtitle is-6">{props.contact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantList;
