import React, {useState} from 'react';
import '../css/SettingsPage.css';
import {Actions} from "./Actions";
import {Navigation} from "./Navigation";
import {Extras} from "./Extras";

function SettingsPage() {
    let [navOption, setNavOption] = useState('Actions')
    let extraInfo = {
        heading: "Heading is this",
        description: "Did you know that Wikipedia volunteers have already taken steps to protect the \"2020 United States presidential election\" article? Only users who have had a registered account for over 30 days and have made 500 previous edits can change the page.",
        link: "/"
    }
    return (
        <div id={"root-page"}>
            <Navigation
                id={"navigation-bar"}
                optionChangeHandler={setNavOption}
                style={{color: 'white'}}
            />
            <div id={"extras-right-box"}>
                <Extras {...extraInfo}/>
            </div>
            <div id={"navopt-mid-box"}>
                {navOption === "Actions" && (<Actions/>)}
            </div>

        </div>
    )
}

export default SettingsPage;
