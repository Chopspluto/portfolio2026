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


const HOBBIES = [
  {
    id: 'crocheting',
    title: 'Crocheting',
    mood: 'create',
    img: Crocheting,
    bgColor: '#ffeef4',
    quote: "My excuse for buying more yarn? I might need that colour someday."
  },
  {
    id: 'modeling',
    title: '3D - Models',
    mood: 'create',
    img: Model,
    bgColor: '#fdf3e7',
    quote: "There's something really satisfying about turning a plain grey cube into something real."
  },
  {
    id: 'coding',
    title: 'Coding',
    mood: 'creative',
    img: Coding,
    bgColor: '#eefbf4',
    quote: "Half the time I'm solving problems. The other half I'm wondering why it worked."
  },
  {
    id: 'baking',
    title: 'Baking',
    mood: 'recharge',
    img: Baking,
    bgColor: '#fff4ea',
    quote: "The smell of chocolate makes the whole house feel alive"
  },
  {
    id: 'traveling',
    title: 'Traveling',
    mood: 'recharge',
    img: Travel,
    bgColor: '#edf8ff',
    quote: "I like wandering until I accidentally find my new favourite place."
  },
  {
    id: 'puzzles',
    title: 'Jigsaw Puzzles',
    mood: 'slow',
    img: Puzzles,
    bgColor: '#f0efff',
    quote: "One piece at a time. No rushing."
  }
];

const MOODS = [
  { id: 'all', label: '✨ All Escapes' },
  { id: 'slow', label: '🌸 Slow Down' },
  { id: 'recharge', label: '⚡ Recharge' },
  { id: 'create', label: '🎨 Stay Creative' }
];


export default function Hobbies() {
  const [activeMood, setActiveMood] = useState('all');
  const [selectedHobby, setSelectedHobby] = useState(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);
  const [bubbleMessage, setBubbleMessage] = useState("Welcome to my cozy corner! Click any hobby to explore");
  const [audioCtx, setAudioCtx] = useState(null);
  const [breathingTimer, setBreathingTimer] = useState(0);
  const [isBreathing, setIsBreathing] = useState(false);

  /* Handle Hobby Selection */
  const handleSelectHobby = (hobby) => {
    setSelectedHobby(hobby);
    setBubbleMessage(hobby.quote);
    
    const freqs = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];
    const index = HOBBIES.findIndex(h => h.id === hobby.id);
    playCozyChime(freqs[index % freqs.length]);
  };

  /* Mindful Breathing Exercise */
  useEffect(() => {
    let interval = null;
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathingTimer(prev => (prev + 1) % 8);
      }, 1000);
    } else {
      setBreathingTimer(0);
    }
    return () => clearInterval(interval);
  }, [isBreathing]);

  const leftHobbies = HOBBIES.slice(0, 3);
  const rightHobbies = HOBBIES.slice(3, 6);

  return (
    <div className="cozy-wrapper">
      {/* Background Floating Sparkles */}
      <div className="cozy-ambient-bg">
        <Sparkles className="floating-particle particle-1" />
        <Heart className="floating-particle particle-2" />
        <Sparkles className="floating-particle particle-3" />
        <Heart className="floating-particle particle-4" />
        <Sparkles className="floating-particle particle-5" />
      </div>

      <div className={`cozy-frame mood-${activeMood === 'all' ? 'slow' : activeMood}`}>
        
        {/* Header Title & Subtitle */}
        <header className="cozy-header">
          <span className="cozy-subtitle">
            The hobbies that keep me alive and living.
          </span>
        </header>

        {/* Central Stage Showcase */}
        <div className="cozy-stage">
          
          {/* Left Column Hobbies */}
          <div className="hobbies-col left">
            {leftHobbies.map(hobby => {
              const isActive = selectedHobby?.id === hobby.id;
              const isDimmed = activeMood !== 'all' && hobby.mood !== activeMood;

              return (
                <div 
                  key={hobby.id}
                  onClick={() => handleSelectHobby(hobby)}
                  className={`hex-card ${isActive ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}`}
                >
                  <div className="hex-shadow-wrapper">
                    <div className="hex-shape">
                      <div className="hex-inner-border">
                        <div className={`hobby-icon-box ${hobby.bgClass}`}>
                          <img src={hobby.img}/>
                        </div>
                        <span className="hobby-label">{hobby.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Central Girl Avatar */}
          <div className="center-character">
            <div className="character-glow"></div>
            {/* Animated Speech Bubble */}
            <span className="cozy-bubble">{bubbleMessage}</span>
            <div className="character-img-container"
              onClick={() => {
                const quotes = [
                  "Time enjoyed wasting is not wasted time! ☕",
                  "Take a deep breath. You are doing wonderfully 🌸",
                  "Whatever happens, happens for good!",
                  "Creativity blooms in quiet moments ✨"
                ];
                const randomQ = quotes[Math.floor(Math.random() * quotes.length)];
                setBubbleMessage(randomQ);
                playCozyChime(880);
              }}>
              <img 
                src={cozyGirlCenterImg} 
                alt="Cozy girl in pajamas holding a warm coffee mug" 
                className="character-img"
              />
            </div>

            <div className="mindful-badge">
              <Coffee className="coffee-bounce" /> <span>Click me for daily mindfulness</span>
            </div>
          </div>

          {/* Right Column Hobbies */}
          <div className="hobbies-col right">
            {rightHobbies.map(hobby => {
              const isActive = selectedHobby?.id === hobby.id;
              const isDimmed = activeMood !== 'all' && hobby.mood !== activeMood;

              return (
                <div 
                  key={hobby.id}
                  onClick={() => handleSelectHobby(hobby)}
                  className={`hex-card ${isActive ? 'active' : ''} ${isDimmed ? 'dimmed' : ''}`}
                >
                  <div className="hex-shadow-wrapper">
                    <div className="hex-shape">
                      <div className="hex-inner-border">
                        <div className={`hobby-icon-box ${hobby.bgClass}`}>
                          <img src={hobby.img}/>
                        </div>
                        <span className="hobby-label">{hobby.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </div>
  );
}
