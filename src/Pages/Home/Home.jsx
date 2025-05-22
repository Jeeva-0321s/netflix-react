import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import Titlecards from '../../Components/Titlecards/Titlecards';
import Footer from '../../Components/Footer/Footer';
import Cards2 from '../../Components/Titlecards/Cards2';
import Cards3 from '../../Components/Titlecards/Cards3';
import Cards4 from '../../Components/Titlecards/Cards4';
import Cards5 from '../../Components/Titlecards/Cards5';

const Home = () => {
  const navigate = useNavigate(); 
  const handlePlayButtonClick = () => {
    navigate('/player');  
  };

  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="hero-btns">
            <button className='btn' onClick={handlePlayButtonClick}>
              <img src={play_icon} alt="" />Play
            </button>
            <button className='btn dark-btn' onClick={handlePlayButtonClick} >
              <img src={info_icon} alt="" />More Info
            </button>
          </div>
          <Titlecards />
        </div>
      </div>
      <div className="more-cards">
        
        <Cards2 title='Trending Now' />
        <Cards3 title='Top Searches'/>
        <Cards5 title='Blockbusters'/>
        <Cards4 title='Crowd Pleasures'/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;



