import React from 'react';
import {cleanup, render, screen} from '@testing-library/react';
import {Expand} from "../../common/js/Expand";


describe('AccordianComponent', () => {
    let deleteFunc = jest.fn()
    let submitFunc = jest.fn()
    beforeEach(() => {
        render(<Expand
            id={"random-id"}
            heading={"heading"}
            isDisabled={false}
            details={"details"}
            isExpanded={false}
            deleteHandler={deleteFunc}
            modifyHandler={submitFunc}
            validateDetails={() => true}
            expandHandler={() => true}
        />)
    })
    afterEach(cleanup)


    it('renders details and heading correctly', () => {
        expect(screen.getByText(/heading/i)).toBeInTheDocument()
        expect(screen.getByText(/details/i)).toBeInTheDocument()
    })


    it('delete handler is called when the delete button is clicked', () => {
        screen.getAllByTitle('Delete')[0].click()
        expect(deleteFunc).toBeCalled()
    })

    it('submit button handler is called when the delete button is clicked', () => {
        screen.getAllByTitle('Save')[0].click()
        expect(submitFunc).toBeCalled()
    })

})