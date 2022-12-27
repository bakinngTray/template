import { useState, useEffect } from "react";
import { LAST_FM_KEY, ALERT_MESSAGE } from '../const'; 
import './most_loved.css';
import MostLovedDescription from './MostLovedDescription';


/**
 * Любимый трек в испании
 * @returns HTMLElement
 */
 export default function MostLoved() {
    const [track, setTracks] = useState([]);
    useEffect(() => {
        fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${LAST_FM_KEY}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                setTracks(
                    json.tracks.track[0]
                );
            })
            .catch(() => {
                window.alert(ALERT_MESSAGE);
            })
    }, []);
    if (track.length === 0){
        return <div className="content__lovedGroup"></div>
    }
    return (
        <div className="content__lovedGroup">
            <h2 className="content__title">Today's Most Loved</h2>
            <h3 className="content__hint">Tracks loved by the most listeners</h3>
            <h3 className="content__clickDescription">Hit play to see if you love it too</h3>
            <img className="lovedGroup__img" src={track.image[2]['#text']} alt=""/>
            <hr className="content__hr"></hr>
            <MostLovedDescription track={track}/>
            <hr className="content__hr"></hr>
        </div>
    )
}