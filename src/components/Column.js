import React, { Component } from "react";

export default class Column extends Component {
  render() {
    return (
      <>
        <div class="container ">
          <div class="row align-items-center">
            <div class="col-6  border border-2 border-primary">
              One of three columns
            </div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
          </div>
          <div class="row align-items-center">
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
          </div>
          <div class="row align-items-end">
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
            <div class="col">One of three columns</div>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}
