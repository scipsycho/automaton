import React, {Component} from "react";
import {AccordionComponent} from "./AccordionComponent";

export class ListComponent extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            isExpanded: ''
        }
    }

    expand = (id: string, expanded: boolean) => {
        expanded ?
            this.setState({
                isExpanded: id
            }) :
            this.setState({
                isExpanded: ''
            })
    }

    render() {
        const {items, headingField, disabledField, detailsField, deleteHandler, modifyHandler, validateDetails} = this.props;
        let renderElement: any[] = [];
        for (let id in items) {
            renderElement.push(
                <AccordionComponent
                    item={items[id]}
                    id={id}
                    heading={items[id][headingField]} isDisabled={items[id][disabledField]} details={items[id][detailsField]}
                    deleteHandler={deleteHandler} modifyHandler={modifyHandler}
                    validateDetails={validateDetails}
                    isExpanded={this.state.isExpanded === id}
                    expandHandler={this.expand}
                />
            )
        }
        return renderElement
    }
}
