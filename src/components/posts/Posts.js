import {getPosts} from "../../services/api";
import {useEffect, useState} from "react";
import Post from "./post/Post";
export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(response => {
            setPosts(response.data)
        });
    }, []);
    return (
        <div>
            {posts.map(value => <Post key={value.id} postDataBlock={value}/>)}

        </div>    )
}








// import Post from "./post/Post";
//
// export default function Posts({postsDataBlock, commentsInfo, stylePosts}) {
//     return (
//         <div style={{display: stylePosts}}>
//             {postsDataBlock.map(postsDataBlock => <Post key={postsDataBlock.id} postsDataBlock={postsDataBlock}
//                                                         commentsInfo={commentsInfo}/>)}
//         </div>
//     );
// }