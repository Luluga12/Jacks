import React from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/barlow/400.css'
import '@fontsource/barlow/600.css'
import '@fontsource/barlow-condensed/800.css'
import 'lenis/dist/lenis.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)
