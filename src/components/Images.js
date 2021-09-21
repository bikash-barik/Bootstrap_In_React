import React, { Component } from "react";

export default class Images extends Component {
  render() {
    return (
        <>
      <div className="container-fluid d-md-inline-flex mt-5">
        <div>
          <img
            src="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg"
            className="img-thumbnail"
            alt="..."
            width="80%"
          ></img>
        </div>
        <div className="">
          <p className="text-start text-primary mt-5 align-text-bottom">
            Lorem kgfvjidvbhfjdvbdsfjkvbdfjfdnjfkdvnruogkt me0wrije fjoejfio
            noimj
          </p>
        </div>

        
      </div>
      <div className="container my-5">
          <div>
          <img src="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg" class="rounded float-start" alt="..." className="" width="50%" />
          </div>
          <img src="https://analyticsindiamag.com/wp-content/uploads/2020/10/7d744a684fe03ebc7e8de545f97739dd.jpg" class="rounded float-end" alt="..." width="50%"/>
        </div>
      </>
    );
  }
}
