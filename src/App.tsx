import React, {useState} from 'react';
import './App.css';
import {NavigationComponent} from "./common/NavigationComponent";
import {ActionsComponent} from "./actions/ActionsComponent";

export const drawerWidth = "240";

function App() {
    let [navOption, setNavOption] = useState('Actions')

    return (
        <div id={"root-page"} style={{
            width: '100wh', height: '100vh', color: 'white', backgroundColor: '#212121',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <NavigationComponent
                id={"navigation-bar"}
                optionChangeHandler={setNavOption}
                style={{color: 'white'}}
            />
            <div id={"navopt-mid-box"} style={{
                backgroundColor: '#212121',
                width: '50%',
                maxHeight: '100%',
                position: 'absolute',
                left: '30%',
                top: '10%'
            }}>
                {navOption === "Actions" && (<ActionsComponent/>)}
            </div>
        </div>
    )
}

export default App;
