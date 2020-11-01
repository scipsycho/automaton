import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, HashRouter} from 'react-router-dom';
import './index.css';
import SettingsPage from './settings-page/SettingsPage';
import reportWebVitals from './reportWebVitals';
import {Popup} from "./popup/js/Popup";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path={"/settings-page"} component={SettingsPage}></Route>
            <Route exact path={"/"} component={Popup}></Route>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
