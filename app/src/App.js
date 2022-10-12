import React, {useState, useEffect} from 'react';

import axios from 'axios'
import './index.css';
import HeaderForm from './HeaderForm';
import List from './List';
import BoxCard from './cards';




function App(props){

const [data, setData] = useState({})

const baseURL = 'https://astute-baton-362318.ue.r.appspot.com/api/json/' 

useEffect(()=> {
axios.get(baseURL).then((response) => {
setData(response.data)
})
}, [])


// setData = {setData}



return(
    <>
    <HeaderForm />
    <List items={data} />
    {<BoxCard />}
    </>
)
}



export default App;
