import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./components/Todolist";


export type FilterType = 'all' | 'active' | 'completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'HTML', isDone: true},
        {id: 3, title: 'REACT', isDone: false},
        {id: 4, title: 'PHP', isDone: false},
        {id: 5, title: 'CSS', isDone: false},
    ])

    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter(t => t.id != id)
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterType>('all')

    let taskForTodoList = tasks

    if (filter === 'active') {
        taskForTodoList = tasks.filter(t => t.isDone === false)
    }

    if (filter === 'completed') {
        taskForTodoList = tasks.filter(t => t.isDone === true)
    }

    const changeFilteredTasks = (value: FilterType) => {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist
                title='What to learn'
                tasks={taskForTodoList}
                removeTask={removeTask}
                changeFilteredTasks={changeFilteredTasks}
            />
        </div>
    );
}

export default App;
