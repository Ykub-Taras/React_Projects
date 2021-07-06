export default function Album({albumDataBlock: {id, title}}) {
    return (
            <div>
                {id}.{title}
            </div>
    );
}
