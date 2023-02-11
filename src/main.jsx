import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import { QuizProvider } from './Context/Quiz'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <QuizProvider>
      <App />
      </QuizProvider>
    </Router>
  </React.StrictMode>,
)
