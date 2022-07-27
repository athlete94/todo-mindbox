import React, {ChangeEvent} from 'react';
import s from './Task.module.css'

type TaskPropsType = {
    id: string
    title: string
    completed: boolean
    changeTaskStatus: (taskId: string, status: boolean) => void
}
export const Task = ({id, title, completed, changeTaskStatus}: TaskPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(id, e.currentTarget.checked)
    }
    return (
        <div className={completed ? s.completed : s.task}>
            <input type="checkbox" onChange={onChangeHandler} checked={completed}/>
            <div>
                {title}
            </div>
        </div>
    );
};

