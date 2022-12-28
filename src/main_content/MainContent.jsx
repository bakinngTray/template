import PopularArtists from '../popular_artists/PopularArtists';
import TopTracks from '../top_tracks/TopTracks';
import MostLoved from '../most_loved/MostLoved';

import './content.css';


/**
 * генерирует центральную часть страницы
 * @returns HTMLElement
 */
 export default function MainContent() {
    return (
    <div className="content">
        <PopularArtists/>
        <div className="content__listGroup">
            <TopTracks/>
            <MostLoved/>
        </div>
    </div>
    )
}
