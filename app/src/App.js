import React, {useState, useEffect} from 'react';

import axios from 'axios'
import './index.css';
import HeaderForm from './HeaderForm';
import List from './List';
import BoxCard from './cards';
import Breakfast from './breakfast';
import Brunch from './brunch';
import Lunch from './Lunch';
import Dinner from './dinner';
import Appetizer from './beforethemeal';
import Side from './Sides';
import Dessert from './Dessert';
import FooterTime from './Footer';
import Test from './test';
import NavBar from './navbar';




function App(props){

const [data, setData] = useState({})
const [page, setPage] = useState('Home')

const baseURL = 'https://astute-baton-362318.ue.r.appspot.com/api/json/' 

useEffect(()=> {
function boo () {axios.get(baseURL).then((response) => {
setData(response.data)
})}
boo()}, [])





        
function handleClick (e) {
    setPage(e.target.firstChild.data)
}


{if (page ==='Breakfast'){
    return (
    <>
    <NavBar handleClick={handleClick}/>
    <List page={page} items={data} />
    <FooterTime />
    </>)
}}
{if (page=== 'Brunch'){
    return (
    <>
    <NavBar handleClick={handleClick}/>
    <List page={page} items={data} />
    <FooterTime />
    </>
    )
}}
{if (page === 'Lunch') {
return(
    <>
    <NavBar handleClick={handleClick}/>
    <List page={page} items={data} />
    <FooterTime />
    </>
    )
}}
{if (page === 'Appetizer'){
return (
    <>
    <NavBar handleClick={handleClick}/>
    <List page={page} items={data} />
    <FooterTime />
    </>
    )
}}
{if(page === 'Dinner'){
return (
    <>
    <NavBar handleClick={handleClick}/>
    <List page={page} items={data} />
    <FooterTime />
    </>
    )
}}
{if(page ==='Side'){
return (
    <>
    <NavBar handleClick={handleClick}/>
    <List page={page} items={data} />
    <FooterTime />
    </>
    )
}}
{if(page ==='Dessert'){
    return (
    <>
    <NavBar handleClick={handleClick}/>
    <List page={page} items={data} />
    <FooterTime />
    </>
    )
}}
console.log(page)
{if(page ==='Home'){
    return(
        <>
    <NavBar handleClick={handleClick}/>
    <FooterTime />
        </>
    )
}}

// return(
//     <>
//     <NavBar handleClick={handleClick}/>
    
//     <BoxCard />
//     <FooterTime />
//     </>
// )
}



export default App;
