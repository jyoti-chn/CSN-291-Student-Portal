import './App.css';
import React, { useState, useEffect } from 'react';
import examService from './services/exams'
import LoginForm from './components/loginForm';
import loginService from './services/login'
import exams from './services/exams';
import AddExam from './components/addExam';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/nav';
import HomePage from './components/HomePage';
import Profile from './components/Profile';



const App = () => {
  const [examList, setExamList] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [home, setHome] = useState(false)
  const [deadlines, setDeadlines] = useState(false)
  const [myProfile, setProfile] = useState(false)


  if (!user)
    document.body.style.backgroundColor = '#ff105f';
  else
    document.body.style.backgroundColor = '#ffffff';



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

  const ExamPage = () => {
    return (
      <>
        {user && <h5>Logged in as {user.name}</h5>}
        {user && ExamDisplayList()}
        {user && <button onClick={logout}>Log Out</button>}
        <br></br>
        {user && user.profession[0] === 'Professor' && <AddExam user={user} />}
      </>
    )
  }

console.log('home is', home)

  return (
    <div>
      <div>
        
        {!user && <LoginForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} setUser={setUser} />}
        {user && <NavBar setDeadlines={setDeadlines} setHome={setHome} setProfile={setProfile}/>}
        {deadlines && <ExamPage/>}
        {home && <HomePage/>}
        {myProfile && <Profile/>}

      </div>


    </div>

  );
}

export default App;
