import React from 'react';
import Song from './Song'

const SongList = ( { songs, deleteSong } ) => (
  <div>
    <h3>Current List:</h3>
    <ol>
      {songs.map( song => {
        return(<Song key={song.id} {...song} deleteSong={deleteSong} />)
      })
      }
    </ol>

  </div>
)


export default SongList;
