import React from "react";
import App from "./App";



function List(props) {


  const listItems = props.items.length > 0 ? props.items.map((item)=><li key={item.id}>{item.title}</li>) : [] //// Josh helped me on this

  return <ul>{listItems}</ul>
}

export default List;


