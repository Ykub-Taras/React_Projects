import React, {Fragment} from "react";
import {deleteTodoByID, getTodos} from "../services/api";
import {useDispatch, useSelector} from "react-redux";
import {addTodos} from "../redux/actionsCreatores";

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(({todosReducer}) => todosReducer.todos);
    return (
        <div>
            {todos.map(todo => (
                <Fragment key={todo.id}>
                    <h3><u>Title:</u> {todo.title}</h3>
                    <h4><u>Description:</u> {todo.description}</h4>
                    <h6>ID: <i>{todo.id}</i></h6>
                    <p>Created At: {new Date(todo.createdAt).toDateString()}</p>
                    <p>Status {todo.completed.toString()}</p>

                        <button onClick={() => (deleteTodoByID(todo.id),
                            getTodos().then(value => todos = value.data
                            ))}>
                        


                        DELETE</button>
                    <hr/>
                </Fragment>
            ))}
        </div>
    )
};
export default Todos