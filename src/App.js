import './App.css';
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";

import {useEffect, useState} from "react";
import {getUsers, getComments, getPost} from "./services/api";

export default function App() {
    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState([]);
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
        });
    }, []);

    function postsInfo(postsInfo) {
        getPost(postsInfo).then(value => {
            setPosts(value.data);
        });
    }

    function commentsInfo(commentsInfo) {
        getComments(commentsInfo).then(value => {
                setComments(value.data)
            }
        );
    }

    let stylePosts = JSON.parse(localStorage.getItem("stylePosts"));
    let styleComments = JSON.parse(localStorage.getItem("styleComments"));
    return (
        <div>
            <Users usersDataBlock={users} postsInfo={postsInfo} posts={posts}/>
            <hr/>
            {posts && <Posts postsDataBlock={posts} commentsInfo={commentsInfo} stylePosts={stylePosts}/>}
            {comments && <Comments comments={comments} styleComments={styleComments}/>}
        </div>
    );
}