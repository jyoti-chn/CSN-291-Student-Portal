import './App.css';
import React, { useState, useEffect } from 'react';
import examService from './services/exams'
import LoginForm from './components/loginForm';
import loginService from './services/login'
import exams from './services/exams';
import AddExam from './components/addExam';


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

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedinUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      examService.setToken(user.token)
    }
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

  const logout = () => { 
    window.localStorage.clear()
    window.location.reload()
    return 
  }

// console.log(user)
if(user)
console.log(user.profession[0]==='Professor')
  return (
    <div>
    {user &&  <h5>Logged in as {user.name}</h5>}
      {!user && <LoginForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} setUser={setUser} />}
      {user && ExamDisplayList()}
      {user && <button onClick={logout}>Log Out</button>}
      <br></br>
      {user && user.profession[0]==='Professor' && <AddExam user={user}/>}
    </div>
  );
}

export default App;
