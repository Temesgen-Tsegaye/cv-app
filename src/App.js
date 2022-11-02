import "./App.css";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";

import { useReactToPrint } from "react-to-print";


import { useState, useRef } from "react";
function App() {
  const [privew, setPrivew] = useState(true);

  const PrivewHandler = () => {
    setPrivew((prive) => {
      return !prive;
    });
  };
  
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      
      <Header />

      <div className="pdf">
        <button onClick={PrivewHandler}> {privew ? " Privew" : "Edit"}</button>
        <button onClick={handlePrint}>Generate Pdf</button>
        <Main ref={componentRef} privew={privew} /> 
      </div>
      
     
       
        
      
    </div>
  );
}

export default App;
