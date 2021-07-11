import {getPhotos} from "../../services/api";
import {useEffect} from "react";
import Photo from "./photo/Photo";
import Links from "../component_depot/Links";
import {useSelector, useDispatch} from "react-redux";

export default function Users() {
    const dispatch = useDispatch();
    const photos = useSelector(({photosData}) => photosData)
    useEffect(() => {
        getPhotos().then(value => {
            dispatch({type: 'PHOTOS', payload: [...value.data]})
        });
    }, [dispatch]);
    return (
        <div>
            <Links/>
            <hr/>
            {photos.map(value => <Photo key={value.id} photoDataBlock={value}/>)}
        </div>
    );
}