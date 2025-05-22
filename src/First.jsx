import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './First.css';

const First = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/loader');
    }, 4000); 
  }, [navigate]);

  return (
    <div className="body1">
      <div className="txt">
        NETFLIX
      </div>
    </div>
  );
};

export default First;
