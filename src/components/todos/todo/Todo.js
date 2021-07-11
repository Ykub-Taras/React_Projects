export default function Todo({todoDataBlock: {userId, id, title, completed}}) {
    return (
        <div>{userId} / {id}:<br/>
            Status - {`${completed}`}<br/>
             {title}

        </div>
    );
}
