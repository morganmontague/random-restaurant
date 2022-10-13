import React from "react";
import App from "./App";




function Dessert(props) {


        if(props.items.length > 0){

        const Dessert = props.items.filter(item =>
        item.category.title === 'Dessert')
        const listItems = Dessert.map((item)=><li key={item.id}>{item.title}<br></br>{item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <h1>Desserts</h1>
        <ul>{listItems}</ul>
        </>)
    }
}

export default Dessert