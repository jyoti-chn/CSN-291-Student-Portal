import React from "react";

const NavBar = ({setDeadlines, setHome, setProfile}) => {

    const goToHome = () =>{
        setDeadlines(false)
        setHome(true)
        setProfile(false)
    }

    const goToDeadlines = () =>{
        setDeadlines(true)
        setHome(false)
        setProfile(false)
    }
    const goToProfile = () =>{
        setDeadlines(false)
        setHome(false)
        setProfile(true)
    }

   return (
       <div style={{backgroundColor:'black'}}>
           <ul class="nav-area">
            <li onClick={goToHome}>Home</li>
            <li>Timetable</li>
            <li onClick={goToDeadlines}>Deadlines</li>
            <li onClick={goToProfile}>Profile</li>
            <li>Contact</li>
          </ul>
           
       </div>
   )
}

export default NavBar