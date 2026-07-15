import { useRef, useState } from 'react';
import { Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Home from './components/Home';
import { FiLinkedin } from "react-icons/fi";
import { FaGithubAlt } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FiCodepen } from "react-icons/fi";
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <>
      <Home/>
    </>
  )
}

export default App
