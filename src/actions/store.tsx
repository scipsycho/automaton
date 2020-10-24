import {createStore, createSubscriber} from 'react-sweet-state';
import {ACTIONS, actionType} from "./actions";
import {v4 as uuidv4} from 'uuid'

const actionsStore = createStore({
    initialState: {
        listOfActions: ACTIONS
    },
    actions: {
        fetchFromStore: () => () => console.log("fetching from store... or am I?"),
        addAction: (item: actionType) => ({setState, getState}) => {
            let currentListOfActions = getState().listOfActions;
            currentListOfActions[uuidv4()] = item;
            setState({
                listOfActions: currentListOfActions
            })
        },
        deleteAction: (unique_id: string) => ({ setState, getState}) => {
            console.debug(`actionsStore#deleteAction called with ${unique_id}`)
            let currentListOfActions = getState().listOfActions
            currentListOfActions[unique_id] ?
                delete currentListOfActions[unique_id] :
                console.warn(`actionsStore#deleteAction: No item found with id: ${unique_id}`);
            console.debug("After deleting", currentListOfActions)
            setState({
                listOfActions: currentListOfActions
            })
        }
    },
    name: "Actions Store"
})

export const ActionsStoreSubscriber = createSubscriber(actionsStore)