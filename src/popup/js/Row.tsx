import React, {Component} from "react";
import {ListItem, ListItemText, Paper, Tooltip} from "@material-ui/core";
import '../../root.css';
import '../css/Row.css'

export class Row extends Component<any, any> {
    render() {
        const {id, title, description, onAction, isFocused, onHover, index} = this.props;
        return (
            <Tooltip title={description} disableFocusListener={true}>
                <ListItem button className={"list-item-li"} id={id} onClick={() => onAction()} autoFocus={isFocused}  divider={true} onMouseEnter={() => onHover(index)}>
                    <ListItemText>{title}</ListItemText>
                </ListItem>
            </Tooltip>
        );
    }
}