import { createRoot } from 'react-dom/client'
import './index.css'; // This should be relative to the current file
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
