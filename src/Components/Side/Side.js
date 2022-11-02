import React, { Component } from 'react';
import styles from './Side.module.css'
import Photo from './Photo/Photo';
import Education from './Education/Education';
import Contact from './Contact/Contact';
const Side=({Privew})=>{
    return (
        <div className={styles.side} >
           <Photo Privew={Privew}/>
           <Education Privew={Privew}/>
           <Contact Privew={Privew}/>
        </div>
    )
}
export default Side