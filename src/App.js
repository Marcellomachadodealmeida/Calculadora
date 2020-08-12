import React, {Component} from 'react';
import './App.css'
import Buttons from './Components/Buttons/Buttons';
import Clear from './Components/Buttons/Clear';
import * as math from 'mathjs'
import Equal from './Components/Buttons/Equal';

export default class App extends Component{
  constructor(){
    super();
    this.state={
      tela: ''
           
    }
  }
  
  ButtonClick = val => {
    this.setState({tela: this.state.tela + val})

  }
  handleEqual = () => {
    const {tela} = this.state;
    this.setState({
      tela: math.evaluate(tela)
    })
    
  }
  handleClearButton = () => {
    this.setState({
      tela: ''
    })
  }
  
  render(){
    const {tela} = this.state
    return (
      <form>
      <h1>Calculator</h1>
      <div className="Corpo">
      <div className="Tela">
        {tela}
      </div>
      <div className='Numeros'>
          <Buttons handleClick={this.ButtonClick}>7</Buttons>
          <Buttons handleClick={this.ButtonClick}>8</Buttons>
          <Buttons handleClick={this.ButtonClick}>9</Buttons>
          <Buttons handleClick={this.ButtonClick}>/</Buttons>
       </div>
       <div className='Numeros'>
          <Buttons handleClick={this.ButtonClick}>4</Buttons>
          <Buttons handleClick={this.ButtonClick}>5</Buttons>
          <Buttons handleClick={this.ButtonClick}>6</Buttons>
          <Buttons handleClick={this.ButtonClick}>*</Buttons>
     </div>
     <div className='Numeros'>
          <Buttons handleClick={this.ButtonClick}>1</Buttons>
          <Buttons handleClick={this.ButtonClick}>2</Buttons>
          <Buttons handleClick={this.ButtonClick}>3</Buttons>
          <Buttons handleClick={this.ButtonClick}>-</Buttons>
       </div>
       <div className='Numeros'>
         <Buttons handleClick={this.ButtonClick}>.</Buttons>
         <Buttons handleClick={this.ButtonClick}>0</Buttons>
         <Equal handleClickEqual={this.handleEqual}>=</Equal>
         <Buttons handleClick={this.ButtonClick}>+</Buttons>
       </div>
       <Clear handleClear={this.handleClearButton}>Limpar</Clear>
      </div>
      </form>
    );
  }
}


