import React, {ChangeEvent, Component} from "react";
import {itemType, Table} from "./Table";
import {v4} from "uuid";
import {convertActionTypeToItemType} from "../actions/utility";
import {fetchFromStore} from "../actions/store";
import './Popup.css';
import {SearchBar} from "./SearchBar";

const actionFunction = () => console.log("action");
const createItem = (title: string, desc: string, isFocused = false, onAction = actionFunction) => {
    return {id: v4(), title: title, description: desc, isFocused: isFocused, onAction: onAction};
}

export class Popup extends Component<any, any> {
    private popupElem: HTMLDivElement | null | undefined;

    constructor(props: any) {
        super(props);
        let itemsList = convertActionTypeToItemType(fetchFromStore())
        this.state = {
            itemsList: itemsList,
            focusedIndex: -1,
            searchString: "",
            numOfItems: itemsList.length,
            initialItemsList: itemsList,
            initialNumOfItems: itemsList.length,
            isSearchInFocus: true
        }
    }

    reInitializeItemsInState = () => {
        this.setState((prevState: any) => {
            return {
                itemsList: prevState.initialItemsList,
                numOfItems: prevState.initialNumOfItems
            }
        })
    }

    componentDidMount() {
        this.popupElem ? this.popupElem.addEventListener("keydown", this.handleKeyboardPresses) : console.error("No element present. Cannot add event listener")
    }

    componentWillUnmount() {
        this.popupElem ? this.popupElem.removeEventListener("keydown", this.handleKeyboardPresses) : console.warn("No element present. Cannot remove event listener")
    }

    handleKeyboardPresses = (arg: KeyboardEvent) => {
        console.debug(`Popup#handleKeyboardPresses: ${arg.key} was pressed.`)
        if(!this.moveFocus_keyboard(arg.key) && !this.executeActionForEnterKey(arg.key)) {
            console.debug("Popup#handleKeyboardPresses: moving focus back to searchbar")
            //refocusing to search bar
            this.setState({
                isSearchInFocus: true
            })
        }
    }

    executeActionForEnterKey = (key: string) => {
        if(key === "Enter") {
            this.state.itemsList[this.state.focusedIndex]
                ? this.state.itemsList[this.state.focusedIndex].onAction()
                : console.warn(`Popup#executeActionForEnterKey: cannot find ${this.state.focusedIndex} in items list.`)
            return true;
        }
        return false;
    }

    moveFocus_keyboard = (key: string) => {
        if (key === "ArrowDown") {
            this.setState((prevState: any) => {
                return {focusedIndex: prevState.focusedIndex === prevState.numOfItems - 1 ? 0 : prevState.focusedIndex + 1};
            })
            return true;
        } else if (key === "ArrowUp") {
            this.setState((prevState: any) => {
                return {focusedIndex: prevState.focusedIndex === 0 ? prevState.numOfItems - 1 : prevState.focusedIndex - 1}
            })
            return true;
        }
        return false;
    }

    moveFocus_mouse = (index: number) => {
        console.debug(`mouse was moved over ${index}th row`)
        if (index >= 0 && index < this.state.numOfItems) {
            this.setState({
                focusedIndex: index
            })
        }
    }

    doesItemMatchSearch = (item: itemType, searchRegex: RegExp) => {
        return searchRegex.test(item.title) || searchRegex.test(item.description);
    }

    filterRows = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, optionalCallback: Function = () => {
    }) => {
        let searchString: string = event.target.value
        if (searchString === '') {
            this.reInitializeItemsInState();
        } else {
            let searchRegex = new RegExp(searchString, "i");
            let newItemsList = this.state.initialItemsList.filter((item: itemType) => this.doesItemMatchSearch(item, searchRegex))
            this.setState({
                itemsList: newItemsList,
                numOfItems: newItemsList.length,
                focusedIndex: 0
            }, () => {
                optionalCallback();
                // event.target ? event.target.focus() : console.warn(`Cannot refocus to search for event=${event.toString()}`)
            })
        }
    }

    render() {
        return (
            <div id={"popup-div"} ref={elem => this.popupElem = elem} style={{height: "200px"}}>
                <SearchBar onSearch={this.filterRows} isFocused={this.state.isSearchInFocus}/>
                <Table itemsList={this.state.itemsList} focusedIndex={this.state.focusedIndex}
                       onHover={this.moveFocus_mouse}/>
            </div>
        );
    }
}