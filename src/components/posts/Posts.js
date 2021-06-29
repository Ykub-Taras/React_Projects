import Post from "./post/Post";

export default function Posts({postsDataBlock, commentsInfo, stylePosts}) {
    return (
        <div style={{display: stylePosts}}>
            {postsDataBlock.map(postsDataBlock => <Post key={postsDataBlock.id} postsDataBlock={postsDataBlock}
                                                        commentsInfo={commentsInfo}/>)}
        </div>
    );
}