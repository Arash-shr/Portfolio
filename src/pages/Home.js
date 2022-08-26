import React from 'react';
import "../styles/Home.css"
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';



function Home() {
  return (
    <div className="home">

     <div className="about">
      <h2>Hi, My Name is Arash</h2>
      <div className="prompt" > <p> A front-end developer with a passion of coding</p>
      <a className="reachMe" href="https://github.com/Arash-shr"><GithubIcon /></a> 
      <a className="reachMe" href="mailto:arash.shr92@gmail.com"><EmailIcon /></a> 
      </div>
    </div>
    {/* <div className="skills">
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Front-End</h2>
          <span> HTML, CSS, Funtional Programming</span>
        </li>
        <li className="item">
          <h2>Business Analysis</h2>
          <span>Revenue Estimation</span>
       </li>
       <li className="item">
          <h2>Languages</h2>
          <span>Javascript, Git</span>
       </li>

      </ol>

      </div> */}
      <div class='light x1'></div>
     <div class='light x2'></div>
     <div class='light x3'></div>
     <div class='light x4'></div>
     <div class='light x5'></div>
     <div class='light x6'></div>
     <div class='light x7'></div>
     <div class='light x8'></div>
     <div class='light x9'></div>
      

     
    </div>

  )
}

export default Home;