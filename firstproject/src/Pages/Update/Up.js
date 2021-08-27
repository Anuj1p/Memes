import React from 'react';
import Update from './Update';

import '../Home/Home.css';
import axios from 'axios';

function Up() {
  const updateMemeHandler = async (name, data, memeId) => {
    
      const updateMeme = {
        name: name,
        data: data
      };
     axios.patch(`http://localhost:4000/app/feed/${post._id}`,updateMeme);

    
  };

  return (
    <UpdateMeme onUpdateMeme={updateMemeHandler} />
  );
}

export default Up;