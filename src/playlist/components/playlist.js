import React, { Component } from 'react';
import Media from './media';
import './playlist.css';

class PlayList extends Component {
  render() {
    const playList = this.props.data.categories[0].playlist;
    return (
      <div className='Playlist'>
        {
          playList.map((item) => {
            return <Media {...item} key={item.id} />
          })
        }
      </div>
    );
  }
}

export default PlayList;
