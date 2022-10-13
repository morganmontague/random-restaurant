import React from "react";
import App from "./App";




function Breakfast(props) {


        if(props.items.length > 0){
            // return null}
            // if (props.items.length < 0){
        const breakfasts = props.items.filter(item =>
        item.category.title === 'Breakfast')
        console.log(breakfasts)
        const listItems = breakfasts.map((item)=><li key={item.id}>{item.title}<br></br>{item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <h1>Breakfast</h1>
        <ul>{listItems}</ul>
        </>)
    }
        // const listBreakfast = breakfast.map((item)=><li key={item.id}>{item.title}</li>)

  }

//   export default function List() {
//     const chemists = people.filter(person =>
//       person.profession === 'chemist'
//     );


  
  export default Breakfast;

