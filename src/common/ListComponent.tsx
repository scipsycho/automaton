import React, {Component} from "react";
import {AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import TextField from "@material-ui/core/TextField";
import Accordion from "@material-ui/core/Accordion";
import {Delete} from "@material-ui/icons";

export class ListComponent extends Component<any, any> {
    render() {
        const {items, headingField, disabledField, detailsField, deleteHandler} = this.props
        let renderElement: any[] = [];
        for (let id in items) {
            renderElement.push(
                <Accordion id={id}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                        {items[id][headingField]}
                    </AccordionSummary>
                    <AccordionDetails>
                        <TextField
                            label={"javascript"}
                            variant={"outlined"}
                            defaultValue={items[id][detailsField].toString()}
                            disabled={items[id][disabledField]}
                            multiline={true}
                            fullWidth={true}
                        />
                        <Delete onClick={() => deleteHandler(id)}/>
                    </AccordionDetails>
                </Accordion>
            )
        }
        return renderElement
    }
}
