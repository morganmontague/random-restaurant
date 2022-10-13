import React from "react";
import App from "./App";




function Lunch(props) {


        if(props.items.length > 0){

        const Lunch = props.items.filter(item =>
        item.category.title === 'Lunch')
        console.log(Lunch)
        const listItems = Lunch.map((item)=><li key={item.id}>{item.title}<br></br>{item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <h1>Lunch</h1>
        <ul>{listItems}</ul>
        </>)
    }
}

export default Lunch