import {getTodos} from "../../services/api";
import {useEffect, useState} from "react";
import Todo from "./todo/Todo";

export default function Users() {
    let [todos, setTodos] = useState([]);
    useEffect(() => {
        getTodos().then(value => {
            setTodos([...value.data])
        });
    }, []);
    return (
        <div>
            {todos.map(value => <Todo key={value.id} todoDataBlock={value}/>)}
        </div>
    );}