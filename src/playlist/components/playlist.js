import React from 'react';
import Media from './media';
import './playlist.css';

function PlayList(props) {
  const playList = props.data.categories[0].playlist;
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

export default PlayList;
