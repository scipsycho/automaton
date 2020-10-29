import React, {Component} from "react";
import {ListItem, ListItemText, Tooltip, withStyles} from "@material-ui/core";
import '../root.css';
// import './Row.css'

export const StyledListItem = withStyles({
    root: {
        backgroundColor: '#f2f2f2',
        borderColor: '#d6d6d6',
        "&:hover": {
            backgroundColor: '#d6d6d6'
        },
        "&:focus": {
            backgroundColor: '#d6d6d6'
        },
    }
})(ListItem)

export class Row extends Component<any, any> {
    render() {
        const {id, title, description, onAction, isFocused, onHover, index} = this.props;
        return (
            <Tooltip title={description}>
                <StyledListItem button id={id} onClick={() => onAction()} autoFocus={isFocused}  divider={true} onMouseEnter={() => onHover(index)}>
                    <ListItemText>{title}</ListItemText>
                </StyledListItem>
            </Tooltip>
        );
    }
}