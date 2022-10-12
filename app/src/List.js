import React from "react";
// import ReactDOM from "react-dom/client";



// function List(props) {
//   console.lot('hi')
  // const listItems = items.map((item) => <li key={item.id}>{item.title}</li>);
  // const listItems = <div>Hi</div>
  // return <ul>{listItems}</ul>;
// }


function List(props) {

  const listItems = props.items.map((item)=><li key={item.id}>{item.title}</li>)

  return <ul>{listItems}</ul>
}

export default List;


