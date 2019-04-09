import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";

/*This is a single card component for users it uses bulma for styling  */

class User extends React.Component {
  render() {
    return (
      <div>
        <div className="column is-multiline is-centered is-mobile">
          <div className="card">
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={this.props.image} alt="Placeholder image" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-left" />
                <div className="media-content">
                  <p className="title is-4">
                    {" "}
                    <Link to={`/tenant/${this.props.id}`}>
                      {this.props.name}
                    </Link>
                  </p>
                  <p className="subtitle is-6">{this.props.description}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  this.props.handleDelete(this.props.id);
                }}
              >
                Delete
              </button>
              <Link to={`/edit-user/${this.props.id}`}>
                <button type="button">Edit</button>
              </Link>
              <div className="content">
                <time dateTime="2016-1-1">
                  <small>11:09 PM - 6 Apr 2019</small>
                  <br />
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
