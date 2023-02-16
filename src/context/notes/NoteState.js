import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "63e7c9201023d82e22de7e6a",
          "user": "63e7a10d8c407386c7c20c77",
          "title": "My title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2023-02-11T16:58:08.593Z",
          "__v": 0
        },
        {
            "_id": "63e7c9.37462011023d82e22de7e6a",
            "user": "63e7a10d8c407386c7c20c77",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-02-11T16:58:08.593Z",
            "__v": 0
        }
    ]  

    const [notes, setNotes] = useState(notesInitial)

    // Add a Note
    const addNote = (title, description, tag)=>{
        const note = {
          "_id": "63e7c92011023347674d82e22de7e6a",
          "user": "63e7a10d8c407386c7c20c77",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2023-02-11T16:58:08.593Z",
          "__v": 0
        };
        setNotes(notes.concat(note)) 
      }

      // // Delete a Note
      const deleteNote = (_id)=>{
        const newNotes = notes.filter((note)=>{return note._id!==_id})
        setNotes(newNotes)
      }

    return (
        <noteContext.Provider value={{notes, addNote, deleteNote}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;