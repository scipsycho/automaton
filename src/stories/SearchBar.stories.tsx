import React from "react";
import {SearchBar} from "../popup/SearchBar";

export default {
    title: 'SearchBar',
    component: SearchBar
}

const Template = (args: any) => <SearchBar {...args}/>

export const Default = Template.bind({})
// @ts-ignore
Default.args = {

}