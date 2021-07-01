import {getPost} from "../../../services/api";
import {useState} from "react";

export default function User({userDataBlock: {id, name, username}}) {
    let [post, setPost] = useState([])
    return (
        <div>
            <h2>{name}, # {id} ({username})
                <button onClick={() => {
                    getPost(id).then(value => setPost([...value.data]));
                    console.log(post);
                }}>View all posts of user
                </button>
            </h2>
            {post.map(value => <div><b>{value.title}:</b> {value.body}</div>)}
        </div>
    );
}
