import React from "react";
import App from "./App";




function Apps_before(props) {


        if(props.items.length > 0){

        const Apps_before = props.items.filter(item =>
        item.category.title === 'Apps_before')
        console.log(Apps_before)
        const listItems = Apps_before.map((item)=><li key={item.id}>{item.title}<br></br>{item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <h1>Apps_before</h1>
        <ul>{listItems}</ul>
        </>)
    }
}

export default Apps_before