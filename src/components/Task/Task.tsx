import React from 'react';
import s from './Task.module.css'

type TaskPropsType = {
    id: string
    title: string
    completed: boolean
}
const Task = ({id, title, completed}: TaskPropsType) => {
    return (
        <div className={s.task}>
            <input type="checkbox"/>
            {title}
        </div>
    );
};

export default Task;