import {Popup} from "../../popup/js/Popup";
import React from "react";

export default {
    title: 'Popup',
    component: Popup
}

const Template = (args: any) => <Popup {...args}/>

export const Default = Template.bind({})
// @ts-ignore
Default.args = {

}