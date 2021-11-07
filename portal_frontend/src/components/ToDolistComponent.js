import React from 'react'
import noteService from '../services/notes'

const ToDoComponent = ({note, user}) => {
    const deleteNote = async () =>{
        try{
            await noteService.removeNote(note.id)
        }
        catch{
            console.log('unable to delete')
        }
            
    }
    return (
        <div class="todo-item">
            <div class="checker"><span class=""><input type="checkbox"></input></span></div>
            <span class="note">{note.content}</span>
            <i class="fa fa-close" style={{right:'5rem', position:'absolute', cursor:'pointer', color:'black'}} onClick={deleteNote}>X</i>
        </div>
    )
}

export default ToDoComponent