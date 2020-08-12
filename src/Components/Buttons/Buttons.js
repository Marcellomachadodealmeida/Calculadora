import React from 'react'
import './Buttons.css'

 const isOperator = (val) =>{
  return !isNaN(val) || val === "." || val === "="
}

 function Buttons(props) {
  return(
    <div 
    className=
    {`buttons ${isOperator(props.children)? null : "operador"}`}
    onClick={()=>props.handleClick(props.children)}>
      {props.children}
    </div>
  )
};

export default Buttons;