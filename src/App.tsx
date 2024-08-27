import React, { useEffect } from 'react'
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import WebsiteProvider from './components/Ui/WebsiteProvider';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <WebsiteProvider>
          <Router />
        </WebsiteProvider>
      </BrowserRouter>
    </div>
  )
}

export default App