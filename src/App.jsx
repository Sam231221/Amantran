import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import './App.scss'
import Explore from './components/Body/Explore'
import PlanATrip from './components/Body/PlanATrip'
import ContextProvider from './contextProvider/ContextProvider';

export default function App() {

  return (
    <ContextProvider>

      <div className='overflow-hidden'>

      
        <BrowserRouter>
          
          <Routes>

            <Route path="/" element={<FirstPage />} />

            <Route path="/explore" element={<Explore />} />
            <Route path="/planTrip" element={<PlanATrip />} />
          </Routes>
        </BrowserRouter>

      </div>

    </ContextProvider>
  )
} 

