
export default function User({userDataBlock: {id, name, username}}) {
    return (
        <div>
            <h2>
                {name}, # {id} ({username})
            </h2>
        </div>
    );
}



                //
                // <br/>
                // <button onClick={() => {
                //     postsInfo(id);
                //     localStorage.setItem("stylePosts", JSON.stringify('block'));
                //     localStorage.setItem("styleComments", JSON.stringify('none'));
                // }}>View all posts of user
                // </button>
