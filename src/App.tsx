import React, {useState} from 'react';
import './App.css';
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import Todolist from "./components/Todolist/Todolist";
import {v1} from 'uuid'

export type FilterType = 'All' | 'Active' | 'Completed'

// task types
export type TaskType = {
    id: string
    title: string
    completed: boolean
}
export type TasksType = {
    [key: string]: Array<TaskType>
}

//Todolist type
export type TodolistType = {
    id: string
    title: string
    filter: FilterType
}

function App() {

    let [todolists, setTodolists] = useState<Array<TodolistType>>([])
    let [tasks, setTasks] = useState<TasksType>({})

    // todolists
     const addNewList = (title: string) => {
        let todoId = v1()
        setTodolists([{id: todoId, title, filter: 'All'}, ...todolists])
        setTasks({[todoId]: [], ...tasks})
    }
    const deleteTodolist = (todoId: string) => {
        setTodolists(todolists.filter(t => t.id !== todoId))
        delete tasks[todoId]
        setTasks({...tasks})
    }

    //tasks
    const addTask = (todoId: string, title: string) => {
        setTasks({
            ...tasks,
            [todoId]: [{id: v1(), title, completed: false}, ...tasks[todoId]]
        })
    }

    const deleteCompleted = (todoId: string) => {
        setTasks({
            ...tasks,
            [todoId]: tasks[todoId].filter(t => !t.completed)
        })
    }
    const changeTaskStatus = (todoId: string, taskId: string, status: boolean) => {
        setTasks({
            ...tasks,
            [todoId]: tasks[todoId].map(t => t.id === taskId ? {...t, completed: status} : t)
        })
    }

    //filter
    const changeFilter = (filterValue: FilterType, todoId: string) => {
        setTodolists(todolists.map(tl => tl.id === todoId ? {...tl, filter: filterValue} : tl))
    }


    return (
        <div className="App">
            <AddItemForm callBack={addNewList} placeholder={'New list'}/>

            <div className='todolists'>
                {

                    todolists.map(t => {
                        let filteredTasks = tasks[t.id]
                        if (t.filter === 'Active') {
                            filteredTasks = tasks[t.id].filter(t => !t.completed)
                        }
                        if (t.filter === 'Completed') {
                            filteredTasks = tasks[t.id].filter(t => t.completed)
                        }
                        return <Todolist key={t.id}
                                         id={t.id}
                                         title={t.title}
                                         filter={t.filter}
                                         tasks={filteredTasks}
                                         addTask={addTask}
                                         changeFilter={changeFilter}
                                         deleteCompleted={deleteCompleted}
                                         changeTaskStatus={changeTaskStatus}
                                         deleteTodolist={deleteTodolist}
                        />
                    })
                }

            </div>
        </div>
    );
}

export default App;
