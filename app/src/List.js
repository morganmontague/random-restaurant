import React from "react";
import App from "./App";



function List(props) {


  const listItems = props.items.length > 0 ? props.items.map((item)=><li key={item.id}>{item.title}<br></br>{item.price}<br></br>{item.description}</li>) : [] //// Josh helped me on this

  if(props.items.length !== 0 ){
    (console.log('hi'))

}

  return <ul>{listItems}</ul>
}

export default List;


