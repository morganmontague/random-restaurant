// function Button(props) {
//     return (
//         <button onClick={props.handleClick}>CLICK ME</button>
//     )
// }


// function App() {
//     const clickAButton = (e) => {
//         console.log(e);
//         alert('CLICKED, EXECUTED FN FROM PARENT')
//     }
//     return (
//         <>
//             <Button handleClick={clickAButton} />
//         </>
//     );
// }

import React from "react";
import App from "./App";



function Test(props) {


  const listItems = props.items.length > 0 ? props.items.map((item)=><li key={item.id}>{item.category.title}</li>) : [] //// Josh helped me on this

  return <ul>{listItems}</ul>
}

export default Test;