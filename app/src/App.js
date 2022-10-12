import React, {useState, useEffect} from 'react';

import axios from 'axios'
import './index.css';
import HeaderForm from './HeaderForm';
import List from './List';




function App(props){

const [data, setData] = useState({})

const baseURL = 'https://astute-baton-362318.ue.r.appspot.com/api/json/' 

useEffect(()=> {

axios.get(baseURL).then((response) => {
const example = response.data
console.log(example)
  setData(example)
})
}, [])




const food = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    {title: 'test', id: 5},
  ];

return(
    <>
    <div><HeaderForm /></div>
    <List items={food} />
    </>
)


}



export default App;
