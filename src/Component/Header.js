import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <ul class="nav bg-dark justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
              Layout
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/content">
              Content
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/forms">
              Forms
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/components">
             Components
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
