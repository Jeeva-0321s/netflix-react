import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import First from './First.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import Second from './Second.jsx'
import Third from './Third.jsx'
import Watch from './Watch.jsx'
import Movie from './Pages/Movie/Movie.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Router>
    <App />
    </Router>
  </StrictMode>,
)
