import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Second.css';

const Second = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/first'); 
    }, 5000); 
  }, [navigate]);

  return (
    <div className='body'>
      <div className="logo">
        <div className="netflix">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className="heading">Netflix</h3>
      </div>
    </div>
  );
};

export default Second;
