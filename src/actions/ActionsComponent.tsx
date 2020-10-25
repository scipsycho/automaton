import React, {Component} from "react";
import {ListComponent} from "../common/ListComponent";
import {ActionsStoreSubscriber} from "./store";
import {Typography} from "@material-ui/core";

export class ActionsComponent extends Component<any, any> {
    render() {
        return (
            <ActionsStoreSubscriber>
                {(state, actions) => (
                    <div id={"actions-page"} style={{width: '100%', height: '100%', position: 'absolute'}}>
                        <Typography variant={'h4'} style={{color: 'white'}}>
                            Actions
                        </Typography>
                        <div id={"actions-list"} style={{position: 'absolute', width: '100%'}}>
                            <ListComponent
                                items={state.listOfActions}
                                headingField={"name"}
                                disabledField={"is_system"}
                                detailsField={"action"}
                                deleteHandler={actions.deleteAction}
                                modifyHandler={actions.modifyAction}
                                validateDetails={actions.validateAction}
                            />
                        </div>
                    </div>
                )}
            </ActionsStoreSubscriber>

        )
    }
}
