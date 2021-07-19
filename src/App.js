import React, {useEffect} from 'react'
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {addTodos, deleteTodo, pushTodo, setLoadingFalse,} from "./redux/actionsCreatores";
import {createTodo, deleteTodoByID, getTodos} from "./services/api";
import CreateTodoForm from "./components/ImputForm";
import Todos from "./components/TodosList";
import {BrowserRouter} from "react-router-dom";


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

    const onDeleteTodo = async (id) => {
        console.log('ajsdhga');
        await deleteTodoByID(id).then(response => response.data);
        dispatch(deleteTodo(id))
    }
    return (
        <div className="App">
                <BrowserRouter>
                <CreateTodoForm todosLoading={todosLoading} onSubmit={onTodoCreate}/>
                <hr/>
                <Todos onDeleteTodo={onDeleteTodo} todos={todos}/>
            </BrowserRouter>

        </div>
    )
}
export default App