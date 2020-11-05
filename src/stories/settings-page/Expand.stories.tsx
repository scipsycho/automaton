import {Expand} from "../../common/js/Expand";
import React from "react";

export default {
   title: 'Expand',
   component: Expand
}

const Template = (args: any) => <Expand {...args}/>;

const noop = () => {}
const validateInputHandler_noerror = () => {return {errorDetails: false, errorRegex: false}}
const validateInputHandler_error = () => {return {errorDetails: true, errorRegex: true}}
export const Default = Template.bind({})
// @ts-ignore
Default.args = {
   id: "random-id",
   heading: "Heading is this",
   isDisabled: false,
   details: "details",
   regex: "*",
   isExpanded: false,
   deleteHandler: noop,
   modifyHandler: noop,
   validateInputHandler: validateInputHandler_noerror,
   expandHandler: noop
};

export const Expanded = Template.bind({})
// @ts-ignore
Expanded.args = {
   id: "random-id",
   heading: "Heading is this",
   isDisabled: false,
   details: "details",
   regex: "*",
   isExpanded: true,
   deleteHandler: noop,
   modifyHandler: noop,
   validateInputHandler: validateInputHandler_noerror,
   expandHandler: noop
}

export const ExpandedError = Template.bind({})
// @ts-ignore
ExpandedError.args = {
   id: "random-id",
   heading: "Heading is this",
   isDisabled: false,
   details: "details",
   regex: "*",
   isExpanded: true,
   deleteHandler: noop,
   modifyHandler: noop,
   validateInputHandler: validateInputHandler_error,
   expandHandler: noop
}

export const Disabled = Template.bind({})
// @ts-ignore
Disabled.args = {
   id: "random-id",
   heading: "Heading is this",
   isDisabled: true,
   details: "details",
   regex: "*",
   isExpanded: false,
   deleteHandler: noop,
   modifyHandler: noop,
   validateInputHandler: validateInputHandler_noerror,
   expandHandler: noop
}

export const DisabledExpanded = Template.bind({})
// @ts-ignore
DisabledExpanded.args = {
   id: "random-id",
   heading: "Heading is this",
   isDisabled: true,
   details: "details",
   regex: "*",
   isExpanded: true,
   deleteHandler: noop,
   modifyHandler: noop,
   validateInputHandler: validateInputHandler_noerror,
   expandHandler: noop
}