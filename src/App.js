import React, {useEffect} from 'react'
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {addTodos, pushTodo, setLoadingFalse,} from "./redux/actionsCreatores";
import {createTodo, getTodos} from "./services/api";
import Todos from "./components/TodosList";
import CreateTodoForm from "./components/ImputForm";


function App() {
    const dispatch = useDispatch();
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
    const todos = useSelector(({todosReducer}) => todosReducer.todos);
    const todosLoading = useSelector(({todosReducer}) => todosReducer.todosLoading);
    return (
        <div className="App">
            <CreateTodoForm onSubmit={onTodoCreate}/>
            <hr/>
            <Todos todos={todos} isLoading={todosLoading}/>
        </div>
    )
}
export default App;