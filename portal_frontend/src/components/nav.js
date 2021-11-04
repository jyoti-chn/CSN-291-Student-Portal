import React from "react";

const NavBar = ({setDeadlines, setHome, setProfile, setToDo}) => {

    const goToHome = () =>{
        setDeadlines(false)
        setHome(true)
        setProfile(false)
        setToDo(false)
    }

    const goToDeadlines = () =>{
        setDeadlines(true)
        setHome(false)
        setProfile(false)
        setToDo(false)
    }
    const goToProfile = () =>{
        setDeadlines(false)
        setHome(false)
        setProfile(true)
        setToDo(false)
    }

    const goToDo = () =>{
        setDeadlines(false)
        setHome(false)
        setProfile(false)
        setToDo(true)
    }

    const logout = () => {
        window.localStorage.clear()
        window.location.reload()
        return
      }

   return (
       <div style={{backgroundColor:'black'}}>
           <ul class="nav-area">
            <li onClick={goToHome}>Home</li>
            <li>Timetable</li>
            <li onClick={goToDeadlines}>Deadlines</li>
            <li onClick={goToProfile}>Profile</li>
            <li onClick={goToDo}>To-Do List</li>
            <li className='log-out' onClick={logout}>Log Out</li>
            <li>Contact</li>
          </ul>
           
       </div>
   )
}

export default NavBar