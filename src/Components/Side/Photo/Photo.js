import React, { Component,useState } from 'react';
import styles from './Photo.module.css'

const Photo=({Privew})=>{
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className={styles.photo}>
            
            {Privew&&<input className={styles.input} type="file" onChange={handleChange} placeholder='addImage' />}
            <img className={styles.image} src={file} />
       </div>
    )
}
export default Photo