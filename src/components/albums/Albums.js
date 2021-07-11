import {getAlbums} from "../../services/api";
import {useEffect} from "react";
import Album from './album/Album'
import Links from "../component_depot/Links";
import {useSelector, useDispatch} from "react-redux"

export default function Users() {
    const dispatch = useDispatch();
    const albums = useSelector(({albumsData}) => albumsData)
    useEffect(() => {
        getAlbums().then(value => {
            dispatch({type: 'ALBUMS', payload: [...value.data]})
        });
    }, [dispatch]);
    return (
        <div>
            <Links/>
            <hr/>
            {albums.map(value => <Album key={value.id} albumDataBlock={value}/>)}
        </div>
    );
}