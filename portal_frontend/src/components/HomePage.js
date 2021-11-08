import React from "react";
// import '../style/style.scss'
const HomePage = ({user}) => {
  return (
    <div>
      <header className='home-header'>
        <div class="wrapper">
          <div class="logo">
            <img src="data:image/png;base64,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" alt=""></img>
          </div>

        </div>
        <div class="welcome-text">
          <h1>Student <span>Portal</span></h1>
          <p className='welcome'>Welcome, {user.name}.</p>
        </div>
      </header>
    </div>
  )
}

export default HomePage