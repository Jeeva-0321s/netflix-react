import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loader.css';


const First = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/user'); 
    }, 500); 
  }, [navigate]);

  return (
    <div className="body2">
     <img src="/netflix_spinner.gif" alt="Loading..." className="gif-loader" />
    </div>
  );
};

export default First;
