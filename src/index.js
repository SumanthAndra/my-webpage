import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './footer';
import Nav from'./nav';
import Main from './main';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Nav/>
    <Main/>
  
    <Footer/>
  </React.StrictMode>
);


