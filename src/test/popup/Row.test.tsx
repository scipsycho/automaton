import React from "react";
import {cleanup, render, screen, fireEvent} from "@testing-library/react";
import {Row} from "../../popup/js/Row";

describe("Row Component", () => {
    const onActionFunc = jest.fn();
    const onHoverFunc = jest.fn();
    const defaultProps = {
        title:"Title",
        description:"Description",
        onAction:onActionFunc,
        onHover:onHoverFunc,
    }
    let isFocused = false;
    let wrapper: any = null;

    beforeEach(() => {
        wrapper = render(<Row {...defaultProps} isFocused={isFocused}/>);
    })

    afterEach(cleanup)

    it("render title correctly", () => {
        expect(screen.getByText(/title/i)).toBeInTheDocument()
    })

    it.skip("shows description in tooltip when hover", () => {
        expect(() => screen.getByText(/description/i)).toThrow()
        fireEvent.mouseMove(wrapper.getByText(/title/i));
        expect(screen.getByText(/description/i)).toBeInTheDocument()
    })

    it("action is executed when the element is clicked", () => {
        fireEvent.click(wrapper.getByText("Title"))
        expect(onActionFunc).toBeCalled()
    })


    it("hover is exected when the element is hoverd on", () => {
        fireEvent.mouseOver(wrapper.getByText(/title/i))
        expect(onHoverFunc).toBeCalled()
    })

   describe("focus is true", () => {
       isFocused = true;
       it("element is focused when isFocused is true", () => {
           const newWrapper = render(<Row {...defaultProps} isFocused={true}/>)
           expect(newWrapper.container.contains(document.activeElement)).toBeTruthy()
       })   })
})