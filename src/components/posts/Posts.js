import {getPosts} from "../../services/api";
import {useEffect, useState} from "react";
import Post from "./post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => {
            setPosts([...value.data])
        });
    }, []);
    return (
        <div>
            {posts.map(value => <Post key={value.id} postDataBlock={value}/>)}
        </div>
    );}