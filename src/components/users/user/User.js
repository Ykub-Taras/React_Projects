import {useState} from "react";

export default function User({userDataBlock: {id, name, username}, postsInfo}) {
    const [x, setX] = useState(true);
    const cls = x ? 'block' : 'none';
    return (

        <div className={'xxx'} style={{display: cls}}>
            <h2>
                {name}, # {id} ({username})
                <br/>
                <button onClick={() => {
                    postsInfo(id);
                  }}>View all posts of user
                </button>
            </h2>
        </div>
    );
}
//----------------------OLD via localStorage -----------------------------------
// export default function User({userDataBlock: {id, name, username}, postsInfo}) {
//     return (
//         <div>
//             <h2>
//                 {name}, # {id} ({username})
//                 <br/>
//                 <button onClick={() => {
//                     postsInfo(id);
//                     localStorage.setItem("stylePosts", JSON.stringify('block'));
//                     localStorage.setItem("styleComments", JSON.stringify('none'));
//                 }}>View all posts of user
//                 </button>
//             </h2>
//         </div>
//     );
// }
