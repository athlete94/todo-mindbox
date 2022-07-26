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
    let [filter, setFilter] = useState<FilterType>('All')


    // todolists
    const addNewList = (title: string) => {
        let todoId = v1()
        setTodolists([{id: todoId, title, filter: 'All'}, ...todolists] )
        setTasks({
            [todoId]: []
        })
    }

    //tasks
    const addTask = (todoId: string, title: string) => {
        setTasks({
            [todoId]: [{id: v1(), title, completed: false}, ...tasks[todoId]]
        })
    }

    //filter
    const changeFilter = (filterValue: FilterType) => {
        setFilter(filterValue)
    }


    return (
        <div className="App">
            <AddItemForm callBack={addNewList}/>

            <div className='todolists'>
                {
                    todolists.map(t => {
                        let todolistTasks = tasks[t.id]
                        return <Todolist key={t.id}
                                         id={t.id}
                                         title={t.title}
                                         filter={t.filter}
                                         tasks={todolistTasks}
                                         addTask={addTask}
                        />
                    })
                }

            </div>
        </div>
    );
}

export default App;
