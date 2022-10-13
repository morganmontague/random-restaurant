import React from "react";
import App from "./App";




function Dinner(props) {


        if(props.items.length > 0){

        const Dinner = props.items.filter(item =>
        item.category.title === 'Dinner')
        const listItems = Dinner.map((item)=><li key={item.id}>{item.title}<br></br>${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <h1>Dinner</h1>
        <ul>{listItems}</ul>
        </>)
    }
}

export default Dinner