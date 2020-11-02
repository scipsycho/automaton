import React, {Component} from "react";
import {Row} from "./Row";
import {List} from "@material-ui/core";
import '../css/Table.css'

export interface itemType {
    id: string,
    title: string,
    description: string,
    onAction: Function,
    regex: RegExp
}

export class Table extends Component<any, any> {
    render() {
        const itemsList: itemType[] = this.props.itemsList
        const focusedIndex: number = this.props.focusedIndex
        const onHover: Function = this.props.onHover
        return (
            <List className={"table-div"}>
                {itemsList.map((item, i) => (
                    <Row {...item} isFocused={focusedIndex === i} onHover={onHover} key={item.id} index={i}/>
                ))}
            </List>
        )
    }
}