import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Watch.css'; 

const Watch = () => {
  const navigate = useNavigate();

  const handleTryClick = () => {
    navigate('/loading');
  };

  return (
    <div>
      <div className="watch-body">
        <div className="watch-top-section">
          <div className="watch-area">
            <h1>Unlimited movies, TV <br /> shows, and more.</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <div className="watch-search">
              <button className="watch-button" onClick={handleTryClick}>
                Try 30 days free
              </button>
            </div>
            <h4>Ready to watch? Enter your email to create or access your membership.</h4>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Watch;
