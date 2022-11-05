import React, { Component,useState } from 'react';

import styles from "./About.module.css";
import {FaPenSquare } from 'react-icons/fa';

const About=({Privew})=>{
    const [about,setAbout]=useState('')
    const [toggle,setToggle]=useState(false)
    function handleInput(e) {
        setAbout(e.target.value)
    }
        
    function toggleDispaly() {
        setToggle((prive) => {
          return !prive;
        });
      }


    return(
        <div className={styles.about}>
            <h2 className={styles.aboutMe}>ABOUT ME</h2>
            {toggle&&<div className={styles.display}>
            
            <p>
                {about}
               {Privew&&<FaPenSquare className={styles.pen} onClick={toggleDispaly}/>} 
            </p>
            </div>
}

            {!toggle&&<div className={styles.form}>
                <textarea className=' focus:outline-none  rounded-xl w-52 h-40 font-medium border-2 border-cyan-600 ' value={about} onChange={(e)=>{handleInput(e)}} name="" id="" cols="30" rows="10"></textarea>
                <button className=' font-bold text-lg text-white p1 rounded-xl block p-2 w-20 bg-cyan-400  ' onClick={toggleDispaly}>add</button>
            </div>
}
            
        </div>
    )
}
export default About