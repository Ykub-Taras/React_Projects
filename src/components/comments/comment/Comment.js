import './Comment.css';
import {useEffect, useState} from "react";

export default function Comment() {
    let [commentsList, setCommentList] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setCommentList(value)
            );
    }, [])
    return (
        <div className={'commentBlock'}>
            {commentsList.map(value =>
                <div className={'block'}>
                    <h3>Post ID: {value.postId} | ID - {value.id}</h3>
                    <h2>{value.name}</h2>
                    <h3><span>e-mail:</span> <a href={`mailto:${value.email}`}>{value.email}</a></h3>
                    <p>{value.body}</p>
                    <hr/>
                </div>)}
        </div>
    )
}

