import React, {Component} from "react";
import {ListComponent} from "../../common/js/ListComponent";
import {ActionsStoreSubscriber} from "../../actions/store";
import {Button, Tooltip, Typography} from "@material-ui/core";
import {heightBetweenHeadingAndList, mainPageTopPos, mainPageWidth} from "./SettingsPage";
import {SAMPLE_ACTION} from "../../actions/actions";
import "../css/Actions.css";
import AddIcon from "@material-ui/icons/Add";

export class Actions extends Component<any, any> {
    render() {
        return (
            <ActionsStoreSubscriber>
                {(state, actions) => (
                    <div id={"actions-page"}>
                        <Typography variant={'h3'}  id={"action-heading"}>
                            Actions
                        </Typography>
                        <Tooltip title={"Create"}>
                            <Button size={"small"} id={"action-create-button"} type={"submit"} onClick={() => actions.addAction(SAMPLE_ACTION, false)}>
                                <AddIcon/>
                                Create
                            </Button>
                        </Tooltip>
                        {/*<CssCreateButton size={"small"} type={"submit"} onClick={() => actions.addAction(SAMPLE_ACTION, false)}>*/}
                        {/*    <AddIcon/>*/}
                        {/*</CssCreateButton>*/}
                        <div id={"actions-list"}
                        //      style={{
                        //     position: 'relative',
                        //     overflowY: 'scroll',
                        //     width: mainPageWidth,
                        //     maxHeight: '70%',
                        //     top: `calc(${heightBetweenHeadingAndList} + ${mainPageTopPos})`
                        // }}
                        >
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
