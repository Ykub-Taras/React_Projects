export default function User({userDataBlock: {id, name, username}, postsInfo}) {
    return (
        <div>
            <h2>
                {name}, # {id} ({username})
                <br/>
                <button onClick={() => {
                    postsInfo(id);
                    localStorage.setItem("stylePosts", JSON.stringify('block'));
                    localStorage.setItem("styleComments", JSON.stringify('none'));
                }}>View all posts of user
                </button>
            </h2>
        </div>
    );
}
