import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data/projects';
import { GoHeartFill } from "react-icons/go";
import { FiHeart as Heart} from 'react-icons/fi';
import { HiOutlineSparkles as Sparkles, HiOutlineCake as Cake } from 'react-icons/hi2';
import phoneIcon from "../assets/phoneIcon.webp";
import LaptopIcon from "../assets/laptopIcon.webp";
import clickSfx from "../sounds/pop.mp3";
import useSound from 'use-sound';

export default function Project() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeDevice, setActiveDevice] = useState('combo'); // 'combo', 'laptop', 'mobile'
  const [isAnimating, setIsAnimating] = useState(false);

  const [playClick] = useSound(clickSfx, {volume: 0.5});

  const currentProject = PROJECTS_DATA[currentIndex];

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedProject) {
        if (e.key === 'Escape') setSelectedProject(null);
        return;
      }
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, selectedProject]);

  const handleNext = () => {
    playClick();
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    playClick();
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className={`project-showcase-container ${currentProject.themeClass}`}>
      {/* Background Floating Sparkles */}
      <div className="cozy-ambient-bg">
        <Sparkles className="floating-particle particle-1" />
        <Heart className="floating-particle particle-2" />
        <Sparkles className="floating-particle particle-3" />
        <Heart className="floating-particle particle-4" />
        <Sparkles className="floating-particle particle-5" />
      </div>

      {/* Top Header */}
      <header className="showcase-header">
        <div className="portfolio-logo">
          <h5>✦ MY PROJECTS</h5>
          <span className="logo-badge">2026 EDITION</span>
        </div>
      </header>

      {/* Hero Showcase Grid Stage */}
      <main className="showcase-stage">
        
        {/* Left Info Column */}
        <div className="project-info-panel">
          <h1 className="project-title">
            {currentProject.title}
          </h1>

          <span className="project-desc">
            {currentProject.overview}
          </span>

          {/* Tags */}
          <div className="project-tags">
            {currentProject.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>

          {/* View Case Study CTA Button */}
          <div className="cta-container">
            <button 
              className="view-study-btn"
              onClick={() => setSelectedProject(currentProject)}
            >
              <span>View Case Study</span>
            </button>
          </div>
        </div>

        {/* Right Product Mockup Showcase Area */}
        <div className="phones-showcase-wrapper">
          
          {/* Previous Slider Arrow */}
          <button 
            className="slider-nav-btn nav-prev"
            onClick={handlePrev}
            aria-label="Previous Project"
          >
            ‹
          </button>

          <div className="showcase-device-area">
            
            {/* Device Switcher Tabs */}
            <div className="device-tabs-bar">
              <button 
                className={`device-tab-btn ${activeDevice === 'mobile' ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setActiveDevice('mobile'); }}
              >
                <img className='custom-icons' src={phoneIcon} />Mobile
              </button>
              <button 
                className={`device-tab-btn ${activeDevice === 'laptop' ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setActiveDevice('laptop'); }}
              >
                <img className='custom-icons' src={LaptopIcon} /> Laptop
              </button>
              <button 
                className={`device-tab-btn ${activeDevice === 'combo' ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setActiveDevice('combo'); }}
              >
                ✦ Ecosystem
              </button>
            </div>

            {/* Devices Interactive Stage Viewport */}
            <div 
              className={`devices-stage mode-${activeDevice}`}
              onClick={() => setSelectedProject(currentProject)}
              title="Click anywhere to expand full case study"
            >
              
              {/* LAPTOP MOCKUP */}
              <div className="mockup-laptop-container">
                <div className="mockup-laptop-bezel">
                  {/* screen image here */}
                  <img className='laptop-screen-display' src={currentProject.laptop} />
                </div>
                <div className="laptop-hinge"></div>
                <div className="laptop-base-bottom">
                  <div className="laptop-base-notch"></div>
                </div>
              </div>

              {/* 3 PHONES CLUSTER */}
              <div className="mockup-phones-container">
                
                {/* Left Background Phone */}
                <div className="mockup-phone phone-left">
                  <div className="phone-screen">
                    <div className="phone-notch"></div>
                    <img className='laptop-screen-display' src={currentProject.screens.left} />
                  </div>
                </div>

                {/* Center Main Phone */}
                <div className="mockup-phone phone-center">
                  <div className="phone-screen">
                    <div className="phone-notch"></div>
                    <img className='laptop-screen-display' src={currentProject.screens.center} />
                  </div>
                </div>

                {/* Right Background Phone */}
                <div className="mockup-phone phone-right">
                  <div className="phone-screen">
                    <div className="phone-notch"></div>
                    <img className='laptop-screen-display' src={currentProject.screens.right} />
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Next Slider Arrow */}
          <button 
            className="slider-nav-btn nav-next"
            onClick={handleNext}
            aria-label="Next Project"
          >
            ›
          </button>

        </div>

      </main>

      {/* Footer Pagination */}
      <footer className="showcase-footer">
        <div className="pagination-dots">
          {PROJECTS_DATA.map((p, idx) => (
            <button
              key={p.id}
              className={`dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Switch to project ${p.title}`}
            />
          ))}
        </div>
      </footer>

      {/* ==========================================
          EXPANDABLE CASE STUDY MODAL
          ========================================== */}
      {selectedProject && (
        <div className="case-study-backdrop" onClick={() => setSelectedProject(null)}>
          <div 
            className={`case-study-modal ${selectedProject.themeClass}`}
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              className="close-button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close Case Study"
            >X</button>

            {/* Banner Header */}
            <div className="modal-hero-banner">
              <h5 className="modal-category">✦ {selectedProject.category}</h5>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <span className="modal-desc">{selectedProject.desc}</span>
              <div className='flex-center demo-site' >
                <h5>{selectedProject.liveDemo.label}</h5>
                <a href={selectedProject?.liveDemo?.value} target="_blank" rel="noopener noreferrer" 
                className="demo-link">
                  <span>{selectedProject?.liveDemo?.value}</span>
                </a>
              </div>
              <div className="modal-metadata">
                <div className="meta-item">
                  <h5>Client:</h5>
                  <span>{selectedProject.client}</span>
                </div>
                <div className="meta-item">
                  <h5>Year:</h5>
                  <span>{selectedProject.year}</span>
                </div>
                <div className="meta-item">
                  <h5>Role:</h5>
                  <span>{selectedProject.role}</span>
                </div>
                <div className="meta-item">
                  <h5>Duration:</h5>
                  <span>{selectedProject.duration}</span>
                </div>
                <div className="meta-item">
                  <h5>Status:</h5>
                  <span>{selectedProject.status}</span>
                </div>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="modal-content-body">
              <div className="detail-grid">
                <div className="detail-card-transparent">
                  <h3>The Challenge</h3>
                  <span>{selectedProject.challenge}</span>
                </div>
                <div className="detail-card-transparent">
                  <h3>Goal</h3>
                  <span>{selectedProject.goals}</span>
                </div>
              </div>

              {/* Design Process */}
              <div className="detail-flex detail-card">
                <h3>Design Process</h3>
                <div className='flex-center process-tag'>
                  <span className='tag-pill'>Brainstorm</span>
                  {selectedProject.designProcess.map((feat, fIdx) => (
                    <span key={fIdx}>
                      <span className='arrow'>→</span>
                      <span className='tag-pill'>{feat.phase}</span> 
                    </span>
                  ))}
                </div>
              </div>
              
              <div className='detail-flex detail-card-transparent'>
                <h3 className="timeline-heading">Development Timeline</h3>
                <div className="detail-grid">
                  {selectedProject.developmentTimeline.map((stat, sIdx) => (
                    <div key={sIdx} className='detail-flex timeline-card'>
                      <h4>{stat.title}</h4>
                      <h5>{stat.name}</h5>
                      {stat.tasks.map((task, tIdx) => (
                          <li key={tIdx}>{task}</li>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className='detail-flex detail-card tech-card'>
                <h3>Technologies Used</h3>
                <div className='flex-center tech-grid'>
                  {selectedProject.technologies.map((techName, techIdx) => (
                    <div key={techIdx} className='icon-pill'>
                      {/* <StackIcon className='tech-icon'
                        name={techName} 
                        variant="dark"
                      /> */}
                      <span>{techName}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="detail-grid">
                <div className='detail-card'>
                  <h3>Features</h3>
                  <ul className="features-list">
                    {selectedProject.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='detail-card'>
                  <h3>Achievements</h3>
                  <ul className="features-list">
                    {selectedProject.achievements.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* <div className='detail-card'>
                <h3>Problems Solved</h3>
                  {selectedProject.problemsSolved.map((stat, sIdx) => (
                    <div key={sIdx} className='problem-item'>
                      <h5>{stat.problem}</h5>
                      <span>{stat.solution}</span>
                    </div>
                  ))}
              </div> */}

              {/* Gallery Section */}
              {/* <div className="detail-card testimonial">
                <h3>Testimonial</h3>
                <span className='quote'>"{selectedProject.testimonial.quote}"</span>
                <h5>-&nbsp;{selectedProject.testimonial.name},&nbsp;{selectedProject.testimonial.role}</h5>
              </div> */}

              <div className='flex-center'>
                <button className="button-close" onClick={() => setSelectedProject(null)}
              aria-label="Close Case Study">Close Case</button>
              </div>
              
            </div>
          </div>
        </div>
      )}

    </div>
  );
};