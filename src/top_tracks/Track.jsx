import './top_tracks.css';


/**
 * Описание популярного трека
 * @param {object} artist - json элемент с треком 
 * @returns HTMLElement
 */
export default function Track({ track }) {
    return (
        <div className='topTracksGroup__item'>
            <a className='content__musicLink' href=''> {track.artist.name} </a>
            <a className='content__musicLink' href=''> {track.name} </a>
        </div>
    )
}