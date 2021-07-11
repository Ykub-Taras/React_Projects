export default function User({commentDataBlock: {postId, name}}) {
    return (
            <div>
                {postId}.{name}

            </div>
    );
}
