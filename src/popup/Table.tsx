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
        overflowY: 'scroll',
        marginTop: '10px',
        paddingTop: '0px',
        position: "relative",
        maxHeight: "calc(100% - 40px)"
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