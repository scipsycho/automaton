import React from "react";
import {Button, IconButton, withStyles} from "@material-ui/core";


export const [initialColor, hoverColor, focusedColor] = ['rgb(150,150,150)', 'rgb(230,230,230)', 'white'];

export const CssSaveButton = withStyles({
    root: {
        backgroundColor: '#c7c7e3',
        margin: '5px',
        '&:hover': {
            backgroundColor: '#7373fd',
        }
    }

})(Button)

export const CssDeleteButton = withStyles({
    root: {
        backgroundColor: '#e3c7c7',
        margin: '5px',
        '&:hover': {
            backgroundColor: '#fd7373',
        }
    }

})(Button)

export const CssCreateButton = withStyles({
    root: {
        backgroundColor: 'white',
        margin: '5px',
        '&:hover': {
            backgroundColor: initialColor,
        }
    }

})(IconButton)
