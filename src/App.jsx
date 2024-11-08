import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchEarthquakes from './components/FetchEarthquakes'
import "leaflet/dist/leaflet.css";

function App() {

  return (
    <>
    <FetchEarthquakes/>
    </>
  )
}

export default App
