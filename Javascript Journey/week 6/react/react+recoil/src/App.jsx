import React from "react";
import { MainApp} from "./Components";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div style={{display : 'flex',flexDirection : 'column',justifyContent : 'center',alignContent : "center",placeItems : 'center',padding : '50px'}}>
        <MainApp/>
      </div>
    </RecoilRoot>
  );
}




export default App;
