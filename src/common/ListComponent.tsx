import React, {Component} from "react";
import {AccordionComponent} from "./AccordionComponent";

export class ListComponent extends Component<any, any> {
    render() {
        const {items, headingField, disabledField, detailsField, deleteHandler, modifyHandler, validateDetails} = this.props;
        let renderElement: any[] = [];
        for (let id in items) {
            renderElement.push(
                <AccordionComponent
                    item={items[id]}
                    id={id}
                    headingField={headingField} disabledField={disabledField} detailsField={detailsField}
                    deleteHandler={deleteHandler} modifyHandler={modifyHandler}
                    validateDetails={validateDetails}
                />
            )
        }
        return renderElement
    }
}
