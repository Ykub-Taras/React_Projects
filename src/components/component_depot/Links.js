import {Link} from "react-router-dom";

const Links = () => {
    return (<div className={'navigation'}>
        <Link className={'items'} to={'/users'}>Users</Link><br/>
        <Link className={'items'} to={'/posts'}>Posts</Link><br/>
        <Link className={'items'} to={'/comments'}>Comments</Link><br/>
        <Link className={'items'} to={'/albums'}>Albums</Link><br/>
        <Link className={'items'} to={'/photos'}>Photos</Link><br/>
        <Link className={'items'} to={'/todos'}>Todos</Link>
        <hr/>
    </div>)
}

export default Links;
