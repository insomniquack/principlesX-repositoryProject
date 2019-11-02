import React, { useState, useEffect } from 'react';
import Notes from './note';
import { statement } from '@babel/template';

// let notes = [
//   {
//     title: "title1",
//     body: "Body1",
//   },

//   {
//     title: "title2",
//     body: "Body2",
//   }

// ]

const NoteApp = () => {

  let notesData = JSON.parse(localStorage.getItem('notes'))

  let [title, setTitle] = useState('')
  let [body, setBody] = useState('')
  let [notes, setNotes] = useState(notesData || [])
  let titleChange = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value) 
  }

  let bodyChange = (e) => {
    console.log(e.target.value)
    setBody(e.target.value)
  }

  let saveNote = () => {
    setNotes([...notes,{title,body}])
    setTitle('')
    setBody('')
  }

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  })
  return (
    <div>
      Notes Title: <input type="text" value ={title} onChange={titleChange}></input>
      <br></br>
      Notes Body: <textarea value = {body} onChange={bodyChange}></textarea>
      <button onClick={saveNote}>Save Note</button>
      {notes.map((elem, index) => {
        return <Notes key={index} title={elem.title} body={elem.body} />
      })}
    </div>
  )
}

export default NoteApp