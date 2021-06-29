export default function Comment({comment}) {
    return (
        <div>
            <h2>
                {comment.name}, # {comment.id} ({comment.email})
            </h2>
            <p>{comment.body}</p>
        </div>
    );
}
