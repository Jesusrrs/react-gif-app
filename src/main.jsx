import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifExpectApp } from './GifExpectApp'
import './styles.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpectApp />
  </StrictMode>,
)
