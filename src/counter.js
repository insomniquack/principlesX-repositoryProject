import React, {useState, useEffect}from 'react';

const Counter = () => {
  let [counter, setCounter] = useState(0)

let PlusOne = () => {
  setCounter(counter += 1)
  console.log(counter)
}

let minusOne = () =>{
  setCounter(counter - 1)
  console.log(counter)
}

useEffect(() => {

})

  return (
    <div>
    <h2>{counter}</h2>
      <button onClick = {PlusOne}> + 1 </button>
      <button onClick = {PlusOne}> - 1 </button>
    </div>
  )
}
export default Counter