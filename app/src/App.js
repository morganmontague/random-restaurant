import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";
import List from "./List";
import FooterTime from "./Footer";
import NavBar from "./navbar";



function App(props) {
  const [data, setData] = useState({});
  const [page, setPage] = useState("Home");

  const baseURL = "https://8000-morganmonta-backendbist-7rsu6xjpwpy.ws-us75.gitpod.io/menu_app/";

  useEffect(() => {
    function boo() {
      axios.get(baseURL).then((response) => {
        setData(response.data);
        
      });
    }
    boo();
  }, []);


  function handleClick(e) {
    setPage(e.target.firstChild.data);
  }

  {
    if (page === "Breakfast") {
      return (
        <>
          <NavBar handleClick={handleClick} />
          <List page={page} items={data} />
          
        </>
      );
    }
  }
  {
    if (page === "Brunch") {
      return (
        <>
          <NavBar handleClick={handleClick} />
          <List page={page} items={data} />
          
        </>
      );
    }
  }
  {
    if (page === "Lunch") {
      return (
        <>
          <NavBar handleClick={handleClick} />
          <List page={page} items={data} />
          
        </>
      );
    }
  }
  {
    if (page === "Appetizer") {
      return (
        <>
          <NavBar handleClick={handleClick} />
          <List page={page} items={data} />
          
        </>
      );
    }
  }
  {
    if (page === "Dinner") {
      return (
        <>
          <NavBar handleClick={handleClick} />
          <List page={page} items={data} />
          
        </>
      );
    }
  }
  {
    if (page === "Side") {
      return (
        <>
          <NavBar handleClick={handleClick} />
          <List page={page} items={data} />
          
        </>
      );
    }
  }
  {
    if (page === "Dessert") {
      return (
        <>
          <NavBar handleClick={handleClick} />
          <List page={page} items={data} />
          
        </>
      );
    }
  }
  // console.log(page);
  {
    if (page === "Home") {
      return (
        <>
          <NavBar handleClick={handleClick} />

          <FooterTime />
        </>
      );
    }
  }
}

export default App;
