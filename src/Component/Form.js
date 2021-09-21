import React, { Component } from "react";

export default class Form extends Component {
  render() {
    return (
      <div className="container my-5 w-50 bg-primary border border-2 rounded  shadow p-3 mb-5 rounded">
          <h1>Form</h1><hr/>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3 ">
          <label for="exampleFormControlTextarea1" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    );
  }
}
