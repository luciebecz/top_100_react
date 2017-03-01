import React from 'react';
import SongForm from './SongForm';
import SongList from './SongList';

class BillboardApp extends React.Component {
  state = { songs: [] }

  componentDidMount() {
    $.ajax({
      url: '/api/songs',
      type: 'GET'
    }).done( songs => {
      this.setState( { songs } )
    });
  }

  addSong = (songname) => {
    $.ajax( {
      url: '/api/songs',
      type: 'POST',
      data: { song: { songname } }
    }).done( song => {
      this.setState({ songs: [song, ...this.state.songs]})
    })
  }

  deleteSong = (id) => {
    $.ajax({
      url: `/api/songs/${id}`,
      type: 'DELETE'
    }).done( () => {
      let songs = this.state.songs.filter( song => song.id !== id )
      this.setState({ songs });
    });
  };
  

  render() {
    return (
      <div>
        <h1 className='center'>TOP 100 CHART!</h1><hr /><br />
        <SongForm addSong={this.addSong} />
        <SongList songs={this.state.songs} deleteSong={this.deleteSong}/>
      </div>
    )
  }

}

export default BillboardApp;