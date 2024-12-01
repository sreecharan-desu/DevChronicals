import { createRoot } from 'react-dom/client'
import './index.css'
// import { RecoilRoot } from 'recoil'
import React, { Suspense } from 'react';
import App from './App.tsx';
import { RecoilRoot } from 'recoil';
// eslint-disable-next-line react-refresh/only-export-components
const Layout = React.lazy(() => import("./Layout.tsx"));
createRoot(document.getElementById("root")!).render(
  <>
    <RecoilRoot>
      <Suspense fallback="">
        <Layout>
          <App />
        </Layout>
      </Suspense>
    </RecoilRoot>
  </>
);
