import React, {useEffect} from 'react'
import './App.css';

import {useDispatch, useSelector} from "react-redux";
import {addTodos, pushTodo, setLoadingFalse,} from "./redux/actionsCreatores";
import {createTodo, getTodos} from "./services/api";
import Todos from "./components/TodosList";
import CreateTodoForm from "./components/ImputForm";


function App() {
    const {todos, todosLoading} = useSelector(store => store.todosReducer);
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

    return (
        <div className="App">
            <CreateTodoForm onSubmit={onTodoCreate}/>
            <Todos todos={todos} isLoading={todosLoading}/>
        </div>
    );
}
export default App;



//---------------------------------------------------------------------

// import './App.css';
//
// import {BrowserRouter as Router} from 'react-router-dom';
//
// import Routes from "./components/redux/Routes";
// import NavMenu from "./components/redux/NavMenu";
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