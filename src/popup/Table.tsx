import React, {Component} from "react";
import {Row} from "./Row";
import {List, withStyles} from "@material-ui/core";

export interface itemType {
    id: string,
    title: string,
    description: string,
    onAction: Function,
}

const StyledList = withStyles({
    root: {
        maxHeight: '100%',
        overflowY: 'scroll',
        margin: '2px 2px 2px 2px',
    }
})(List)

export class Table extends Component<any, any> {
    render() {
        const itemsList: itemType[] = this.props.itemsList
        const focusedIndex: number = this.props.focusedIndex
        const onHover: Function = this.props.onHover
        return (
            <StyledList>
                {itemsList.map((item, i) => (
                    <Row {...item} isFocused={focusedIndex === i} onHover={onHover} key={item.id} index={i}/>
                ))}
            </StyledList>
        )
    }
}