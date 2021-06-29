import './App.css';
import Posts from "./components/posts/Posts";

import {useEffect, useState} from "react";
import {getPosts, getAllPosts} from "./services/api";

export default function App() {
    let [allPosts, setAllPosts] = useState([]);
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts().then(response => {
            setAllPosts(response.data)
        });
    }, []);

    function postsInfo(postsInfo) {
        getPosts(postsInfo).then(value => {
            setPosts(value.data);
        });
    }

    return (
        <div>
            <Posts postsDataBlock={allPosts} postsInfo={postsInfo}/>
            <hr/>
            {posts && posts.body}
        </div>
    );
}