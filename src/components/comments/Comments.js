import {getComments} from "../../services/api";
import {useEffect} from "react";
import Comment from "./comment/Comment";
import Links from "../component_depot/Links";
import {useSelector, useDispatch} from "react-redux"

export default function Comments() {
    const dispatch = useDispatch();
    const comments = useSelector(({commentsData}) => commentsData)
    useEffect(() => {
        getComments().then(value => {
            dispatch({type: 'COMMENTS', payload: [...value.data]})
        });
    }, [dispatch]);
    return (
        <div>
            <Links/>
            <hr/>
            {comments.map(value => <Comment key={value.id} commentDataBlock={value}/>)}
        </div>
    );
}