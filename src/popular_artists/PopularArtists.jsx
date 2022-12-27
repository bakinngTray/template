import { useState, useEffect } from "react";
import Artist from './Artist';
import ArtistsDescription from './ArtistsDescription';
import { LAST_FM_KEY, ALERT_MESSAGE } from '../const'; 
import './popular_artists.css';


/**
 * Самые популярные артисты
 * @returns HTMLElement
 */
 export default function PopularArtists() {
    const [artists, setArtists] = useState([]);
    const [best_artist, setBestArtist] = useState([]);
    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${LAST_FM_KEY}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                setBestArtist(json.artists.artist[0]);
                setArtists(
                    json.artists.artist.slice(0, 5)
                );
            })
            .catch(() => {
                window.alert(ALERT_MESSAGE);
            })
    }, []);
    return (
        <div className="content__mainGroup">
            <h2 className="content__title">Spiking Artists</h2>
            <h3 className="content__hint">These artists are trending globally on Last.fm right now</h3>
            <h3 className="content__clickDescription">Click one to explore the artist and their similar artists</h3>
            <div className='content__popularArtists'>
            { artists.map((artist) => {
                return <Artist key={ 'popular_artist' + artist.url } artist={artist}/>
            })}
            </div>

            <hr className="content__hr"></hr>
                {<ArtistsDescription key={ 'best_artist' + best_artist.url } artist={best_artist}/>}
            <hr className="content__hr"></hr>
        </div>
    )
}