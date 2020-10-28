import React, {Component} from "react";
import {ListComponent} from "../common/ListComponent";
import {ActionsStoreSubscriber} from "./store";
import {IconButton, Typography} from "@material-ui/core";
import {heightBetweenHeadingAndList, mainPageTopPos, mainPageWidth} from "../SettingsPage";
import AddIcon from '@material-ui/icons/Add';
import {CssCreateButton} from "../common/style";
import {SAMPLE_ACTION} from "./actions";

export class ActionsComponent extends Component<any, any> {
    render() {
        return (
            <ActionsStoreSubscriber>
                {(state, actions) => (
                    <div id={"actions-page"} style={{width: '100%', height: '100%', position: 'absolute'}}>
                        <Typography variant={'h4'} style={{color: 'white'}}>
                            Actions
                        </Typography>
                        <CssCreateButton size={"small"} type={"submit"} onClick={() => actions.addAction(SAMPLE_ACTION, false)}>
                            <AddIcon/>
                        </CssCreateButton>
                        <div id={"actions-list"} style={{
                            position: 'fixed',
                            overflowY: 'scroll',
                            width: mainPageWidth,
                            maxHeight: '70%',
                            top: `calc(${heightBetweenHeadingAndList} + ${mainPageTopPos})`
                        }}>
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
