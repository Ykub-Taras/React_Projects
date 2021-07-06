import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";


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
        </div>
    );
}