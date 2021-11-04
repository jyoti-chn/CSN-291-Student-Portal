import React, { useState, useEffect } from 'react'
import axios from 'axios'
import examService from '../services/exams'


const AddExam = ({ user }) => {
    const [subject, setSubject] = useState('')
    const [syllabus, setsyllabus] = useState('')
    const [date, setDate] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()
        const newExam = {
            subject: subject,
            syllabus: syllabus,
            date: date,
        }
        // console.log(user);

        try {
            const addNewExam = await examService
                .createExam(newExam)
            console.log('Added successfully')
            setSubject('')
            setsyllabus('')
            setDate('')
            window.location.reload()

        }
        catch {
            console.log('Unable to add exam. Try again later!')
        }
    }

    return (
        <div style={{ position: 'absolute' }}>
            <div class="login-box">
                <h2>Add Exam/Assignment</h2>
                <form>
                    <div class="user-box">
                        <input type='text' value={subject} className='exam-input' required onChange={({ target }) => setSubject(target.value)}></input>
                        <label>Subject</label>
                    </div>
                    <div class="user-box">
                        <input type='text' value={syllabus} className='exam-input' required onChange={({ target }) => setsyllabus(target.value)}></input>
                        <label>Syllabus</label>
                    </div>
                    <div class="user-box">
                        <input type='date' value={date} className='exam-input' required onChange={({ target }) => setDate(target.value)}></input>
                        <label></label>
                    </div>
                    <a onClick={handleSubmit} style={{cursor:'pointer'}}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
    )


}

export default AddExam

// <div class="login-box">

/* <form className='create-exam-form'>
                <input type='text' value={subject} placeholder='Subject' className='exam-input' required onChange={({ target }) => setSubject(target.value)}></input>
                <input type='text' value={syllabus} placeholder='Syllabus' className='exam-input' required onChange={({ target }) => setsyllabus(target.value)}></input>
                <input type='date' value={date} placeholder='Date' className='exam-input' required onChange={({ target }) => setDate(target.value)}></input>
                {/* <input type='text' value={user.profession} placeholder='Professor' className='exam-input' required onChange={({ target }) => setnewExam({ newExam: { Professor: target.value } })}></input> */
