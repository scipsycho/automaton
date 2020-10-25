import React, {useState} from 'react';
import './App.css';
import {NavigationComponent} from "./common/NavigationComponent";
import {ActionsComponent} from "./actions/ActionsComponent";

export const drawerWidth = "17%";
export const mainPageWidth = '50%';
export const mainPageTopPos = '10%';
export const widthBetweenDrawerAndMainPage = '15%';
export const heightBetweenHeadingAndList = '10%';

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
                width: mainPageWidth,
                maxHeight: '100%',
                position: 'fixed',
                left:  `calc(${widthBetweenDrawerAndMainPage} + ${drawerWidth})`,
                top: mainPageTopPos
            }}>
                {navOption === "Actions" && (<ActionsComponent/>)}
            </div>
        </div>
    )
}

export default App;
