import React, { useState, useEffect } from 'react'
import axios from 'axios'
import examService from '../services/exams'


const AddExam = ({user}) => {
    const [subject, setSubject] = useState('')
    const [syllabus, setsyllabus] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newExam  = {
            subject : subject,
            syllabus : syllabus,
            date : date,
        }
        // console.log(newExam);

        try{
          const addNewExam = await examService
            .createExam(newExam)
            console.log(addNewExam)
        }
        catch{
            console.log('Unable to add exam. Try again later!')
        }
    }

    return (
        <div>
            <form className='create-exam-form'>
                <input type='text' value={subject} placeholder='Subject' className='exam-input' required onChange={({ target }) => setSubject(target.value)}></input>
                <input type='text' value={syllabus} placeholder='Syllabus' className='exam-input' required onChange={({ target }) => setsyllabus(target.value)}></input>
                <input type='date' value={date} placeholder='Date' className='exam-input' required onChange={({ target }) => setDate(target.value)}></input>
                {/* <input type='text' value={user.profession} placeholder='Professor' className='exam-input' required onChange={({ target }) => setnewExam({ newExam: { Professor: target.value } })}></input> */}
                <button onClick={handleSubmit} type='submit'>submit</button>
            </form>
        </div>
    )


}

export default AddExam