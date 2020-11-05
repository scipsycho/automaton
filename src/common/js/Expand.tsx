import React, {Component, FormEvent} from "react";
import Accordion from "@material-ui/core/Accordion";
import {AccordionActions, AccordionSummary, Button, Divider, TextField, Tooltip, Typography} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import '../../root.css';
import '../css/Expand.css';


export class Expand extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            heading: this.props.heading,
            details: this.props.details,
            regex: this.props.regex,
            saveButtonVisible: false,
            errorDetails: false,
            errorRegex: false,
        }
    }

    onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let validateOutput = this.props.validateInputHandler(this.state.details, this.state.regex)
        this.setState({
            ...validateOutput
        });
        if(validateOutput.errorDetails && validateOutput.errorRegex) {
            this.props.modifyHandler(this.props.id, this.state);
        }
    }

    onInputDetailsHandler = (e: FormEvent<HTMLDivElement>) => {
        let val = (e.target as HTMLInputElement).value
        this.setState({
            details: val,
            errorDetails: false,
        })
    }

    onInputRegexHandler = (e: FormEvent<HTMLDivElement>) => {
        let val = (e.target as HTMLInputElement).value
        this.setState({
            regex: val,
            errorRegex: false,
        })
    }

    render() {
        const {heading, isDisabled, deleteHandler, id, isExpanded, expandHandler} = this.props;
        return (
            <form onSubmit={e => this.onSubmitHandler(e)} className={"expand-form"}>
                <Accordion id={id}
                           defaultExpanded={false}
                           square={true}
                           expanded={isExpanded}
                           onChange={(_, expanded) => expandHandler(id, expanded)}
                           className={"expand-div"}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} className={"expand-summary-div"}>
                        <Typography>{heading}</Typography>
                    </AccordionSummary>
                    {isDisabled || (<AccordionDetails>
                        <TextField
                            id={`${id}_summary`}
                            variant={"standard"}
                            defaultValue={heading.toString()}
                            disabled={isDisabled}
                            multiline={false}
                            onInput={e => this.setState({heading: (e.target as HTMLInputElement).value})}
                            className={"expand-summary-input-div"}
                            inputProps={{disabledUnderline: false}}
                        />
                    </AccordionDetails>)}
                    <AccordionDetails>
                        <TextField
                            id={`${id}_regex`}
                            label={"URL regex"}
                            variant={"outlined"}
                            defaultValue={this.state.regex.toString()}
                            disabled={isDisabled}
                            error={this.state.errorRegex}
                            onInput={e => this.onInputRegexHandler(e)}
                            className={"expand-regex-input-div"}
                        />
                    </AccordionDetails>
                    <AccordionDetails>
                        <TextField
                            id={`${id}_details`}
                            label={"Action to perform in javascript"}
                            variant={"outlined"}
                            defaultValue={this.state.details.toString()}
                            disabled={isDisabled}
                            multiline={true}
                            fullWidth={true}
                            error={this.state.errorDetails}
                            onInput={e => this.onInputDetailsHandler(e)}
                            className={"expand-action-input-div"}
                        />
                    </AccordionDetails>
                    <Divider/>
                    {isDisabled || (<AccordionActions>
                        <Tooltip title={"Delete"}>
                            <Button onClick={() => deleteHandler(id)} size={"small"} id={`${id}_delete`}>
                                <DeleteIcon/>
                                Delete
                            </Button>
                        </Tooltip>
                        <Tooltip title={"Save"}>
                            <Button size={"small"} type={"submit"} id={`${id}_submit`}>
                                <SaveIcon/>
                                Save
                            </Button>
                        </Tooltip>
                    </AccordionActions>)}
                </Accordion>
            </form>
        )
    }
}