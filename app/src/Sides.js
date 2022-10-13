import React from "react";
import App from "./App";




function Sides(props) {


        if(props.items.length > 0){

        const Sides = props.items.filter(item =>
        item.category.title === 'Sides')
        console.log(Sides)
        const listItems = Sides.map((item)=><li key={item.id}>{item.title}<br></br>{item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <h1>Sides</h1>
        <ul>{listItems}</ul>
        </>)
    }
}

export default Sides