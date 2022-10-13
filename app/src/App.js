import React, {useState, useEffect} from 'react';

import axios from 'axios'
import './index.css';
import HeaderForm from './HeaderForm';
import List from './List';
import BoxCard from './cards';
// import Test from './addclick';
import Breakfast from './breakfast';
import Brunch from './brunch';
import Lunch from './Lunch';
// import getList from './test';




function App(props){

const [data, setData] = useState({})

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



return(
    <>
    <HeaderForm />

    
    {/* <List items={data} /> */}
    <Breakfast items={data} />
    <Brunch items={data} />
    <Lunch items={data} />
    {<BoxCard />}
    </>
)
}



export default App;
