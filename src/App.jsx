import { useState } from 'react';
import Hero from './components/Hero';
import Layer1 from "./assets/bgLayer1.png";
import Section from './components/Section';
import { FiLinkedin } from "react-icons/fi";
import { FaGithubAlt } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FiCodepen } from "react-icons/fi";

function App() {

  return (
    <main>
      <Hero/>
      <Section title="About">
          I create calm, thoughtful digital experiences where design and code meet.
        <br/>
        <p>
        I’m drawn to clarity, mood, and intentional design.</p>
        <p>I like when digital spaces feel calm, when motion is subtle, and when every detail has a reason to exist.</p>
        <p>My work sits between design and development, where visuals, interaction, and structure come together quietly.</p>
        <p>I work at the intersection of frontend development and visual design. <br/>
        I care deeply about how things feel, not just how they function.<br/>
        From spacing and typography to motion and rhythm, I focus on creating experiences that feel thoughtful and cohesive.<br/>
        This portfolio is an extension of that approach.</p>

      </Section>

      <Section title="What I Do">
        Frontend Development · Visual Design · Creative Direction
      </Section>

      <Section title="Contact">
        Open to thoughtful projects and collaborations.
        Reach me:
        <i><FiLinkedin /></i>
        <i><FaGithubAlt /></i>
        <i><MdAlternateEmail /></i>
        <i><FiCodepen /></i>
      </Section>
    </main>
  )
}

export default App
