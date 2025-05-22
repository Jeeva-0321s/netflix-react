// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Loader.css';

// const First = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     setTimeout(() => {
//       navigate('/home'); // Redirect after 3 seconds
//     }, 2000); 
//   }, [navigate]);

//   return (
//     <div className="body2">
//       <div className="loader2"></div>
//     </div>
//   );
// };

// export default First;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loader.css';


const First = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home'); // Redirect after 2 seconds
    }, 3000); 
  }, [navigate]);

  return (
    <div className="body2">
     <img src="/netflix_spinner.gif" alt="Loading..." className="gif-loader" />
    </div>
  );
};

export default First;
