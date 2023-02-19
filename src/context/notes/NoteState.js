import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlN2ExMGQ4YzQwNzM4NmM3YzIwYzc3In0sImlhdCI6MTY3NjEyNDQ0OX0.mQk637CILXsIZ1vLyg80_07DArxofcuXfjk0cZdMVCY"
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlN2ExMGQ4YzQwNzM4NmM3YzIwYzc3In0sImlhdCI6MTY3NjEyNDQ0OX0.mQk637CILXsIZ1vLyg80_07DArxofcuXfjk0cZdMVCY"
      },
      body: JSON.stringify({title, description, tag})
    });
    const note = {
      _id: "63e7c92011023d82e22de7e6a",
      user: "63e7a10d8c407386c7c20c77",
      title: "title",
      description: "description",
      tag: tag,
      date: "2023-02-11T16:58:08.593Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (_id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${_id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlN2ExMGQ4YzQwNzM4NmM3YzIwYzc3In0sImlhdCI6MTY3NjEyNDQ0OX0.mQk637CILXsIZ1vLyg80_07DArxofcuXfjk0cZdMVCY"
      },
    });
    const json = await response.json();
    console.log(json)
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });
    console.log(_id)
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNlN2ExMGQ4YzQwNzM4NmM3YzIwYzc3In0sImlhdCI6MTY3NjEyNDQ0OX0.mQk637CILXsIZ1vLyg80_07DArxofcuXfjk0cZdMVCY"
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json();
    console.log(json);
    
    let newNotes = JSON.parse(JSON.stringify(notes))

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes}}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
