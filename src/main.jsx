import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CalApp from './CalculatorApp'

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <CalApp />
  </StrictMode>
)
