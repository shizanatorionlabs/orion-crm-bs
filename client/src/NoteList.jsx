import React, { useEffect, useState } from 'react'

const NoteList = () => {
    const [notes, setNotes] = useState([])

    useEffect(()=>{
      fetch('http://localhost:8080/api/notes')
      .then(res => res.json())
      .then(data => setNotes(data))
      .catch(err => console.error('Danger', err))
    }, [])
  return (
    <ul>
      {notes.map(note => <li key={note.id}>{note.title} {note.contents}</li>)}
    </ul>
  )
}

export default NoteList