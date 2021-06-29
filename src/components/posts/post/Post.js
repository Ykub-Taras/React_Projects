export default function Post({postsDataBlock: {id, title}, postsInfo}) {
    return (
        <div>
           <b> #{id}</b> - {title}   <button
                onClick={() => {
                    postsInfo(id);
                              }}
            >View post info
            </button>
        </div>
    );

}
