import React from 'react';
import s from './Todolist.module.css'
import {FilterType} from "../../App";

type TodolistPropsType = {
    id: string
    name: string
    filter: FilterType
}

const Todolist = ({id, name, filter}: TodolistPropsType) => {

    return (
        <div className={s.todolist}>
            {name}
        </div>
    );
};

export default Todolist;