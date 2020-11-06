import React, {Component} from "react";
import {ListComponent} from "../../common/js/ListComponent";
import {ActionsStoreSubscriber} from "../../actions/store";
import {Button, Tooltip, Typography} from "@material-ui/core";
import {SAMPLE_ACTION} from "../../actions/actions";
import "../css/Actions.css";
import AddIcon from "@material-ui/icons/Add";

export class Actions extends Component<any, any> {
    render() {
        return (
            <ActionsStoreSubscriber>
                {(state, actions) => (
                    <div id={"actions-page"} className={"navopt-midbox-inner-container"}>
                        <h4 id={"action-heading"} className={"navopt-midbox-heading"}>
                            Actions
                        </h4>
                        <Tooltip title={"Create"}>
                            <Button size={"small"} className={"navpot-midbox-action-button"}id={"action-create-button"} type={"submit"}
                                    onClick={() => actions.addAction(SAMPLE_ACTION, false)}>
                                <AddIcon/>
                                Create
                            </Button>
                        </Tooltip>
                        <div id={"actions-list"}>
                            <ListComponent
                                items={state.listOfActions}
                                headingField={"name"}
                                disabledField={"is_system"}
                                detailsField={"action"}
                                regexField={"regex"}
                                deleteHandler={actions.deleteAction}
                                modifyHandler={actions.modifyAction}
                                validateInputHandler={actions.validate}
                            />
                        </div>
                    </div>
                )}
            </ActionsStoreSubscriber>

        )
    }
}
