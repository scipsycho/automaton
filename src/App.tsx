import React from 'react';
import './App.css';
import {ActionsComponent} from "./actions/ActionsComponent";
import {Paper} from "@material-ui/core";


function App() {
   return (
       <div style={{ width: "50%", justifyContent:'center',alignItems:'center', height:'80vh', overflowY: 'auto', overflowX: 'hidden'}}>
           <ActionsComponent/>
       </div>
   )
}

export default App;
