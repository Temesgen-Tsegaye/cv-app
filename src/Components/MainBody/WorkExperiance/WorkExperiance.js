import React, { Component,useState } from 'react';
import { FaPenSquare } from 'react-icons/fa';
import styles from './WorkExperiance.module.css'

const WorkExperiance=({Privew})=>{
    const [data,setData]=useState({
        jobName:'',
        place:'',
        start:'',
        end:'',
        detail:''

    })
    const [toggle,setToggle]=useState(false)

    function handleInput(e) {
        setData((prive) => {
          return { ...prive, [e.target.name]: e.target.value };
        });
      }
      function toggleDispaly() {
        setToggle((prive) => {
          return !prive;
        });
      }
    return(
        <div className={styles.Work}>
            
            <p>WORK EXPERIANCE</p>
            { toggle&& <div className={styles.display}>
             
          {Privew&&<FaPenSquare onClick={toggleDispaly} className={styles.pen}/>}   
                
                    <div className={styles.dates}>
                       ({data.start} )  - ({data.end})
                    </div>
                    <div className={styles.detail}>
                        <p className={styles.p1}>{data.jobName}</p>
                        <p className={styles.p2}>{data.place}</p>
                        <p className={styles.p3}>{data.detail}</p>

                    </div>
                

            </div>
            }
            { !toggle&& <div className={styles.form}>
                <input value={data.jobName} onChange={(e)=>{handleInput(e)}}  type="text" name="jobName" placeholder="job Name"/>
                <input value={data.place} onChange={(e)=>{handleInput(e)}}  type="text" name="place" placeholder=" place of work"/>
                <textarea  value={data.detail} onChange={(e)=>{handleInput(e)}}  id="" cols="30" rows="10" name="detail"></textarea>
               
                <input value={data.start} onChange={(e)=>{handleInput(e)} }id="start" type="number" name="start" placeholder="start" />
                
                <input value={data.end} onChange={(e)=>{handleInput(e)}} id="end" type="number" name="end" placeholder="end" />
                <button onClick={toggleDispaly}>add</button>
                
            </div>
            }
            
        </div>
    )
}
export default WorkExperiance