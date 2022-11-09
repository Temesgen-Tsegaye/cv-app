import "./index.css";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import styles from './App.module.css'

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
    <div className={styles.App}>
      
      <Header />

      <div className={styles.pdf}>
        <div className={styles.whatever} >
        <button onClick={PrivewHandler}> {privew ? " Privew" : "Edit"}</button>
        <button onClick={handlePrint}>Generate Pdf</button>
        </div>
       
        <Main ref={componentRef} privew={privew} /> 
      </div>
      
      
     
       
        
      
    </div>
  );
}

export default App;
