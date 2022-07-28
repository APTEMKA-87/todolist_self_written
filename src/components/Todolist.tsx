import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
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
        const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setNewTaskTitle(e.currentTarget.value)
        }
        const onKeyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
                props.addTask(newTaskTitle)
            }
        }
        const onClickAddTaskHandler = () => {
            props.addTask(newTaskTitle)
        }

        const [newTaskTitle, setNewTaskTitle] = useState('')

        return (
            <div>

                <div>
                    {props.title}
                </div>

                <div>
                    <input value={newTaskTitle}
                           onChange={onChangeInputHandler}
                           onKeyUp={onKeyUpHandler}
                    ></input>
                    <button onClick={onClickAddTaskHandler}>+
                    </button>
                </div>

                <div>
                    <ul>
                        {props.tasks.map(t => {

                            const onClickRemoveTaskHandler = () => {
                                props.removeTask(t.id)
                            }

                            return <li>
                                <input type="checkbox"
                                       checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={onClickRemoveTaskHandler}>x
                                </button>
                            </li>
                        })}

                    </ul>
                </div>

                <div>
                    <button onClick={onAllClickYandler}>all</button>
                    <button onClick={onActiveClickYandler}>active</button>
                    <button onClick={onCompltedClickYandler}>completed</button>
                </div>


            </div>
        );
    }
;
