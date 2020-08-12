import React from 'react'
import './Buttons.css'

 function Clear(props) {
    return <div className='Clearbuttons'onClick={props.handleClear} >
        {props.children}
      </div>
    
  }
export default Clear;