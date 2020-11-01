import {Row} from "../../popup/js/Row";
import React from "react";

export default {
    title: 'Row',
    component: Row
}

const Template = (args: any) => <Row {...args}/>
const logFunc = (msg: string) => console.log(msg)

const onActionFunc = () => logFunc("Action Executed");
const onHoverFunc = () => logFunc("On Hover func ")

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    title: "Title",
    description: "Description",
    onAction: onActionFunc,
    isFocused: false,
    onHover: onHoverFunc
}

export const Focused = Template.bind({})
// @ts-ignore
Focused.args = {
    title: "Title",
    description: "Description",
    onAction: onActionFunc,
    isFocused: true,
    onHover: onHoverFunc
}