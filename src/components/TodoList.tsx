import React from "react";

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

    const elenents = props.tasks.map(item => {
        return (
            <TodoListItem id={item.id} title={item.title} isDone={item.isDone}/>
        )
    })

    return (
        <div>
            <h3>{props.title}</h3>

            <div>
                {elenents}
            </div>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>/// Перенести в лист айтем
                <li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>
                <li><input type="checkbox" checked={true}/> <span>JS</span></li>
                <li><input type="checkbox" checked={false}/> <span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}