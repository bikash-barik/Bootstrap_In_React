import React, { Component } from "react";

export default class Badges extends Component {
  render() {
    return (
      <div className="justify-center container my-5">
          <h1>Badges </h1><hr/>
        <button type="button" class="btn btn-success rounded-circle position-relative">
          Inbox
          <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
            99+
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    );
  }
}
