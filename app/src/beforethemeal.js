import React from "react";
import App from "./App";
import NavBar from "./navbar";
import FooterTime from "./Footer";
import BoxCard from "./cards";




function Appetizer(props) {


        if(props.items.length > 0){

        const Appetizer = props.items.filter(item =>
        item.category.title === 'Appetizer')
        console.log(Appetizer)
        const listItems = Appetizer.map((item)=><li key={item.id} className="card" id="friedFries">{item.title}<br></br>${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
    <div id="card">
    <h1>Appetizer</h1>
    <ul>{listItems}</ul>
    </div>
        </>)
    }
}

export default Appetizer