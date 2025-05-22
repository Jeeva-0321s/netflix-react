import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loader.css';

const First = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/watch'); 
    }, 3000); 
  }, [navigate]);

  return (
    <div className="body1">
      <div className="loader"></div>
    </div>
  );
};

export default First;
