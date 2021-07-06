import {getAlbums} from "../../services/api";
import {useEffect, useState} from "react";
import Album from './album/Album'

export default function Users() {
    let [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAlbums().then(value => {
            setAlbums([...value.data])
        });
    }, []);
    return (
        <div>
            {albums.map(value => <Album key={value.id} albumDataBlock={value}/>)}
        </div>
    );}