import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setLoadingFalse, setLoadingTrue} from "../redux/actionsCreatores";

const CreateTodoForm = ({onSubmit, todosLoading}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title || !description || isLoading) return;
        try {setIsLoading(true);
            dispatch(setLoadingTrue())
            console.log('set true')
            await onSubmit(title, description);
            setTitle('');
            setDescription('');
        } catch (e) {console.log(e)} finally {setIsLoading(false);
            console.log('set false'); dispatch(setLoadingFalse())}
    }
    if(todosLoading) {
        console.log('***isLoading:***', todosLoading)
        return <h1>LOADING...</h1>
    } else {
       console.log('***isLoading:***', todosLoading)
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={({target: {value}}) => setTitle(value)}
                   placeholder="todo title"/>
            <br/>
            <br/>
            <input type="text" value={description} onChange={({target: {value}}) => setDescription(value)}
                   placeholder="todo description"/>
            <br/>
            <br/>
            <button type="submit" disabled={!title || !description || isLoading}>create todo</button>
        </form>
    )
}}
export default CreateTodoForm;