import React from "react";
import App from "./App";
import NavBar from "./navbar";
import FooterTime from "./Footer";
import BoxCard from "./cards";



function Side(props) {


        if(props.items.length > 0){

        const Side = props.items.filter(item =>
        item.category.title === 'Side')
        console.log(Side)
        const listItems = Side.map((item)=><li key={item.id}>{item.title}<br></br>${item.price}<br></br>{item.description}</li>) //// Josh helped me on this
        return( 
        <>
        <NavBar handleClick={props.handleClick}/>
    
    <div id="card">
    <h1>Side</h1>
    <ul>{listItems}</ul>
    </div>
    <BoxCard />
    <FooterTime />
        </>)
    }
}

export default Side