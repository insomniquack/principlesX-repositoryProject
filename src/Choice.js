import React,{useState, useEffect} from 'react';
import { conditionalExpression } from '@babel/types';

const Choices = () => {
  let choiceData = JSON.parse(localStorage.getItem('choices'))
  let [choices,setChoices] = useState([])
  let [choice,setChoice] = useState('')
  let [decision,setDecision] = useState('')
  
  let resetButton = () => {
    setChoices([])
  }
 
  let choiceInput = (e) => {
    setChoice(e.target.value)
    console.log(choice)
  }
  
  let submitChoice = () => {
    setChoice([
      ...choices,
      choice
    ])
    console.log(choices)
  }

  let makeChoice = () => {
    let random = Math.floor(Math.random() * choices.length)
    setDecision(choices[random])
  }
  useEffect(()=> {
    localStorage.setItem('choices',JSON.stringify(choices))
  })
  return (
    <div>
    <h1>Let the computer decide!</h1>
      <br />
      <div>
        <ul>
          {choices.map((elem,index,array)=> {
            return (
              < li key={index}>{elem}</li>
            )
          })}
        </ul>
      </div>
      What are your choices?<input type="text" value={choice} onChange={choiceInput}></input>
      <br />
      <button onClick={submitChoice}>Submit</button><button onClick={resetButton}>Reset</button>
      <br />
      {choices.length < 2 ? <p></p> : <button onClick={makeChoice}>MAKE MY CHOICE</button>}
      <br />
      

      </div>
  )
}

export default Choices