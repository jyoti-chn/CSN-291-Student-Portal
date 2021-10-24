import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AddExam = () =>{
    const [newExam, setnewExam] = useState({
        subject : '',
        syllabus : '',
        date : '',
        professor : ''
    })

    const handleSubmit = () =>{
        console.log(newExam);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={newExam.subject} placeholder='Subject' className='exam-input' required onChange = {({target}) => setnewExam(newExam.subject(target.value))}></input>
            <input type='text' value={newExam.syllabus} placeholder='Syllabus' className='exam-input' required onChange = {({target}) => setnewExam(newExam.syllabus(target.value))}></input>
            <input type='text' value={newExam.date} placeholder='Syllabus' className='exam-input' required onChange = {({target}) => setnewExam(newExam.date(target.value))}></input>
            <input type='text' value={newExam.professor} placeholder='Professor' className='exam-input' required onChange = {({target}) => setnewExam(newExam.professor(target.value))}></input>
        </form>
    )


}