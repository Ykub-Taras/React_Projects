import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const Counter = () => {
    let [inputtedNumber, setInputtedNumber] = useState({});
    function onSubmit(e) {
        e.preventDefault();
    }
    function onInput(e) {
        setInputtedNumber(e.target.value)
    }
    const counter = useSelector(({counterValue}) => counterValue);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                {counter}
            </h1>
            <button onClick={() => dispatch({type: 'INC'})}><h2>+ 1</h2></button>
            {' '}
            <button onClick={() => dispatch({type: 'DEC'})}><h2>- 1</h2></button>
            {' '}
            <button onClick={() => dispatch({type: 'RESET'})}><h2>RESET</h2></button>
            <button onClick={() => dispatch({type: 'RANDOM'})}><h2>Surprise me!</h2></button>
            <form onSubmit={onSubmit}>
                <input type="text" name={'Number'}
                       placeholder="Number..."
                       onChange={onInput}/>
                <button onClick={() => dispatch({type: 'INPUTTED', payload: +inputtedNumber})}>Submit number</button>
            </form>
            <hr/>
        </div>
    )
}
export default Counter;




