import {Link} from "react-router-dom"
import  "../../App.css"
const NavMenu = () => {
    return (
        <div className={'navigation'} style={{background:"aquamarine"}}>
            <div className={'items'}><Link to={'/counter'}>Counter</Link></div>
            <div className={'items'}><Link to={'/jsonholder'}>JSON Placeholder</Link></div>
            <div className={'items'}><Link to={'/todosblock'}>TODOs</Link></div><hr/>
        </div>
    )
}

export default NavMenu;