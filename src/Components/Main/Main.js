import React, { Component } from 'react';
import styles from './Main.module.css'
import Side from '../Side/Side';
import MainBody from '../MainBody/MainBody';

class Main extends Component{
    
    render() {
        return(
            <div className={styles.main}>
            <Side Privew={this.props.privew}/>
            <MainBody Privew={this.props.privew}/>
            </div>
        )
    }
       
        
    
    
}


export default Main