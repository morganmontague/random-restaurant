import React, {useState, useEffect} from 'react';

import axios from 'axios'
import './index.css';
import HeaderForm from './HeaderForm';
import List from './List';
import BoxCard from './cards';
import ToggleClass from './addclick';
import Breakfast from './breakfast';
import Brunch from './brunch';
import Lunch from './Lunch';
import Dinner from './dinner';
import Appetizer from './beforethemeal';
import Side from './Sides';
import Dessert from './Dessert';
import FooterTime from './Footer';
import Test from './test';




function App(props){
const [isActive, setIsActive] = useState(false)
const [data, setData] = useState({})
const [page, setPage] = useState('Home')

const baseURL = 'https://astute-baton-362318.ue.r.appspot.com/api/json/' 

useEffect(()=> {
function boo () {axios.get(baseURL).then((response) => {
setData(response.data)
})}
boo()}, [])


// setData = {setData}


    // function getList (props) {
    //     console.log('click')
    //     return <>
    //     <button onClick={<getList items={props.data} />}>Trying to make a button</button>
    //     </>
    // }
    // function testingToggle () {
        // const [isActive, setActive] = useState("false")
        
    
    //  } 
    //     const handleToggle = () => {
    //         console.log('clicky')
    //       setActive(!isActive);
    //     }

let fried = (isActive ? "d-none" : null)
        
    
    function handleClick (e) {
        console.log(e.target.firstChild.data)
        setPage =e.target.firstChild.data
        console.log(page)
    }
console.log(page)

return(
    <>
    <HeaderForm />
    <button  onClick={handleClick}>Click meh</button>
    
    {/* <List items={data} /> */}
    <Breakfast items={data} />
    {/* <Brunch items={data} />
    <Lunch items={data} />
    <Appetizer items={data} />
    <Dinner items={data} />
    <Side items={data} />
    <Dessert items={data} /> */}
    <BoxCard />
    <FooterTime />
    </>
)
}



export default App;
