import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Third.css';

const Third = () => {
  const navigate = useNavigate(); 


  
  const handleNavigate = () => {
    navigate('/loader1'); 
  };

  return (
    <div className='body3'>
      <div className="main-wrapper">
        <div className="ucontainer-main">
          <div className="ucontainer">
            <h1>Who's Watching?</h1>
            <div className="one" onClick={handleNavigate}>
              <figure className="back">
                <i className="fas fa-sign-in-alt"></i>
              </figure>
              <img src="/u1.png" alt="Jeeva" />
              <h3>Jeeva</h3>
            </div>
            <div className="two" onClick={handleNavigate}>
              <figure className="back">
                <i className="fas fa-sign-in-alt"></i>
              </figure>
              <img src="/u2.png" alt="Kannan" />
              <h3>Kannan</h3>
            </div>
            <div className="three" onClick={handleNavigate}>
              <figure className="back">
                <i className="fas fa-sign-in-alt"></i>
              </figure>
              <img src="/u3.png" alt="Balaji" />
              <h3>Balaji</h3>
            </div>
            <div className="four" onClick={handleNavigate}>
              <figure className="back">
                <i className="fas fa-sign-in-alt"></i>
              </figure>
              <img src="/u4.png" alt="Nandhu" />
              <h3>Nandhu</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
