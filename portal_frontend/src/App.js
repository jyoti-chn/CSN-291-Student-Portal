import './App.css';
import React, { useState, useEffect } from 'react';
import examService from './services/exams'
import LoginForm from './components/loginForm';
import loginService from './services/login'


const App = () => {
  const [examList, setExamList] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)


  useEffect(() => {
    examService
      .getExams()
      .then(responseExams => {
        setExamList(responseExams)
      })
  }, [])

  const ExamDisplayList = () => {
    return (
      <div className="Exam-List">
        <h2>Upcoming Exams</h2>
        <ul>
          {examList.map(e => <li key={e.id}>Subject: {e.subject}, Syllabus : {e.syllabus}, Date : {e.date}, Professor : {e.user.name}</li>)}
        </ul>
      </div>
    )
  }


  return (
    <div>
      {!user && <LoginForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} setUser={setUser} />}
      {user && ExamDisplayList()}
    </div>
  );
}

export default App;
