import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// Component to represent a single User 'Card'
// note that the edit button navigates to a new URL (which will load a new Component via React Router)
// whereas the delete button invokes a function in the parent Component
class Hunter extends React.Component {
  // define what happens when this componet gets drawn on the UI
  render() {
    return (
      <div>
        <div className="column is-multiline is-centered is-mobile">
          <div className="column is-mobile">
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
                    <p className="title is-4">{this.props.name}</p>
                    <p className="subtitle is-6">{this.props.description}</p>
                  </div>
                </div>
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
      </div>
    );
  }
}

export default Hunter;
