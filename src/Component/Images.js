import React, { Component } from "react";

export default class Images extends Component {
  render() {
    return (
      <div className="container d-md-inline-flex my-5 justify-center mx-5">
        <div>
          <img
            src="https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg"
            className="img-fluid"
            alt="..."
            width="100%"
          ></img>
        </div>

        <div className="m-2">
          <p className="h1">h1. Bootstrap heading</p>
          <p className="h2">h2. Bootstrap heading</p>
          <p className="h3">h3. Bootstrap heading</p>
          <p className="h4">h4. Bootstrap heading</p>
          <p className="h5">h5. Bootstrap heading</p>
          <p className="h6">h6. Bootstrap heading</p>
          <span className="h4"> h6. Bootstrap Heading</span>
        </div>
      </div>
    );
  }
}
