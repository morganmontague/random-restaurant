import React from "react";
import App from "./App";

function Design() {
  console.log("hi");
  return (
    <>
      <main className="container-fluid">
        <div className="row">
          <div id="card">
            <h1>{place}</h1>
            <ul>{listItems}</ul>
          </div>
        </div>
      </main>
    </>
  );
}

export default Design;
