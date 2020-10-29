import {createStore, createSubscriber} from 'react-sweet-state';
import {ACTIONS, actionType} from "./actions";
import {v4 as uuidv4} from 'uuid'

export const fetchFromStore = () => {
    console.log("Not fetching data from store right now. Just returning default values.")
    return ACTIONS;
};

const savingInStore = () => console.log("Saving to store... or am I?");
const actionsStore = createStore({
    initialState: {
        listOfActions: ACTIONS
    },
    actions: {
        addAction: (item: actionType, shouldSaveToStore: boolean = true) => ({setState, getState}) => {
            let currentListOfActions = getState().listOfActions;
            currentListOfActions[uuidv4()] = item;
            setState({
                listOfActions: {
                    ...currentListOfActions
                }
            })
            if (shouldSaveToStore) {
                savingInStore()
            }
        },
        deleteAction: (unique_id: string) => ({setState, getState}) => {
            console.debug(`actionsStore#deleteAction called with ${unique_id}`)
            let currentListOfActions = getState().listOfActions
            currentListOfActions[unique_id] ?
                delete currentListOfActions[unique_id] :
                console.warn(`actionsStore#deleteAction: No item found with id: ${unique_id}`);
            setState({
                listOfActions: {
                    ...currentListOfActions
                }
            })
        },
        modifyAction: (unique_id: string, props: any) => ({setState, getState}) => {
            console.debug(`actionsStore#deleteAction called with ${unique_id}`)
            let currentListOfActions = getState().listOfActions
            let actionFunc;
            try {
                actionFunc = eval(props.details)
            } catch (e) {
                console.error(`Not able to convert ${props.details} to a valid function`)
                return;
            }
            currentListOfActions[unique_id] ?
                currentListOfActions[unique_id] = {
                    name: props.heading,
                    description: "not yet filled TODO",
                    action: actionFunc,
                    is_system: false
                } :
                console.warn(`actionsStore#modifyAction: No item found with id: ${unique_id}. Adding a new item`);
            setState({
                listOfActions: {
                    ...currentListOfActions
                }
            })
        },
        validateAction: (actionString: string) => ({}) => {
            try {
                eval(actionString)
            } catch (e) {
                return false;
            }
            return true;
        }
    },
    name: "Actions Store"
})

export const ActionsStoreSubscriber = createSubscriber(actionsStore)