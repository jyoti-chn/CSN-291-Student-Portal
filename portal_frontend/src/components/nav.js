import React from "react";

const NavBar = ({ setDeadlines, setHome, setProfile, setToDo, setTT, setcalend }) => {

    const goToHome = () => {
        setDeadlines(false)
        setHome(true)
        setProfile(false)
        setTT(false)
        setcalend(false)
        setToDo(false)
    }

    const goToDeadlines = () => {
        setDeadlines(true)
        setHome(false)
        setProfile(false)
        setTT(false)
        setcalend(false)
        setToDo(false)
    }
    const goToProfile = () => {
        setDeadlines(false)
        setHome(false)
        setTT(false)
        setToDo(false)
        setcalend(false)
        setProfile(true)


    }

    const goToDo = () => {
        setDeadlines(false)
        setHome(false)
        setProfile(false)
        setTT(false)
        setcalend(false)
        setToDo(true)
    }

    const goTocalendar = () => {
        setDeadlines(false)
        setHome(false)
        setProfile(false)
        setTT(false)
        setToDo(false)
        setcalend(true)
    }

    const goToTimeTable = () => {
        setDeadlines(false)
        setHome(false)
        setProfile(false)
        setToDo(false)
        setcalend(false)
        setTT(true)

    }

    const logout = () => {
        window.localStorage.clear()
        window.location.reload()
        return
    }



    return (
        <div style={{ backgroundColor: 'black' }}>
            <ul class="nav-area">
                <li onClick={goToHome}>Home</li>
                <li onClick={goToDeadlines}>Deadlines</li>
                <li onClick={goToProfile}>Profile</li>
                <li onClick={goToDo}>To-Do List</li>
                <li onClick={goToTimeTable}>Timetable</li>
                <li onClick={goTocalendar}>Calendar</li>
                <li className='log-out' onClick={logout}>Log Out</li>
            </ul>

        </div>
    )
}

export default NavBar