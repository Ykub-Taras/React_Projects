import {useEffect, useState} from "react";
import {getUserPosts} from "../../../services/api";

export default function UsersPosts({id}) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getUserPosts(id).then(value =>
            setPosts([...value.data]))
    }, [id]);
    console.log(posts)
    return (
        <div>
            {posts.map(value => <div>{value.id} - {value.title}<br/>{value.body}</div>)}
        </div>
    )
}
