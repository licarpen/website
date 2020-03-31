import React from 'react';
import styles from './About.css';
import me from '../../assets/me.png';

const About = () => (
  <div className={styles.About}>
    <img src={me}></img>
    <p>Lisa Carpenter is a software engineer based in Portland, Oregon.  She absolutely loves to code.  Her expertise in physics and mathematics enables her to craft logical, eloquent solutions to complex problems.  She writes readable, tested code and is in search of an incredible team.</p>
    <br/>
    <p>When not coding up a storm, Lisa can be found playing jazz trumpet, advocating for bike/ped/scooter infrastructure, sharing physics demonstrations with friends and family, and exploring the outdoors through rock climbing, hiking, and biking.</p>
  </div>
);


export default About;
