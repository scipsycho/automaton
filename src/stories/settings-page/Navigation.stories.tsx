import {Navigation} from "../../settings-page/js/Navigation";
import React from "react";

export default {
    title: 'Navigation',
    component: Navigation
}

const Template = (args: any) => <Navigation {...args}/>
const optionChangeHandler = (text: string) => console.log(`${text} option selected`)

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    optionChangeHandler: optionChangeHandler
}