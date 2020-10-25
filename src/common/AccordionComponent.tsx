import React, {Component, FormEvent} from "react";
import Accordion from "@material-ui/core/Accordion";
import {AccordionActions, AccordionSummary, Divider, IconButton, Tooltip} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

export class AccordionComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            heading: this.props.heading,
            details: this.props.details,
            saveButtonVisible: false,
            errorDetails: false
        }
    }

    onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (this.props.validateDetails(this.state.details)) {
            this.setState({
                errorDetails: false
            })
        } else {
            this.setState({
                errorDetails: true
            })
            return;
        }
        this.props.modifyHandler(this.props.id, this.state);
    }

    render() {
        const {item, heading, isDisabled, details, deleteHandler, modifyHandler, id, validateDetails, isExpanded, expandHandler} = this.props;
        return (
            <form onSubmit={e => this.onSubmitHandler(e)}>
                <Accordion id={id} defaultExpanded={false} square={true} style={{padding: '1px'}} expanded={isExpanded} onChange={(_, expanded) => expandHandler(id, expanded)}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        {heading}
                    </AccordionSummary>
                    {isDisabled || (<AccordionDetails>
                        <TextField
                            variant={"standard"}
                            defaultValue={heading.toString()}
                            disabled={isDisabled}
                            multiline={false}
                            onInput={e => this.setState({heading: (e.target as HTMLInputElement).value})}
                        />
                    </AccordionDetails>)}
                    <AccordionDetails>
                        <TextField
                            label={"javascript"}
                            variant={"outlined"}
                            defaultValue={details.toString()}
                            disabled={isDisabled}
                            multiline={true}
                            fullWidth={true}
                            error={this.state.errorDetails}
                            onInput={
                                (e) => {
                                    let val = (e.target as HTMLInputElement).value
                                    this.setState({
                                        details: val,
                                        errorDetails: false
                                    })
                                }
                            }
                        />
                    </AccordionDetails>
                    <Divider/>
                    {isDisabled || (<AccordionActions>
                        <Tooltip title={"Delete"}>
                            <IconButton onClick={() => deleteHandler(id)} size={"small"}>
                                <DeleteIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={"Save"}>
                            <IconButton size={"small"} type={"submit"}>
                                <SaveIcon/>
                            </IconButton>
                        </Tooltip>
                    </AccordionActions>)}
                </Accordion>
            </form>
        )
    }
}