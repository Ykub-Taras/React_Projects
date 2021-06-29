import Comment from "./comment/Comment";

export default function Comments({comments, styleComments}) {

    return (
        <div style={{display: styleComments}}>
            <hr/>
            {comments.map(value => <Comment key={value.id} comment={value}/>)}
        </div>
    );
}