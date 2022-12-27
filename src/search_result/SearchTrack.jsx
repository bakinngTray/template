import './search_result.css';


/**
 * Описание найденного трека
 * @param {json} track - json элемент с треком
 * @returns HTMLElement
 */
export default function SearchedTrack({ track }) {
    let track_name = track.name;
    if (track_name.length > 18) {
        track_name = track_name.slice(0, 15) + '...'
    }
    return (
        <div>
        <button className='resultTracks__item'>
            <a className='resultTracks__title' href=''>{track_name}</a>
            <a className='resultTracks__artist' href=''>{track.artist}</a>
            <a className='resultTracks__like' href=''>❤️</a>
        </button>
        <hr className='resultTracks__hr'></hr>
        </div>
    )
}