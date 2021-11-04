import React, { useState } from 'react'
import ToDoComponent from './ToDolistComponent'
import noteService from '../services/notes'

const ToDoList = ({ notes, user }) => {
    const [newNote, setNewNote] = useState('')

    const handleNewNote = async (event) => {
        event.preventDefault()
        setNewNote(newNote)
        const newnoteCreated = {
            content: newNote
        }

        try {
            const response = await noteService.createNote(newnoteCreated)
            console.log('new note crated successfully!');
            setNewNote('')
            // window.location.reload()

        }
        catch {
            console.log('Sorry,Unable to add note.')
        }

    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card card-white">
                        <div class="card-body">
                            <form onSubmit={handleNewNote}>
                                <input type="text" class="form-control add-task" placeholder="New Task..." value={newNote} onChange={({ target }) => setNewNote(target.value)} ></input>
                            </form>

                            <div class="todo-list">
                                {notes.map(m => {
                                    return (
                                        user.name === m.user.name && <ToDoComponent note={m} key={m.id} user={user} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToDoList