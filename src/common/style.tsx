import React from "react";
import {Button, IconButton, withStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export const accordionHeadingStyle = {
    color: 'white', fontWeight: 'bold'
} as React.CSSProperties

export const accordionStyle = {
    padding: '1px', backgroundColor: '#3c3c3c',
}

export const [initialColor, hoverColor, focusedColor] = ['rgb(150,150,150)', 'rgb(230,230,230)', 'white'];
export const CssDetailsTextField = withStyles({
    root: {
        '& label': {
            color: initialColor,
            '&.Mui-focused': {
                color: focusedColor
            },
            ':hover': {
                color: 'red',
            },
            '&.Mui-disabled': {
                color: initialColor
            }
        },
        '& .MuiOutlinedInput-root': {
            color: initialColor,
            '& fieldset': {
                borderColor: initialColor,
            },
            '&:hover fieldset': {
                borderColor: hoverColor,
            },
            '&.Mui-focused fieldset': {
                borderColor: focusedColor,
            },
        },
    },
})(TextField);

export const CssSummaryTextField = withStyles({
    root: {
        '& .MuiInput-underline': {
            color: initialColor,
            '&:after': {
                color: 'green',
                borderBottomColor: focusedColor,
            },
            '&:hover': {
                color: hoverColor,
            },
            '&.Mui-focused': {
                color: focusedColor
            }
        },
    },
})(TextField);

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
