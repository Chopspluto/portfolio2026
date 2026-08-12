import React from 'react';
import { FiHeart as Heart} from 'react-icons/fi';
import { HiOutlineSparkles as Sparkles, HiOutlineCake as Cake } from 'react-icons/hi2';

function Languages() {
  return (
    <>
    <div className='lang-content'>
      <div className="cozy-ambient-bg">
        <Sparkles className="floating-particle particle-1" />
        <Heart className="floating-particle particle-2" />
        <Sparkles className="floating-particle particle-3" />
        <Heart className="floating-particle particle-4" />
        <Sparkles className="floating-particle particle-5" />
      </div>
      
      <h2>Languages I Know</h2>
      <div className='lang'>
        <span className='lang-img lang1'></span>
        <h3>English</h3>
        <span>Fluent</span>
      </div>
      <div className='lang'>
        <span className='lang-img lang2'></span>
        <h3>Sinhala [සිංහල]</h3>
        <span>Mothertongue</span>
        <span></span>
      </div>
      <div className='lang'>
        <span className='lang-img lang3'></span>
        <h3>Hindi [हिंदी]</h3>
        <span>Fluent</span>
      </div>
      <div className='lang'>
        <span className='lang-img lang4'></span>
        <h3>Tamil [தமிழ்]</h3>
        <span>Fluent</span>
      </div>
      <div className='lang'>
        <span className='lang-img lang5'></span>
        <h3>Malay</h3>
        <span>Beginner (A1)</span>
      </div>
      <div className='lang'>
        <span className='lang-img lang6'></span>
        <h3>Türkçe</h3>
        <span>Beginner (A1)</span>
      </div>

    </div>
    </>
    
  )
}

export default Languages