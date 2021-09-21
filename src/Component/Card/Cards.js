import React from "react";

export default function Cards(props) {
  return (
    <div className="container">
      <div class="card" style={{ width: "18rem", height: "40rem" }}>
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.cont}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
