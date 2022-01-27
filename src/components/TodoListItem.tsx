import React from "react";


type TodoListItemTypeProps = {
    id: number
    title: string
    isDone: boolean
}

export const TodoListItem = (props: TodoListItemTypeProps) =>{
    return(
            <li><input type="checkbox" checked={props.isDone}/> {props.id} {props.title} </li>
    )
}