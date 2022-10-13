import React from "react";
import App from "./App";
import {useState} from "react"




function Breakfast(props) {

        if(props.items.length > 0){

        const breakfasts = props.items.filter(item =>
        item.category.title === 'Breakfast')
        const listItems = breakfasts.map((item)=><li key={item.id} className="card" id="friedFries">{item.title}&nbsp; &nbsp; &nbsp;${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <div id="card">
        <h1>Breakfast</h1>
        <ul>{listItems}</ul>
        </div>
        </>)
    }
        // const listBreakfast = breakfast.map((item)=><li key={item.id}>{item.title}</li>)

  }
// {isActive ? "testingToggle" : null}
//   export default function List() {
//     const chemists = people.filter(person =>
//       person.profession === 'chemist'
//     );


  
  export default Breakfast;

