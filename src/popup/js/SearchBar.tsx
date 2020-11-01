import React, {Component} from "react";
import {InputBase} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import '../../root.css';
import '../css/SearchBar.css';

export class SearchBar extends Component<any, any> {

    reFocus = (elem: any) => {
        const isFocused: boolean = this.props.isFocused;
        if (isFocused && elem) {
            elem.focus()
            // elem.setSelectionRange(-1, -1)
            // elem.selectionStart = elem.selectionEnd = -1;
        } else {
            console.warn("SearchBar#inputRef: cannot focus to searchbar")
        }
    }

    render() {
        const {onSearch} = this.props;
        return (<div className={"search-bar-div"}>
            <div className={"search-icon-div"}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                className={"search-input-input"}
                inputProps={{'aria-label': 'search'}}
                onChange={(event) => onSearch(event)}
                inputRef={elem => this.reFocus(elem)}
            />
        </div>)
    }
}
