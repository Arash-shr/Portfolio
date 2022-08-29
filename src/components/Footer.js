import React from 'react'

import "../styles/Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GithubIcon from '@material-ui/icons/GitHub';


function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <a href="https://github.com/Arash-shr" target="_blank" rel="noopener noreferrer"><GithubIcon /></a> 
        <a href="https://www.instagram.com/arash.sr9/" target="_blank" rel="noopener noreferrer"> <InstagramIcon id="insta"/></a>
        <a href="https://www.facebook.com/arash.shirsavar.3" target="_blank" rel="noopener noreferrer">  <FacebookIcon/></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">  <TwitterIcon/></a>
     
        </div>
        <p> 
        &copy; 2022 Arashshr.com
        </p>
    </div>
  )
}

export default Footer