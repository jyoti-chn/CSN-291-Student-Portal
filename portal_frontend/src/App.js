import './App.css';
import React, { useState, useEffect } from 'react';
import examService from './services/exams'
import LoginForm from './components/loginForm';
import loginService from './services/login'
import noteService from './services/notes'
import exams from './services/exams';
import AddExam from './components/addExam';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/nav';
import HomePage from './components/HomePage';
import Profile from './components/Profile';
import Deadlines from './components/Deadlines';
import ToDoList from './components/ToDolist';
import Timetable from './components/TimeTable';
import CalComponent from './components/Calendar';


const App = () => {
  const [examList, setExamList] = useState([])
  const [notes, setNotes] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [home, setHome] = useState(true)
  const [deadlines, setDeadlines] = useState(false)
  const [todo, setToDo] = useState(false)
  const [tt, setTT] = useState(false)
  const [myProfile, setProfile] = useState(false)
  const [calend, setcalend] = useState(false)


  if (home) {
    document.body.style.backgroundImage = 'url(https://image.freepik.com/free-vector/purple-geometric-background_1199-200.jpg)'
    document.body.style.backgroundSize = 'cover'

  }
  else {
    document.body.style.background = '#0e1219'
  }




  useEffect(() => {
    examService
      .getExams()
      .then(responseExams => {
        setExamList(responseExams)
      })
  }, [])

  useEffect(() => {
    noteService
      .getNotes()
      .then(responseNotes => {
        setNotes(responseNotes)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedinUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      examService.setToken(user.token)
      noteService.setToken(user.token)
    }
  }, [])

  const DeadlineComp = () =>{
    return (
      <Deadlines examList={examList} user={user}/>
    )
  }

  console.log(tt)
  return (
    <Router>
      <div>
        <div>

          {!user && <LoginForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} setUser={setUser} />}
          {user && <NavBar setDeadlines={setDeadlines} setHome={setHome} setProfile={setProfile} setToDo={setToDo} setTT={setTT} setcalend={setcalend} />}
          {user && deadlines && <Deadlines examList={examList} user={user} />}
          {user && home && <HomePage />}
          {user && myProfile && <Profile user={user} />}
          {user && todo && <ToDoList notes={notes} user={user} />}
          {user && tt && <Timetable />}
          {user && calend && <CalComponent examList={examList}/>}


        </div>


      </div>
    </Router>
  );
}

export default App;
