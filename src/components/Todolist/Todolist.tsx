import React from 'react';
import s from './Todolist.module.css'
import {FilterType, TaskType} from "../../App";
import {AddItemForm} from "../AddItemForm/AddItemForm";
import Task from "../Task/Task";

type TodolistPropsType = {
    id: string
    title: string
    filter: FilterType
    tasks: Array<TaskType>
    addTask: (todoId: string, title: string) => void
}

const Todolist = ({id, title, filter, tasks, addTask}: TodolistPropsType) => {

    const newTaskHandler = (title: string) => {
        addTask(id, title)
    }

    return (
        <div className={s.todolist}>
            <div className={s.todolistTitle}>
                {title}
            </div>

            <div className={s.tasksBlock}>
                <AddItemForm callBack={newTaskHandler}/>
                <ul>
                    {tasks.map(task => {
                        return <li>
                            <Task key={task.id}
                                  id={task.id}
                                  title={task.title}
                                  completed={task.completed}/>
                        </li>
                    })}
                </ul>
                <div className={s.todoBottom}>
                    <div className={s.leftItems}>

                    </div>
                    <div className={s.filters}>

                    </div>
                    <div className={s.clearButton}>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todolist;