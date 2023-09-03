import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const[notes, setNotes] = useState([]);

    //After we create a state variable to store objects in the array, we will add the elements to array
    const AddNotes = (newNotes) =>{
        setNotes((preValue)=>{
            const newData = [...preValue, newNotes]
            localStorage.setItem("notes", JSON.stringify(newData))
            return newData;
        })
    }
    

    //Deleting the Array Element on the basis of matching ID's
    const deleteNotes = (id) =>{
        setNotes((preValue)=>{
            const updateData = preValue.filter((notes,index) => index!==id)
            localStorage.setItem("notes", JSON.stringify(updateData));
            return updateData;
           
        })
    }
    //Creating a local storage to store the data
    useEffect(()=>{
        const storedData = localStorage.getItem("notes");
        if(storedData){
          try{
            setNotes(JSON.parse(storedData));
          }catch(error){
            console.error(error);
          }
           
        }else{
          setNotes([]);
        }
    },[])


  return (
    <div>
      <Header />
      <CreateArea 
      onAdd = {AddNotes}
      />
      {notes.map((noteItem, index)=>{
        return <Note key = {index} id = {index} title = {noteItem.title} content = {noteItem.content} onDelete = {deleteNotes}/>
      })}
      
      <Footer />
    </div>
  );
}

export default App;
