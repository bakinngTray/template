import './popular_artists.css';


/**
 * Карточка популярного артиста
 * @param {object} artist - json объект элемент с артистом 
 * @returns HTMLElement
 */
export default function Artist({ artist }) {
    return (
        <div className='popularArtists__artist'>
            <img className='popularArtists__card' src={artist.image[2]['#text']}></img>
            <div className='popularArtists__name'> { artist.name } </div>
        </div>
    )
}