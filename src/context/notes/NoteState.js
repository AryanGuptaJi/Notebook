import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s = {
        "name": "Ayan",
        "class": "10A"
    }
    const [state, setState] = useState(s);

    const update = ()=>{
        setTimeout(() => {
            setState({
                "name": "Aryan",
                "class": "12A"
            })
        }, 1500);
    }
    return (
        <noteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;