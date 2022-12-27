import './popular_artists.css';


/**
 * Описание самого популярного артиста
 * @param {object} artist - json объект элемент с артистом 
 * @returns HTMLElement
 */
export default function ArtistsDescription({ artist }) {
    return (
        <div className='content__descriptionAfter'>
            <div className='content_musicFull'>
                <div className='content__musicLink'>
                    {artist.name}
                </div>
            </div>
            <div className='content__CountPopular'> { 'Plays: ' + artist.playcount } </div>
        </div>
    )
}