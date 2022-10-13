import React from "react";
import App from "./App";




function Side(props) {


        if(props.items.length > 0){

        const Side = props.items.filter(item =>
        item.category.title === 'Side')
        console.log(Side)
        const listItems = Side.map((item)=><li key={item.id}>{item.title}<br></br>${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <h1>Sides</h1>
        <ul>{listItems}</ul>
        </>)
    }
}

export default Side