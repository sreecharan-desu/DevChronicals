import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Layout } from './components/layout.tsx'
import { RecoilRoot } from 'recoil'

createRoot(document.getElementById('root')!).render(
    <RecoilRoot>
    <Layout>
     <App />
    </Layout>
    </RecoilRoot>
)
