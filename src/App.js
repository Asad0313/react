import React from 'react';
import logo from './logo.svg';
import './App.css';

function App()  {

   
   var style = {
 fontSize: 20,
 color: 'red'

   };
  return (
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <h1 style={style}>Hello react World</h1>
       
      </header>
    </div>
  );


}


export default App;
