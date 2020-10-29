import {Row} from "../popup/Row";
import React from "react";

export default {
    title: 'Row',
    component: Row
}

const Template = (args: any) => <Row {...args}/>
const onActionFunc = () => console.log("Action executed!");

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    title: "Title",
    description: "Description",
    onAction: onActionFunc,
    isFocused: false
}

export const Focused = Template.bind({})
// @ts-ignore
Focused.args = {
    title: "Title",
    description: "Description",
    onAction: onActionFunc,
    isFocused: true
}