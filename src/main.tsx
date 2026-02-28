import React from 'react'
import  ReactDOM  from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {RepairProvider} from './features/repairs/RepairContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
 <React.StrictMode>
    <RepairProvider>
      <App />
    </RepairProvider>
 </React.StrictMode>
)
