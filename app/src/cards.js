import React, {useState, useEffect} from 'react';
import List from './List';

let meals = [
    {id:1, title:'Breakfast',},
    {id:2, title: 'Brunch'},
    {id:3, title: 'Lunch'},
    {id:4, title: 'Apps'},
    {id:5, title:'Dinner'},
    {id:6, title: 'Dessert'},
    {id:7, title: 'Sides'},
]

function BoxCard (props) {
    let makeSquares = meals.map((square)=> <div id="menuCard" className="col-3" key={square.id}>{square.title}</div>)
return(
    <> <div className="container">
    <div className="row">{makeSquares}</div>
    </div>
    </>
)
}

export default BoxCard