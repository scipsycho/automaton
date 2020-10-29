import {itemType, Table} from "../popup/Table";
import React from "react";
import {v4} from "uuid";

export default {
    title: 'Table',
    component: Table,
}

const Template = (args: any) => <Table {...args}/>
const actionFunction = () => console.log("Function executed")
const createItem = (title: string, desc: string, isFocused = false, onAction = actionFunction) => {
    return {id: v4(), title: title, description: desc, isFocused: isFocused, onAction: onAction};
}

export const Default = Template.bind({})

// @ts-ignore
Default.args = {
    itemsList: [
        createItem("Title1", "Description1"),
        createItem("Title2", "Description2"),
        createItem("Title3", "Description3"),
    ]
}

export const Long = Template.bind({})

// @ts-ignore
Long.args = {
    itemsList: [
        createItem("Title1", "Description1"),
        createItem("Title2", "Description2"),
        createItem("Title3", "Description3"),
        createItem("Title4", "Description4"),
        createItem("Title5", "Description5"),
        createItem("Title6", "Description6"),
        createItem("Title7", "Description7"),
        createItem("Title8", "Description8"),
        createItem("Title9", "Description9"),
        createItem("Title10", "Description10"),
        createItem("Title11", "Description11"),
        createItem("Title12", "Description12"),
        createItem("Title13", "Description13"),
        createItem("Title14", "Description14"),
        createItem("Title15", "Description15"),
        createItem("Title16", "Description16"),
        createItem("Title17", "Description17"),
        createItem("Title18", "Description18"),
        createItem("Title19", "Description19"),
    ]
}
