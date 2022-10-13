import React from "react";
import App from "./App";




function Appetizer(props) {


        if(props.items.length > 0){

        const Appetizer = props.items.filter(item =>
        item.category.title === 'Appetizer')
        console.log(Appetizer)
        const listItems = Appetizer.map((item)=><li key={item.id}>{item.title}<br></br>${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <h1>Appetizers</h1>
        <ul>{listItems}</ul>
        </>)
    }
}

export default Appetizer