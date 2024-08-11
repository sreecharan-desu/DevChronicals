import {React,Suspense,lazy} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import {MainApp} from './componenets/MainApp';
const Yellow = lazy(()=>import('./componenets/yellow'))
const Black = lazy(()=>import('./componenets/black'))
const Orange = lazy(()=>import('./componenets/orange'))
const Blue = lazy(()=>import('./componenets/blue'))


function App() {
  return (
    <>
      <BrowserRouter>
      <MainApp/>        
      <Routes>
            <Route path="/black" element = {<Suspense fallback = "Loading..."><Black/></Suspense>}/>
            <Route path="/yellow" element = {<Suspense fallback = "Loading..."><Yellow/></Suspense>}/>
            <Route path="/orange" element={<Suspense fallback = "Loading..."><Orange/></Suspense>}/>
            <Route path="/blue" element = {<Suspense fallback = "Loading..."><Blue/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  );

}
export default App;
