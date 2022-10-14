import React from "react";
import App from "./App";
import NavBar from "./navbar";
import FooterTime from "./Footer";
import BoxCard from "./cards";



function Brunch(props) {


        if(props.items.length > 0){

        const brunch = props.items.filter(item =>
        item.category.title === 'Brunch')
        const listItems = brunch.map((item)=><li key={item.id} className="card" id="friedFries">{item.title}<br></br>${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <NavBar handleClick={props.handleClick}/>
    
    <div id="card">
    <h1>Brunch</h1>
    <ul>{listItems}</ul>
    </div>
    <BoxCard />
    <FooterTime />
        </>)
    }
}

export default Brunch

