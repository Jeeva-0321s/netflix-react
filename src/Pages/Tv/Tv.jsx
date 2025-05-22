import React from 'react'
import Cards2 from '../../Components/Titlecards/Cards2';
import Cards3 from '../../Components/Titlecards/Cards3';
import Cards4 from '../../Components/Titlecards/Cards4';
import Cards5 from '../../Components/Titlecards/Cards5';
import Cards6 from '../../Components/Titlecards/Cards6';
import Cards7 from '../../Components/Titlecards/Cards7';
import Cards8 from '../../Components/Titlecards/Cards8';
import Cards9 from '../../Components/Titlecards/Cards9';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Tv = () => {
  return (
    <div>
<Navbar />
<Cards9 title='Tv Shows'/>
<Cards8 title='Shows recommended for you'/>
<Cards7 title='Top Rated Shows'/>
<Cards6 title='New Releases'/>
<Cards3 title='Recommended'/>
<Cards7 title='Watch Again'/>
<Cards8 title='Trending Now'/>
<Cards9 title='Top Searches'/>
    </div>
  )
}

export default Tv