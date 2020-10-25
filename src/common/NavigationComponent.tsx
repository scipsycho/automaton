import React, {Component} from "react";
import {AppBar, Divider, List, ListItem, ListItemText, Typography} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import {drawerWidth} from "../App";

export class NavigationComponent extends Component<any, any> {
    render() {
        const {optionChangeHandler} = this.props;
        return (
            <AppBar position={"fixed"}
                style={{
                    left: 0,
                    width: '17%',
                    height: '100%',
                    backgroundColor: '#3c3c3c'
                }}
            >
                <Toolbar>
                    <Typography variant={'h6'}>
                        Automaton
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {['Rules'].map((text, index) => (
                        <ListItem button key={text} onClick={() => optionChangeHandler(text)}>
                            <ListItemText primary={text} style={{zIndex:5}}/>
                        </ListItem>
                    ))}
                    <Divider/>
                    {['Actions', 'Icons', 'Triggers'].map((text, index) => (
                        <ListItem button key={text} onClick={() => optionChangeHandler(text)}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </AppBar>
        )
    }
}