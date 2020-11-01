import {actionType} from "./actions";
import {itemType} from "../popup/js/Table";

export const convertActionTypeToItemType = (actionsDict: {[key: string]: actionType}): itemType[] => {
    let itemsList: itemType[] = [];
    for(let id in actionsDict) {
        itemsList.push({
            id: id,
            title: actionsDict[id].name,
            description: actionsDict[id].description,
            onAction: actionsDict[id].action,
        });
    }
    return itemsList;
}