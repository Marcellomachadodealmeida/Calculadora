import React from 'react';

import './Buttons.css'

function Equal(props) {
  return <div className='Equals' onClick={props.handleClickEqual}>
    {props.children}
  </div>
}

export default Equal;