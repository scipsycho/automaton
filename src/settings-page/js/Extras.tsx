import React, {Component} from "react";
import {HashRouter, Link} from "react-router-dom";
import '../css/Extras.css';

export interface extraType {
    heading: string;
    description: string;
    link: string;
}
export type extrasList =  extraType[];

export class Extras extends Component<any, any> {
    render() {
        const {heading, description, link} = this.props;
        let returnList = [];
        returnList.push(
            <div className={"extra-box-div"}>
                <h6 className={"extra-heading-div"}>{heading}</h6>
                <HashRouter>
                    <Link className={"unstyled-link"} to={link}>
                        <p className={"extra-description-div"}>{description}</p>
                    </Link>
                </HashRouter>
            </div>
        );
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        returnList.push(returnList[0]);
        return returnList;
    }
}