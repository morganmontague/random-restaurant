import React from "react";
import App from "./App";
import NavBar from "./navbar";
import FooterTime from "./Footer";
import BoxCard from "./cards";




function Lunch(props) {


        if(props.items.length > 0){

        const Lunch = props.items.filter(item =>
        item.category.title === 'Lunch')
        const listItems = Lunch.map((item)=><li key={item.id}>{item.title}<br></br>${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <NavBar handleClick={props.handleClick}/>
    
    <div id="card">
    <h1>Lunch</h1>
    <ul>{listItems}</ul>
    </div>
    <BoxCard />
    <FooterTime />
        </>)
    }
}

export default Lunch