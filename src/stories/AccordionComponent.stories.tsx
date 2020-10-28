import {AccordionComponent} from "../common/AccordionComponent";
import React from "react";

export default {
   title: 'AccordionComponent',
   component: 'AccordionComponent'
}

const Template = (args: any) => <AccordionComponent {...args}/>;

const deleteHandler = () => {}
export const Default = Template.bind({})
// @ts-ignore
Default.args = {
   id: "random-id",
   heading: "heading",
   isDisabled: false,
   details: "details",
   isExpanded: false,
   deleteHandler: deleteHandler,
   modifyHandler: deleteHandler,
   validateDetails: deleteHandler,
   expandHandler: deleteHandler
}
