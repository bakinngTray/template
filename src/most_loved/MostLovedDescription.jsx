import './most_loved.css';


/**
 * генерирует описание самого любимого трека
 * @param {json} track - json объект с описанием трека
 * @returns HTMLElement
 */
export default function MostLovedDescription({ track }) {
    return (
        <div className='lovedGroup__descriptionAfter'>
            <div className='content_musicFull'>
                <div className='content__musicLink'>{track.artist.name}</div>{'\u00A0-\u00A0'}<div className='content__musicLink'>{track.name}</div>
            </div>
        </div>
    )
}
