import React from 'react';
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import emailIcon from "../assets/emailIcon.webp";
import githubIcon from "../assets/githubIcon.webp";
import linkedinIcon from "../assets/linkedinIcon.webp";
import locationIcon from "../assets/locationIcon.webp";
import contactMascot from "../assets/contactMascot.webp";

function Contact() {
  return (
    <>
      <div className="airmail-border"></div>
        <div className="envelope-body">
          <div className="airmail-stamp">
            <div className="stamp-row">AIR MAIL <span className="stamp-heart">❤</span></div>
            <div className="stamp-row">PAR AVION <span className="stamp-heart">❤</span></div>
          </div>

          <div className="postmark-group">
            <svg className="postmark-waves" width="68" height="32" viewBox="0 0 68 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5C12 0 22 10 32 5C42 0 52 10 62 5" stroke="#4a4a4a" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M2 12C12 7 22 17 32 12C42 7 52 17 62 12" stroke="#4a4a4a" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M2 19C12 14 22 24 32 19C42 14 52 24 62 19" stroke="#4a4a4a" stroke-width="1.8" stroke-linecap="round"/>
              <path d="M2 26C12 21 22 31 32 26C42 21 52 31 62 26" stroke="#4a4a4a" stroke-width="1.8" stroke-linecap="round"/>
            </svg>
            <div className="postmark-circle">
              <div className="postmark-inner-circle">
                {/* <span className="postmark-heart">❤</span> */}
                <img className='mascot' src={contactMascot} />
              </div>
            </div>
          </div>

          <div className='contact-content'>
            <span><img className='custom-icons' src={emailIcon} />kanishkajayani2@gmail.com</span>
            <span><img className='custom-icons' src={linkedinIcon} /><a href="https://www.linkedin.com/in/kanishka-jayani/">/kanishka-jayani</a></span>
            <span><img className='custom-icons' src={githubIcon} />kanishkajayani2@gmail.com</span>
            <span><img className='custom-icons' src={locationIcon} />Sri Lanka</span>
          </div>

          <div className="handwritten-note">
            <span>Can't wait to</span>
            <span>work together!&nbsp;❤</span>
          </div>

      </div>
    </>
  )
}

export default Contact