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
            "_id": "63e7c9201023d82e22de7e6a",
            "user": "63e7a10d8c407386c7c20c77",
            "title": "My title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2023-02-11T16:58:08.593Z",
            "__v": 0
          }

      ]  

    const [notes, setNotes] = useState(notesInitial)
    return (
        <noteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;