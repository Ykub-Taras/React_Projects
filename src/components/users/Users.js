import {getUsers} from "../../services/api";
import {useEffect, useState} from "react";
import User from "./user/User";

export default function Users() {
    let [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(response => {
            setUsers(response.data)
        });
    }, []);
    return (
        <div>
            {users.map(value => <User key={value.id} userDataBlock={value}/>)}
        </div>)
}
