import {useEffect, useState} from "react";
import {getComment} from "../../../services/api";

export default function UserDetails({id}) {
    let [comment, setComment] = useState([]);
    useEffect(() => {
        getComment(id).then(value =>
            setComment({...value.data}))
    }, [id]);
    return (
        <div>
            <hr/>
            <p>{comment.postId} - {comment.name} - {comment.email} </p>
            <p>{comment.body}</p>
            <hr/>
        </div>
    )
}