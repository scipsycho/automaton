import React, {Component} from "react";
import {AppBar, Divider, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import '../../root.css';
import '../css/Navigation.css';

export class Navigation extends Component<any, any> {
    render() {
        const {optionChangeHandler} = this.props;
        return (
            <AppBar position={"fixed"}
                    className={"navigation-header"}
            >
                <Toolbar>
                    <Typography variant={'h6'}>
                        Automaton
                    </Typography>
                </Toolbar>
                <Divider/>
                <List>
                    {['Actions'].map((text, index) => (
                        <ListItem button key={text} onClick={() => optionChangeHandler(text)}>
                            <ListItemText primary={text} style={{zIndex: 5}}/>
                        </ListItem>
                    ))}
                    <Divider/>
                    {['Variables', 'Performance', 'About'].map((text, index) => (
                        <ListItem button key={text} onClick={() => optionChangeHandler(text)}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </AppBar>
        )
    }
}