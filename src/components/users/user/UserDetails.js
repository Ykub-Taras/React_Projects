import {useEffect, useState} from "react";
import {getUser} from "../../../services/api";

export default function UserDetails({id}) {
    let [user, setUser] = useState([]);
    useEffect(() => {
        getUser(id).then(value =>
            setUser({...value.data}))
    }, [id]);
    return (
        <div>
            <p>{user.username} - {user.email}</p>
            <p>{user.phone}</p>
            {/*<p>*/}
            {/*    {user.address.city}, {user.address.street}, {user.address.suite}*/}
            {/*</p>*/}
        </div>
    )
}
