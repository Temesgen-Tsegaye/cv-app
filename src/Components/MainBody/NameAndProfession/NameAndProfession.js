import React, { Component,useState } from 'react';
import styles from "./NameAndProfession.module.css"
import {FaPenSquare} from "react-icons/fa";


const NameAndProfession=({Privew})=>{
    const [nameAndPro,setNameAndPro]=useState({
        FirstName:"Haile",
        FatherName:'Kunbi',
        profession:'Bozene',

    })
    const [toggle,setToggle]=useState(false)
    function handleInput(e) {
        setNameAndPro((prive) => {
          return { ...prive, [e.target.name]: e.target.value };
        });
      }
      function toggleDispaly() {
        setToggle((prive) => {
          return !prive;
        });
      }



    return(
        <div className={styles.wrapper} >
      { toggle&& <div className={styles.nameForm} >
           <input value={nameAndPro.FirstName}  onChange={(e) => handleInput(e)} type="text" placeholder='enter your name' name="FirstName" />
           <input value={nameAndPro.FatherName} onChange={(e) => handleInput(e)}type="text" name="" id=""  placeholder='enter your father name' name="FatherName" />
           <input value={nameAndPro.profession}  onChange={(e) => handleInput(e)} type="text" placeholder='enter your profession' name="profession" />
           <button onClick={toggleDispaly}>add</button>
       </div>
}
       {!toggle&& <div className={styles.NameAndProfession}>
          {Privew&& <FaPenSquare onClick={toggleDispaly} className={styles.faPen}/> }  
           <p className={styles.p1}><strong>{nameAndPro.FirstName}</strong> {nameAndPro.FatherName}</p>
           <p className={styles.p2}>{nameAndPro.profession}</p>
          
           
       </div>
       }
        </div>
    )
}

export default NameAndProfession