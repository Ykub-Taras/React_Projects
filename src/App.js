import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";
import Albums from "./components/albums/Albums";
import Photos from "./components/photos/Photos";
import Todos from "./components/todos/Todos";


export default function App() {

    let [inputedNumber, setInputedNumber] = useState({})

    function onSubmit(e) {
        console.log(e.target.Number.value);
        e.preventDefault();
    }

    function onInput(e) {
        setInputedNumber(e.target.value)
    }

    const counter = useSelector(({counterValue}) => counterValue);
    console.log('counter = ', counter)
    const dispatch = useDispatch();
    return (
        <div><h1>{counter}</h1>
            <button onClick={event => dispatch({type: 'INC'})}><h2>+ 1</h2></button>
            {' '}
            <button onClick={event => dispatch({type: 'DEC'})}><h2>- 1</h2></button>
            {' '}
            <button onClick={event => dispatch({type: 'RESET'})}><h2>RESET</h2></button>
            <button onClick={event => dispatch({type: 'RANDOM'})}><h2>Surprise me!</h2></button>
            <form onSubmit={onSubmit}>
                <input type="text" name={'Number'}
                       placeholder="Number..."
                       onChange={onInput}/>
                <button onClick={event => dispatch({type: 'INPUTED', payload: +inputedNumber})}>Submit number</button>
            </form>
            <hr/>

            <Router>
                <div>
                    <Link to={'/users'}>Users</Link>
                    <br/>
                    <Link to={'/posts'}>Posts</Link>
                    <br/>
                    <Link to={'/comments'}>Comments</Link>

                    <br/>
                    <Link to={'/albums'}>Albums</Link>
                    <br/>
                    <Link to={'/photos'}>Photos</Link>
                    <br/>
                    <Link to={'/todos'}>Todos</Link>
                    <hr/>
                    <Switch>
                        {/*<Route exact path={'/users'}>#</Route>*/}
                        <Route exact path={'/users'} render={() => <Users/>}/>
                        <Route exact path={'/posts'} render={() => <Posts/>}/>
                        <Route exact path={'/comments'} render={() => <Comments/>}/>
                        <Route exact path={'/albums'} render={() => <Albums/>}/>
                        <Route exact path={'/photos'} render={() => <Photos/>}/>
                        <Route exact path={'/todos'} render={() => <Todos/>}/>
                    </Switch>
                </div>
            </Router>


        </div>
    );
}