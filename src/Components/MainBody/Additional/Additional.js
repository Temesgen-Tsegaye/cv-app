import React, { Component, useState } from "react";
import styles from "./Additional.module.css";
import { FaPenSquare } from "react-icons/fa";

const Additional = ({Privew}) => {
  const [state, setState] = useState([]);
  const [input, setInput] = useState({
    name: "",
    percent: "",
  });

  
  const [toggle, setToggle] = useState(false);

  function handleInput(e) {
    setInput((prive) => {
      return { ...prive, [e.target.name]: e.target.value };
    });
    
  }
  function toggleDispaly(e) {
      console.log(e.target)
      if((e.target.id)==9 && state.length<=2){
        setToggle((prive) => {
            return !prive;
          });
          setState((prive) => {
        
            return [...prive,input];
           
          });
           
      }
      else {
        setToggle((prive) => {
            return !prive;
          }); 
      }
    
   
      
   

  }
//   const FILTER=(e)=>{
//       const bb=state.filter((items)=>{
//           return items.name !==e.target.id
//       })
//       setState(bb)

//   }
  
 
  return (
    <div className={styles.wrapper}>
      <p>ADDITIONAL SKILLS</p>
     {toggle&& <div className={styles.display}>
      
        {state.map((items,index)=>{

            return <p key={index}><div>{items.name}</div> <div> {items.percent}%</div> </p>  //<button id={items.name} onClick={(e)=>{FILTER(e)}}>del</button>
        })}
         {Privew&& <FaPenSquare className={styles.pen} id={10} onClick={(e)=>toggleDispaly(e)}/>} 
          
         </div>}
     {!toggle && <div>
        <input
          value={input.name}
          onChange={(e) => {
            handleInput(e);
          }}
          name="name"
          type="text"
        />
        <input
          value={input.percent}
          onChange={(e) => {
            handleInput(e);
          }}
          name="percent"
          type="text"
        />
        <button id={9} onClick={(e)=>toggleDispaly(e)}>add</button>
      </div>}
    </div>
  );
};
export default Additional;
