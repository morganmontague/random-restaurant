import React from "react";
import App from "./App";




function Brunch(props) {


        if(props.items.length > 0){

        const brunch = props.items.filter(item =>
        item.category.title === 'Brunch')
        const listItems = brunch.map((item)=><li key={item.id}>{item.title}<br></br>${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <h1>Brunch</h1>
        <ul>{listItems}</ul>
        </>)
    }
}

export default Brunch

