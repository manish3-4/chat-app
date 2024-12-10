import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter future={
        {
          v7_relativeSplatPath:true,
          v7_startTransition:true
        }
      }>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
)
