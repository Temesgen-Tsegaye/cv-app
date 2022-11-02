import React, { Component } from 'react';
import styles from './MainBody.module.css'
import NameAndProfession from './NameAndProfession/NameAndProfession';
import About from './About/About';
import WorkExperiance from './WorkExperiance/WorkExperiance';
import Additional from './Additional/Additional';
const MainBody=({Privew})=>{
    return(
        <div className={styles.mainBody}
        >
            <NameAndProfession Privew={Privew}/>
            <About Privew={Privew}/>
            <WorkExperiance Privew={Privew}/>
            <Additional Privew={Privew}/>

        </div>
    )
}
export default MainBody