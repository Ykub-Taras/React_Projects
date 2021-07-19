import React  from "react";
import TodoItem from "./todosBlock/TodoItem";

const Todos = ({todos, onDeleteTodo}) => {
        return (<div>
                {todos.length !== 0 ? todos.map(todo =>  <TodoItem onDeleteTodo={onDeleteTodo} key={todo.id} todo={todo}/>
                    )
                : <div>TODO list is empty</div>
                }
            </div>)};
export default Todos