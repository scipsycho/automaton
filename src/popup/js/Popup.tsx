import React, {ChangeEvent, Component} from "react";
import {itemType, Table} from "./Table";
import {convertActionTypeToItemType} from "../../actions/utility";
import {fetchFromStore} from "../../actions/store";
import "../../root.css"
import '../css/Popup.css';
import {SearchBar} from "./SearchBar";
import {Divider, ListItem, ListItemText} from "@material-ui/core";
import {HashRouter, Link} from "react-router-dom";

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
        if (!this.moveFocus_keyboard(arg.key) && !this.executeActionForEnterKey(arg.key)) {
            console.debug("Popup#handleKeyboardPresses: moving focus back to searchbar")
            //refocusing to search bar
            this.setState({
                focusedIndex: -1
            })
        }
    }

    executeActionForEnterKey = (key: string) => {
        if (key === "Enter") {
            let indexToExecute = this.state.focusedIndex === -1 ? 0 : this.state.focusedIndex;

            //no function to execute on the settings button
            if(this.state.focusedIndex >= this.state.numOfItems) {
                return true;
            }

            if (this.state.itemsList[indexToExecute]) {
                this.setState({
                    focusedIndex: indexToExecute
                }, this.state.itemsList[indexToExecute].onAction())
            } else {
                console.warn(`Popup#executeActionForEnterKey: cannot find ${this.state.focusedIndex} in items list.`)
            }
            return true;
        }
        return false;
    }

    moveFocus_keyboard = (key: string) => {
        console.debug(`Popip#moveFocusKeyboard: Got ${key} when focus is ${this.state.focusedIndex}`)
        if (key === "ArrowDown") {
            if (this.state.focusedIndex <= this.state.numOfItems - 1) {
                this.setState((prevState: any) => {
                    return {focusedIndex: prevState.focusedIndex + 1};
                })
            }
            return true;
        } else if (key === "ArrowUp") {
            if (this.state.focusedIndex >= 0) {
                this.setState((prevState: any) => {
                    return {focusedIndex: prevState.focusedIndex - 1}
                })
            }
            return true;
        }
        return false;
    }

    moveFocus_mouse = (index: number) => {
        console.debug(`mouse was moved over ${index}th row`)
        this.setState({
            focusedIndex: index
        })
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
                focusedIndex: -1
            }, () => {
                optionalCallback();
                // event.target ? event.target.focus() : console.warn(`Cannot refocus to search for event=${event.toString()}`)
            })
        }
    }

    render() {
        return (
            <div id={"popup-div"} ref={elem => this.popupElem = elem}>
                <SearchBar onSearch={this.filterRows} isFocused={this.state.focusedIndex === -1}/>
                <Table itemsList={this.state.itemsList} focusedIndex={this.state.focusedIndex}
                       onHover={this.moveFocus_mouse}/>
                <Divider/>
                <HashRouter>
                    <Link to={"/settings-page"} target={"_blank"}  className={"unstyled-link"}>
                        <ListItem button
                                  className={"list-item-li"}
                                  id={"list-item-settingspage"}
                                  divider={true}
                                  onMouseEnter={() => this.moveFocus_mouse(this.state.numOfItems)}
                                  autoFocus={this.state.focusedIndex === this.state.numOfItems}
                        >
                            <ListItemText>Settings</ListItemText>
                        </ListItem>
                    </Link>
                </HashRouter>
            </div>
        );
    }
}