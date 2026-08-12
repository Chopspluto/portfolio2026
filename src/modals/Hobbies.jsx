import React, { useEffect, useState } from 'react';
import cozyGirlCenterImg from '../assets/centerAvatar.webp';
import { 
  FiHeart as Heart, 
  FiBookOpen as BookOpen, 
  FiHeadphones as Headphones, 
  FiCompass as Compass, 
  FiPenTool as PenTool, 
  FiScissors as Scissors, 
  FiVolume2 as Volume2, 
  FiVolumeX as VolumeX, 
  FiSmile as Smile, 
  FiCoffee as Coffee, 
  FiX as X,
  FiRefreshCw as RefreshCw,
  FiWind as Wind,
  FiCheckCircle as CheckCircle2
} from 'react-icons/fi';
import { HiOutlineSparkles as Sparkles, HiOutlineCake as Cake } from 'react-icons/hi2';
import Crocheting from "../assets/crocheting.webp";
import Coding from "../assets/coding.webp";
import Baking from "../assets/baking.webp";
import Model from "../assets/3dmodel.webp";
import Puzzles from "../assets/puzzles.webp";
import Travel from "../assets/travel.webp";
import Contact from './Contact';
import Service1 from '../assets/service1.webp';
import Service2 from '../assets/service2.webp';
import Service3 from '../assets/service3.webp';
import Service4 from '../assets/service4.webp';

export default function Hobbies() {
  const [showContact, setShowContact] = useState(false);

   const openModal = (setModal) => {
    setModal(true);
  };

  const closeModal = (setModal) => {
    setModal(false);
  };

  return (
    <div className="cozy-wrapper">
      <div className='cozy-stage'>
        <div>
          <div className="cozy-header">
            <h3>SERVICES</h3>
            <span className="cozy-subtitle">
              What I can build for you.
            </span>
          </div>
          <div className='cozy-service-grid'>
            <div className='services-card'>
              <img className='service-img' src={Service1} />
              <h5>Website design and development</h5>
              <span></span>
            </div>
            <div className='services-card'>
              <img className='service-img' src={Service2} />
              <h5>Landing Pages</h5>
            </div>
            <div className='services-card'>
              <img className='service-img' src={Service3} />
              <h5>Interactive Web</h5></div>
            <div className='services-card'>
              <img className='service-img' src={Service4} />
              <h5>Redesigns</h5></div>
          </div>
          <div className='cozy-header'>
            <h3>HOW IT WORKS</h3>
            <div className='service-process'>
              <h5>Talk</h5>
              <h5>→</h5>
              <h5>Plan</h5>
              <h5>→</h5>
              <h5>Design</h5>
              <h5>→</h5>
              <h5>Build</h5>
              <h5>→</h5>
              <h5>Launch</h5>
            </div>
            
          </div>
        </div>

        <div className='submit-form'>
            <form name="project-inquiry" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
              <div className='cozy-header'>
                <h3>LEAVE A NOTE ON MY DESK</h3>
              </div>
              <input type="hidden" name="form-name" value="project-inquiry" />
              <p hidden>
                <label>Don't fill this out if you're human:<input name="bot-field" /></label>
              </p>
              <label>Your Name<input type="text" name="name" defaultValue='What should I call you?' required /></label>
              <label>Email<input type="email" name="email" defaultValue="you@example.com" required /></label>
              <label>What are you looking for?
                <select name="service" required>
                  <option value="">Select a service</option>
                  <option value="Website Design & Development">Website Design & Development</option>
                  <option value="Landing Page">Landing Page</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Interactive Website">Interactive Website</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Something else">Something else</option>
                </select>
              </label>
              <label>Tell me a little about your idea<textarea name="message" rows="5" required /></label>
              <button type="submit">Send inquiry →</button>
            </form>
        </div>
      </div>

    </div>
  );
}
