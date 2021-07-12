import React, {Fragment} from 'react'
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {
    setLoadingFalse,
    setLoadingTrue,
    addTodos,
    pushTodo,
} from "./components/component_depot/actionsCreatores/index";
import {createTodo, deleteTodoByID, getTodos} from "./services/api";

const CreateTodoForm = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description || isLoading) return;

        try {
            setIsLoading(true)
            await onSubmit(title, description);
            setTitle('')
            setDescription('')
        } catch (e) {
            console.log(e)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={({target: {value}}) => setTitle(value)} placeholder="todo title" />
            <br/>
            <br/>
            <input type="text" value={description} onChange={({target: {value}}) => setDescription(value)} placeholder="todo description" />
            <br/>
            <br/>
            <button type="submit" disabled={!title || !description || isLoading}>create todo</button>
        </form>
    )
}
//-------------
const deleteTodo = async (id) => {
    console.log(id);
    await fetch('http://localhost:8888/delete-todo/'+ id, {
            method: 'DELETE'})}
//-------------
const Todos = ({todos, isLoading}) => {
    if(isLoading) return <h1>LOADING...</h1>

    return (
        <div>
            {todos.map(todo => (
                <Fragment key={todo.id}>
                    <div>{todo.id}: {todo.title}</div>
                    <div>{todo.description}</div>
                    <div>Created At: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}</div>


                    <button onClick={() => deleteTodo(todo.id)}
                    >DELETE
                    </button>

                    <hr/>
                </Fragment>
            ))}
        </div>
    )
}

function App() {
    const { todos, todosLoading } = useSelector(store => store.todosReducer);
    const dispatch = useDispatch();
// async await?
    useEffect(   () =>  { getTodos().then(value => { dispatch(addTodos([...value.data]))})
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
            <CreateTodoForm onSubmit={onTodoCreate} />
            <Todos todos={todos} isLoading={todosLoading} />
        </div>
    );
}

export default App;






// const onTodoCreate = async (title, description) => {
//     if(!title || !description) return;
//
//     console.log(JSON.stringify({title, description}))
//
//     const resp = await fetch('http://localhost:8888/create-todo', {
//         method: 'POST',
//         body: JSON.stringify({title, description}),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     const data = await resp.json();
//
//     dispatch(pushTodo(data))
// }











// import './App.css';
//
// import {BrowserRouter as Router} from 'react-router-dom';
//
// import Routes from "./components/component_depot/Routes";
// import NavMenu from "./components/component_depot/NavMenu";
//
//
// export default function App() {
//
//     return (
//         <div>
//             <Router>
//                 <NavMenu/>
//                 <hr/>
//                 <Routes/>
//             </Router>
//         </div>
//     )
// }