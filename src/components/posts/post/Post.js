import {useState} from "react";
import {getComment} from "../../../services/api";

export default function Post({postDataBlock: {id, title, body}}) {
    let [comment, setComment] = useState([])
    return (
        <div>
            <div>
                <p>#{id} - {title}
                    <button onClick={() => {
                        getComment(id).then(value => setComment([...value.data]));
                        console.log(comment)
                    }}>View all comments against post
                    </button>
                </p>
                <p>{body}</p>
                <hr/>
                {comment.map(value => <div><b>{value.name}:</b> {value.body}</div>)}
                <hr/>
                <hr/>
            </div>
        </div>
    );
}