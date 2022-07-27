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
    changeFilter: (filterValue: FilterType, todoId: string) => void
    deleteCompleted: (todoId: string) => void
    changeTaskStatus: (todoId: string, taskId: string, status: boolean) => void
    deleteTodolist: (todoId: string) => void
}

const Todolist = ({
                      id,
                      title,
                      filter,
                      tasks,
                      addTask,
                      changeFilter,
                      deleteCompleted,
                      changeTaskStatus,
                      deleteTodolist
                  }: TodolistPropsType) => {



    const deleteTodoHandler = () => {
        deleteTodolist(id)
    }

    //tasks
    const newTaskHandler = (title: string) => {
        addTask(id, title)
    }
    const deleteCompletedTasks = () => {
        deleteCompleted(id)
    }

    //filter
    const allOnclickHandler = () => {
        changeFilter('All', id)
    }
    const activeOnclickHandler = () => {
        changeFilter('Active', id)
    }
    const completedOnclickHandler = () => {
        changeFilter('Completed', id)
    }


    return (
        <div className={s.todolist}>
            <div className={s.todolistTitle}>
                <h3>{title}</h3>
                <button onClick={deleteTodoHandler}>x</button>
            </div>

            <div className={s.tasksBlock}>
                <AddItemForm callBack={newTaskHandler} placeholder={'What needs to be done?'}/>
                <ul>
                    {tasks.map(task => {
                        return <li>
                            <Task
                                  id={task.id}
                                  title={task.title}
                                  completed={task.completed}
                                  changeTaskStatus={(taskId, status) => changeTaskStatus(id, taskId, status)}/>
                        </li>
                    })}
                </ul>
                <div className={s.todoBottom}>
                    <div className={s.leftItems}>
                        <span>{tasks.filter(t => !t.completed).length} items left</span>
                    </div>
                    <div className={s.filters}>
                        <button onClick={allOnclickHandler}
                                className={filter === 'All' ? s.activeFilter : s.filter}>All</button>
                        <button onClick={activeOnclickHandler}
                                className={filter === 'Active' ? s.activeFilter : s.filter}>Active</button>
                        <button onClick={completedOnclickHandler}
                                className={filter === 'Completed' ? s.activeFilter : s.filter}>Completed</button>
                    </div>
                    <div className={s.clearButton}>
                        <button onClick={deleteCompletedTasks}>Clear completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Todolist;