import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FirstPage from './pages/FirstPage'
import './App.scss'
import Explore from './components/Body/Explore'
import PlanATrip from './components/Body/PlanATrip'
import ContextProvider from './contextProvider/ContextProvider';
import StepperContextProvider from './contextProvider/StepperContextProvider'
import Events from './components/Body/Events'
import { Auth0Provider } from '@auth0/auth0-react';

export default function App() {

  return (
    <Auth0Provider
    domain="dev-zeycx1ckodu3t11l.us.auth0.com"
    clientId="bshRIfSJhfvMiKTxsGqQRySbQDiMQAGM"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <ContextProvider>

      <StepperContextProvider>

        <div className='overflow-hidden'>

        
          <BrowserRouter>
            
            <Routes>

              <Route path="/" element={<FirstPage />} />

              <Route path="/explore" element={<Explore />} />
              <Route path="/planTrip" element={<PlanATrip />} />
              <Route path="/events" element={<Events />} />
            </Routes>

          </BrowserRouter>

        </div>

      </StepperContextProvider>

    </ContextProvider>
  </Auth0Provider>
  )
} 

