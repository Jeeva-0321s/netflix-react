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

const Movie = () => {
  return (
    
    <div>
       <Navbar />

<Cards4 title='Blockbusters'/>
<Cards5 title='Crowd Pleasures'/>
<Cards6 title='Top Rated'/>
<Cards7 title='New Releases'/>
<Cards8 title='Recommended'/>
<Cards9 title='Watch Again'/>
<Cards2 title='Trending Now' />
<Cards3 title='Top Searches'/>
<Cards6 title='Busters'/>
<Cards7 title='Pleasures'/>

      <Footer />
    </div>
    
  )
}

export default Movie