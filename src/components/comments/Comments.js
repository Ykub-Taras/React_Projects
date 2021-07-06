import {getComments} from "../../services/api";
import {useEffect, useState} from "react";
import Comment from "./comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => {
            setComments([...value.data])
        });
    }, []);
    return (
        <div>
            {comments.map(value => <Comment key={value.id} commentDataBlock={value}/>)}
        </div>
    );}