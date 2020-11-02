import React, {Component} from "react";
import {Expand} from "./js/Expand";

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

    convertValidateOutputToExpandInput = (validateOutput: any) => {
        return {
            errorDetails: validateOutput.errorAction,
            errorRegex: validateOutput.errorRegex
        }
    }


    render() {
        const {items, headingField, disabledField, detailsField, deleteHandler, modifyHandler, validateInputHandler, regexField} = this.props;
        let renderElement: any[] = [];
        for (let id in items) {
            renderElement.push(
                <Expand
                    key={id}
                    id={id}
                    heading={items[id][headingField]}
                    isDisabled={items[id][disabledField]}
                    details={items[id][detailsField]}
                    regex={items[id][regexField]}
                    isExpanded={this.state.isExpanded === id}
                    deleteHandler={deleteHandler}
                    modifyHandler={modifyHandler}
                    validateInputHandler={(...args: any) => this.convertValidateOutputToExpandInput(validateInputHandler(...args))}
                    expandHandler={this.expand}
                />
            )
        }
        return renderElement
    }
}
