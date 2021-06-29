import {getComments} from "../../services/api";
import {useEffect, useState} from "react";
import User from "./comment/Comment";
export default function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(response => {
            setComments(response.data)
        });
    }, []);
    return (
        <div>
            {comments.map(value => <User key={value.id} commentDataBlock={value}/>)}

        </div>    )
}








// import Comment from "./comment/Comment";
//
// export default function Comments({comments, styleComments}) {
//
//     return (
//         <div style={{display: styleComments}}>
//             <hr/>
//             {comments.map(value => <Comment key={value.id} comment={value}/>)}
//         </div>
//     );
// }