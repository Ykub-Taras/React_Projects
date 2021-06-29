export default function User({commentDataBlock: {id, name, email, body}}) {
    return (
        <div>
            <div>
                <h2>
                    {name}, # {id} ({email})
                </h2>
                <p>{body}</p>
            </div>
        </div>
    );
}
//------------------------------------------------------------------------------
// import User from "./user/User";
//
// export default function Users({usersDataBlock, postsInfo, posts}) {
//     return (
//         <div>
//             {usersDataBlock.map(value => <User key={value.id} userDataBlock={value} postsInfo={postsInfo}
//                                                posts={posts}/>)}
//
//         </div>
//     );
// }





// export default function Comment({comment}) {
//     return (
//         <div>
//             <h2>
//                 {comment.name}, # {comment.id} ({comment.email})
//             </h2>
//             <p>{comment.body}</p>
//         </div>
//     );
// }
