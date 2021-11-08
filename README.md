<div id="top"></div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


An easy to use Student-Portal that helps students and professors keep track of deadlines and accordingly schedule later ones to keep academic scehdules clutter free.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.org/en/)
* [React.js](https://reactjs.org/)
* [Mongoose](https://mongoosejs.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```
  
 * npm
   ```sh
   npm install -g nodemon
   ```

### Installation

1. Get the necessary environment variable via email request to [student.portal.iitr@gmail.com](student.portal.iitr@gmail.com)
2. Clone the repo
   ```sh
   git clone https://github.com/Shreshtha13/student_portal.git
   ```
3. Install NPM packages in /portal_frontend/ and /portal_backend/
   ```sh
   npm install
   ```
4. Paste in `.env`
   ```js
   MONGODB_URI='enter MONGODB_URI'
   PORT=3001
   secret='secret'
   ```
5. In portal_backend/ run
   ```js
   node index.js 
   ```
   or 
   ```js
   nodemon index.js 
   ```
   or 
   ```js
   npm run dev
   ```
   
6. In portal_frontend/ run
    ```js
   npm start 
   ```
   

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Register to create an account on the portal.
Log in using login credentials.
Obtain list of upcoming deadlines in the deadlines tab. 
If the user is a professor, user gets the option to create new assignments/quizzes/exams.
In the To-Do list tab, get a customizale to-do list, where every user gets to create new notes and delete them.
View the class timetable in the timetable tab and calendar in the calendar tab. The calendar displays all the deadlines on the date chosen.


<p align="right">(<a href="#top">back to top</a>)</p>






<!-- CONTACT -->
## Contact

email: [student.portal.iitr@gmail.com](student.portal.iitr@gmail.com)
Project Link: [https://github.com/Shreshtha13/student_portal.git](https://github.com/Shreshtha13/student_portal.git)

<p align="right">(<a href="#top">back to top</a>)</p>








