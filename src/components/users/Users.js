import User from "./user/User";

export default function Users({usersDataBlock, postsInfo, posts}) {
    return (
        <div>
            {usersDataBlock.map(value => <User key={value.id} userDataBlock={value} postsInfo={postsInfo}
                                               posts={posts}/>)}

        </div>
    );
}