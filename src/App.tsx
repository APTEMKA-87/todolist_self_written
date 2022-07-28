import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";
import {v1} from "uuid";


export type FilterType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'HTML', isDone: true},
        {id: v1(), title: 'REACT', isDone: false},
        {id: v1(), title: 'PHP', isDone: false},
        {id: v1(), title: 'CSS', isDone: false},
    ])

    const removeTask = (id: string) => {
        let filteredTasks = tasks.filter(t => t.id != id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterType>('all')

    let taskForTodoList = tasks

    if (filter === 'active') {
        taskForTodoList = tasks.filter(t => !t.isDone)
    }

    if (filter === 'completed') {
        taskForTodoList = tasks.filter(t => t.isDone)
    }

    const changeFilteredTasks = (value: FilterType) => {
        setFilter(value)
    }

    const addTask = (title:string) => {
      let task = {id: v1(), title: title, isDone: false}
        let newTaskTitle = [task, ...tasks]
        setTasks(newTaskTitle)
    }

    return (
        <div className="App">
            <Todolist
                title='What to learn'
                tasks={taskForTodoList}
                removeTask={removeTask}
                changeFilteredTasks={changeFilteredTasks}
                addTask={addTask}
            />
        </div>
    );
}

export default App;
