import React from "react";
import {IconButton, withStyles} from "@material-ui/core";


export const [initialColor, hoverColor, focusedColor] = ['rgb(150,150,150)', 'rgb(230,230,230)', 'white'];

export const CssCreateButton = withStyles({
    root: {
        backgroundColor: 'white',
        margin: '5px',
        '&:hover': {
            backgroundColor: initialColor,
        }
    }

})(IconButton)
