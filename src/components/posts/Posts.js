import {getPosts} from "../../services/api";
import {useEffect} from "react";
import Post from "./post/Post";
import Links from "../component_depot/Links";
import {useSelector, useDispatch} from "react-redux";

export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(({postsData}) => postsData)
    useEffect(() => {
        getPosts().then(value => {
            dispatch({type:'POSTS', payload: [...value.data]})

        });
    }, [dispatch]);
    return (
        <div>
            <Links/>
            <hr/>
            {posts.map(value => <Post key={value.id} postDataBlock={value}/>)}
        </div>
    );}