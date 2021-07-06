import {getPhotos} from "../../services/api";
import {useEffect, useState} from "react";
import Photo from "./photo/Photo";

export default function Users() {
    let [photos, setPhotos] = useState([]);
    useEffect(() => {
        getPhotos().then(value => {
            setPhotos([...value.data])
        });
    }, []);
    return (
        <div>
            {photos.map(value => <Photo key={value.id} photoDataBlock={value}/>)}
        </div>
    );}