import Background from "../assets/background.webp";
import Cup_asset from "../assets/Coffee.webp";
import Note_asset from "../assets/Note.webp";
import Puzzle from "../assets/puzzleGirl.webp";
import Crochet from "../assets/crochetGirl.webp";
import { useRef, useState } from "react";
import Languages from '../modals/Languages';
import Contact from '../modals/Contact';
import Projects from "../modals/Projects";
import Services from "../modals/Services";
import { ImHeart as Heart } from "react-icons/im";
import { HiOutlineSparkles as Sparkles, HiOutlineCake as Cake } from 'react-icons/hi2';
import { TbFlowerFilled as Flower } from "react-icons/tb";
import useSound from "use-sound";
import hoverSfx from "../sounds/hover1.mp3";
import clickSfx from "../sounds/pop.mp3";
import closeSfx from "../sounds/close.mp3";

function Home() {

  const hobby = useRef();

  const [showHobby, setShowHobby] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [showContact, setShowContact] = useState(false);
  
  const [playHover] = useSound(hoverSfx, {volume: 0.5});
  const [playClick] = useSound(clickSfx, {volume: 0.5});
  const [playClose] = useSound(closeSfx, {volume: 0.5});

  const openModal = (setModal) => {
    playClick();
    setModal(true);
  };

  const closeModal = (setModal) => {
    playClose();
    setModal(false);
  };
  
  return (
    <section id="home">
      <div className="floaters-bg">
        <Sparkles className="home-floater particle-1" size="3rem" fill="lightgoldenrodyellow" stroke="black" strokeWidth={1} />
        <Heart className="home-floater particle-2" size="3rem" fill="pink" stroke="black" strokeWidth={1} />
        <Sparkles className="home-floater particle-3" size="2rem" fill="lightgoldenrodyellow" stroke="black" strokeWidth={1} />
        <Heart className="home-floater particle-4" size="1.5rem" fill="saddlebrown" stroke="black" strokeWidth={1}/>
        <Sparkles className="home-floater particle-5" size="1.5rem" fill="lightgoldenrodyellow" stroke="black" strokeWidth={1} />
        <Flower className="home-floater particle-6" size="2rem" fill="lightcoral" stroke="black" strokeWidth={1} />
      </div>
{/* --------- HERO STARTS --------- */}
      <div className="hero">
        <h1>Kanishka Pieris</h1>
        <div className="highlighter">
          <h4>Creative Developer & Designer</h4>
        </div>
      </div>
      <span className="info1">Welcome!<br/>Click on the white dots to explore</span>
      <span className="tagline">Hello! I'm a creative developer and designer who loves bringing absurd ideas to life through code.</span>
      {/* <div className="info2">
        <span >There are 10 hidden easter eggs. Find them to earn a badge!</span>
      </div> */}
{/* --------- HERO ENDS --------- */}
      
      <div className="main-content">
        <img className="bg" />

{/* --------- COFEE MUG STARTS --------- */}
        {/* <div className="coffee-asset">
          <div className="pointer"></div>
          <img className="img_assets" src={Cup_asset} />
          <div className="shadow2"></div>
        </div> */}
{/* --------- COFFEE MUG ENDS --------- */}

{/* --------- CROCHET STARTS --------- */}
        <div className="crochet-asset" onClick={() => openModal(setShowHobby)} onMouseEnter={playHover}>
          <div className="pointer"></div>
          <img className="img_assets shadow" src={Crochet} />
        </div>
        {showHobby && (
            <div onClick={(e) => e.stopPropagation()}>
              <div className="container">
                <Services/>
                <button className="close-button" onClick={() => closeModal(setShowHobby)}>X</button>
              </div>
            </div>
        )}
{/* --------- CROCHET ENDS --------- */}

{/* --------- PUZZLE STARTS --------- */}
        <div className="puzzle-asset" onClick={() => openModal(setShowProject)} onMouseEnter={playHover}>
          <div className="pointer"></div>
          <img className="img_assets" src={Puzzle} />
          <div className="shadow1"></div>
        </div>
        {showProject && (
            <div onClick={(e) => e.stopPropagation()}>
              <div className='modal-container'>
                <Projects/>
                <button className="close-button" onClick={() => closeModal(setShowProject)}>X</button>
              </div>
            </div>
        )}
{/* --------- PUZZLE ENDS --------- */}

{/* --------- GLOBE STARTS --------- */}
        <div className="globe-asset" onClick={() => openModal(setShowLanguage)} onMouseEnter={playHover}>
          <div className="pointer"></div>
          <div className="globe">
            <div className="language english"><span className="text">English</span></div>
            <div className="language sinhala"><span className="text">සිංහල</span></div>
            <div className="language hindi"><span className="text">हिंदी</span></div>
            <div className="language tamil"><span className="text">தமிழ்</span></div>
            <div className="language turkish"><span className="text">Türkçe</span></div>
          </div>
        </div>
        {showLanguage && (
            <div onClick={(e) => e.stopPropagation()}>
              <div className="lang-container">
                <Languages/>
                <button className="close-button" onClick={() => closeModal(setShowLanguage)}>X</button>
              </div>
            </div>
        )}
{/* --------- GLOBE ENDS --------- */}

{/* --------- NOTE STARTS --------- */}
        <div className="note-asset" onClick={() => openModal(setShowContact)} onMouseEnter={playHover}>
          <div className="pointer"></div>
          <img className="img_assets" src={Note_asset} />
        </div>
        {showContact && (
            <div onClick={(e) => e.stopPropagation()}>
              <div className="contact-container">
                <Contact/>
                <button className="close-button" onClick={() => closeModal(setShowContact)}>X</button>
              </div>
            </div>
        )}
{/* --------- NOTE ENDS --------- */}

      </div>
    </section>
  );
}

export default Home;