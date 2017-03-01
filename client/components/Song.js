import React from 'react';

const Song = ({ id, songname, deleteSong}) => (
  <li>
    <strong>{songname}</strong>
    <button onClick={ () => deleteSong(id) } className='btn-flat'> Delete</button>
  </li>
)

export default Song;
