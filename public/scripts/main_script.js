import {getHTMLElement} from './common.js'
import {LAST_FM_KEY, ALERT_MESSAGE} from './const.js'

/**
 * популярные артисты
 */
fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${LAST_FM_KEY}&format=json`)
    .then((response) => response.json())
    .then((json) => {
        const description_after = document.getElementsByClassName('content__descriptionAfter')[0];
        const elem_artists = document.getElementsByClassName('content__popularArtists')[0]
        appendDescriptionMain(description_after, json.artists.artist[0]);
        json.artists.artist.slice(0, 5).forEach((artist) => {
            const elem_artist = getHTMLElement('div', 'popularArtists__artist');
            const elem_card = getHTMLElement('img', 'popularArtists__card', {'src':  artist.image[2]['#text']});
            const elem_name = getHTMLElement('div', 'popularArtists__name');
            elem_name.append(artist.name);

            elem_artist.append(elem_card);
            elem_artist.append(elem_name);

            elem_artists.append(elem_artist);
        })
    })
    .catch(() => {
        window.alert(ALERT_MESSAGE);
    })



function appendDescriptionMain(description_after, best_artist) {
    const elem_music_full = getHTMLElement('div', 'content_musicFull');
    const elem_music_link = getHTMLElement('div', 'content__musicLink');
    const elem_count_popular = getHTMLElement('div', 'content__CountPopular');
    elem_music_link.append(best_artist.name)
    elem_music_full.append(elem_music_link)
    elem_count_popular.append('Plays: ' + best_artist.playcount)
    description_after.append(elem_music_full, elem_count_popular)
  }

/**
 * чарт треков
 */
 fetch(`http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${LAST_FM_KEY}&format=json`)
 .then((response) => response.json())
 .then((json) => {
     json.tracks.track.slice(0, 5).forEach((track) => {
             const elem_item = getHTMLElement('div', 'topTracksGroup__item');
             const elem_music_artist = getHTMLElement('a', 'content__musicLink');
             const elem_music_track = getHTMLElement('a', 'content__musicLink');
             elem_music_track.append(track.name);
             elem_music_artist.append(track.artist.name);

             elem_item.append(elem_music_artist);
             elem_item.append(elem_music_track);

             document.getElementsByClassName('topTracksGroup__list')[0].append(elem_item);
     })
 })
 .catch(() => {
     window.alert(ALERT_MESSAGE);
 })


/**
 * Любимый в случайном регионе трек
 */
 fetch(`http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=${LAST_FM_KEY}&format=json`)
 .then((response) => response.json())
 .then((json) => {
    console.log(`http://ws.audioscrobbler.com /2.0/?method=geo.gettoptracks&country=spain&api_key=${LAST_FM_KEY}&format=json`)
    console.log(json)
    const track = json.tracks.track[0]
    console.log(track)
    document.getElementsByClassName('lovedGroup__img')[0].src = track.image[2]['#text'];
    
    appendDescriptionLoved(document.getElementsByClassName('lovedGroup__descriptionAfter')[0], track)

 })
 .catch(() => {
    window.alert(ALERT_MESSAGE);
})

 function appendDescriptionLoved(description_after, track) {
    const elem_music_full = getHTMLElement('div', 'content_musicFull');
    const elem_artist = getHTMLElement('div', 'content__musicLink');
    const elem_track = getHTMLElement('div', 'content__musicLink');
    elem_artist.append(track.artist.name);
    elem_track.append(track.name);
    elem_music_full.append(elem_artist)
    elem_music_full.append('\u00A0-\u00A0')
    elem_music_full.append(elem_track)

    description_after.append(elem_music_full);
  }
