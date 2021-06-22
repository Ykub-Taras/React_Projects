import './Users.css'
import {useEffect, useState} from "react";

export default function Users() {
    let [usersList, setUserList] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUserList(value)
            );
    }, [])
    let [postsList, setPostList] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPostList(value)
            );
    }, [])
    for (let i = 0; i < usersList.length; i++) {
        let x = [];
        let y = 1;
        // eslint-disable-next-line array-callback-return
        postsList.map(value => {
                if (value.userId === usersList[i].id) {
                    value.id = y;
                    y++;
                    x.push(value)
                }
            }
        )
        usersList[i].post = x;
        // console.log(usersList[i])
    }
    return (
        <div className={'itemBlock'}>
            {usersList.map(value =>
                <div className={'block'}>
                    <h2><span>Name:</span> {value.name} | <span>Username</span> - {value.username} | <span>ID</span> - {value.id}</h2>
                    <h3>Posts: {value.post.map(value =>
                        <div>
                            <h5>Post №: {value.id}</h5>
                            <h6>Title {value.title}</h6>
                            <p>{value.body}</p>
                        </div>
                    )}</h3>
                    <hr/>
                </div>)}
        </div>
    )
}





