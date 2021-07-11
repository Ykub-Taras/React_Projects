import {getUsers} from "../../services/api";
import {useEffect} from "react";
import User from "./user/User";
import Links from "../component_depot/Links";
import {useSelector, useDispatch} from "react-redux";

export default function Users() {
    const dispatch = useDispatch();
    const users = useSelector(({usersData}) => usersData)
    useEffect(() => {
        getUsers().then(value => {
            dispatch({type: 'USERS', payload: [...value.data]})
        });
    }, [dispatch]);
    return (
        <div>
            <Links/>
            <hr/>
            {users.map(value => <User key={value.id} userDataBlock={value}/>)}
        </div>
    );
}