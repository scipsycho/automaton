import React, {Component} from "react";
import Accordion from "@material-ui/core/Accordion";
import {AccordionActions, AccordionSummary, Divider} from "@material-ui/core";
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
            heading: this.props.item[this.props.headingField],
            details: this.props.item[this.props.detailsField],
            errorDetails: false
        }
    }

    render() {
        const {item, headingField, disabledField, detailsField, deleteHandler, modifyHandler, id, validateDetails} = this.props;
        console.log(`${item[headingField]}: ${detailsField}`)
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                if(validateDetails(this.state.details)) {
                    this.setState({
                        errorDetails: false
                    })
                } else {
                    this.setState({
                        errorDetails: true
                    })
                    return;
                }
                modifyHandler(id, this.state);
            }}>
                <Accordion id={id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        {item[headingField]}
                    </AccordionSummary>
                    {item[disabledField] || (<AccordionDetails>
                        <TextField
                            variant={"standard"}
                            defaultValue={item[headingField].toString()}
                            disabled={item[disabledField]}
                            multiline={false}
                            onInput={e => this.setState({heading: (e.target as HTMLInputElement).value})}
                        />
                    </AccordionDetails>)}
                    <AccordionDetails>
                        <TextField
                            label={"javascript"}
                            variant={"outlined"}
                            defaultValue={item[detailsField].toString()}
                            disabled={item[disabledField]}
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
                    {item[disabledField] || (<AccordionActions>
                        <Button
                            color={"default"}
                            variant={"contained"}
                            startIcon={<DeleteIcon/>}
                            onClick={() => deleteHandler(id)}
                            size={"small"}>
                            Delete
                        </Button>
                        <Button
                            type={"submit"}
                            color={"primary"}
                            variant={"contained"}
                            startIcon={<SaveIcon/>}
                            size={"small"}>
                            Save
                        </Button>
                    </AccordionActions>)}
                </Accordion>
            </form>
        )
    }
}