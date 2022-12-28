import { useState, useEffect } from "react";
import SearchTrack from './SearchTrack';
import { LAST_FM_KEY, ALERT_MESSAGE } from '../const'; 
import './search_result.css';

/**
 * результаты поиска
 * @returns HTMLElement
 */
 export default function SearchResult() {
    const [searchResult, setSearchResult] = useState([]);
    const [inputValue, setInputValue] = useState("");
    let search_text = inputValue
    let result_description = 'Please, input search string'
    if (search_text !== ''){
        result_description = `Search result for "${search_text}"`
    }
    console.log(search_text)
    useEffect(() => {
        if (search_text !== ''){
            fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${search_text}&api_key=${LAST_FM_KEY}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                    setSearchResult(json.results.trackmatches.track);
            })
            .catch(() => {
                window.alert(ALERT_MESSAGE);
            })
        }
        else{
            setSearchResult([])
        }
        
    }, [search_text]);
    return (
        <div className="SearchContent">
            <input className="resultTracks__Searchinput" placeholder="Search for music..." type="search" 
                        onChange={ (event) => setInputValue(event.target.value) }/>     
            <h1>{result_description}</h1>
            <div>
                <h2>Tracks:</h2>
                <div className="resultTracks__list">
                { searchResult.map((track) => {
                    return <SearchTrack key={ 'search_result' + track.url } track={track}/>
                })}
                </div>
            </div>
        </div>
    )
}