import Post from "./post/Post";

export default function Posts({postsDataBlock, postsInfo}) {
    return (
        <div>
            {postsDataBlock.map(postsDataBlock => <Post key={postsDataBlock.id} postsDataBlock={postsDataBlock} postsInfo={postsInfo}/>)}
        </div>
    );
}