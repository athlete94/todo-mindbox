import {render, screen} from "@testing-library/react";
import {AddItemForm} from "./AddItemForm";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe('input form test', () => {
    const callback = jest.fn()

    test('input render', () => {
        render(<AddItemForm callBack={callback} placeholder={''} disabled={false}/>)
    })

    test('typing in input', () => {
        render(<App />)

        userEvent.type(screen.getByRole('textbox'), 'test')
        expect(screen.queryByDisplayValue(/test/)).toBeInTheDocument()
    })
})