import {render, screen} from "@testing-library/react";
import {Task} from "./Task";
import {v1} from "uuid";
import userEvent from "@testing-library/user-event";


describe('Task component tests', () => {
    const changeTaskStatus = jest.fn()

    test('Task render', () => {
        render(<Task id={v1()} completed={false} changeTaskStatus={changeTaskStatus} title={'Yo'}/>)
    })

    test('Title render', () => {
        render(<Task id={v1()} completed={false} changeTaskStatus={changeTaskStatus} title={'Yo'}/>)
        expect(screen.getByText('Yo')).toBeInTheDocument()
    })

    test('function changeTaskStatus called', () => {
        render(<Task title={'New list'} changeTaskStatus={changeTaskStatus} completed={false} id={v1()}/>)

        userEvent.click(screen.getByRole('checkbox'))
        expect(changeTaskStatus).toBeCalledTimes(1)
    })
})