import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const[para,setPara]=useState("");
  function Addpara(){
    setPara("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    <div id="main">
       <p>{para}</p>
      <button id="click" onClick={Addpara}>button</button>
      // Do not alter the main div
    </div>
  );
}


export default App;
