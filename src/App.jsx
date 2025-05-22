

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Second from './Second';
import First from './First';
import Third from './Third';
import Player from './Pages/Player/Player';
import Loader from './Loader';
import Loader2 from './Loader2';
import Watch from "./Watch";
import WatchLoader from './WatchLoader';
import Loginloading from './Loginloading';
import Movie from './Pages/Movie/Movie';
import Tv from './Pages/Tv/Tv';
const App = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Second />} />
        <Route path="/first" element={<First />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="/watch" element={<Watch />} /> 
        <Route path="/loading" element={<WatchLoader />} /> 
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv shows" element={<Tv />} />

        <Route path="/user" element={<Third />} />
        <Route path="/loading..." element={<Loginloading />} />

        <Route path="/loader1" element={<Loader2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    
  );
};

export default App;
