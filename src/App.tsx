import React, {useState} from 'react';
import './App.css';
import {AddItemForm} from "./components/AddItemForm/AddItemForm";
import Todolist from "./components/Todolist/Todolist";
import {v1} from 'uuid'

export type FilterType = 'All' | 'Active' | 'Completed'

// task types
export type TaskType = {
    id: string
    name: string
    filter: FilterType
}
export type TasksType = {
    [key: string]: Array<TaskType>
}

//Todolist type
export type TodolistType = {
    id: string
    name: string
    filter: FilterType
}

function App() {

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: v1(), filter: 'All', name: 'First list'},
        {id: v1(), filter: 'All', name: '2 list'}
    ])
    let [tasks, setTasks] = useState<Array<TasksType>>([])
    let [filter, setFilter] = useState<FilterType>('All')


    const addNewList = (name: string) => {
        setTodolists([...todolists, {id: v1(), name, filter: 'All'}])
    }

    const changeFilter = (filterValue: FilterType) => {
        setFilter(filterValue)
    }

    return (
        <div className="App">
            <AddItemForm callBack={addNewList}/>

            <div className='todolists'>
                {
                    todolists.map(t => {
                        return <Todolist key={t.id}
                                         id={t.id}
                                         name={t.name}
                                         filter={t.filter}
                        />
                    })
                }

            </div>
        </div>
    );
}

export default App;
