import React from "react";

import Collapse from "./collapse";

function List(props) {
  if (props.items.length > 0) {
    const place = props.page;
    const placeHolder = props.items.filter(
      (item) => item.category.title === place
    );
    const listItems = placeHolder.map((item) => (
      <div
        key={item.id}
        className="col-10 col-md-5 col-xl-3 card m-2"
        id="friedFries"
      >
        {item.title}
        <br></br>${item.price}
        <br></br>
        <Collapse index={item.id} item={item.description} />
      </div>
    )); 
    return (
      <>
        <div id="card">
          <h1>{place}</h1>
          <div className="row justify-content-center">{listItems}</div>
        </div>
      </>
    );
  }
}

export default List;
