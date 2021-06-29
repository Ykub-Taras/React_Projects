export default function Post({postDataBlock: {id, title, body}}) {
    return (
        <div>
            <div>
                <p>#{id} - {title}</p>
                <p>{body}</p>
            </div>
        </div>
    );
}


// export default function Post({postsDataBlock: {id, title, body}, commentsInfo}) {
//     return (
//         <div>
//             <p>#{id} - {title}</p>
//             <p>
//                 {body}</p>
//             <button
//                 onClick={() => {
//                     commentsInfo(id);
//                     localStorage.setItem("stylePosts", JSON.stringify('none'));
//                     localStorage.setItem("styleComments", JSON.stringify('block'));
//                 }}
//             >View all comments on post
//             </button>
//         </div>
//     );
//
// }
