import "./calculator.css"
import React, {useState, useEffect} from 'react';
import { Z_STREAM_ERROR } from 'zlib';

const Calculator = () => {
    let [Display, setDisplay] = useState(0)
    let [Input, setInput] = useState(0)

let buttonPress = (num) => {
    return () => {
        if (Input === 0){
            setDisplay(num)
            setInput(num)
        }
        else {
            setDisplay(Input + num)
            setInput(Input + num)
        }

        }
    }
let calculate = () => {
    try {
    setDisplay(eval(Input))
    setInput(0)
    }
    catch {
        clear()
    }
}

let clear = () => {
    setInput(0)
    setDisplay(0)
}

return (
    <div>
        <h1>{Input}</h1>
        <h2>{Display}</h2>
        <button onClick = {buttonPress("1")}>1</button>
        <button onClick = {buttonPress("2")}>2</button>
        <button onClick = {buttonPress("3")}>3</button>
        <button onClick = {buttonPress("4")}>4</button>
        <button onClick = {buttonPress("5")}>5</button>
        <button onClick = {buttonPress("6")}>6</button>
        <button onClick = {buttonPress("7")}>7</button>
        <button onClick = {buttonPress("8")}>8</button>
        <button onClick = {buttonPress("9")}>9</button>
        <button onClick = {buttonPress("+")}>+</button>
        <button onClick = {buttonPress("-")}>-</button>
        <button onClick = {buttonPress("/")}>/</button>
        <button onClick = {buttonPress("*")}>x</button>
        <button onClick = {clear}>AC</button>
        <button onClick = {calculate}>=</button>
    </div>
)

}
export default Calculator