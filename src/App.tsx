import React from 'react';
import './App.css';
import {ActionsComponent} from "./actions/ActionsComponent";
import {ACTIONS} from "./actions/actions";


function App() {
   return (
       <ActionsComponent actions={ACTIONS}/>
   )
}

export default App;
