import React, {useState} from 'react';
import '../css/SettingsPage.css';
import {Actions} from "./Actions";
import {Navigation} from "./Navigation";

export const drawerWidth = "17%";
export const mainPageWidth = '50%';
export const mainPageTopPos = '10%';
export const widthBetweenDrawerAndMainPage = '15%';
export const heightBetweenHeadingAndList = '10%';

function SettingsPage() {
    let [navOption, setNavOption] = useState('Actions')

    return (
        <div id={"root-page"} style={{
            width: '100wh', height: '100vh', color: 'white', backgroundColor: '#212121',
            display: 'flex',
        }}>
            <Navigation
                id={"navigation-bar"}
                optionChangeHandler={setNavOption}
                style={{color: 'white'}}
            />
            <div id={"navopt-mid-box"} style={{
                backgroundColor: '#212121',
                width: mainPageWidth,
                maxHeight: '100%',
                position: 'fixed',
                left: `calc(${widthBetweenDrawerAndMainPage} + ${drawerWidth})`,
                top: mainPageTopPos
            }}>
                {navOption === "Actions" && (<Actions/>)}
            </div>
        </div>
    )
}

export default SettingsPage;
