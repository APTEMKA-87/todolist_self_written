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
    removeTask: (id: number) => void
    changeFilteredTasks: (value: FilterType) => void
}

export const Todolist = (props: TodolistType) => {
    return (
        <div>

            <div>
                {props.title}
            </div>

            <div>
                <ul>
                    {props.tasks.map(t => <li><input type="checkbox"
                                                     checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => { props.removeTask(t.id)
                        }}>x
                        </button>
                    </li>)}

                </ul>
            </div>

            <div>
                <button onClick={()=>{props.changeFilteredTasks('all')}}>all</button>
                <button onClick={()=>{props.changeFilteredTasks('active')}}>active</button>
                <button onClick={()=>{props.changeFilteredTasks('completed')}}>completed</button>
            </div>


        </div>
    );
};
