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

    let tasks3 = [
        {id: 1, title: "Blinding Lights", isDone: true},
        {id: 2, title: "Happy", isDone: false},
        {id: 3, title: "My heart will go on", isDone: false}
    ]
2
    return (
        <div className="App">
            <TodoList title="What to do???" tasks={tasks1}/>
            <TodoList title="What to watch???" tasks={tasks2}/>
            <TodoList title="What to listen???" tasks={tasks3}/>
        </div>
    );
}

export default App;
