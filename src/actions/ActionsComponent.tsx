import React, {Component} from "react";
import {ListComponent} from "../common/ListComponent";
import {ActionsStoreSubscriber} from "./store";

export class ActionsComponent extends Component<any, any> {
    render() {
        return (
            <ActionsStoreSubscriber>
                {(state, actions) => (
                    <ListComponent
                        items={state.listOfActions}
                        headingField={"name"}
                        disabledField={"is_system"}
                        detailsField={"action"}
                        deleteHandler={actions.deleteAction}
                        modifyHandler={actions.modifyAction}
                        validateDetails={actions.validateAction}
                    />
                )}
            </ActionsStoreSubscriber>
        )
    }
}