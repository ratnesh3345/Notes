import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const[isClicked, setIsClicked] = useState(false)

    const [note, setNote] = useState({
        title : "",
        content: ""
    })

    //creating a function to check if the user has clicked on the title pane or not

    const handleMovement = () =>{
        
        setIsClicked(true);
    }

    //we are creating the objects with name and typed values from the user
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setNote(prev =>{
            return{
                ...prev,
            [name] : value
            }
        })

    }

    // Here we are calling the onADD function passing over the note to App.jsx
    const handleClick = (event) =>{
        props.onAdd(note)
        setNote({
            title : "",
        content: ""
        })
        event.preventDefault()

    }
return (
    <div>
      <form className ="create-note">
        {isClicked?<input name="title"  onChange = {handleChange} value = {note.title}placeholder="Title"  />:null}
        <textarea onClick={handleMovement} name="content"onChange = {handleChange} value = {note.content} placeholder="Take a note..."rows= {isClicked?"3":"1"} />
        {<Zoom in= {isClicked?true:false} >
        <Fab onClick={handleClick}>
            <AddIcon />
        </Fab>
        </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
