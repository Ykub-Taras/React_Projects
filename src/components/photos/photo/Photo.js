
export default function Photo({photoDataBlock: {id, title, url}}) {
    return (
            <div>
                {id}.{title} - {url}
            </div>
    );
}
