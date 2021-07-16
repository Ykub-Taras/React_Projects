import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";


const TodosBlock = () => {
        const dispatch = useDispatch();
        const todoList = useSelector(({todoList}) => todoList);
        const todoListEdit = useSelector(({todoListEdit}) => todoListEdit);
        let [inputtedTitle, setInputtedTitle] = useState('');
        let [inputtedBody, setInputtedBody] = useState('');
        let todoArray = {title: inputtedTitle, body: inputtedBody};

        function onSubmit(e) {
            e.preventDefault();
            setInputtedTitle('');
            setInputtedBody('');
            dispatch({type: 'TODOLISTEDIT', payload: []})
        }

        function onInputName(e) {
            setInputtedTitle(e.target.value);
        }

        function onInputBody(e) {
            setInputtedBody(e.target.value);
        }

        function construct() {
            if (todoListEdit.length === 0) {
                dispatch({type: 'TODOLIST', payload: todoArray})
            } else {
                dispatch({type: 'TODOLISTEDITRESULT', payload: todoArray})
            }
        }

        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" name={'Name'} value={inputtedTitle}
                           placeholder="TODO title"
                           onChange={onInputName}/>
                    <br/>
                    <input type="text" name={'Body'} value={inputtedBody}
                           placeholder="TODO description"
                           onChange={onInputBody}/>
                    <br/>
                    <button disabled={!inputtedTitle || !inputtedBody}
                            onClick={construct}>Submit TODO
                    </button>
                </form>
                <hr/>


                <div>
                    {todoList.length !== 0 ?
                        (todoList.map((value, index) => (<div><h3>{++index}: {value.title}</h3>
                            <p><i>{value.body}</i></p>
                            <button onClick={() => (setInputtedTitle(value.title), setInputtedBody(value.body), dispatch({
                                type: 'TODOLISTEDIT',
                                payload: [{title: value.title, body: value.body}]
                            }))}
                            >
                                Edit
                            </button>
                            <button onClick={() => dispatch({type: 'TODOLISTDELETE', payload: value})}>DELETE
                            </button>
                            <hr/>
                        </div>))) : <div>TODO list is empty</div>}
                </div>
            </div>
        )
    }


;
export default TodosBlock;