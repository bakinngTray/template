import {getHTMLElement} from './common.js'
import {LAST_FM_KEY, ALERT_MESSAGE} from './const.js'


 document.getElementsByClassName('header__find')[0].addEventListener('click', (event) => {
    event.preventDefault();
    const tracks_list = document.getElementsByClassName('resultTracks__list')[0];
    const search_inupt = document.getElementsByClassName('header__Searchinput')[0].value.trim();
    const search_title = document.getElementsByClassName('SearchContent__title')[0]
    if (search_inupt === '') {
        search_title.value = `Please, input search string`
    }
    else {
        search_title.innerHTML = `Search results for "${search_inupt}"`
        tracks_list.innerHTML = ''
        fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${search_inupt}&api_key=${LAST_FM_KEY}&format=json`)
            .then((response) => response.json())
            .then((json) => {
                const searched = json.results.trackmatches.track;
                searched.forEach((track) => {
                    const track_item = getHTMLElement('button', 'resultTracks__item');
                    const track_title= getHTMLElement('a', 'resultTracks__title', {'href': ''});
                    const track_artist= getHTMLElement('a', 'resultTracks__artist', {'href': ''});
                    const track_time= getHTMLElement('a', 'resultTracks__time', {'href': ''});
                    let track_name = track.name
                    if (track_name.length > 18) {
                        track_name = track_name.slice(0, 15) + '...'
                    }
                    track_title.append(track_name)
                    track_artist.append(track.artist)
                    track_time.append('❤️')
                    track_item.append(track_title);
                    track_item.append(track_artist);
                    track_item.append(track_time);
                    tracks_list.append(track_item);
                    const hr = getHTMLElement('hr', 'resultTracks__hr');
                    tracks_list.append(hr)
                    })
            })
            .catch((e) => {
                window.alert(ALERT_MESSAGE);  
        })
    }
})
