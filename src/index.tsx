import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './index.css';
import SettingsPage from './SettingsPage';
import reportWebVitals from './reportWebVitals';
import {Popup} from "./Popup";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path={"/"} component={SettingsPage}></Route>
            <Route exact path={"/popup"} component={Popup}></Route>
        </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
