import React from "react";

function Card({ item }) {
  return (
    <>
      <div className="col-sm-4 my-2">
        <div class="card" style={{ width: "18rem" }} key={item.id}>
          <img src={item.url} class="card-img-top" alt={item.thumbnailUrl} />
          <div class="card-body">
            <h5 class="card-title">{item.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{item.id}</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
