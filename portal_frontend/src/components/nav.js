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
       <div>
           <nav className='nav-bar'>
               <ul>
                   <li onClick={goToHome}>Home</li>
                   <li onClick={goToDeadlines}>Deadlines</li>
                   <li onClick={goToProfile}>My Profile</li>
               </ul>
           </nav>
       </div>
   )
}

export default NavBar