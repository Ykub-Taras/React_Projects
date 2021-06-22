import './Post.css';
import {useEffect, useState} from "react";
export default function Post() {
    let [postsList, setPostsList] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPostsList(value)
            );
    }, [])
    return (
        <div className={'postBlock'}>
            {postsList.map(value =>
                <div className={'block'}>
                    <h3>User ID: {value.userId} | ID - {value.id}</h3>
                    <h2>{value.title}</h2>
                    <p>{value.body}</p>
                    <hr/>
                </div>)}
        </div>
    )
}

