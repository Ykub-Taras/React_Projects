import React, {useEffect} from 'react'
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {addTodos, pushTodo, setLoadingFalse,} from "./redux/actionsCreatores";
import {createTodo, getTodos} from "./services/api";
import CreateTodoForm from "./components/ImputForm";
import Todos from "./components/TodosList";


function App() {
    const todosLoading = useSelector(({todosReducer}) => todosReducer.todosLoading);
    const dispatch = useDispatch();
    const todos = useSelector(({todosReducer}) => todosReducer.todos);

    useEffect(() => {
        getTodos().then(value => {
            dispatch(addTodos([...value.data]))
        })
            .catch(e => console.log(e))
            .finally(() => dispatch(setLoadingFalse()))
    }, [dispatch])

    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;
        console.log(JSON.stringify({title, description}))
        const headers = {'Content-Type': 'application/json'}
        const body = {title, description};
        await createTodo({body}, {headers}).then(value => {
            dispatch(pushTodo({...value.data}))
        })
    }

    return (
        <div className="App">
            <CreateTodoForm todosLoading={todosLoading} onSubmit={onTodoCreate}/>
            <hr/>
            <Todos/>
        </div>
    )
}
export default App