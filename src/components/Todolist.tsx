import React from 'react';
import {FilterType} from "../App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type TodolistType = {
    title: string
    tasks: TaskType[]
    removeTasks: (taskId: number) => void
    changeFilter: (value: FilterType) => void
}

export const Todolist = (props: TodolistType) => {
    return (
        <div>

            <div>
                <span>{props.title}</span>
                <button>+</button>
            </div>

            <div>
                <ul>
                    {props.tasks.map(t => <li>
                        <input type={"checkbox"}
                               checked={t.isDone}/>{t.title}
                        <button onClick={() => {
                            props.removeTasks(t.id)
                        }}>x
                        </button>
                    </li>)}
                </ul>
            </div>

            <div>
                <button onClick={()=> {props.changeFilter("all")}}>all</button>
                <button onClick={()=> {props.changeFilter("active")}}>active</button>
                <button onClick={()=> {props.changeFilter("completed")}}>completed</button>
            </div>

        </div>
    );
};
