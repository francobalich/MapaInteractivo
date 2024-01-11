import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TransportProvider } from './context/TransportProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { DataProvider } from './context/DataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <TransportProvider>
        <App />
      </TransportProvider>
    </DataProvider>
  </React.StrictMode>,
)
