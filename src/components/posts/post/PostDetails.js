import {useEffect, useState} from "react";
import {getPost} from "../../../services/api";

export default function PostDetails({id}) {
    let [post, setPost] = useState([]);
    useEffect(() => {
        getPost(id).then(value =>
            setPost({...value.data}))
    }, [id]);
    return (
        <div>
            <p>{post.body}</p>
        </div>
    )
}
