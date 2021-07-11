import {getTodos} from "../../services/api";
import {useEffect} from "react";
import Todo from "./todo/Todo";
import Links from "../component_depot/Links";
import {useSelector, useDispatch} from "react-redux";

export default function Users() {
    const dispatch = useDispatch();
    const todos = useSelector(({todosData}) => todosData)
    useEffect(() => {
        getTodos().then(value => {
            dispatch({type: 'TODOS', payload: [...value.data]})
        });
    }, [dispatch]);
    return (
        <div>
            <Links/>
            <hr/>
            {todos.map(value => <Todo key={value.id} todoDataBlock={value}/>)}
        </div>
    );
}