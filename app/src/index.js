import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderForm from './HeaderForm';
import List from './List';
// import Bootstrap from 'bootstrap'

const root = ReactDOM.createRoot(document.getElementById('root'));

const food = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

root.render(
  <React.StrictMode>
  <HeaderForm />
  <List items={food} />
  </React.StrictMode>
);


