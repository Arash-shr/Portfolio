import React from 'react'

import "../styles/Footer.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
        <a href="https://www.linkedin.com/in/arash-shirsavar-a2bba920a/"><LinkedInIcon/></a>
        <a href="https://www.instagram.com/arash.sr9/"> <InstagramIcon id="insta"/></a>
        <FacebookIcon/>
        <TwitterIcon/>
        </div>
        <p> 
        &copy; 2022 Arashshr.com
        </p>
    </div>
  )
}

export default Footer