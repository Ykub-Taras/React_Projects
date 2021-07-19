import React, {Fragment} from "react";

const TodoItem = ({todo, onDeleteTodo}) => {

    return (

            <Fragment>
                <h3><u>Title:</u> {todo.title}</h3>
                <h4><u>Description:</u> {todo.description}</h4>
                <h6>ID: <i>{todo.id}</i></h6>
                <p>Created At: {new Date(todo.createdAt).toDateString()}</p>
                <p>Status {todo.completed.toString()}</p>
                <button onClick={() => onDeleteTodo(todo.id)}>
                    DELETE
                </button>
                <hr/>
            </Fragment>

    )
}

export default TodoItem