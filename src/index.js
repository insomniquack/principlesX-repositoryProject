import React from 'react';
import ReactDOM from 'react-dom';
// import DisplaySuperhero from './DisplaySuperhero';
// import Title from './Title';
import Counter from './counter';
import Calculator from './calculator'
import NoteApp from "./NoteApp";
import Choices from "./Choice";


let root = document.getElementById('root')
// let name = "joshua"
// let superman = {
//   name:"clarke kent",
//   age:37,
//   weight:85,
// }

// let DisplaySuperhero = (properties) => {
//   return ( 
//   <>
//     <p>Name: {properties.name}</p>
//     <p>Age: {properties.age}</p>
//     <p>weight:{properties.weight}</p>
//   </>
//   )
// }

ReactDOM.render(<Choices/>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// let jsx = (
//   <div>
//     { !name === "" ? <p>No Name</p> : <h1>{name}</h1> }
//     <p>Hello world</p>
//   </div>
// )
// let superhero = (
//   <>
//     <p>Name: {superman.name}</p>
//     <p>Age: {superman.age}</p>
//     <p>weight:{superman.weight}</p>
//   </>
// )