import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

function App() {

    let tasks1 = [
        {id: 1, title: "JS", isDone: true},
        {id: 2, title: "React", isDone: false},
        {id: 3, title: "CSS", isDone: true}
    ]

    let tasks2 = [
        {id: 1, title: "Terminator", isDone: true},
        {id: 2, title: "Blood sport", isDone: true},
        {id: 3, title: "Autumn in New York", isDone: false}
    ]

    return (
        <div className="App">
            <TodoList title="What to do???" tasks={tasks1}/>
            <TodoList title="What to watch???" tasks={tasks2}/>
        </div>
    );
}

export default App;
