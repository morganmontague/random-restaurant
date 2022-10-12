import React from "react";
import App from "./App";

function Breakfast(props) {


    const listBreakfast = props.items.length > 0 ? props.items.map((item)=><li key={item.id}>{item.title}</li>) : [] //// Josh helped me on this
  
    

    return <ul>{listBreakfast}</ul>
  }
  
  export default Breakfast;