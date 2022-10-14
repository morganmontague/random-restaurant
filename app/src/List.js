import React from "react";
import App from "./App";



function List(props) {


  if(props.items.length > 0){
  const place = props.page
  const placeHolder = props.items.filter(item =>
  item.category.title === place)
  const listItems = placeHolder.map((item)=><li key={item.id} className="card" id="friedFries">{item.title}<br></br>${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
  return( 
  <>
<div id="card">
<h1>{place}</h1>
<ul>{listItems}</ul>
</div>
  </>)
}
}


export default List;


