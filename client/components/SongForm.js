import React from 'react';

const SongForm = ( { addSong } ) => {
  let song;

  return (
    <div>
      <form 
        onSubmit={ e => {
          e.preventDefault();
          addSong(song.value)
          song.value = null;
        }}
      >
        <input placeholder="Add A New Song To The List Anytime!" ref={ (n) => song = n } />
      </form>
    </div>
  )
}

export default SongForm;
