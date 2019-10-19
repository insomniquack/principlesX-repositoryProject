import React, {useState} from 'react';

const Calculator = () => {
    let [Display, setDisplay] = useState(0)
    let [Input, setInput] = useState(0)



let buttonPress = (num) => {
    return () => {
        if (Input === 0){
            setDisplay(num)

        }
    }
}


return (
    <div>
        {Display}
        <button onClick = {buttonPress("1")}>1</button>
        <button onClick = {buttonPress("2")}>2</button>
    </div>
)

}
export default Calculator