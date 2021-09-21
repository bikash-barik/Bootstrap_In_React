import React, { Component } from "react";

export default class Typography extends Component {
  render() {
    return (
      <div className="container my-5 text-center ">
        <p className="h1">Typography</p>

        <hr />
        <p className="h1">h1. Bootstrap heading</p>
        <p className="h2">h2. Bootstrap heading</p>
        <p className="h3">h3. Bootstrap heading</p>
        <p className="h4">h4. Bootstrap heading</p>
        <p className="h5">h5. Bootstrap heading</p>
        <p className="h6">h6. Bootstrap heading</p>
        <span className="h4"> h6. Bootstrap Heading</span>
      </div>
    );
  }
}
