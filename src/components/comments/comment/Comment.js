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
