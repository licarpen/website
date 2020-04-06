import React from 'react';
import styles from './Connect.css';
import github from '../../assets/connect/github.svg';
import linkedin from '../../assets/connect/linkedin.svg';
import email from '../../assets/connect/email.svg';

const Connect = () => (
  <div className={styles.Connect}>
    <a href='https://github.com/licarpen' target='_blank' rel='noopener noreferrer' ><img src={github}></img>/licarpen</a>
    <a href='https://www.linkedin.com/in/lisacarpenter256/' target='_blank' rel='noopener noreferrer'><img src={linkedin}></img>/lisacarpenter256</a>
    <a className={styles.email} href='mailto:carpenter.lisa@gmail.com' target='_blank' rel='noopener noreferrer'><img src={email}></img>carpenter.lisa@gmail.com</a>
  </div>
);

export default Connect;
