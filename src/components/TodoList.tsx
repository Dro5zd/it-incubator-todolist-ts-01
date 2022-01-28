import React from "react";
import {TodoListItem} from "./TodoListItem";

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type TodoListTypeProps = {
    title: string
    tasks: Array<TasksType>
}

export const TodoList = (props: TodoListTypeProps) => {

    const elements = props.tasks.map(item => {
        return (
            <TodoListItem id={item.id} title={item.title} isDone={item.isDone}/>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <div>
                {elements}
            </div>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}