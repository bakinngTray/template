import { useState, useEffect } from "react";
import Track from './Track';
import { LAST_FM_KEY, ALERT_MESSAGE } from '../const'; 
import './top_tracks.css';


/**
 * Самые популярные треки
 * @returns HTMLElement
 */
 export default function TopTracks() {
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${LAST_FM_KEY}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                setTracks(
                    json.tracks.track.slice(0, 5)
                );
            })
            .catch(() => {
                window.alert(ALERT_MESSAGE);
            })
    }, []);
    return (
        <div className="content__topTracksGroup">
            <h2 className="content__title">Spiking Tracks</h2>
            <h3 className="content__hint">These artists are trending globally on Last.fm right now</h3>
            <div className='topTracksGroup__list'>
                { tracks.map((track) => {
                    return <Track key={ 'top_track' + track.url } track={track}/>
                })}
            </div>
        </div>
    )
}