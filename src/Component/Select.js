import React, { Component } from "react";

export default class Select extends Component {
  render() {
    return (
      <div className="container my-5">
        <select
          className="form-select form-select-lg mb-3 "
          aria-label=".form-select-lg example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>

        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    );
  }
}
