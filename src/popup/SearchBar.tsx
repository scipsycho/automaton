import React, {Component} from "react";
import {InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import '../root.css';
import './SearchBar.css';

export class SearchBar extends Component<any, any> {

    render() {
        const {onSearch, isFocused} = this.props;
        return (<div className={"search-bar-div"}>
            <div className={"search-icon-div"}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                className={"search-input-input"}
                inputProps={{'aria-label': 'search'}}
                onChange={(event) => onSearch(event)}
                autoFocus={true}
                inputRef={elem => isFocused && elem ? elem.focus() : true}
            />
        </div>)
    }
}
