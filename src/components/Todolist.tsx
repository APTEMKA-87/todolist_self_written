import React, {useState} from 'react';
import {FilterType} from "../App";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type TodolistType = {
    title: string
    tasks: TaskType[]
    removeTask: (id: string) => void
    changeFilteredTasks: (value: FilterType) => void
    addTask: (title: string) => void
}

export const Todolist = (props: TodolistType) => {

    const onAllClickYandler = () => {
        props.changeFilteredTasks('all')
    }
    const onActiveClickYandler = () => {
        props.changeFilteredTasks('active')
    }
    const onCompltedClickYandler = () => {
        props.changeFilteredTasks('completed')
    }

    const [newTaskTitle, setNewTaskTitle] = useState('')

    return (
        <div>

            <div>
                {props.title}
            </div>

            <div>
                <input value={newTaskTitle}
                       onChange={(e) => {
                           setNewTaskTitle(e.currentTarget.value)
                       }}
                       onKeyUp={(e) => {
                           if (e.key === 'Enter') {
                               props.addTask(newTaskTitle)
                           }
                       }}
                ></input>
                <button onClick={() => {
                    props.addTask(newTaskTitle)
                }}>+
                </button>
            </div>

            <div>
                <ul>
                    {props.tasks.map(t => <li>
                        <input type="checkbox"
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => {
                            props.removeTask(t.id)
                        }}>x
                        </button>
                    </li>)}

                </ul>
            </div>

            <div>
                <button onClick={onAllClickYandler}>all</button>
                <button onClick={onActiveClickYandler}>active</button>
                <button onClick={onCompltedClickYandler}>completed</button>
            </div>


        </div>
    );
};
